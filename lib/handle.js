import { randomUUID } from "node:crypto";
import {
  SEED_POSTS,
  UNIVERSES,
  clip,
  clipBody,
  cookieHeader,
  dummyPasswordHash,
  hashPassword,
  hashToken,
  newToken,
  normalizeEmail,
  normalizeName,
  readCookie,
  sameOrigin,
  sessionExpiry,
  validId,
  verifyPassword,
} from "./auth.js";
import { databaseConfigured, iso, withClient } from "./db.js";
import { mediaForPosts, routeExtra } from "./extra.js";

const KINDS = new Set(["post", "topic", "opportunity"]);

function requestUrl(req) {
  const raw = req.url || "/";
  if (raw.startsWith("http://") || raw.startsWith("https://")) return new URL(raw);
  return new URL(raw, "http://localhost");
}

function send(res, status, body, headers) {
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "private, no-store",
    "x-content-type-options": "nosniff",
    ...headers,
  });
  res.end(JSON.stringify(body));
}

function fail(res, status, error) {
  send(res, status, { error });
}

async function readJson(req) {
  if (req.body && typeof req.body === "object" && !Buffer.isBuffer(req.body)) {
    return req.body;
  }
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > 8000) {
      const error = new Error("内容太长");
      error.status = 413;
      throw error;
    }
    chunks.push(chunk);
  }
  if (!size) return {};
  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch (error) {
    const parseError = new Error("没有读懂");
    parseError.status = 400;
    throw parseError;
  }
}

function publicUser(row) {
  if (!row) return null;
  const tags = String(row.tags || "").split(",").filter((item) => UNIVERSES.has(item));
  const language = row.language === "zhHant" || row.language === "en" ? row.language : "zh";
  return {
    id: row.id,
    displayName: row.display_name,
    signature: row.signature || "",
    about: row.about || "",
    place: row.place || "",
    tags,
    cvPublic: Boolean(row.cv_public),
    hasCv: Boolean(row.has_cv),
    cvId: row.cv_id || "",
    settings: {
      language,
      theme: row.theme === "dark" ? "dark" : "light",
      reduceMotion: Boolean(row.reduce_motion),
      defaultUniverse: UNIVERSES.has(row.default_universe) ? row.default_universe : "",
    },
  };
}

export async function userFromRequest(client, req) {
  const token = readCookie(req);
  if (!token) return null;
  const found = await client.query(
    `select u.id, u.display_name, u.signature, u.about, u.place, u.tags, u.cv_public,
            u.language, u.theme, u.reduce_motion, u.default_universe,
            exists(select 1 from files f where f.user_id = u.id and f.kind = 'cv') as has_cv,
            (select f.id from files f where f.user_id = u.id and f.kind = 'cv' order by f.created_at desc limit 1) as cv_id
     from sessions s
     join users u on u.id = s.user_id
     where s.token_hash = $1 and s.expires_at > now()`,
    [hashToken(token)],
  );
  return found.rows[0] || null;
}

async function createSession(client, req, res, user) {
  const token = newToken();
  await client.query(
    "insert into sessions (token_hash, user_id, expires_at) values ($1, $2, $3)",
    [hashToken(token), user.id, sessionExpiry()],
  );
  return cookieHeader(token, req, false);
}

async function knownPost(client, postId) {
  if (!validId(postId)) return false;
  if (SEED_POSTS.has(postId)) return true;
  const found = await client.query("select 1 from posts where id = $1", [postId]);
  return found.rowCount > 0;
}

const RECENT_TABLES = {
  posts: "posts",
  replies: "replies",
  people_notes: "people_notes",
};

async function countRecent(client, table, userId) {
  const name = RECENT_TABLES[table];
  if (!name) throw new Error("bad table");
  const found = await client.query(
    `select count(*)::int as n from ${name} where user_id = $1 and created_at > now() - interval '1 hour'`,
    [userId],
  );
  return found.rows[0].n;
}

