import { randomUUID } from "node:crypto";
import { UNIVERSES, clip, clipBody, normalizeName, sameOrigin, validId } from "./auth.js";
import { iso, withClient } from "./db.js";

const LANGS = new Set(["zh", "zhHant", "en"]);
const IMAGE = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const VIDEO = new Set(["video/mp4", "video/webm"]);
const LIMITS = { image: 2_000_000, video: 3_000_000, cv: 2_000_000 };

function fail(res, status, error) {
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "private, no-store",
    "x-content-type-options": "nosniff",
  });
  res.end(JSON.stringify({ error }));
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

async function readJson(req, limit) {
  if (req.body && typeof req.body === "object" && !Buffer.isBuffer(req.body)) return req.body;
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > limit) {
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

function tagsOf(value) {
  const list = Array.isArray(value) ? value : String(value || "").split(",");
  const clean = [];
  list.forEach((item) => {
    const id = String(item || "").trim();
    if (UNIVERSES.has(id) && !clean.includes(id)) clean.push(id);
  });
  return clean.slice(0, 5);
}

function settingsOf(row) {
  return {
    language: LANGS.has(row.language) ? row.language : "zh",
    theme: row.theme === "dark" ? "dark" : "light",
    reduceMotion: Boolean(row.reduce_motion),
    defaultUniverse: UNIVERSES.has(row.default_universe) ? row.default_universe : "",
  };
}

function profileOf(row, extras) {
  return {
    id: row.id,
    displayName: row.display_name,
    signature: row.signature || "",
    about: row.about || "",
    place: row.place || "",
    tags: tagsOf(row.tags),
    cvPublic: Boolean(row.cv_public),
    hasCv: Boolean(row.has_cv),
    cvId: row.cv_id || "",
    settings: settingsOf(row),
    ...extras,
  };
}

const USER_COLS = `u.id, u.display_name, u.signature, u.about, u.place, u.tags, u.cv_public,
  u.language, u.theme, u.reduce_motion, u.default_universe,
  exists(select 1 from files f where f.user_id = u.id and f.kind = 'cv') as has_cv,
  (select f.id from files f where f.user_id = u.id and f.kind = 'cv' order by f.created_at desc limit 1) as cv_id`;

async function loadUser(client, id) {
  const found = await client.query(`select ${USER_COLS} from users u where u.id = $1`, [id]);
  return found.rows[0] || null;
}

async function relation(client, viewerId, otherId) {
  if (!viewerId || viewerId === otherId) return { following: false, followsYou: false, companion: false, self: viewerId === otherId };
  const found = await client.query(
    `select
       exists(select 1 from follows where follower_id = $1 and followee_id = $2) as following,
       exists(select 1 from follows where follower_id = $2 and followee_id = $1) as follows_you`,
    [viewerId, otherId],
  );
  const row = found.rows[0];
  const following = Boolean(row.following);
  const followsYou = Boolean(row.follows_you);
  return { following, followsYou, companion: following && followsYou, self: false };
}

async function postsFor(client, userId, includeHidden) {
  const found = await client.query(
    `select p.id, p.universe_id, p.kind, p.title, p.body, p.created_at, p.hidden, u.display_name, u.id as user_id
     from posts p
     join users u on u.id = p.user_id
     where p.user_id = $1 and ($2::boolean or p.hidden = false)
     order by p.created_at desc
     limit 100`,
    [userId, includeHidden],
  );
  return attachMedia(client, found.rows);
}

async function attachMedia(client, rows) {
  const ids = rows.map((row) => row.id);
  const media = ids.length
    ? await client.query(
      "select id, post_id, mime, kind from files where post_id = any($1::text[]) and kind in ('image', 'video') order by created_at",
      [ids],
    )
    : { rows: [] };
  const byPost = {};
  media.rows.forEach((row) => {
    const list = byPost[row.post_id] || (byPost[row.post_id] = []);
    list.push({ id: row.id, mime: row.mime, kind: row.kind });
  });
  return rows.map((row) => ({
    id: row.id,
    universeId: row.universe_id,
    kind: row.kind,
    title: row.title,
    body: row.body,
    created: iso(row.created_at),
    author: row.display_name,
    authorId: row.user_id,
    hidden: Boolean(row.hidden),
    media: byPost[row.id] || [],
  }));
}

export async function mediaForPosts(client, ids) {
  if (!ids.length) return {};
  const media = await client.query(
    "select id, post_id, mime, kind from files where post_id = any($1::text[]) and kind in ('image', 'video') order by created_at",
    [ids],
  );
  const byPost = {};
  media.rows.forEach((row) => {
    const list = byPost[row.post_id] || (byPost[row.post_id] = []);
    list.push({ id: row.id, mime: row.mime, kind: row.kind });
  });
  return byPost;
}

function decodeFile(data, mime, kind) {
  const allowed = kind === "cv" ? mime === "application/pdf" : kind === "video" ? VIDEO.has(mime) : IMAGE.has(mime);
  if (!allowed) {
    const error = new Error(kind === "cv" ? "简历请用 PDF" : "这个文件格式不能用");
    error.status = 400;
    throw error;
  }
  const raw = String(data || "");
  const b64 = raw.includes(",") ? raw.split(",").pop() : raw;
  let bytes;
  try {
    bytes = Buffer.from(b64, "base64");
  } catch (error) {
    const parseError = new Error("没有读懂文件");
    parseError.status = 400;
    throw parseError;
  }
  if (!bytes.length || bytes.length > LIMITS[kind]) {
    const error = new Error("文件太大");
    error.status = 413;
    throw error;
  }
  return bytes;
}

export async function routeExtra(req, res, method, bits, userFromRequest) {
  const known = new Set(["profile", "settings", "follow", "companions", "companion-posts", "messages", "files", "media", "directory"]);
  const hide = method === "POST" && bits[0] === "posts" && bits.length === 3 && bits[2] === "hide";
  if (!known.has(bits[0]) && !hide) return false;

  try {
    if (method !== "GET" && !sameOrigin(req)) {
      fail(res, 403, "请求来源不对");
      return true;
    }

    if (method === "GET" && bits[0] === "files" && bits.length === 2) {
      await sendFile(res, bits[1], req, userFromRequest);
      return true;
    }

    if (method === "GET" && bits[0] === "directory") {
      const rows = await withClient((client) => client.query(
        `select ${USER_COLS} from users u order by u.created_at desc limit 200`,
      ));
      send(res, 200, { people: rows.rows.map((row) => profileOf(row)) });
      return true;
    }

    if (method === "GET" && bits[0] === "profile" && bits.length === 2) {
      if (!validId(bits[1])) {
        fail(res, 404, "没有这个人");
        return true;
      }
      const payload = await withClient(async (client) => {
        const viewer = await userFromRequest(client, req);
        const row = await loadUser(client, bits[1]);
        if (!row) return null;
        const rel = await relation(client, viewer && viewer.id, row.id);
        const posts = await postsFor(client, row.id, rel.self);
        const view = profileOf(row, rel);
        if (!rel.self && !view.cvPublic) {
          view.hasCv = false;
          view.cvId = "";
        }
        return { profile: view, posts };
      });
      if (!payload) {
        fail(res, 404, "没有这个人");
        return true;
      }
      send(res, 200, payload);
      return true;
    }

    if (method === "GET" && bits[0] === "companion-posts") {
      const posts = await withClient(async (client) => {
        const viewer = await userFromRequest(client, req);
        if (!viewer) return [];
        const found = await client.query(
          `select p.id, p.universe_id, p.kind, p.title, p.body, p.created_at, p.hidden, u.display_name, u.id as user_id
           from posts p
           join users u on u.id = p.user_id
           where p.hidden = false
             and p.user_id in (
               select f1.followee_id from follows f1
               join follows f2 on f2.follower_id = f1.followee_id and f2.followee_id = f1.follower_id
               where f1.follower_id = $1
             )
           order by p.created_at desc
           limit 50`,
          [viewer.id],
        );
        return attachMedia(client, found.rows);
      });
      send(res, 200, { posts });
      return true;
    }

    if (method === "GET" && bits[0] === "companions") {
      const people = await withClient(async (client) => {
        const viewer = await userFromRequest(client, req);
        if (!viewer) return [];
        const found = await client.query(
          `select ${USER_COLS}
           from users u
           where u.id in (
             select f1.followee_id from follows f1
             join follows f2 on f2.follower_id = f1.followee_id and f2.followee_id = f1.follower_id
             where f1.follower_id = $1
           )
           order by u.display_name`,
          [viewer.id],
        );
        return found.rows.map((row) => profileOf(row, { companion: true }));
      });
      send(res, 200, { people });
      return true;
    }

    if (method === "GET" && bits[0] === "messages") {
      const withId = new URL(req.url, "http://localhost").searchParams.get("with") || "";
      if (!validId(withId)) {
        fail(res, 400, "没有这位同伴");
        return true;
      }
      const payload = await withClient(async (client) => {
        const viewer = await userFromRequest(client, req);
        if (!viewer) {
          const error = new Error("请先登录");
          error.status = 401;
          throw error;
        }
        const rel = await relation(client, viewer.id, withId);
        if (!rel.companion) {
          const error = new Error("成为同伴之后才能发消息");
          error.status = 403;
          throw error;
        }
        const found = await client.query(
          `select id, sender_id, recipient_id, body, created_at
           from messages
           where (sender_id = $1 and recipient_id = $2) or (sender_id = $2 and recipient_id = $1)
           order by created_at asc
           limit 200`,
          [viewer.id, withId],
        );
        return {
          messages: found.rows.map((row) => ({
            id: row.id,
            body: row.body,
            created: iso(row.created_at),
            mine: row.sender_id === viewer.id,
          })),
        };
      });
      send(res, 200, payload);
      return true;
    }

    const viewer = await withClient((client) => userFromRequest(client, req));
    if (!viewer) {
      fail(res, 401, "请先登录");
      return true;
    }

    if (method === "POST" && bits[0] === "settings") {
      const body = await readJson(req, 8000);
      const language = LANGS.has(body.language) ? body.language : "zh";
      const theme = body.theme === "dark" ? "dark" : "light";
      const reduceMotion = Boolean(body.reduceMotion);
      const defaultUniverse = UNIVERSES.has(body.defaultUniverse) ? body.defaultUniverse : "";
      await withClient((client) => client.query(
        `update users set language = $2, theme = $3, reduce_motion = $4, default_universe = $5 where id = $1`,
        [viewer.id, language, theme, reduceMotion, defaultUniverse],
      ));
      send(res, 200, { settings: { language, theme, reduceMotion, defaultUniverse } });
      return true;
    }

    if (method === "POST" && bits[0] === "profile" && bits.length === 1) {
      const body = await readJson(req, 8000);
      const displayName = normalizeName(body.displayName);
      if (!displayName) {
        fail(res, 400, "称呼请写 1 到 20 个字");
        return true;
      }
      const signature = clip(body.signature, 80);
      const about = clipBody(body.about, 400);
      const place = clip(body.place, 40);
      const tags = tagsOf(body.tags).join(",");
      const cvPublic = Boolean(body.cvPublic);
      const row = await withClient(async (client) => {
        await client.query(
          `update users set display_name = $2, signature = $3, about = $4, place = $5, tags = $6, cv_public = $7 where id = $1`,
          [viewer.id, displayName, signature, about, place, tags, cvPublic],
        );
        return loadUser(client, viewer.id);
      });
      send(res, 200, { profile: profileOf(row, { self: true }) });
      return true;
    }

    if (method === "POST" && bits[0] === "profile" && bits[1] === "cv") {
      const body = await readJson(req, 4_200_000);
      const bytes = decodeFile(body.data, String(body.mime || ""), "cv");
      const filename = clip(body.name, 80) || "cv.pdf";
      await withClient(async (client) => {
        await client.query("delete from files where user_id = $1 and kind = 'cv'", [viewer.id]);
        await client.query(
          "insert into files (id, user_id, kind, mime, filename, bytes) values ($1, $2, 'cv', 'application/pdf', $3, $4)",
          [randomUUID(), viewer.id, filename, bytes],
        );
      });
      send(res, 201, { ok: true });
      return true;
    }

    if (method === "POST" && bits[0] === "follow" && bits.length === 1) {
      const body = await readJson(req, 8000);
      const otherId = String(body.userId || "");
      if (!validId(otherId) || otherId === viewer.id) {
        fail(res, 400, "不能关注自己");
        return true;
      }
      const rel = await withClient(async (client) => {
        const exists = await client.query("select 1 from users where id = $1", [otherId]);
        if (!exists.rowCount) {
          const error = new Error("没有这个人");
          error.status = 404;
          throw error;
        }
        const current = await client.query(
          "delete from follows where follower_id = $1 and followee_id = $2",
          [viewer.id, otherId],
        );
        if (!current.rowCount) {
          await client.query(
            "insert into follows (follower_id, followee_id) values ($1, $2)",
            [viewer.id, otherId],
          );
        }
        return relation(client, viewer.id, otherId);
      });
      send(res, 200, rel);
      return true;
    }

    if (method === "POST" && bits[0] === "messages") {
      const body = await readJson(req, 8000);
      const otherId = String(body.userId || "");
      const text = clipBody(body.body, 1000);
      if (!validId(otherId) || !text) {
        fail(res, 400, "请写消息");
        return true;
      }
      const message = await withClient(async (client) => {
        const rel = await relation(client, viewer.id, otherId);
        if (!rel.companion) {
          const error = new Error("成为同伴之后才能发消息");
          error.status = 403;
          throw error;
        }
        const recent = await client.query(
          "select count(*)::int as n from messages where sender_id = $1 and created_at > now() - interval '1 hour'",
          [viewer.id],
        );
        if (recent.rows[0].n >= 60) {
          const error = new Error("写得太快了，过一会儿再试");
          error.status = 429;
          throw error;
        }
        const id = randomUUID();
        await client.query(
          "insert into messages (id, sender_id, recipient_id, body) values ($1, $2, $3, $4)",
          [id, viewer.id, otherId, text],
        );
        return { id };
      });
      send(res, 201, message);
      return true;
    }

    if (method === "POST" && bits[0] === "media") {
      const body = await readJson(req, 4_200_000);
      const postId = String(body.postId || "");
      const mime = String(body.mime || "");
      const kind = VIDEO.has(mime) ? "video" : "image";
      const bytes = decodeFile(body.data, mime, kind);
      const filename = clip(body.name, 80);
      const saved = await withClient(async (client) => {
        const post = await client.query("select id from posts where id = $1 and user_id = $2", [postId, viewer.id]);
        if (!post.rowCount) {
          const error = new Error("没有这条讨论");
          error.status = 404;
          throw error;
        }
        const count = await client.query("select count(*)::int as n from files where post_id = $1", [postId]);
        if (count.rows[0].n >= 3) {
          const error = new Error("一条最多三个文件");
          error.status = 400;
          throw error;
        }
        const id = randomUUID();
        await client.query(
          "insert into files (id, user_id, post_id, kind, mime, filename, bytes) values ($1, $2, $3, $4, $5, $6, $7)",
          [id, viewer.id, postId, kind, mime, filename, bytes],
        );
        return { id, mime, kind };
      });
      send(res, 201, saved);
      return true;
    }

    if (hide) {
      if (!validId(bits[1])) {
        fail(res, 404, "没有这条讨论");
        return true;
      }
      const hidden = await withClient(async (client) => {
        const found = await client.query(
          "update posts set hidden = not hidden where id = $1 and user_id = $2 returning hidden",
          [bits[1], viewer.id],
        );
        return found.rows[0] || null;
      });
      if (!hidden) {
        fail(res, 404, "没有这条讨论");
        return true;
      }
      send(res, 200, { hidden: Boolean(hidden.hidden) });
      return true;
    }

    fail(res, 404, "没有这个地址");
    return true;
  } catch (error) {
    const status = error.status || 500;
    if (status >= 500) console.error("api error", error.code || error.name);
    fail(res, status, status === 503 ? "数据库还没有接上" : (error.status ? error.message : "没有完成"));
    return true;
  }
}

async function sendFile(res, id, req, userFromRequest) {
  if (!validId(id)) {
    fail(res, 404, "没有这个文件");
    return;
  }
  const row = await withClient(async (client) => {
    const found = await client.query(
      `select f.id, f.user_id, f.post_id, f.kind, f.mime, f.filename, f.bytes, p.hidden, u.cv_public
       from files f
       left join posts p on p.id = f.post_id
       left join users u on u.id = f.user_id
       where f.id = $1`,
      [id],
    );
    return found.rows[0] || null;
  });
  if (!row) {
    fail(res, 404, "没有这个文件");
    return;
  }
  const viewer = await withClient((client) => userFromRequest(client, req));
  const owner = viewer && viewer.id === row.user_id;
  if (row.kind === "cv" && !owner && !row.cv_public) {
    fail(res, 404, "没有这个文件");
    return;
  }
  if (row.post_id && row.hidden && !owner) {
    fail(res, 404, "没有这个文件");
    return;
  }
  const bytes = row.bytes;
  res.writeHead(200, {
    "content-type": row.mime,
    "cache-control": "private, max-age=3600",
    "x-content-type-options": "nosniff",
    "content-length": bytes.length,
  });
  res.end(bytes);
}
