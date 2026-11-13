const base = process.env.AIMING_URL || "http://127.0.0.1:8080";

function cookieFrom(response) {
  const raw = response.headers.getSetCookie?.() || [];
  return raw.map((line) => line.split(";")[0]).join("; ");
}

async function call(path, { method = "GET", body, cookie } = {}) {
  const response = await fetch(base + path, {
    method,
    headers: {
      origin: base,
      ...(body ? { "content-type": "application/json" } : {}),
      ...(cookie ? { cookie } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await response.json();
  return { status: response.status, data, cookie: cookieFrom(response) || cookie || "" };
}

const email = `check-${Date.now()}@example.com`;
const password = "check-pass-1";
const stamp = `检查用帖子 ${Date.now()}`;

const health = await call("/api/health");
if (health.status !== 200 || !health.data.ok) throw new Error("health failed");

const registered = await call("/api/register", {
  method: "POST",
  body: { email, password, displayName: "检查" },
});
if (registered.status !== 201 || registered.data.user.displayName !== "检查" || !registered.cookie.includes("aiming_session=")) {
  throw new Error("register failed");
}

const session = await call("/api/session", { cookie: registered.cookie });
if (session.data.user?.displayName !== "检查") throw new Error("session missing after register");

const loggedOut = await call("/api/logout", { method: "POST", cookie: registered.cookie });
if (loggedOut.data.user !== null) throw new Error("logout failed");
const afterOut = await call("/api/session", { cookie: loggedOut.cookie });
if (afterOut.data.user) throw new Error("session survived logout");

const loggedIn = await call("/api/login", { method: "POST", body: { email, password } });
if (loggedIn.status !== 200 || !loggedIn.cookie.includes("aiming_session=")) throw new Error("login failed");

const anonPost = await call("/api/posts", {
  method: "POST",
  body: { universeId: "yingxiao", kind: "post", body: stamp },
});
if (anonPost.status !== 401) throw new Error("anonymous post was accepted");

const posted = await call("/api/posts", {
  method: "POST",
  cookie: loggedIn.cookie,
  body: { universeId: "yingxiao", kind: "post", body: stamp },
});
if (posted.status !== 201) throw new Error("post failed");

const feed = await call("/api/feed");
const row = (feed.data.posts || []).find((item) => item.body === stamp);
if (!row || row.universeId !== "yingxiao" || row.author !== "检查") throw new Error("post missing from feed");
if (feed.data.user) throw new Error("anonymous feed included a session");

const mine = await call("/api/feed", { cookie: loggedIn.cookie });
if (mine.data.user?.id !== row.authorId) throw new Error("logged-in feed lost the author");

const bad = await call("/api/login", { method: "POST", body: { email, password: "wrong-password" } });
if (bad.status !== 401) throw new Error("bad password was accepted");

console.log("check ok");
