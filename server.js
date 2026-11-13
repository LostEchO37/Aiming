import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { handle } from "./lib/handle.js";

const root = resolve(fileURLToPath(new URL(".", import.meta.url)));
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
};

function safeFile(pathname) {
  let decoded = pathname;
  try {
    decoded = decodeURIComponent(pathname);
  } catch (error) {
    return null;
  }
  if (decoded.includes("\0")) return null;
  const rel = decoded.replace(/^\/+/, "");
  if (!rel || rel.endsWith("/")) return join(root, rel, "index.html");
  const full = resolve(root, rel);
  if (full !== root && !full.startsWith(root + sep)) return null;
  return full;
}

function blocked(pathname) {
  return pathname.startsWith("/node_modules")
    || pathname.startsWith("/lib")
    || pathname.startsWith("/api")
    || pathname.startsWith("/scripts")
    || pathname.startsWith("/.git")
    || pathname === "/server.js"
    || pathname === "/package.json"
    || pathname === "/package-lock.json"
    || pathname === "/vercel.json"
    || pathname.startsWith("/.env");
}

function sendFile(res, file) {
  const type = types[extname(file)] || "application/octet-stream";
  res.writeHead(200, {
    "content-type": type,
    "cache-control": "no-cache",
    "x-content-type-options": "nosniff",
  });
  createReadStream(file).pipe(res);
}

function notFound(res) {
  res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
  res.end("<!DOCTYPE html><html lang=\"zh-Hans\"><meta charset=\"utf-8\"><title>没有这一页 · Aiming</title><body style=\"font-family:sans-serif;background:#f3efe7;color:#1a1f28\"><p>没有这一页。</p><p><a href=\"/\">回 Aiming</a></p></body></html>");
}

const server = createServer((req, res) => {
  const pathname = (req.url || "/").split("?")[0];
  if (pathname === "/api" || pathname.startsWith("/api/")) {
    handle(req, res);
    return;
  }
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { allow: "GET, HEAD" });
    res.end();
    return;
  }
  if (blocked(pathname)) {
    notFound(res);
    return;
  }
  const file = safeFile(pathname === "/" ? "/index.html" : pathname);
  if (!file) {
    notFound(res);
    return;
  }
  const ext = extname(file);
  if (!types[ext] || !existsSync(file) || !statSync(file).isFile()) {
    notFound(res);
    return;
  }
  if (req.method === "HEAD") {
    res.writeHead(200, { "content-type": types[ext] });
    res.end();
    return;
  }
  sendFile(res, file);
});

const port = Number(process.env.PORT) || 8080;
server.listen(port, "127.0.0.1", () => {
  console.log(`Aiming listening on http://127.0.0.1:${port}`);
});