export async function handle(req, res) {
  const url = requestUrl(req);
  const bits = url.pathname.split("/").filter(Boolean);
  if (bits[0] === "api") bits.shift();
  const method = (req.method || "GET").toUpperCase();

  try {
    if (!databaseConfigured() && !(method === "GET" && bits[0] === "health")) {
      fail(res, 503, "数据库还没有接上");
      return;
    }

    if (await routeExtra(req, res, method, bits, userFromRequest)) return;

    if (method === "GET" && bits.length === 1 && bits[0] === "health") {
      if (!databaseConfigured()) {
        fail(res, 503, "数据库还没有接上");
        return;
      }
      await withClient(async (client) => {
        await client.query("select 1");
      });
      send(res, 200, { ok: true });
      return;
    }

    if (method === "GET" && bits.length === 1 && bits[0] === "session") {
      const user = await withClient((client) => userFromRequest(client, req));
      send(res, 200, { user: publicUser(user) });
      return;
    }

    if (method === "GET" && bits.length === 1 && bits[0] === "feed") {
      const payload = await withClient(async (client) => {
        const user = await userFromRequest(client, req);
        const posts = await client.query(
          `select p.id, p.universe_id, p.kind, p.title, p.body, p.created_at, p.hidden, u.display_name, u.id as user_id
           from posts p
           join users u on u.id = p.user_id
           where p.hidden = false
           order by p.created_at desc
           limit 200`,
        );
        const media = await mediaForPosts(client, posts.rows.map((row) => row.id));
        const replies = await client.query(
          `select r.id, r.post_id, r.body, r.created_at, u.display_name, u.id as user_id
           from replies r
           join users u on u.id = r.user_id
           order by r.created_at asc
           limit 500`,
        );
        const people = await client.query(
          `select n.id, n.universe_id, n.can_do, n.want, n.created_at, u.display_name, u.id as user_id
           from people_notes n
           join users u on u.id = n.user_id
           order by n.created_at desc
           limit 200`,
        );
        const counts = await client.query(
          "select post_id, count(*)::int as n from likes group by post_id",
        );
        const liked = user
          ? await client.query("select post_id from likes where user_id = $1", [user.id])
          : { rows: [] };
        const likeCounts = {};
        counts.rows.forEach((row) => {
          likeCounts[row.post_id] = row.n;
        });
        return {
          user: publicUser(user),
          posts: posts.rows.map((row) => ({
            id: row.id,
            universeId: row.universe_id,
            kind: row.kind,
            title: row.title,
            body: row.body,
            created: iso(row.created_at),
            author: row.display_name,
            authorId: row.user_id,
            hidden: false,
            media: media[row.id] || [],
          })),
          replies: replies.rows.map((row) => ({
            id: row.id,
            postId: row.post_id,
            body: row.body,
            created: iso(row.created_at),
            author: row.display_name,
            authorId: row.user_id,
          })),
          people: people.rows.map((row) => ({
            id: row.id,
            universeId: row.universe_id,
            can: row.can_do,
            want: row.want,
            created: iso(row.created_at),
            name: row.display_name,
            authorId: row.user_id,
          })),
          likeCounts,
          liked: liked.rows.map((row) => row.post_id),
        };
      });
      send(res, 200, payload);
      return;
    }

    if (method !== "GET" && !sameOrigin(req)) {
      fail(res, 403, "请求来源不对");
      return;
    }

    if (method === "POST" && bits.length === 1 && bits[0] === "register") {
      const body = await readJson(req);
      const email = normalizeEmail(body.email);
      const displayName = normalizeName(body.displayName);
      const password = String(body.password || "");
      if (!displayName) {
        fail(res, 400, "称呼请写 1 到 20 个字");
        return;
      }
      if (!email) {
        fail(res, 400, "这个邮箱看起来不对");
        return;
      }
      if (password.length < 8) {
        fail(res, 400, "密码至少 8 位");
        return;
      }
      if (password.length > 72) {
        fail(res, 400, "密码太长");
        return;
      }
      const passwordHash = await hashPassword(password);
      try {
        const header = await withClient(async (client) => {
          const recent = await client.query(
            "select count(*)::int as n from users where created_at > now() - interval '1 hour'",
          );
          if (recent.rows[0].n >= 60) {
            const error = new Error("注册的人有点多，过一会儿再试");
            error.status = 429;
            throw error;
          }
          const user = {
            id: randomUUID(),
            display_name: displayName,
          };
          await client.query(
            "insert into users (id, email, display_name, password_hash) values ($1, $2, $3, $4)",
            [user.id, email, displayName, passwordHash],
          );
          return createSession(client, req, res, user);
        });
        const user = await withClient((client) => userFromRequest(client, { headers: { cookie: header } }));
        send(res, 201, { user: publicUser(user) }, { "set-cookie": header });
      } catch (error) {
        if (error.code === "23505") {
          fail(res, 409, "这个邮箱已经注册");
          return;
        }
        throw error;
      }
      return;
    }

    if (method === "POST" && bits.length === 1 && bits[0] === "login") {
      const body = await readJson(req);
      const email = normalizeEmail(body.email);
      const password = String(body.password || "");
      if (!email || password.length < 8 || password.length > 72) {
        await verifyPassword(password || "invalid-password", await dummyPasswordHash());
        fail(res, 401, "邮箱或密码不对");
        return;
      }
      const row = await withClient(async (client) => {
        const found = await client.query(
          "select id, display_name, password_hash from users where email = $1",
          [email],
        );
        return found.rows[0] || null;
      });
      const ok = await verifyPassword(password, row ? row.password_hash : await dummyPasswordHash());
      if (!row || !ok) {
        fail(res, 401, "邮箱或密码不对");
        return;
      }
      const header = await withClient((client) => createSession(client, req, res, row));
      const user = await withClient((client) => userFromRequest(client, { headers: { cookie: header } }));
      send(res, 200, { user: publicUser(user) }, { "set-cookie": header });
      return;
    }

    if (method === "POST" && bits.length === 1 && bits[0] === "logout") {
      const token = readCookie(req);
      if (token) {
        await withClient((client) => client.query("delete from sessions where token_hash = $1", [hashToken(token)]));
      }
      send(res, 200, { user: null }, { "set-cookie": cookieHeader("", req, true) });
      return;
    }

    const actor = await withClient((client) => userFromRequest(client, req));
    if (!actor) {
      fail(res, 401, "请先登录");
      return;
    }

    if (method === "POST" && bits.length === 1 && bits[0] === "posts") {
      const body = await readJson(req);
      const universeId = String(body.universeId || "");
      const kind = String(body.kind || "");
      const title = clip(body.title, 40);
      const text = clipBody(body.body, 600);
      if (!UNIVERSES.has(universeId)) {
        fail(res, 400, "请选择宇宙");
        return;
      }
      if (!KINDS.has(kind)) {
        fail(res, 400, "请选择这一条是什么");
        return;
      }
      if (kind !== "post" && !title) {
        fail(res, 400, "请写一个标题");
        return;
      }
      if (!text) {
        fail(res, 400, "请写内容");
        return;
      }
      const post = await withClient(async (client) => {
        if (await countRecent(client, "posts", actor.id) >= 30) {
          const error = new Error("写得太快了，过一会儿再试");
          error.status = 429;
          throw error;
        }
        const id = randomUUID();
        await client.query(
          "insert into posts (id, user_id, universe_id, kind, title, body) values ($1, $2, $3, $4, $5, $6)",
          [id, actor.id, universeId, kind, kind === "post" ? "" : title, text],
        );
        return { id };
      });
      send(res, 201, post);
      return;
    }

    if (method === "DELETE" && bits.length === 2 && bits[0] === "posts") {
      if (!validId(bits[1])) {
        fail(res, 400, "没有这条讨论");
        return;
      }
      const removed = await withClient(async (client) => {
        await client.query("begin");
        try {
          const found = await client.query(
            "delete from posts where id = $1 and user_id = $2 returning id",
            [bits[1], actor.id],
          );
          if (!found.rowCount) {
            await client.query("rollback");
            return false;
          }
          await client.query("delete from replies where post_id = $1", [bits[1]]);
          await client.query("delete from likes where post_id = $1", [bits[1]]);
          await client.query("commit");
          return true;
        } catch (error) {
          await client.query("rollback");
          throw error;
        }
      });
      if (!removed) {
        fail(res, 404, "没有这条讨论");
        return;
      }
      send(res, 200, { ok: true });
      return;
    }

    if (method === "POST" && bits.length === 1 && bits[0] === "replies") {
      const body = await readJson(req);
      const postId = String(body.postId || "");
      const text = clipBody(body.body, 400);
      if (!text) {
        fail(res, 400, "请写回复");
        return;
      }
      const reply = await withClient(async (client) => {
        if (!(await knownPost(client, postId))) {
          const error = new Error("没有这条讨论");
          error.status = 404;
          throw error;
        }
        if (await countRecent(client, "replies", actor.id) >= 60) {
          const error = new Error("写得太快了，过一会儿再试");
          error.status = 429;
          throw error;
        }
        const id = randomUUID();
        await client.query(
          "insert into replies (id, post_id, user_id, body) values ($1, $2, $3, $4)",
          [id, postId, actor.id, text],
        );
        return { id };
      });
      send(res, 201, reply);
      return;
    }

    if (method === "POST" && bits.length === 1 && bits[0] === "people") {
      const body = await readJson(req);
      const universeId = String(body.universeId || "");
      const can = clipBody(body.can, 200);
      const want = clipBody(body.want, 200);
      if (!UNIVERSES.has(universeId)) {
        fail(res, 400, "请选择宇宙");
        return;
      }
      if (!can) {
        fail(res, 400, "请写你能做的");
        return;
      }
      if (!want) {
        fail(res, 400, "请写想一起做的事");
        return;
      }
      const note = await withClient(async (client) => {
        if (await countRecent(client, "people_notes", actor.id) >= 20) {
          const error = new Error("写得太快了，过一会儿再试");
          error.status = 429;
          throw error;
        }
        const id = randomUUID();
        await client.query(
          "insert into people_notes (id, user_id, universe_id, can_do, want) values ($1, $2, $3, $4, $5)",
          [id, actor.id, universeId, can, want],
        );
        return { id };
      });
      send(res, 201, note);
      return;
    }

    if (method === "DELETE" && bits.length === 2 && bits[0] === "people") {
      if (!validId(bits[1])) {
        fail(res, 400, "没有这张纸条");
        return;
      }
      const removed = await withClient(async (client) => {
        const found = await client.query(
          "delete from people_notes where id = $1 and user_id = $2 returning id",
          [bits[1], actor.id],
        );
        return found.rowCount > 0;
      });
      if (!removed) {
        fail(res, 404, "没有这张纸条");
        return;
      }
      send(res, 200, { ok: true });
      return;
    }

    if (method === "POST" && bits.length === 1 && bits[0] === "likes") {
      const body = await readJson(req);
      const postId = String(body.postId || "");
      const result = await withClient(async (client) => {
        if (!(await knownPost(client, postId))) {
          const error = new Error("没有这条讨论");
          error.status = 404;
          throw error;
        }
        const removed = await client.query(
          "delete from likes where user_id = $1 and post_id = $2",
          [actor.id, postId],
        );
        let liked = false;
        if (!removed.rowCount) {
          await client.query(
            "insert into likes (user_id, post_id) values ($1, $2)",
            [actor.id, postId],
          );
          liked = true;
        }
        const count = await client.query(
          "select count(*)::int as n from likes where post_id = $1",
          [postId],
        );
        return { liked, count: count.rows[0].n };
      });
      send(res, 200, result);
      return;
    }

    fail(res, 404, "没有这个地址");
  } catch (error) {
    const status = error.status || 500;
    if (status >= 500) console.error("api error", error.code || error.name);
    fail(res, status, status === 503 ? "数据库还没有接上" : (error.status ? error.message : "没有完成"));
  }
}
