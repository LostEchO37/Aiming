/* Shared behavior: nav, universe pages, and the community feed. */
(function () {
  const READ_KEY = "aiming.read.v1";
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
      setStatus("这台浏览器没有记下看过标记。");
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
        const error = new Error(data.error || "没有完成");
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
      author: item.author || "未署名",
      authorId: item.authorId || "",
      title: item.title || "",
      body: item.body,
      created: item.created || "",
      likes: remote.likeCounts[item.id] || 0,
      hidden: Boolean(item.hidden),
      media: item.media || [],
      replies: [],
    }));
    const replies = {};
    (data.replies || []).forEach((item) => {
      const list = replies[item.postId] || (replies[item.postId] = []);
      list.push({
        id: item.id,
        seed: false,
        author: item.author || "未署名",
        authorId: item.authorId || "",
        body: item.body,
        created: item.created || "",
      });
    });
    remote.replies = replies;
    remote.people = (data.people || []).map((item) => ({
      id: item.id,
      seed: false,
      universeId: item.universeId,
      name: item.name || "未署名",
      authorId: item.authorId || "",
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

    document.querySelectorAll(".nav a").forEach((link) => {
      if (link.getAttribute("href") === current) link.setAttribute("aria-current", "page");
    });

    if (!toggle || !nav) return;

    function close() {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "菜单";
    }

    function open() {
      nav.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.textContent = "关闭";
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
    const bar = h("nav", { class: "filters", "aria-label": "按宇宙筛选" });
    const items = [{ id: "", name: "全部" }].concat(
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
    return h("p", { class: "banner", text: "没有「" + id + "」这个宇宙。可以改选上面的「全部」，或回到宇宙列表。" });
  }

  function renderUniverse() {
    const root = document.getElementById("content");
    if (!root) return;
    const { id, universe, invalid } = currentUniverse();

    if (!universe) {
      document.title = "选择宇宙 · Aiming";
      const stack = h("div", { class: "stack" });
      if (invalid) stack.append(missingBanner(id));
      stack.append(h("h1", { class: "page-title", text: invalid ? "没有这个宇宙" : "选择一个宇宙" }));
      stack.append(h("p", { class: "page-intro", text: "可以从营销、人事、数字开发、美术、安全里选。点进去就是那一页。" }));
      const list = h("div", { class: "material-links" });
      window.AIMING.universes.forEach((u) => {
        list.append(h("a", { class: "material-link", href: "universe.html?id=" + u.id }, [
          h("strong", { text: u.index + "  " + u.name }),
          h("span", { text: "进入" }),
        ]));
      });
      stack.append(list);
      root.append(stack);
      return;
    }

    document.title = universe.name + " · Aiming";
    const stack = h("div", { class: "stack" });
    const intro = h("div", { class: "intro" });
    intro.append(h("a", { class: "back", href: "universes.html" }, "← 全部宇宙"));
    intro.append(h("p", { class: "page-tag", text: "宇宙 " + universe.index }));
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
    rooms.append(h("h2", { class: "block-title", text: "三处" }));
    const grid = h("div", { class: "room-grid", style: "margin-top:0.8rem" });
    [
      ["01", "学习", universe.rooms.learn, "learn.html?id=" + universe.id, "进去"],
      ["02", "讨论与机会", universe.rooms.discuss, "#community", "去搜索"],
      ["03", "找同路人", universe.rooms.people, "#community", "去搜索"],
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

    const practice = h("a", { class: "practice practice--block", href: "learn.html?id=" + universe.id + "#mat-" + universe.materials[0].id }, [
      h("p", { class: "kicker", text: "可以先做的一件事" }),
      h("h2", { text: universe.practice.title }),
      h("p", { text: universe.practice.body }),
      h("span", { class: "go" }, ["去学习 ", h("span", { class: "go-arrow", "aria-hidden": "true" }, "→")]),
    ]);
    stack.append(practice);

    const mats = h("div", {});
    mats.append(h("h2", { class: "block-title", text: "材料" }));
    const links = h("div", { class: "material-links", style: "margin-top:0.8rem" });
    universe.materials.forEach((material) => {
      links.append(h("a", {
        class: "material-link",
        href: "learn.html?id=" + universe.id + "#mat-" + material.id,
      }, [
        h("strong", { text: material.title }),
        h("span", { class: "meta", text: "约 " + material.minutes + " 分钟" }),
      ]));
    });
    mats.append(links);
    stack.append(mats);

    const community = h("section", {
      class: "community",
      id: "community",
      "aria-labelledby": "community-heading",
    });
    community.append(h("h2", { class: "block-title", id: "community-heading", text: "讨论与同路人" }));
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
    }, "已看过");

    root.append(filters({ node: readChip }));

    const pool = invalid ? [] : window.AIMING.universes
      .filter((u) => !universe || u.id === universe.id)
      .flatMap((u) => u.materials.map((m) => ({ ...m, universe: u })));
    const visible = pool.filter((m) => !readMode || store.read[m.id]);
    const readCount = pool.filter((m) => store.read[m.id]).length;

    root.append(h("div", { class: "toolbar" }, [
      h("p", { class: "local-note", text: invalid ? "" : "已看过 " + readCount + " / " + pool.length + "。标记只留在这台浏览器。" }),
      readCount ? clearControl("清除看过标记", () => {
        const next = loadRead();
        pool.forEach((m) => { delete next[m.id]; });
        saveRead(next);
        renderLearn();
        setStatus("看过标记已从这台浏览器清除。");
      }) : null,
    ]));

    const status = h("p", { class: "status", id: "status", role: "status" });
    root.append(status);

    if (!visible.length) {
      const empty = invalid
        ? { title: "没有材料", body: "这个地址对不上现有的宇宙。" }
        : readMode
          ? { title: "还没有标成看过", body: "打开一篇，按「标记为看过」。标记只留在这台浏览器。" }
          : { title: "没有材料", body: "这个宇宙还没有短文。" };
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
        text: pressed ? "已看过" : "标记为看过",
      });
      button.addEventListener("click", () => {
        const next = loadRead();
        if (next[material.id]) delete next[material.id];
        else next[material.id] = true;
        saveRead(next);
        const message = next[material.id] ? "已记成看过。" : "已取消看过。";
        const keep = document.activeElement && document.activeElement.id;
        renderLearn();
        setStatus(message);
        if (keep) {
          const again = document.getElementById(keep);
          if (again) again.focus();
        }
      });

      const article = h("article", { class: "material", id: "mat-" + material.id }, [
        h("p", { class: "meta", text: material.universe.name + " · 约 " + material.minutes + " 分钟" }),
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
        button.textContent = "确认清除";
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
    sel.append(h("option", { value: "", text: "选择宇宙" }));
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


  const KIND = { topic: "话题", post: "帖子", opportunity: "机会" };

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
    if (min < 1) return "刚刚";
    if (min < 60) return min + " 分钟前";
    const hr = Math.floor(min / 60);
    if (hr < 24) return hr + " 小时前";
    const day = Math.floor(hr / 24);
    if (day < 7) return day + " 天前";
    return (then.getMonth() + 1) + "月" + then.getDate() + "日";
  }

  function initial(name) {
    const ch = String(name || "我").trim().charAt(0);
    return ch || "我";
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
        author: p.author || "未署名",
        authorId: p.authorId || "",
        title: p.title || "",
        body: p.body,
        created: p.created || "",
        likes: p.likes || 0,
        hidden: Boolean(p.hidden),
        media: p.media || [],
        replies: [],
      });
    });
    store.threads.forEach((item) => {
      list.push({
        id: item.id,
        seed: false,
        kind: "topic",
        universeId: item.universeId,
        author: "我",
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
        author: "我",
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
      name: p.name || "未署名",
      authorId: p.authorId || "",
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
      author: r.author || "未署名",
      authorId: r.authorId || "",
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
    return [person.name, person.can, person.want, universeName(person.universeId), "同路人"].join("\n");
  }

  function avatar(name) {
    return h("span", { class: "avatar", "aria-hidden": "true", text: initial(name) });
  }

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
      return "已记在「" + universeName(universeId) + "」。当前只显示" + filterUniverse.name + "。";
    }
    if (q) return kind + "已写下。如果和搜索对不上，清除搜索就能看见。";
    return kind + "已写下。";
  }

  function sharePost(post, button) {
    const url = new URL(withQuery("discuss.html", { post: post.id }), location.href).href;
    const title = post.title || "Aiming";
    const done = () => {
      button.textContent = "已复制";
      setStatus("链接已复制。");
      setTimeout(() => { button.textContent = "转发"; }, 1600);
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
      navigator.clipboard.writeText(url).then(finish).catch(() => setStatus("链接：" + url));
      return;
    }
    setStatus("链接：" + url);
  }

  function owns(item) {
    return Boolean(remote.user && item.authorId && item.authorId === remote.user.id);
  }

  function deleteControl(kind, id) {
    const button = h("button", { type: "button", class: "text-btn", text: "删除" });
    button.addEventListener("click", () => {
      if (button.dataset.arm !== "1") {
        button.dataset.arm = "1";
        button.textContent = "确认删除";
        return;
      }
      button.disabled = true;
      api("/api/remove", { method: "POST", body: { kind, id } }).then(() => {
        const next = new URL(location.href);
        next.searchParams.delete("post");
        next.searchParams.delete("person");
        history.replaceState(null, "", next);
        setStatus("已删除。");
        document.dispatchEvent(new CustomEvent("aiming-reload"));
      }).catch((err) => {
        button.disabled = false;
        setStatus(err.message || "没有删除");
      });
    });
    return h("div", { class: "note-actions" }, button);
  }

  function actionRow(post, store, inThread) {
    const replies = allReplies(post, store);
    const row = h("div", { class: "post-actions" });
    const replyText = replies.length ? "回复 " + replies.length : "回复";
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
    const share = h("button", { type: "button", class: "action", text: "转发" });
    share.addEventListener("click", () => sharePost(post, share));
    row.append(share);
    const liked = Boolean(store.likes[post.id]);
    const count = post.likes || 0;
    const like = h("button", {
      type: "button",
      class: "action",
      "aria-pressed": liked ? "true" : "false",
      text: count ? "赞 " + count : "赞",
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
        setStatus(err.message || "没有记下");
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
        class: kindText === "机会" ? "kind kind--opportunity" : "kind",
        text: kindText,
      }));
    }
    const time = formatTime(item.created);
    if (time) line.append(h("time", { datetime: item.created || "", text: time }));
    if (item.seed) line.append(h("span", { class: "badge", text: "示例" }));
    if (item.hidden) line.append(h("span", { class: "badge badge--hidden", text: window.t ? t("home.hidden") : "已隐藏" }));
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
    const button = h("button", { type: "button", class: "text-btn", text: post.hidden ? (window.t ? t("home.show") : "重新公开") : (window.t ? t("home.hide") : "对别人隐藏") });
    button.addEventListener("click", () => {
      button.disabled = true;
      api("/api/hide", { method: "POST", body: { postId: post.id } }).then(() => {
        document.dispatchEvent(new CustomEvent("aiming-reload"));
      }).catch((err) => {
        button.disabled = false;
        setStatus(err.message || "没有完成");
      });
    });
    return h("div", { class: "note-actions" }, button);
  }

  function feedCard(post, store) {
    const card = h("article", { class: "post", id: "item-" + post.id });
    const head = h("div", { class: "post-head" }, [avatar(post.author), h("div", { class: "post-id" })]);
    const idcol = head.lastChild;
    const person = personForAuthor(store, post);
    const name = post.authorId
      ? h("a", { href: "index.html?id=" + encodeURIComponent(post.authorId) }, post.author || "未署名")
      : person
        ? h("a", { href: stateHref({ person: person.id }) }, post.author)
        : h("span", { text: post.author || "未署名" });
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
    idcol.append(h("p", { class: "post-name", text: reply.author || "未署名" }));
    const meta = h("p", { class: "post-meta" });
    const time = formatTime(reply.created);
    if (time) meta.append(h("time", { datetime: reply.created || "", text: time }));
    idcol.append(meta);
    card.append(h("div", { class: "post-head" }, [avatar(reply.author), idcol]));
    card.append(h("p", { class: "post-body", text: reply.body }));
    return card;
  }

  function personRow(person) {
    const copy = h("span", { class: "person-copy" });
    const top = h("span", { class: "person-top" });
    top.append(h("span", { class: "post-name", text: person.name || "未署名" }));
    if (person.seed) top.append(h("span", { class: "badge", text: "示例" }));
    copy.append(top);
    const sub = h("span", { class: "person-sub" });
    const uname = universeName(person.universeId);
    if (uname) sub.append(h("span", { class: "tag", text: uname }));
    sub.append(h("span", { class: "person-line", text: person.can }));
    copy.append(sub);
    return h("a", { class: "person-row", id: "item-" + person.id, href: stateHref({ person: person.id }) }, [
      avatar(person.name),
      copy,
      h("span", { class: "go" }, ["打开 ", h("span", { class: "go-arrow", "aria-hidden": "true" }, "→")]),
    ]);
  }

  function foundLine(people, posts, peopleFirst) {
    const personBit = people.length ? people.length + " 位同路人" : "";
    const postBit = posts.length ? posts.length + " 条讨论" : "";
    const bits = (peopleFirst ? [personBit, postBit] : [postBit, personBit]).filter(Boolean);
    return bits.length ? "找到 " + bits.join("，") : "";
  }

  function mountCommunity(root, options) {
    const lens = options.lens || "feed";
    const embedded = document.body.dataset.page === "universe";
    const { invalid, id, universe } = currentUniverse();

    root.replaceChildren();
    if (invalid) root.append(missingBanner(id));

    const placeholder = universe
      ? "在" + universe.name + "里搜索"
      : (lens === "people" ? "搜索同路人、话题、帖子、机会" : "搜索话题、帖子、机会、同路人");
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
      text: "清除",
      "aria-label": "清除搜索",
    });
    const form = h("form", { class: "search-form", role: "search" }, [
      input,
      clearBtn,
      h("button", { class: "btn btn-primary search-go", type: "submit", text: "搜索" }),
    ]);
    const searchBlock = h("div", { class: "search-block" }, [
      form,
      h("p", { class: "local-note", text: "标成示例的不是真实的人。登录之后写下的内容会留下来。" }),
    ]);
    const scope = h("nav", { class: "scope", "aria-label": "范围" });
    const tools = h("div", { class: "community-tools" });
    const mineLink = h("a", { class: "text-btn", href: pageFile() }, "只看我写的");
    const postBtn = lens === "people" ? null : h("button", { type: "button", class: "text-btn", text: "写下一条" });
    const peopleBtn = lens === "feed" ? null : h("button", { type: "button", class: "text-btn", text: "留下纸条" });
    if (postBtn) tools.append(postBtn);
    if (peopleBtn) tools.append(peopleBtn);
    tools.append(mineLink);

    [{ id: "", name: "全部" }].concat(window.AIMING.universes.map((u) => ({ id: u.id, name: u.name }))).forEach((item) => {
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
        mineLink.textContent = "只看我写的";
        mineLink.setAttribute("href", loginHref());
      } else {
        mineLink.textContent = onMine ? "看全部" : "只看我写的";
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
      const base = lens === "people" ? "同路人" : "讨论";
      let name = base;
      if (person) name = (person.name || "同路人") + " · " + base;
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
        results.append(person ? personDetail(person) : missingDetail("没有这位同路人", "这条纸条不在了。"));
        syncTitle(null, person || null);
        return;
      }
      if (postId) {
        resultLine.textContent = "";
        const post = allPosts(store).find((p) => p.id === postId);
        results.append(post ? threadView(post, store) : missingDetail("没有这条讨论", "这条内容不在了。"));
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
      resultLine.textContent = q ? foundLine(people, posts, peopleFirst) : (mine ? "只显示你写下的" : "");
      const showPeopleHead = people.length && (posts.length || lens === "both");
      const showPostHead = posts.length && (people.length || lens === "both" || (lens === "people" && q));
      const order = peopleFirst ? ["people", "posts"] : ["posts", "people"];
      order.forEach((kind) => {
        if (kind === "people" && people.length) {
          const group = h("div", { class: "feed-group", id: "community-people" });
          if (showPeopleHead) group.append(h(headingTag(), { class: "feed-heading", text: "同路人" }));
          const list = h("div", { class: "people-list" });
          people.forEach((person) => list.append(personRow(person)));
          group.append(list);
          results.append(group);
        }
        if (kind === "posts" && posts.length) {
          const group = h("div", { class: "feed-group" });
          if (showPostHead) group.append(h(headingTag(), { class: "feed-heading", text: "讨论" }));
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
      box.append(h("p", {}, h("a", { class: "back", href: stateHref() }, "← 返回")));
      return box;
    }

    function emptyState(q, mine, bad, scoped) {
      let title = "还没有内容";
      let body = "可以先写一条。";
      if (bad) {
        title = "没有内容";
        body = "这个地址对不上现有的宇宙。可以改选上面的范围。";
      } else if (q) {
        title = "没有找到";
        body = "没有和「" + q + "」有关的话题、帖子、机会或同路人。";
      } else if (mine) {
        title = "你还没有写";
        body = "登录后写下的内容会留在这里。";
      } else if (scoped) {
        title = "还没有内容";
        body = scoped.name + "里还没有讨论或同路人。";
      }
      const box = emptyBox(title, body);
      if (q) {
        const clear = h("button", { type: "button", class: "text-btn", text: "清除搜索" });
        clear.addEventListener("click", () => {
          input.value = "";
          syncUrl();
          input.focus();
        });
        box.append(clear);
        if (scoped) {
          box.append(h("p", {}, h("a", { href: withQuery("discuss.html", { q }) }, "在全站里搜「" + q + "」")));
        }
      }
      return box;
    }

    function personDetail(person) {
      const card = h("article", { class: "post person-detail", id: "item-" + person.id });
      card.append(h("a", { class: "back", href: stateHref() }, "← 返回"));
      const idcol = h("div", { class: "post-id" });
      idcol.append(h(headingTag(), { class: "who", text: person.name || "未署名" }));
      idcol.append(postMeta(person, ""));
      card.append(h("div", { class: "post-head" }, [avatar(person.name), idcol]));
      card.append(h("h3", { class: "detail-label", text: "能做的" }));
      card.append(h("p", { class: "post-body", text: person.can }));
      card.append(h("h3", { class: "detail-label", text: "想一起做的" }));
      card.append(h("p", { class: "post-body", text: person.want }));
      if (person.seed) card.append(h("p", { class: "local-note", text: "这是示例纸条，不是真实的人。" }));
      else if (owns(person)) card.append(deleteControl("people", person.id));
      const uname = universeName(person.universeId);
      if (uname) {
        card.append(h("p", {}, h("a", { href: "universe.html?id=" + person.universeId + "#community" }, "去" + uname + "里看看")));
      }
      return card;
    }

    function threadView(post, store) {
      const wrap = h("div", {});
      wrap.append(h("a", { class: "back", href: stateHref() }, "← 返回"));
      const card = h("article", { class: "post", id: "item-" + post.id });
      const person = personForAuthor(store, post);
      const name = person
        ? h("a", { href: stateHref({ person: person.id }) }, post.author || "未署名")
        : h("span", { text: post.author || "未署名" });
      const idcol = h("div", { class: "post-id" }, [
        h("p", { class: "post-name" }, name),
        postMeta(post, post.kind === "post" ? "" : (KIND[post.kind] || "")),
      ]);
      card.append(h("div", { class: "post-head" }, [avatar(post.author), idcol]));
      if (post.title) card.append(h(headingTag(), { class: "who", text: post.title }));
      card.append(h("p", { class: "post-body", text: post.body }));
      if (post.seed) card.append(h("p", { class: "local-note", text: "这是示例讨论，不是真实的人。" }));
      card.append(actionRow(post, store, true));
      if (owns(post)) card.append(deleteControl("posts", post.id));
      wrap.append(card);

      const replies = allReplies(post, store);
      wrap.append(h(headingTag(), {
        class: "feed-heading",
        text: replies.length ? "回复 " + replies.length : "回复",
      }));
      const list = h("div", { class: "replies" });
      if (!replies.length) list.append(h("p", { class: "local-note", text: "还没有回复。" }));
      else replies.forEach((reply) => list.append(replyCard(reply)));
      wrap.append(list);
      wrap.append(replyForm(post));
      return wrap;
    }

    function replyForm(post) {
      if (!remote.user) {
        return h("p", { class: "local-note" }, [
          "登录后可以回复。",
          " ",
          h("a", { href: loginHref() }, "登录"),
        ]);
      }
      const body = h("textarea", {
        class: "field",
        id: "reply-body",
        name: "reply",
        maxlength: "400",
        placeholder: "写下回复。",
      });
      const field = labeled("回复", body);
      const submit = h("button", { class: "btn btn-primary", type: "submit", text: "回复" });
      const panel = h("form", { class: "form-card reply-form", id: "reply", novalidate: true }, [
        field.wrap,
        h("div", { class: "form-actions" }, submit),
      ]);
      panel.addEventListener("submit", (event) => {
        event.preventDefault();
        const text = clip(body.value, 400);
        if (!text) {
          showError(body, field.err, "请写回复");
          body.focus();
          return;
        }
        showError(body, field.err, "");
        submit.disabled = true;
        api("/api/replies", { method: "POST", body: { postId: post.id, body: text } }).then(() => {
          setStatus("回复已写下。");
          return reloadFeed();
        }).then(() => {
          const box = document.getElementById("reply-body");
          if (box) box.focus();
        }).catch((err) => {
          submit.disabled = false;
          setStatus(err.message || "没有写下");
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
        if (!res.ok) throw new Error(data.error || "没有完成");
        applyFeed(data);
        paintScope();
        paintResults();
        paintLocalTools();
      }).catch((err) => {
        setStatus(err.message === "数据库还没有接上" ? "数据库还没有接上。示例还在。" : "现在读不到新写下的内容。示例还在。");
      });
    }

    function buildPostForm() {
      const select = universeSelect(universe && universe.id);
      const kind = h("select", { class: "field", name: "kind" });
      [["post", "帖子"], ["topic", "话题"], ["opportunity", "机会"]].forEach(([value, text]) => {
        kind.append(h("option", { value, text }));
      });
      const title = h("input", { class: "field", name: "title", maxlength: "40", placeholder: "一句话", autocomplete: "off" });
      const body = h("textarea", { class: "field", name: "body", maxlength: "600", placeholder: "写短一点。一个问题，一句近况，或一件想一起做的事。" });
      const file = h("input", { class: "field", type: "file", accept: "image/jpeg,image/png,image/webp,image/gif,video/mp4,video/webm" });
      const s = labeled("宇宙", select);
      const k = labeled("这一条是", kind);
      const t = labeled("标题", title);
      const b = labeled("内容", body);
      const f = labeled(window.t ? window.t("discuss.attach") : "图片或视频", file);
      f.wrap.classList.add("field-label--full");
      t.wrap.classList.add("field-label--full");
      b.wrap.classList.add("field-label--full");
      const oppNote = h("p", {
        class: "local-note",
        hidden: true,
        text: "机会是一件想一起做的小事，不是招聘，也不是岗位。",
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
        h("div", { class: "form-actions" }, h("button", { class: "btn btn-primary", type: "submit", text: "写下" })),
      ]);
      syncKind();
      panel.addEventListener("submit", (event) => {
        event.preventDefault();
        const kindValue = kind.value;
        const titleText = clip(title.value, 40);
        const bodyText = clip(body.value, 600);
        const universeId = select.value;
        let ok = true;
        if (!universeId) { showError(select, s.err, "请选择宇宙"); ok = false; } else showError(select, s.err, "");
        if (kindValue !== "post" && !titleText) { showError(title, t.err, "请写一个标题"); ok = false; } else showError(title, t.err, "");
        if (!bodyText) { showError(body, b.err, "请写内容"); ok = false; } else showError(body, b.err, "");
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
          setStatus(noticeAfterSave(kindValue === "opportunity" ? "机会" : "讨论", universeId, state.universe));
          return reloadFeed().then(() => data.id);
        }).then((id) => {
          const node = document.getElementById("item-" + id);
          if (node) node.scrollIntoView({ block: "nearest" });
        }).catch((err) => {
          setStatus(err.message || "没有写下");
        }).finally(() => {
          if (submit) submit.disabled = false;
        });
      });
      return panel;
    }

    function buildPeopleForm() {
      const can = h("textarea", { class: "field", maxlength: "200", placeholder: "例如：能指出第一句里缺的信息" });
      const want = h("textarea", { class: "field", maxlength: "200", placeholder: "例如：想一起把一家小店写成三句" });
      const select = universeSelect(universe && universe.id);
      const s = labeled("宇宙", select);
      const c = labeled("能做的", can);
      const w = labeled("想一起做的", want);
      c.wrap.classList.add("field-label--full");
      w.wrap.classList.add("field-label--full");
      const panel = h("form", { class: "form-card", novalidate: true }, [
        h("p", { class: "local-note", text: "纸条上的称呼用你的账号称呼。" }),
        h("div", { class: "form-grid" }, [s.wrap, c.wrap, w.wrap]),
        h("div", { class: "form-actions" }, h("button", { class: "btn btn-primary", type: "submit", text: "留下纸条" })),
      ]);
      panel.addEventListener("submit", (event) => {
        event.preventDefault();
        const canText = clip(can.value, 200);
        const wantText = clip(want.value, 200);
        const universeId = select.value;
        let ok = true;
        if (!universeId) { showError(select, s.err, "请选择宇宙"); ok = false; } else showError(select, s.err, "");
        if (!canText) { showError(can, c.err, "请写你能做的"); ok = false; } else showError(can, c.err, "");
        if (!wantText) { showError(want, w.err, "请写想一起做的事"); ok = false; } else showError(want, w.err, "");
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
          setStatus(noticeAfterSave("纸条", universeId, state.universe));
          return reloadFeed().then(() => data.id);
        }).then((id) => {
          const node = document.getElementById("item-" + id);
          if (node) node.scrollIntoView({ block: "nearest" });
        }).catch((err) => {
          setStatus(err.message || "没有写下");
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

    window.addEventListener("popstate", () => {
      input.value = query().get("q") || "";
      toggleClear();
      paintScope();
      paintResults();
    });

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

  const page = document.body.dataset.page;
  initNav();
  if (page === "universe") renderUniverse();
  if (page === "learn") renderLearn();
  if (page === "discuss") {
    const discussRoot = document.getElementById("discuss-root");
    if (discussRoot) mountCommunity(discussRoot, { lens: "feed" });
  }
})();
