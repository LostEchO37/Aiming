/* Shared behavior: nav, universe pages, and the community feed. */
(function () {
  const READ_KEY = "aiming.read.v1";
  function tr(key) {
    return window.t ? window.t(key) : key;
  }

  function trf(key, vars) {
    return tr(key).replace(/\{(\w+)\}/g, (_, name) => (vars && vars[name] != null ? String(vars[name]) : ""));
  }

  function trm(message) {
    return window.tMsg ? window.tMsg(message) : (message || "");
  }

  const remote = {
    user: null,
    posts: [],
    replies: {},
    people: [],
    likeCounts: {},
    liked: {},
  };

  document.addEventListener("aiming-session", () => {
    remote.user = window.AIMING_USER || null;
  });

  function h(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.entries(attrs).forEach(([key, value]) => {
        if (value == null || value === false) return;
        if (key === "class") node.className = value;
        else if (key === "text") node.textContent = value;
        else node.setAttribute(key, value === true ? "" : String(value));
      });
    }
    const list = children == null ? [] : [].concat(children);
    list.forEach((child) => {
      if (child == null || child === false) return;
      node.append(child.nodeType ? child : document.createTextNode(String(child)));
    });
    return node;
  }

  function pageFile() {
    const file = location.pathname.split("/").pop();
    return file || "index.html";
  }

  function query() {
    return new URLSearchParams(location.search);
  }

  function currentUniverse() {
    const id = query().get("id");
    if (!id) return { id: null, universe: null, invalid: false };
    const universe = window.AIMING.byId[id] || null;
    return { id, universe, invalid: !universe };
  }

  function hrefWith(changes) {
    const sp = query();
    Object.entries(changes).forEach(([key, value]) => {
      if (value == null || value === "") sp.delete(key);
      else sp.set(key, value);
    });
    const q = sp.toString();
    return pageFile() + (q ? "?" + q : "");
  }

  function loadRead() {
    try {
      const raw = localStorage.getItem(READ_KEY);
      if (!raw) return {};
      const data = JSON.parse(raw);
      return data && typeof data === "object" ? data : {};
    } catch (err) {
      return {};
    }
  }

  function saveRead(read) {
    try {
      localStorage.setItem(READ_KEY, JSON.stringify(read));
      return true;
    } catch (err) {
      setStatus(tr("learn.noStore"));
      return false;
    }
  }

  function loadStore() {
    return {
      threads: [],
      opportunities: [],
      people: remote.people.slice(),
      posts: remote.posts.slice(),
      replies: remote.replies,
      likes: remote.liked,
      likeCounts: remote.likeCounts,
      read: loadRead(),
    };
  }

  function loginHref() {
    const next = (location.pathname.split("/").pop() || "index.html") + location.search + location.hash;
    return "login.html?next=" + encodeURIComponent(next);
  }

  function api(path, options) {
    const method = (options && options.method) || "POST";
    return fetch(path, {
      method,
      credentials: "same-origin",
      headers: options && options.body ? { "content-type": "application/json" } : {},
      body: options && options.body ? JSON.stringify(options.body) : undefined,
    }).then(async (res) => {
      let data = {};
      try { data = await res.json(); } catch (err) { data = {}; }
      if (!res.ok) {
        const error = new Error(trm(data.error) || tr("feed.failed"));
        error.status = res.status;
        throw error;
      }
      return data;
    });
  }

  function applyFeed(data) {
    remote.user = data.user || null;
    window.AIMING_USER = remote.user;
    remote.likeCounts = data.likeCounts || {};
    remote.liked = {};
    (data.liked || []).forEach((id) => { remote.liked[id] = true; });
    remote.posts = (data.posts || []).map((item) => ({
      id: item.id,
      seed: false,
      kind: item.kind,
      universeId: item.universeId,
      author: item.author || tr("feed.anon"),
      authorId: item.authorId || "",
      title: item.title || "",
      body: item.body,
      created: item.created || "",
      likes: remote.likeCounts[item.id] || 0,
      hidden: Boolean(item.hidden),
      media: item.media || [],
      avatarId: item.avatarId || "",
      replies: [],
    }));
    const replies = {};
    (data.replies || []).forEach((item) => {
      const list = replies[item.postId] || (replies[item.postId] = []);
      list.push({
        id: item.id,
        seed: false,
        author: item.author || tr("feed.anon"),
        authorId: item.authorId || "",
        avatarId: item.avatarId || "",
        body: item.body,
        created: item.created || "",
      });
    });
    remote.replies = replies;
    remote.people = (data.people || []).map((item) => ({
      id: item.id,
      seed: false,
      universeId: item.universeId,
      name: item.name || tr("feed.anon"),
      authorId: item.authorId || "",
      avatarId: item.avatarId || "",
      can: item.can,
      want: item.want,
      created: item.created || "",
    }));
    document.dispatchEvent(new CustomEvent("aiming-session"));
  }

  function clip(value, max) {
    return String(value || "").trim().slice(0, max);
  }

  function universeName(id) {
    const u = window.AIMING.byId[id];
    return u ? u.name : "";
  }

  function initNav() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.getElementById("site-nav");
    const page = document.body.dataset.page || "";
    const current = {
      home: "index.html",
      universes: "universes.html",
      universe: "universes.html",
      learn: "learn.html",
      discuss: "discuss.html",
      people: "people.html",
      settings: "settings.html",
      about: "about.html",
    }[page];

    const viewingProfile = page === "home" && new URLSearchParams(location.search).has("id");
    document.querySelectorAll(".nav a").forEach((link) => {
      if (!viewingProfile && link.getAttribute("href") === current) link.setAttribute("aria-current", "page");
    });

    if (!toggle || !nav) return;
    if (toggle.dataset.bound === "1") {
      toggle.textContent = nav.classList.contains("is-open") ? tr("close") : tr("menu");
      return;
    }
    toggle.dataset.bound = "1";

    function close() {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = tr("menu");
    }

    function open() {
      nav.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.textContent = tr("close");
    }

    toggle.addEventListener("click", () => {
      if (nav.classList.contains("is-open")) close();
      else open();
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", close);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        close();
        toggle.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(event.target) || toggle.contains(event.target)) return;
      close();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 840) close();
    });
  }

  function filters(extra) {
    const { id, invalid } = currentUniverse();
    const bar = h("nav", { class: "filters", "aria-label": tr("learn.filter") });
    const items = [{ id: "", name: tr("feed.all") }].concat(
      window.AIMING.universes.map((u) => ({ id: u.id, name: u.name }))
    );
    items.forEach((item) => {
      const on = !invalid && (item.id ? item.id === id : !id);
      bar.append(h("a", {
        class: "chip" + (on ? " is-on" : ""),
        href: hrefWith({ id: item.id || null, read: null }),
        "aria-current": on ? "page" : null,
      }, item.name));
    });
    if (extra && extra.node) bar.append(extra.node);
    return bar;
  }

  function missingBanner(id) {
    return h("p", { class: "banner", text: trf("u.missing", { id }) });
  }

  function renderUniverse() {
    const root = document.getElementById("content");
    if (!root) return;
    [...root.children].forEach((node) => {
      if (node.tagName !== "NOSCRIPT") node.remove();
    });
    const { id, universe, invalid } = currentUniverse();

    if (!universe) {
      document.title = tr("u.pickDoc");
      const stack = h("div", { class: "stack" });
      if (invalid) stack.append(missingBanner(id));
      stack.append(h("h1", { class: "page-title", text: invalid ? tr("u.none") : tr("u.pick") }));
      stack.append(h("p", { class: "page-intro", text: tr("u.pickIntro") }));
      const list = h("div", { class: "material-links" });
      window.AIMING.universes.forEach((u) => {
        list.append(h("a", { class: "material-link", href: "universe.html?id=" + u.id }, [
          h("strong", { text: u.index + "  " + u.name }),
          h("span", { text: tr("home.enter") }),
        ]));
      });
      stack.append(list);
      root.append(stack);
      return;
    }

    document.title = universe.name + " · Aiming";
    const stack = h("div", { class: "stack" });
    const intro = h("div", { class: "intro" });
    intro.append(h("a", { class: "back", href: "universes.html" }, tr("u.all")));
    intro.append(h("p", { class: "page-tag", text: trf("u.tag", { index: universe.index }) }));
    intro.append(h("h1", { class: "page-title", text: universe.name }));
    universe.lede.forEach((line) => intro.append(h("p", { class: "lede", text: line })));
    if (universe.related) {
      intro.append(h("p", { class: "related" }, [
        universe.related.before + " ",
        h("a", { href: universe.related.href }, universe.related.label),
        universe.related.after || "",
      ]));
    }
    stack.append(intro);

    const rooms = h("div", {});
    rooms.append(h("h2", { class: "block-title", text: tr("u.three") }));
    const grid = h("div", { class: "room-grid", style: "margin-top:0.8rem" });
    [
      ["01", tr("u.learn"), universe.rooms.learn, "learn.html?course=" + universe.id, tr("u.goIn")],
      ["02", tr("u.discussRoom"), universe.rooms.discuss, "#community", tr("u.goSearch")],
      ["03", tr("u.peopleRoom"), universe.rooms.people, "#community", tr("u.goSearch")],
    ].forEach(([index, title, copy, href, go]) => {
      grid.append(h("a", { class: "room", href }, [
        h("span", { class: "idx", text: index }),
        h("h3", { text: title }),
        h("p", { text: copy }),
        h("span", { class: "go" }, [go + " ", h("span", { class: "go-arrow", "aria-hidden": "true" }, "→")]),
      ]));
    });
    rooms.append(grid);
    stack.append(rooms);

    const practice = h("a", { class: "practice practice--block", href: "learn.html?course=" + universe.id }, [
      h("p", { class: "kicker", text: tr("home.kicker") }),
      h("h2", { text: universe.practice.title }),
      h("p", { text: universe.practice.body }),
      h("span", { class: "go" }, [tr("u.goLearn") + " ", h("span", { class: "go-arrow", "aria-hidden": "true" }, "→")]),
    ]);
    stack.append(practice);

    const mats = h("div", {});
    mats.append(h("h2", { class: "block-title", text: tr("u.materials") }));
    const links = h("div", { class: "material-links", style: "margin-top:0.8rem" });
    universe.materials.forEach((material) => {
      links.append(h("a", {
        class: "material-link",
        href: "learn.html?course=" + universe.id,
      }, [
        h("strong", { text: material.title }),
        h("span", { class: "meta", text: trf("u.minutes", { n: material.minutes }) }),
      ]));
    });
    mats.append(links);
    stack.append(mats);

    const community = h("section", {
      class: "community",
      id: "community",
      "aria-labelledby": "community-heading",
    });
    community.append(h("h2", { class: "block-title", id: "community-heading", text: tr("u.community") }));
    const mount = h("div", { id: "community-root" });
    community.append(mount);
    stack.append(community);
    root.append(stack);
    mountCommunity(mount, { lens: "both" });
  }

  let learnScrolled = false;

  function renderLearn() {
    const root = document.getElementById("learn-root");
    if (!root) return;
    const { id, universe, invalid } = currentUniverse();
    const readMode = query().get("read") === "1";
    const store = loadStore();
    root.replaceChildren();
    if (invalid) root.append(missingBanner(id));

    const readChipOn = readMode && !invalid;
    const readChip = h("a", {
      class: "chip" + (readChipOn ? " is-on" : ""),
      href: hrefWith({ read: readMode ? null : "1" }),
      "aria-current": readChipOn ? "page" : null,
    }, tr("learn.read"));

    root.append(filters({ node: readChip }));

    const pool = invalid ? [] : window.AIMING.universes
      .filter((u) => !universe || u.id === universe.id)
      .flatMap((u) => u.materials.map((m) => ({ ...m, universe: u })));
    const visible = pool.filter((m) => !readMode || store.read[m.id]);
    const readCount = pool.filter((m) => store.read[m.id]).length;

    root.append(h("div", { class: "toolbar" }, [
      h("p", { class: "local-note", text: invalid ? "" : trf("learn.progress", { read: readCount, total: pool.length }) }),
      readCount ? clearControl(tr("learn.clear"), () => {
        const next = loadRead();
        pool.forEach((m) => { delete next[m.id]; });
        saveRead(next);
        renderLearn();
        setStatus(tr("learn.cleared"));
      }) : null,
    ]));

    const status = h("p", { class: "status", id: "status", role: "status" });
    root.append(status);

    if (!visible.length) {
      const empty = invalid
        ? { title: tr("learn.badTitle"), body: tr("learn.badBody") }
        : readMode
          ? { title: tr("learn.noneReadTitle"), body: tr("learn.noneReadBody") }
          : { title: tr("learn.emptyTitle"), body: tr("learn.emptyBody") };
      root.append(emptyBox(empty.title, empty.body));
      return;
    }

    visible.forEach((material) => {
      const pressed = Boolean(store.read[material.id]);
      const button = h("button", {
        type: "button",
        class: "btn btn-ghost read-btn",
        id: "read-" + material.id,
        "aria-pressed": pressed ? "true" : "false",
        text: pressed ? tr("learn.read") : tr("learn.mark"),
      });
      button.addEventListener("click", () => {
        const next = loadRead();
        if (next[material.id]) delete next[material.id];
        else next[material.id] = true;
        saveRead(next);
        const message = next[material.id] ? tr("learn.marked") : tr("learn.unmarked");
        const keep = document.activeElement && document.activeElement.id;
        renderLearn();
        setStatus(message);
        if (keep) {
          const again = document.getElementById(keep);
          if (again) again.focus();
        }
      });

      const article = h("article", { class: "material", id: "mat-" + material.id }, [
        h("p", { class: "meta", text: material.universe.name + " · " + trf("u.minutes", { n: material.minutes }) }),
        h("h2", { text: material.title }),
      ]);
      material.paragraphs.forEach((p) => article.append(h("p", { text: p })));
      article.append(button);
      root.append(article);
    });

    if (!learnScrolled && location.hash.startsWith("#mat-")) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) target.scrollIntoView();
      learnScrolled = true;
    }
  }

  function emptyBox(title, body) {
    return h("div", { class: "empty" }, [
      h("strong", { text: title }),
      h("p", { text: body }),
    ]);
  }

  function setStatus(text) {
    const node = document.getElementById("status");
    if (node) node.textContent = text;
  }

  function clearControl(label, onClear) {
    const button = h("button", { type: "button", class: "text-btn", text: label });
    button.addEventListener("click", () => {
      if (button.dataset.arm !== "1") {
        button.dataset.arm = "1";
        button.textContent = tr("learn.confirmClear");
        return;
      }
      onClear();
    });
    return button;
  }

  function focusInvalid(controls) {
    const node = controls.find((control) => control.getAttribute("aria-invalid") === "true");
    if (node) node.focus();
  }

  function showError(control, err, message) {
    err.hidden = !message;
    err.textContent = message || "";
    if (message) control.setAttribute("aria-invalid", "true");
    else control.removeAttribute("aria-invalid");
  }

  function universeSelect(selected) {
    const sel = h("select", { class: "field", name: "universe" });
    sel.append(h("option", { value: "", text: tr("u.pick") }));
    window.AIMING.universes.forEach((u) => {
      sel.append(h("option", {
        value: u.id,
        text: u.name,
        selected: u.id === selected ? true : null,
      }));
    });
    return sel;
  }

  function bindField(control, err) {
    control.addEventListener("input", () => showError(control, err, ""));
    control.addEventListener("change", () => showError(control, err, ""));
  }

  function labeled(text, control) {
    const err = h("span", { class: "field-error", hidden: true });
    const id = "err-" + Math.random().toString(36).slice(2, 8);
    err.id = id;
    control.setAttribute("aria-describedby", id);
    bindField(control, err);
    const wrap = h("label", { class: "field-label" }, [
      h("span", { text }),
      control,
      err,
    ]);
    return { wrap, control, err };
  }


  const KIND = { topic: tr("feed.topic"), post: tr("feed.post"), opportunity: tr("feed.opportunity") };

  function withQuery(file, params) {
    const sp = new URLSearchParams();
    Object.entries(params || {}).forEach(([key, value]) => {
      if (value == null || value === "") return;
      sp.set(key, String(value));
    });
    const q = sp.toString();
    return file + (q ? "?" + q : "");
  }

  function formatTime(iso) {
    const then = new Date(iso);
    const t = then.getTime();
    if (!iso || Number.isNaN(t)) return "";
    const delta = Date.now() - t;
    const min = Math.floor(delta / 60000);
    if (min < 1) return tr("feed.justNow");
    if (min < 60) return trf("feed.minutes", { n: min });
    const hr = Math.floor(min / 60);
    if (hr < 24) return trf("feed.hours", { n: hr });
    const day = Math.floor(hr / 24);
    if (day < 7) return trf("feed.days", { n: day });
    return trf("feed.date", { month: then.getMonth() + 1, day: then.getDate() });
  }

  function initial(name) {
    const ch = String(name || tr("feed.me")).trim().charAt(0);
    return ch || tr("feed.me");
  }

  function universeOrder(id) {
    const u = window.AIMING.byId[id];
    return u ? u.index : "99";
  }

  function allPosts(store) {
    const list = [];
    store.posts.forEach((p) => {
      list.push({
        id: p.id,
        seed: false,
        kind: p.kind,
        universeId: p.universeId,
        author: p.author || tr("feed.anon"),
        authorId: p.authorId || "",
        title: p.title || "",
        body: p.body,
        created: p.created || "",
        likes: p.likes || 0,
        hidden: Boolean(p.hidden),
        media: p.media || [],
        avatarId: p.avatarId || "",
        replies: [],
      });
    });
    store.threads.forEach((item) => {
      list.push({
        id: item.id,
        seed: false,
        kind: "topic",
        universeId: item.universeId,
        author: tr("feed.me"),
        title: item.title,
        body: item.body,
        created: item.created || "",
        likes: 0,
        replies: [],
      });
    });
    store.opportunities.forEach((item) => {
      list.push({
        id: item.id,
        seed: false,
        kind: "opportunity",
        universeId: item.universeId,
        author: tr("feed.me"),
        title: item.title,
        body: item.body,
        created: item.created || "",
        likes: 0,
        replies: [],
      });
    });
    (window.AIMING.posts || []).forEach((p) => {
      list.push({
        id: p.id,
        seed: true,
        kind: p.kind,
        universeId: p.universeId,
        author: p.author,
        title: p.title || "",
        body: p.body,
        created: p.created,
        likes: (p.likes || 0) + (store.likeCounts[p.id] || 0),
        replies: p.replies || [],
      });
    });
    list.sort((a, b) => String(b.created || "").localeCompare(String(a.created || "")) || String(a.id).localeCompare(String(b.id)));
    return list;
  }

  function allPeople(store) {
    const list = store.people.map((p) => ({
      id: p.id,
      seed: false,
      universeId: p.universeId,
      name: p.name || tr("feed.anon"),
      authorId: p.authorId || "",
      avatarId: p.avatarId || "",
      can: p.can,
      want: p.want,
      created: p.created || "",
    })).concat((window.AIMING.people || []).map((p) => ({
      id: p.id,
      seed: true,
      universeId: p.universeId,
      name: p.name,
      can: p.can,
      want: p.want,
      created: p.created || "",
    })));
    list.sort((a, b) => {
      if (Boolean(a.seed) !== Boolean(b.seed)) return a.seed ? 1 : -1;
      return universeOrder(a.universeId).localeCompare(universeOrder(b.universeId))
        || String(a.name).localeCompare(String(b.name), "zh");
    });
    return list;
  }

  function allReplies(post, store) {
    const base = (post.replies || []).map((r) => ({
      id: r.id,
      seed: true,
      author: r.author,
      body: r.body,
      created: r.created || "",
    }));
    const extra = (store.replies[post.id] || []).map((r) => ({
      id: r.id,
      seed: false,
      author: r.author || tr("feed.anon"),
      authorId: r.authorId || "",
      avatarId: r.avatarId || "",
      body: r.body,
      created: r.created || "",
    }));
    return base.concat(extra).sort((a, b) => String(a.created || "").localeCompare(String(b.created || "")));
  }

  function fold(value) {
    return String(value || "").toLowerCase().replace(/\s+/g, "");
  }

  function matches(hay, q) {
    if (!q) return true;
    return fold(hay).includes(fold(q));
  }

  function postHay(post, store) {
    const replies = allReplies(post, store);
    return [
      post.title,
      post.body,
      post.author,
      universeName(post.universeId),
      KIND[post.kind] || "",
    ].concat(replies.map((r) => (r.body || "") + (r.author || ""))).join("\n");
  }

  function personHay(person) {
    return [person.name, person.can, person.want, universeName(person.universeId), tr("feed.companionsWord")].join("\n");
  }

  function avatar(name, fileId) {
    if (fileId) return h("img", { class: "avatar", alt: "", src: "/api/files?id=" + encodeURIComponent(fileId) });
    return h("span", { class: "avatar", "aria-hidden": "true", text: initial(name) });
  }
  window.AIMING_AVATAR = avatar;

  function stateHref(extra) {
    const input = document.getElementById("community-q");
    const params = {
      id: query().get("id") || "",
      q: input ? input.value.trim() : (query().get("q") || ""),
      mine: query().get("mine") || "",
    };
    Object.entries(extra || {}).forEach(([key, value]) => {
      if (value) params[key] = value;
    });
    return withQuery(pageFile(), params);
  }

  function personForAuthor(store, post) {
    if (post.authorId) {
      return allPeople(store).find((p) => p.authorId === post.authorId && p.universeId === post.universeId) || null;
    }
    return allPeople(store).find((p) => p.seed && p.name === post.author && p.universeId === post.universeId) || null;
  }

  function noticeAfterSave(kind, universeId, filterUniverse) {
    const input = document.getElementById("community-q");
    const q = input ? input.value.trim() : "";
    if (filterUniverse && filterUniverse.id !== universeId) {
      return trf("feed.savedUniverse", { name: universeName(universeId), filter: filterUniverse.name });
    }
    if (q) return trf("feed.savedSearch", { kind });
    return trf("feed.saved", { kind });
  }

  function sharePost(post, button) {
    const url = new URL(withQuery("discuss.html", { post: post.id }), location.href).href;
    const title = post.title || "Aiming";
    const done = () => {
      button.textContent = tr("feed.copied");
      setStatus(tr("feed.copyLink"));
      setTimeout(() => { button.textContent = tr("feed.share"); }, 1600);
    };
    if (navigator.share) {
      navigator.share({ title, text: post.body || title, url }).then(() => {}).catch((err) => {
        if (err && err.name === "AbortError") return;
        copyLink(url, done);
      });
      return;
    }
    copyLink(url, done);
  }

  function copyLink(url, done) {
    const finish = () => { if (done) done(); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(finish).catch(() => setStatus(trf("feed.link", { url })));
      return;
    }
    setStatus(trf("feed.link", { url }));
  }

  function owns(item) {
    return Boolean(remote.user && item.authorId && item.authorId === remote.user.id);
  }

  function deleteControl(kind, id) {
    const button = h("button", { type: "button", class: "text-btn", text: tr("feed.delete") });
    button.addEventListener("click", () => {
      if (button.dataset.arm !== "1") {
        button.dataset.arm = "1";
        button.textContent = tr("feed.confirmDelete");
        return;
      }
      button.disabled = true;
      api("/api/remove", { method: "POST", body: { kind, id } }).then(() => {
        const next = new URL(location.href);
        next.searchParams.delete("post");
        next.searchParams.delete("person");
        history.replaceState(null, "", next);
        setStatus(tr("feed.deleted"));
        document.dispatchEvent(new CustomEvent("aiming-reload"));
      }).catch((err) => {
        button.disabled = false;
        setStatus(trm(err.message) || tr("feed.notDeleted"));
      });
    });
    return h("div", { class: "note-actions" }, button);
  }

  function actionRow(post, store, inThread) {
    const replies = allReplies(post, store);
    const row = h("div", { class: "post-actions" });
    const replyText = replies.length ? trf("feed.replyCount", { n: replies.length }) : tr("feed.reply");
    if (inThread) {
      const button = h("button", { type: "button", class: "action", text: replyText });
      button.addEventListener("click", () => {
        const box = document.getElementById("reply-body");
        if (box) box.focus();
      });
      row.append(button);
    } else {
      row.append(h("a", { class: "action", href: stateHref({ post: post.id }) + "#reply" }, replyText));
    }
    const share = h("button", { type: "button", class: "action", text: tr("feed.share") });
    share.addEventListener("click", () => sharePost(post, share));
    row.append(share);
    const liked = Boolean(store.likes[post.id]);
    const count = post.likes || 0;
    const like = h("button", {
      type: "button",
      class: "action",
      "aria-pressed": liked ? "true" : "false",
      text: count ? trf("feed.likeCount", { n: count }) : tr("feed.like"),
    });
    like.addEventListener("click", () => {
      if (!remote.user) {
        location.href = loginHref();
        return;
      }
      like.disabled = true;
      api("/api/likes", { method: "POST", body: { postId: post.id } }).then(() => {
        document.dispatchEvent(new CustomEvent("aiming-reload"));
      }).catch((err) => {
        like.disabled = false;
        setStatus(trm(err.message) || tr("feed.notSaved"));
      });
    });
    row.append(like);
    return row;
  }

  function postMeta(item, kindText) {
    const line = h("p", { class: "post-meta" });
    const uname = universeName(item.universeId);
    if (uname) {
      line.append(h("a", { class: "tag", href: "universe.html?id=" + item.universeId + "#community" }, uname));
    }
    if (kindText) {
      line.append(h("span", {
        class: kindText === tr("feed.opportunity") ? "kind kind--opportunity" : "kind",
        text: kindText,
      }));
    }
    const time = formatTime(item.created);
    if (time) line.append(h("time", { datetime: item.created || "", text: time }));
    if (item.seed) line.append(h("span", { class: "badge", text: tr("feed.example") }));
    if (item.hidden) line.append(h("span", { class: "badge badge--hidden", text: tr("home.hidden") }));
    return line;
  }

  function mediaRow(files) {
    const row = h("div", { class: "media-row" });
    files.forEach((file) => {
      if (file.kind === "video") row.append(h("video", { class: "media", controls: true, src: "/api/files?id=" + file.id, preload: "metadata" }));
      else row.append(h("img", { class: "media", alt: "", src: "/api/files?id=" + file.id }));
    });
    return row;
  }

  function hideControl(post) {
    const button = h("button", { type: "button", class: "text-btn", text: post.hidden ? tr("home.show") : tr("home.hide") });
    button.addEventListener("click", () => {
      button.disabled = true;
      api("/api/hide", { method: "POST", body: { postId: post.id } }).then(() => {
        document.dispatchEvent(new CustomEvent("aiming-reload"));
      }).catch((err) => {
        button.disabled = false;
        setStatus(trm(err.message) || tr("feed.failed"));
      });
    });
    return h("div", { class: "note-actions" }, button);
  }

  function feedCard(post, store) {
    const card = h("article", { class: "post", id: "item-" + post.id });
    const head = h("div", { class: "post-head" }, [avatar(post.author, post.avatarId), h("div", { class: "post-id" })]);
    const idcol = head.lastChild;
    const person = personForAuthor(store, post);
    const name = post.authorId
      ? h("a", { href: "index.html?id=" + encodeURIComponent(post.authorId) }, post.author || tr("feed.anon"))
      : person
        ? h("a", { href: stateHref({ person: person.id }) }, post.author)
        : h("span", { text: post.author || tr("feed.anon") });
    idcol.append(h("p", { class: "post-name" }, name));
    const kindText = post.kind === "post" ? "" : (KIND[post.kind] || "");
    idcol.append(postMeta(post, kindText));
    card.append(head);
    const href = stateHref({ post: post.id });
    if (post.title) card.append(h("a", { class: "title-btn", href }, post.title));
    card.append(h("a", { class: "body-btn", href }, post.body));
    if (post.media && post.media.length) card.append(mediaRow(post.media));
    card.append(actionRow(post, store, false));
    if (owns(post)) card.append(hideControl(post));
    if (owns(post)) card.append(deleteControl("posts", post.id));
    return card;
  }

  function replyCard(reply) {
    const card = h("article", { class: "post post--reply" });
    const idcol = h("div", { class: "post-id" });
    idcol.append(h("p", { class: "post-name", text: reply.author || tr("feed.anon") }));
    const meta = h("p", { class: "post-meta" });
    const time = formatTime(reply.created);
    if (time) meta.append(h("time", { datetime: reply.created || "", text: time }));
    idcol.append(meta);
    card.append(h("div", { class: "post-head" }, [avatar(reply.author, reply.avatarId), idcol]));
    card.append(h("p", { class: "post-body", text: reply.body }));
    return card;
  }

  function personRow(person) {
    const copy = h("span", { class: "person-copy" });
    const top = h("span", { class: "person-top" });
    top.append(h("span", { class: "post-name", text: person.name || tr("feed.anon") }));
    if (person.seed) top.append(h("span", { class: "badge", text: tr("feed.example") }));
    copy.append(top);
    const sub = h("span", { class: "person-sub" });
    const uname = universeName(person.universeId);
    if (uname) sub.append(h("span", { class: "tag", text: uname }));
    sub.append(h("span", { class: "person-line", text: person.can }));
    copy.append(sub);
    return h("a", { class: "person-row", id: "item-" + person.id, href: stateHref({ person: person.id }) }, [
      avatar(person.name, person.avatarId),
      copy,
      h("span", { class: "go" }, [tr("feed.open") + " ", h("span", { class: "go-arrow", "aria-hidden": "true" }, "→")]),
    ]);
  }

  function foundLine(people, posts, peopleFirst) {
    const personBit = people.length ? trf("feed.peopleCount", { n: people.length }) : "";
    const postBit = posts.length ? trf("feed.postCount", { n: posts.length }) : "";
    const bits = (peopleFirst ? [personBit, postBit] : [postBit, personBit]).filter(Boolean);
    const sep = (document.documentElement.getAttribute("data-lang") || "zh") === "en" ? ", " : "，";
    return bits.length ? trf("feed.found", { bits: bits.join(sep) }) : "";
  }

  function mountCommunity(root, options) {
    const lens = options.lens || "feed";
    const embedded = document.body.dataset.page === "universe";
    const { invalid, id, universe } = currentUniverse();

    root.replaceChildren();
    if (invalid) root.append(missingBanner(id));

    const placeholder = universe
      ? trf("feed.searchIn", { name: universe.name })
      : (lens === "people" ? tr("feed.searchPeople") : tr("feed.searchPosts"));
    const input = h("input", {
      id: "community-q",
      class: "search-input",
      type: "search",
      name: "q",
      placeholder,
      autocomplete: "off",
      enterkeyhint: "search",
      "aria-label": placeholder,
    });
    const clearBtn = h("button", {
      type: "button",
      class: "search-clear",
      hidden: true,
      text: tr("feed.clear"),
      "aria-label": tr("feed.clearSearch"),
    });
    const form = h("form", { class: "search-form", role: "search" }, [
      input,
      clearBtn,
      h("button", { class: "btn btn-primary search-go", type: "submit", text: tr("feed.search") }),
    ]);
    const searchBlock = h("div", { class: "search-block" }, [
      form,
      h("p", { class: "local-note", text: tr("feed.exampleNote") }),
    ]);
    const scope = h("nav", { class: "scope", "aria-label": tr("feed.scope") });
    const tools = h("div", { class: "community-tools" });
    const mineLink = h("a", { class: "text-btn", href: pageFile() }, tr("feed.mine"));
    const postBtn = lens === "people" ? null : h("button", { type: "button", class: "text-btn", text: tr("feed.write") });
    const peopleBtn = lens === "feed" ? null : h("button", { type: "button", class: "text-btn", text: tr("feed.note") });
    if (postBtn) tools.append(postBtn);
    if (peopleBtn) tools.append(peopleBtn);
    tools.append(mineLink);

    [{ id: "", name: tr("feed.all") }].concat(window.AIMING.universes.map((u) => ({ id: u.id, name: u.name }))).forEach((item) => {
      scope.append(h("a", { class: "chip", href: pageFile(), "data-id": item.id }, item.name));
    });

    const resultLine = h("p", { class: "result-line", id: "result-status", role: "status" });
    const results = h("div", { id: "community-results" });
    const localTools = h("div", { id: "local-tools", class: "community-tools" });
    const actionStatus = h("p", { class: "status", id: "status", role: "status" });

    let postForm = null;
    let peopleForm = null;

    function currentQ() {
      return input.value.trim();
    }

    function scopeTarget(universeId) {
      const q = currentQ();
      const mine = query().get("mine") || "";
      if (embedded) {
        if (!universeId) return withQuery("discuss.html", { q, mine });
        return withQuery("universe.html", { id: universeId, q, mine });
      }
      return withQuery(pageFile(), { id: universeId || "", q, mine });
    }

    function paintScope() {
      const state = currentUniverse();
      scope.querySelectorAll("a").forEach((a) => {
        const cid = a.getAttribute("data-id") || "";
        a.setAttribute("href", scopeTarget(cid));
        const on = !state.invalid && (cid ? state.universe && state.universe.id === cid : !state.universe);
        a.classList.toggle("is-on", on);
        if (on) a.setAttribute("aria-current", "page");
        else a.removeAttribute("aria-current");
      });
      const onMine = query().get("mine") === "1";
      if (!remote.user) {
        mineLink.textContent = tr("feed.mine");
        mineLink.setAttribute("href", loginHref());
      } else {
        mineLink.textContent = onMine ? tr("feed.allMine") : tr("feed.mine");
        mineLink.setAttribute("href", withQuery(pageFile(), {
          id: query().get("id") || "",
          q: currentQ(),
          mine: onMine ? "" : "1",
        }));
      }
    }

    function headingTag() {
      return embedded ? "h3" : "h2";
    }

    function syncTitle(post, person) {
      if (embedded) return;
      const base = lens === "people" ? tr("feed.companionsWord") : tr("feed.discussWord");
      let name = base;
      if (person) name = (person.name || tr("feed.companionsWord")) + " · " + base;
      else if (post) name = (post.title || clip(post.body, 22)) + " · " + base;
      document.title = name + " · Aiming";
    }

    function paintResults() {
      const store = loadStore();
      const state = currentUniverse();
      const q = currentQ();
      const mine = query().get("mine") === "1";
      const postId = query().get("post");
      const personId = query().get("person");
      results.replaceChildren();

      if (personId) {
        resultLine.textContent = "";
        const person = allPeople(store).find((p) => p.id === personId);
        results.append(person ? personDetail(person) : missingDetail(tr("feed.missingPerson"), tr("feed.missingPersonBody")));
        syncTitle(null, person || null);
        return;
      }
      if (postId) {
        resultLine.textContent = "";
        const post = allPosts(store).find((p) => p.id === postId);
        results.append(post ? threadView(post, store) : missingDetail(tr("feed.missingPost"), tr("feed.missingPostBody")));
        syncTitle(post || null, null);
        return;
      }

      const posts = allPosts(store).filter((p) => allow(p, state, mine) && matches(postHay(p, store), q));
      let people = allPeople(store).filter((p) => allow(p, state, mine) && matches(personHay(p), q));
      if (!q && lens === "feed") people = [];
      if (!q && lens === "people") posts.splice(0, posts.length);

      if (!posts.length && !people.length) {
        resultLine.textContent = "";
        results.append(emptyState(q, mine, state.invalid, state.universe));
        syncTitle(null, null);
        return;
      }

      const peopleFirst = lens === "people" || Boolean(q);
      resultLine.textContent = q ? foundLine(people, posts, peopleFirst) : (mine ? tr("feed.onlyMine") : "");
      const showPeopleHead = people.length && (posts.length || lens === "both");
      const showPostHead = posts.length && (people.length || lens === "both" || (lens === "people" && q));
      const order = peopleFirst ? ["people", "posts"] : ["posts", "people"];
      order.forEach((kind) => {
        if (kind === "people" && people.length) {
          const group = h("div", { class: "feed-group", id: "community-people" });
          if (showPeopleHead) group.append(h(headingTag(), { class: "feed-heading", text: tr("feed.companionsWord") }));
          const list = h("div", { class: "people-list" });
          people.forEach((person) => list.append(personRow(person)));
          group.append(list);
          results.append(group);
        }
        if (kind === "posts" && posts.length) {
          const group = h("div", { class: "feed-group" });
          if (showPostHead) group.append(h(headingTag(), { class: "feed-heading", text: tr("feed.discussWord") }));
          posts.forEach((post) => group.append(feedCard(post, store)));
          results.append(group);
        }
      });
      syncTitle(null, null);
    }

    function allow(item, state, mine) {
      if (state.invalid) return false;
      if (state.universe && item.universeId !== state.universe.id) return false;
      if (mine && !(remote.user && item.authorId === remote.user.id)) return false;
      return true;
    }

    function missingDetail(title, body) {
      const box = emptyBox(title, body);
      box.append(h("p", {}, h("a", { class: "back", href: stateHref() }, tr("feed.back"))));
      return box;
    }

    function emptyState(q, mine, bad, scoped) {
      let title = tr("feed.emptyTitle");
      let body = tr("feed.emptyBody");
      if (bad) {
        title = tr("feed.badScopeTitle");
        body = tr("feed.badScopeBody");
      } else if (q) {
        title = tr("feed.noHitTitle");
        body = trf("feed.noHitBody", { q });
      } else if (mine) {
        title = tr("feed.noneMineTitle");
        body = tr("feed.noneMineBody");
      } else if (scoped) {
        title = tr("feed.emptyTitle");
        body = trf("feed.noneScopeBody", { name: scoped.name });
      }
      const box = emptyBox(title, body);
      if (q) {
        const clear = h("button", { type: "button", class: "text-btn", text: tr("feed.clearSearch") });
        clear.addEventListener("click", () => {
          input.value = "";
          syncUrl();
          input.focus();
        });
        box.append(clear);
        if (scoped) {
          box.append(h("p", {}, h("a", { href: withQuery("discuss.html", { q }) }, trf("feed.searchAll", { q }))));
        }
      }
      return box;
    }

    function personDetail(person) {
      const card = h("article", { class: "post person-detail", id: "item-" + person.id });
      card.append(h("a", { class: "back", href: stateHref() }, tr("feed.back")));
      const idcol = h("div", { class: "post-id" });
      idcol.append(h(headingTag(), { class: "who", text: person.name || tr("feed.anon") }));
      idcol.append(postMeta(person, ""));
      card.append(h("div", { class: "post-head" }, [avatar(person.name, person.avatarId), idcol]));
      card.append(h("h3", { class: "detail-label", text: tr("feed.can") }));
      card.append(h("p", { class: "post-body", text: person.can }));
      card.append(h("h3", { class: "detail-label", text: tr("feed.want") }));
      card.append(h("p", { class: "post-body", text: person.want }));
      if (person.seed) card.append(h("p", { class: "local-note", text: tr("feed.examplePerson") }));
      else if (owns(person)) card.append(deleteControl("people", person.id));
      const uname = universeName(person.universeId);
      if (uname) {
        card.append(h("p", {}, h("a", { href: "universe.html?id=" + person.universeId + "#community" }, trf("feed.seeUniverse", { name: uname }))));
      }
      return card;
    }

    function threadView(post, store) {
      const wrap = h("div", {});
      wrap.append(h("a", { class: "back", href: stateHref() }, tr("feed.back")));
      const card = h("article", { class: "post", id: "item-" + post.id });
      const person = personForAuthor(store, post);
      const name = person
        ? h("a", { href: stateHref({ person: person.id }) }, post.author || tr("feed.anon"))
        : h("span", { text: post.author || tr("feed.anon") });
      const idcol = h("div", { class: "post-id" }, [
        h("p", { class: "post-name" }, name),
        postMeta(post, post.kind === "post" ? "" : (KIND[post.kind] || "")),
      ]);
      card.append(h("div", { class: "post-head" }, [avatar(post.author, post.avatarId), idcol]));
      if (post.title) card.append(h(headingTag(), { class: "who", text: post.title }));
      card.append(h("p", { class: "post-body", text: post.body }));
      if (post.seed) card.append(h("p", { class: "local-note", text: tr("feed.examplePost") }));
      card.append(actionRow(post, store, true));
      if (owns(post)) card.append(deleteControl("posts", post.id));
      wrap.append(card);

      const replies = allReplies(post, store);
      wrap.append(h(headingTag(), {
        class: "feed-heading",
        text: replies.length ? trf("feed.replyCount", { n: replies.length }) : tr("feed.reply"),
      }));
      const list = h("div", { class: "replies" });
      if (!replies.length) list.append(h("p", { class: "local-note", text: tr("feed.noReplies") }));
      else replies.forEach((reply) => list.append(replyCard(reply)));
      wrap.append(list);
      wrap.append(replyForm(post));
      return wrap;
    }

    function replyForm(post) {
      if (!remote.user) {
        return h("p", { class: "local-note" }, [
          tr("feed.loginToReply"),
          " ",
          h("a", { href: loginHref() }, tr("nav.login")),
        ]);
      }
      const body = h("textarea", {
        class: "field",
        id: "reply-body",
        name: "reply",
        maxlength: "400",
        placeholder: tr("feed.replyPlaceholder"),
      });
      const field = labeled(tr("feed.reply"), body);
      const submit = h("button", { class: "btn btn-primary", type: "submit", text: tr("feed.reply") });
      const panel = h("form", { class: "form-card reply-form", id: "reply", novalidate: true }, [
        field.wrap,
        h("div", { class: "form-actions" }, submit),
      ]);
      panel.addEventListener("submit", (event) => {
        event.preventDefault();
        const text = clip(body.value, 400);
        if (!text) {
          showError(body, field.err, tr("feed.replyNeed"));
          body.focus();
          return;
        }
        showError(body, field.err, "");
        submit.disabled = true;
        api("/api/replies", { method: "POST", body: { postId: post.id, body: text } }).then(() => {
          setStatus(tr("feed.replied"));
          return reloadFeed();
        }).then(() => {
          const box = document.getElementById("reply-body");
          if (box) box.focus();
        }).catch((err) => {
          submit.disabled = false;
          setStatus(trm(err.message) || tr("feed.notWritten"));
        });
      });
      return panel;
    }

    function wireToggle(button, panel, otherButton, otherPanel) {
      button.setAttribute("aria-expanded", "false");
      button.addEventListener("click", () => {
        if (!remote.user) {
          location.href = loginHref();
          return;
        }
        const willOpen = panel.hidden;
        if (otherPanel) otherPanel.hidden = true;
        if (otherButton) otherButton.setAttribute("aria-expanded", "false");
        panel.hidden = !willOpen;
        button.setAttribute("aria-expanded", willOpen ? "true" : "false");
        if (willOpen) {
          const node = panel.querySelector("input, textarea, select");
          if (node) node.focus();
        }
      });
    }

    function closePanel(panel, button) {
      if (panel) panel.hidden = true;
      if (button) button.setAttribute("aria-expanded", "false");
    }

    if (postBtn) {
      postForm = buildPostForm();
      postForm.hidden = true;
    }
    if (peopleBtn) {
      peopleForm = buildPeopleForm();
      peopleForm.hidden = true;
    }

    root.append(searchBlock, scope, tools);
    if (postForm) root.append(postForm);
    if (peopleForm) root.append(peopleForm);
    root.append(actionStatus, resultLine, results, localTools);

    if (postBtn && postForm) wireToggle(postBtn, postForm, peopleBtn, peopleForm);
    if (peopleBtn && peopleForm) wireToggle(peopleBtn, peopleForm, postBtn, postForm);

    function toggleClear() {
      clearBtn.hidden = !input.value;
    }

    function syncUrl() {
      const next = new URL(location.href);
      const value = currentQ();
      if (value) next.searchParams.set("q", value);
      else next.searchParams.delete("q");
      next.searchParams.delete("post");
      next.searchParams.delete("person");
      history.replaceState(null, "", next);
      toggleClear();
      paintScope();
      paintResults();
    }

    let composing = false;
    input.addEventListener("compositionstart", () => { composing = true; });
    input.addEventListener("compositionend", () => { composing = false; syncUrl(); });
    input.addEventListener("input", () => {
      toggleClear();
      if (!composing) syncUrl();
    });
    clearBtn.addEventListener("click", () => {
      input.value = "";
      syncUrl();
      input.focus();
    });
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      syncUrl();
    });

    function paintLocalTools() {
      localTools.replaceChildren();
    }

    function reloadFeed() {
      return fetch("/api/feed", { credentials: "same-origin" }).then(async (res) => {
        let data = {};
        try { data = await res.json(); } catch (err) { data = {}; }
        if (!res.ok) throw new Error(trm(data.error) || tr("feed.failed"));
        applyFeed(data);
        paintScope();
        paintResults();
        paintLocalTools();
      }).catch((err) => {
        setStatus(err.message === "数据库还没有接上" ? tr("feed.dbDown") : tr("feed.offline"));
      });
    }

    function buildPostForm() {
      const select = universeSelect(universe && universe.id);
      const kind = h("select", { class: "field", name: "kind" });
      [["post", tr("feed.post")], ["topic", tr("feed.topic")], ["opportunity", tr("feed.opportunity")]].forEach(([value, text]) => {
        kind.append(h("option", { value, text }));
      });
      const title = h("input", { class: "field", name: "title", maxlength: "40", placeholder: tr("feed.titlePh"), autocomplete: "off" });
      const body = h("textarea", { class: "field", name: "body", maxlength: "600", placeholder: tr("feed.bodyPh") });
      const file = h("input", { class: "field", type: "file", accept: "image/jpeg,image/png,image/webp,image/gif,video/mp4,video/webm" });
      const s = labeled(tr("feed.universe"), select);
      const k = labeled(tr("feed.kindLabel"), kind);
      const t = labeled(tr("feed.title"), title);
      const b = labeled(tr("feed.body"), body);
      const f = labeled(tr("discuss.attach"), file);
      f.wrap.classList.add("field-label--full");
      t.wrap.classList.add("field-label--full");
      b.wrap.classList.add("field-label--full");
      const oppNote = h("p", {
        class: "local-note",
        hidden: true,
        text: tr("feed.opportunityNote"),
      });
      function syncKind() {
        const showTitle = kind.value !== "post";
        t.wrap.hidden = !showTitle;
        oppNote.hidden = kind.value !== "opportunity";
        if (!showTitle) showError(title, t.err, "");
      }
      kind.addEventListener("change", syncKind);
      const preferred = window.AIMING_SETTINGS && window.AIMING_SETTINGS.defaultUniverse;
      if (!select.value && preferred) select.value = preferred;
      const panel = h("form", { class: "form-card", novalidate: true }, [
        h("div", { class: "form-grid" }, [s.wrap, k.wrap, t.wrap, b.wrap, f.wrap]),
        oppNote,
        h("div", { class: "form-actions" }, h("button", { class: "btn btn-primary", type: "submit", text: tr("feed.submit") })),
      ]);
      syncKind();
      panel.addEventListener("submit", (event) => {
        event.preventDefault();
        const kindValue = kind.value;
        const titleText = clip(title.value, 40);
        const bodyText = clip(body.value, 600);
        const universeId = select.value;
        let ok = true;
        if (!universeId) { showError(select, s.err, tr("feed.needUniverse")); ok = false; } else showError(select, s.err, "");
        if (kindValue !== "post" && !titleText) { showError(title, t.err, tr("feed.needTitle")); ok = false; } else showError(title, t.err, "");
        if (!bodyText) { showError(body, b.err, tr("feed.needBody")); ok = false; } else showError(body, b.err, "");
        if (!ok) { focusInvalid([select, title, body]); return; }
        if (!remote.user) { location.href = loginHref(); return; }
        const submit = panel.querySelector("button[type=submit]");
        if (submit) submit.disabled = true;
        api("/api/posts", {
          method: "POST",
          body: {
            universeId,
            kind: kindValue,
            title: kindValue === "post" ? "" : titleText,
            body: bodyText,
          },
        }).then(async (data) => {
          const picked = file.files && file.files[0];
          if (picked) {
            const encoded = await new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = () => resolve(reader.result);
              reader.onerror = () => reject(reader.error);
              reader.readAsDataURL(picked);
            });
            await api("/api/media", { method: "POST", body: { postId: data.id, mime: picked.type, name: picked.name, data: encoded } });
          }
          panel.reset();
          if (universe) select.value = universe.id;
          else if (preferred) select.value = preferred;
          syncKind();
          closePanel(panel, postBtn);
          const state = currentUniverse();
          setStatus(noticeAfterSave(kindValue === "opportunity" ? tr("feed.opportunity") : tr("feed.discussWord"), universeId, state.universe));
          return reloadFeed().then(() => data.id);
        }).then((id) => {
          const node = document.getElementById("item-" + id);
          if (node) node.scrollIntoView({ block: "nearest" });
        }).catch((err) => {
          setStatus(trm(err.message) || tr("feed.notWritten"));
        }).finally(() => {
          if (submit) submit.disabled = false;
        });
      });
      return panel;
    }

    function buildPeopleForm() {
      const can = h("textarea", { class: "field", maxlength: "200", placeholder: tr("feed.canPh") });
      const want = h("textarea", { class: "field", maxlength: "200", placeholder: tr("feed.wantPh") });
      const select = universeSelect(universe && universe.id);
      const s = labeled(tr("feed.universe"), select);
      const c = labeled(tr("feed.can"), can);
      const w = labeled(tr("feed.want"), want);
      c.wrap.classList.add("field-label--full");
      w.wrap.classList.add("field-label--full");
      const panel = h("form", { class: "form-card", novalidate: true }, [
        h("p", { class: "local-note", text: tr("feed.noteName") }),
        h("div", { class: "form-grid" }, [s.wrap, c.wrap, w.wrap]),
        h("div", { class: "form-actions" }, h("button", { class: "btn btn-primary", type: "submit", text: tr("feed.note") })),
      ]);
      panel.addEventListener("submit", (event) => {
        event.preventDefault();
        const canText = clip(can.value, 200);
        const wantText = clip(want.value, 200);
        const universeId = select.value;
        let ok = true;
        if (!universeId) { showError(select, s.err, tr("feed.needUniverse")); ok = false; } else showError(select, s.err, "");
        if (!canText) { showError(can, c.err, tr("feed.needCan")); ok = false; } else showError(can, c.err, "");
        if (!wantText) { showError(want, w.err, tr("feed.needWant")); ok = false; } else showError(want, w.err, "");
        if (!ok) { focusInvalid([select, can, want]); return; }
        if (!remote.user) { location.href = loginHref(); return; }
        const submit = panel.querySelector("button[type=submit]");
        if (submit) submit.disabled = true;
        api("/api/people", {
          method: "POST",
          body: { universeId, can: canText, want: wantText },
        }).then((data) => {
          panel.reset();
          if (universe) select.value = universe.id;
          closePanel(panel, peopleBtn);
          const state = currentUniverse();
          setStatus(noticeAfterSave(tr("feed.noteWord"), universeId, state.universe));
          return reloadFeed().then(() => data.id);
        }).then((id) => {
          const node = document.getElementById("item-" + id);
          if (node) node.scrollIntoView({ block: "nearest" });
        }).catch((err) => {
          setStatus(trm(err.message) || tr("feed.notWritten"));
        }).finally(() => {
          if (submit) submit.disabled = false;
        });
      });
      return panel;
    }

    document.addEventListener("aiming-repaint", () => {
      paintResults();
      paintLocalTools();
    });
    document.addEventListener("aiming-reload", () => { reloadFeed(); });

    input.value = query().get("q") || "";
    toggleClear();
    paintScope();
    paintResults();
    paintLocalTools();
    reloadFeed();

    if (!window.AIMING_POP) {
      window.AIMING_POP = true;
      window.addEventListener("popstate", () => {
        const field = document.getElementById("community-q");
        if (field) field.value = query().get("q") || "";
        if (window.AIMING_REPAINT) window.AIMING_REPAINT();
      });
    }
    window.AIMING_REPAINT = () => {
      const field = document.getElementById("community-q");
      if (field) toggleClear();
      paintScope();
      paintResults();
    };

    const opening = query().get("post") || query().get("person") || location.hash;
    if (!embedded && !opening && window.matchMedia("(min-width: 841px)").matches) input.focus();
    if (embedded && (query().get("post") || query().get("person"))) {
      const target = document.getElementById("community");
      if (target) target.scrollIntoView();
    }
    if (location.hash === "#reply") {
      const box = document.getElementById("reply-body");
      if (box) box.focus();
    }
  }

  function renderCurrent() {
    if (window.AIMING_LOCALIZE) window.AIMING_LOCALIZE();
    const page = document.body.dataset.page;
    initNav();
    if (page === "universe") renderUniverse();
    if (page === "learn") {
      const learnRoot = document.getElementById("learn-root");
      if (learnRoot) learnRoot.replaceChildren();
    }
    if (page === "discuss") {
      const discussRoot = document.getElementById("discuss-root");
      if (discussRoot) mountCommunity(discussRoot, { lens: "feed" });
    }
  }

  document.addEventListener("aiming-i18n", renderCurrent);
  renderCurrent();
})();
