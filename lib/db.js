import pg from "pg";

const SCHEMA = `
create table if not exists users (
  id text primary key,
  email text not null unique,
  display_name text not null,
  password_hash text not null,
  created_at timestamptz not null default now()
);

create table if not exists sessions (
  token_hash text primary key,
  user_id text not null references users (id) on delete cascade,
  expires_at timestamptz not null,
  created_at timestamptz not null default now()
);

create index if not exists sessions_user_idx on sessions (user_id);

create table if not exists posts (
  id text primary key,
  user_id text not null references users (id) on delete cascade,
  universe_id text not null,
  kind text not null,
  title text not null default '',
  body text not null,
  created_at timestamptz not null default now(),
  constraint posts_kind check (kind in ('post', 'topic', 'opportunity')),
  constraint posts_universe check (universe_id in ('yingxiao', 'renshi', 'kaifa', 'meishu', 'anquan'))
);

create index if not exists posts_created_idx on posts (created_at desc);

create table if not exists replies (
  id text primary key,
  post_id text not null,
  user_id text not null references users (id) on delete cascade,
  body text not null,
  created_at timestamptz not null default now()
);

create index if not exists replies_post_idx on replies (post_id, created_at);

create table if not exists people_notes (
  id text primary key,
  user_id text not null references users (id) on delete cascade,
  universe_id text not null,
  can_do text not null,
  want text not null,
  created_at timestamptz not null default now(),
  constraint people_universe check (universe_id in ('yingxiao', 'renshi', 'kaifa', 'meishu', 'anquan'))
);

create index if not exists people_created_idx on people_notes (created_at desc);

create table if not exists likes (
  user_id text not null references users (id) on delete cascade,
  post_id text not null,
  created_at timestamptz not null default now(),
  primary key (user_id, post_id)
);

create index if not exists likes_post_idx on likes (post_id);

alter table users add column if not exists signature text not null default '';
alter table users add column if not exists about text not null default '';
alter table users add column if not exists place text not null default '';
alter table users add column if not exists tags text not null default '';
alter table users add column if not exists cv_public boolean not null default false;
alter table users add column if not exists language text not null default 'zh';
alter table users add column if not exists theme text not null default 'light';
alter table users add column if not exists reduce_motion boolean not null default false;
alter table users add column if not exists default_universe text not null default '';

alter table posts add column if not exists hidden boolean not null default false;

create table if not exists follows (
  follower_id text not null references users (id) on delete cascade,
  followee_id text not null references users (id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (follower_id, followee_id),
  constraint follows_not_self check (follower_id <> followee_id)
);

create index if not exists follows_followee_idx on follows (followee_id);

create table if not exists messages (
  id text primary key,
  sender_id text not null references users (id) on delete cascade,
  recipient_id text not null references users (id) on delete cascade,
  body text not null,
  created_at timestamptz not null default now()
);

create index if not exists messages_pair_idx on messages (sender_id, recipient_id, created_at);

create table if not exists files (
  id text primary key,
  user_id text not null references users (id) on delete cascade,
  post_id text,
  kind text not null,
  mime text not null,
  filename text not null default '',
  bytes bytea not null,
  created_at timestamptz not null default now(),
  constraint files_kind check (kind in ('image', 'video', 'cv'))
);

create index if not exists files_post_idx on files (post_id);
create index if not exists files_user_kind_idx on files (user_id, kind);
`;

let pool;
let ready;

function databaseUrl() {
  return (process.env.DATABASE_URL || "").trim();
}

function sslOption(url) {
  if (/localhost|127\.0\.0\.1|\/var\/run\/postgresql/.test(url)) return false;
  return { rejectUnauthorized: true };
}

export function databaseConfigured() {
  return databaseUrl() !== "";
}

function getPool() {
  const url = databaseUrl();
  if (!url) {
    const error = new Error("数据库还没有接上");
    error.status = 503;
    throw error;
  }
  if (!pool) {
    pool = new pg.Pool({
      connectionString: url,
      max: 1,
      idleTimeoutMillis: 5000,
      connectionTimeoutMillis: 10000,
      ssl: sslOption(url),
    });
    pool.on("error", (error) => {
      console.error("database pool error", error.code || error.name);
    });
  }
  return pool;
}

async function applySchema() {
  const client = await getPool().connect();
  try {
    await client.query(SCHEMA);
  } finally {
    client.release();
  }
}

export function ensureSchema() {
  if (!databaseConfigured()) {
    const error = new Error("数据库还没有接上");
    error.status = 503;
    return Promise.reject(error);
  }
  ready ??= applySchema().catch((error) => {
    ready = undefined;
    throw error;
  });
  return ready;
}

export async function withClient(fn) {
  await ensureSchema();
  const client = await getPool().connect();
  try {
    return await fn(client);
  } finally {
    client.release();
  }
}

export function iso(value) {
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? "" : date.toISOString();
}
