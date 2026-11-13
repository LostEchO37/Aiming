import { createHash, randomBytes, scrypt, timingSafeEqual } from "node:crypto";

const SESSION_MS = 30 * 24 * 60 * 60 * 1000;
const COOKIE = "aiming_session";
const SCRYPT = { N: 16384, r: 8, p: 1, maxmem: 64 * 1024 * 1024 };

export const UNIVERSES = new Set(["yingxiao", "renshi", "kaifa", "meishu", "anquan"]);

export const SEED_POSTS = new Set([
  "yx-1", "yx-2", "yx-3",
  "rs-1", "rs-2", "rs-3",
  "kf-1", "kf-2", "kf-3",
  "ms-1", "ms-2", "ms-3",
  "aq-1", "aq-2", "aq-3",
]);

function scryptKey(password, salt, length) {
  return new Promise((resolve, reject) => {
    scrypt(password, salt, length, SCRYPT, (error, key) => {
      if (error) reject(error);
      else resolve(key);
    });
  });
}

export async function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const key = await scryptKey(password, salt, 32);
  return `scrypt$${salt}$${key.toString("hex")}`;
}

export async function verifyPassword(password, stored) {
  const parts = String(stored || "").split("$");
  if (parts.length !== 3 || parts[0] !== "scrypt" || !/^[0-9a-f]+$/.test(parts[1]) || !/^[0-9a-f]+$/.test(parts[2])) {
    return false;
  }
  const expected = Buffer.from(parts[2], "hex");
  const key = await scryptKey(password, parts[1], expected.length);
  if (key.length !== expected.length) return false;
  return timingSafeEqual(key, expected);
}

let dummyHash;
export async function dummyPasswordHash() {
  dummyHash ??= await hashPassword("not-a-real-password");
  return dummyHash;
}

export function newToken() {
  return randomBytes(32).toString("base64url");
}

export function hashToken(token) {
  return createHash("sha256").update(String(token)).digest("hex");
}

export function sessionExpiry(from = Date.now()) {
  return new Date(from + SESSION_MS);
}

export function readCookie(req, name = COOKIE) {
  const header = req.headers.cookie || "";
  for (const part of header.split(/; */)) {
    const index = part.indexOf("=");
    if (index === -1) continue;
    if (part.slice(0, index) === name) {
      try {
        return decodeURIComponent(part.slice(index + 1));
      } catch (error) {
        return "";
      }
    }
  }
  return "";
}

export function cookieHeader(token, req, clear) {
  const secure = String(req.headers["x-forwarded-proto"] || "").split(",")[0].trim() === "https";
  const bits = [
    `${COOKIE}=${clear ? "" : encodeURIComponent(token)}`,
    "HttpOnly",
    "Path=/",
    "SameSite=Lax",
    `Max-Age=${clear ? 0 : Math.floor(SESSION_MS / 1000)}`,
  ];
  if (secure) bits.push("Secure");
  return bits.join("; ");
}

export function sameOrigin(req) {
  const origin = req.headers.origin;
  const host = String(req.headers["x-forwarded-host"] || req.headers.host || "").split(",")[0].trim();
  if (origin) {
    try {
      return new URL(origin).host === host;
    } catch (error) {
      return false;
    }
  }
  const site = req.headers["sec-fetch-site"];
  return site === "same-origin" || site === "none";
}

export function validId(value) {
  return typeof value === "string" && /^[A-Za-z0-9-]{1,80}$/.test(value);
}

export function clip(value, max) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, max);
}

export function clipBody(value, max) {
  return String(value || "").replace(/\r\n/g, "\n").trim().slice(0, max);
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeEmail(value) {
  const email = String(value || "").trim().toLowerCase();
  if (!email || email.length > 254 || !EMAIL.test(email)) return "";
  return email;
}

export function normalizeName(value) {
  const name = String(value || "").replace(/[\u0000-\u001f]/g, "").trim();
  if (!name || name.length > 20) return "";
  return name;
}
