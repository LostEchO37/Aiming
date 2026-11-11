/* Shared behavior: nav, one universe template, local notes. */
(function () {
  const STORAGE_KEY = "aiming.notes.v1";

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

  function loadStore() {
    const empty = { threads: [], opportunities: [], people: [], read: {} };
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return empty;
      const data = JSON.parse(raw);
      if (!data || typeof data !== "object") return empty;
      return {
        threads: Array.isArray(data.threads) ? data.threads.filter(validNote) : [],
        opportunities: Array.isArray(data.opportunities) ? data.opportunities.filter(validNote) : [],
        people: Array.isArray(data.people) ? data.people.filter(validPerson) : [],
        read: data.read && typeof data.read === "object" ? data.read : {},
      };
    } catch (err) {
      return empty;
    }
  }

  function knownId(id) {
    return Boolean(window.AIMING.byId[id]);
  }

  function validNote(item) {
    return item && knownId(item.universeId) && typeof item.title === "string" && typeof item.body === "string" && typeof item.id === "string";
  }

  function validPerson(item) {
    return item && knownId(item.universeId) && typeof item.can === "string" && typeof item.want === "string" && typeof item.id === "string";
  }

  function saveStore(store) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  }

  function uid(prefix) {
    if (window.crypto && crypto.randomUUID) return prefix + crypto.randomUUID();
    return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
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
      ["01", "学习", universe.rooms.learn, "learn.html?id=" + universe.id],
      ["02", "讨论与机会", universe.rooms.discuss, "discuss.html?id=" + universe.id],
      ["03", "找同路人", universe.rooms.people, "people.html?id=" + universe.id],
    ].forEach(([index, title, copy, href]) => {
      grid.append(h("a", { class: "room", href }, [
        h("span", { class: "idx", text: index }),
        h("h3", { text: title }),
        h("p", { text: copy }),
        h("span", { class: "go" }, ["进去 ", h("span", { class: "go-arrow", "aria-hidden": "true" }, "→")]),
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
    root.append(stack);
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
        const next = loadStore();
        pool.forEach((m) => { delete next.read[m.id]; });
        saveStore(next);
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
        const next = loadStore();
        if (next.read[material.id]) delete next.read[material.id];
        else next.read[material.id] = true;
        saveStore(next);
        const message = next.read[material.id] ? "已记成看过。" : "已取消看过。";
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

  function combine(localItems, seedItems, universe, mine) {
    const match = (item) => !universe || item.universeId === universe.id;
    const local = localItems.filter(match).slice().sort((a, b) => String(b.created || "").localeCompare(String(a.created || "")));
    const seeds = mine ? [] : seedItems.filter(match);
    return local.concat(seeds);
  }

  function emptyBox(title, body) {
    return h("div", { class: "empty" }, [
      h("strong", { text: title }),
      h("p", { text: body }),
    ]);
  }

  function badge(seed) {
    return h("span", { class: seed ? "badge" : "badge badge--local", text: seed ? "示例" : "本机" });
  }

  function savedWhere(kind, universeId, filterUniverse) {
    if (filterUniverse && filterUniverse.id !== universeId) {
      return "已记在「" + universeName(universeId) + "」。当前列表只显示" + filterUniverse.name + "，可以改上面的筛选。";
    }
    return kind + "已记在这台浏览器里。";
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

  function renderDiscuss() {
    const root = document.getElementById("discuss-root");
    if (!root) return;
    const { universe, invalid, id } = currentUniverse();
    const mine = query().get("mine") === "1";
    root.replaceChildren();
    if (invalid) root.append(missingBanner(id));
    root.append(filters());
    root.append(h("div", { class: "toolbar" }, [
      h("p", { class: "local-note", text: "你写下的内容只记在这台浏览器里。示例是写好的样子，不是真实的人。" }),
      h("a", { class: "text-btn", href: hrefWith({ mine: mine ? null : "1" }) }, mine ? "也看示例" : "只看我写的"),
    ]));
    root.append(h("p", { class: "status", id: "status", role: "status" }));

    root.append(h("h2", { class: "block-title", text: "讨论" }));
    root.append(threadForm(universe));
    root.append(h("div", { id: "thread-list" }));

    const oppHead = h("div", { style: "margin-top:1.6rem" });
    oppHead.append(h("h2", { class: "block-title", text: "机会" }));
    oppHead.append(h("p", { class: "page-intro", text: "机会是一件想找人一起做的小事，不是招聘，也不是岗位。" }));
    root.append(oppHead);
    root.append(opportunityForm(universe));
    root.append(h("div", { id: "opp-list" }));

    paintDiscussLists();
  }

  function paintDiscussLists() {
    const { universe, invalid } = currentUniverse();
    const mine = query().get("mine") === "1";
    const store = loadStore();
    const threads = invalid ? [] : combine(store.threads, window.AIMING.seeds.threads, universe, mine);
    const opps = invalid ? [] : combine(store.opportunities, window.AIMING.seeds.opportunities, universe, mine);
    fillList(document.getElementById("thread-list"), threads, "threads", universe, mine, invalid);
    fillList(document.getElementById("opp-list"), opps, "opportunities", universe, mine, invalid);

    const hasLocal = store.threads.length + store.opportunities.length > 0;
    let clearer = document.getElementById("discuss-clear");
    if (clearer) clearer.remove();
    if (hasLocal) {
      const holder = h("div", { id: "discuss-clear" });
      holder.append(clearControl("清除我在讨论里写下的", () => {
        const next = loadStore();
        next.threads = [];
        next.opportunities = [];
        saveStore(next);
        renderDiscuss();
        setStatus("讨论和机会已从这台浏览器清除。");
      }));
      document.getElementById("discuss-root").append(holder);
    }
  }

  function fillList(node, items, kind, universe, mine, invalid) {
    if (!node) return;
    node.replaceChildren();
    if (!items.length) {
      node.append(emptyBox(
        emptyCopy(kind, universe, mine, invalid).title,
        emptyCopy(kind, universe, mine, invalid).body
      ));
      return;
    }
    items.forEach((item) => node.append(noteCard(item, kind)));
  }

  function emptyCopy(kind, universe, mine, invalid) {
    if (invalid) return { title: "没有内容", body: "筛选对不上现有的宇宙。可以改选「全部」。" };
    const place = universe ? universe.name + "宇宙" : "这里";
    if (mine) {
      if (kind === "threads") return { title: "你还没有写讨论", body: "上面的表单会记在这台浏览器里。换一台设备就没有了。" };
      if (kind === "opportunities") return { title: "你还没有写机会", body: "写一件想找人一起做的小事。它只留在这台浏览器。" };
      return { title: "你还没有留纸条", body: "上面的表单会记在这台浏览器里。" };
    }
    if (kind === "threads") return { title: "还没有讨论", body: place + "还没有话题。你可以从上面写一条。" };
    if (kind === "opportunities") return { title: "还没有机会", body: place + "还没有人写下想一起做的事。" };
    return { title: "还没有同路人纸条", body: place + "还没有纸条。你可以先留一张。" };
  }

  function noteCard(item, kind) {
    const card = h("article", { class: "note" }, [
      badge(Boolean(item.seed)),
      h("p", { class: "meta", text: universeName(item.universeId) }),
    ]);
    if (kind === "people") {
      card.append(h("h3", { text: item.name || "未署名" }));
      card.append(h("p", { text: "能做的：" + item.can }));
      card.append(h("p", { text: "想一起做：" + item.want }));
    } else {
      card.append(h("h3", { text: item.title }));
      card.append(h("p", { text: item.body }));
    }
    if (!item.seed) {
      const button = h("button", { type: "button", class: "text-btn", text: "删除" });
      button.addEventListener("click", () => {
        if (button.dataset.arm !== "1") {
          button.dataset.arm = "1";
          button.textContent = "确认删除";
          return;
        }
        const store = loadStore();
        store[kind] = store[kind].filter((row) => row.id !== item.id);
        saveStore(store);
        setStatus("已从这台浏览器删除。");
        if (kind === "people") paintPeople();
        else paintDiscussLists();
      });
      card.append(h("div", { class: "note-actions" }, button));
    }
    return card;
  }

  function threadForm(universe) {
    const title = h("input", { class: "field", name: "title", maxlength: "40", placeholder: "一句话写清问题", autocomplete: "off" });
    const body = h("textarea", { class: "field", name: "body", maxlength: "600", placeholder: "你卡在哪一句，或哪一处" });
    const select = universeSelect(universe && universe.id);
    const t = labeled("标题", title);
    const b = labeled("内容", body);
    const s = labeled("宇宙", select);
    b.wrap.classList.add("field-label--full");
    const form = h("form", { class: "form-card", novalidate: true });
    const grid = h("div", { class: "form-grid" }, [s.wrap, t.wrap, b.wrap]);
    form.append(grid);
    form.append(h("div", { class: "form-actions" }, h("button", { class: "btn btn-primary", type: "submit", text: "写下讨论" })));
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const titleText = clip(title.value, 40);
      const bodyText = clip(body.value, 600);
      const universeId = select.value;
      let ok = true;
      if (!universeId) { showError(select, s.err, "请选择宇宙"); ok = false; } else showError(select, s.err, "");
      if (!titleText) { showError(title, t.err, "请写一个标题"); ok = false; } else showError(title, t.err, "");
      if (!bodyText) { showError(body, b.err, "请写内容"); ok = false; } else showError(body, b.err, "");
      if (!ok) { focusInvalid([select, title, body]); return; }
      const store = loadStore();
      store.threads.unshift({ id: uid("t-"), universeId, title: titleText, body: bodyText, created: new Date().toISOString() });
      store.threads = store.threads.slice(0, 50);
      saveStore(store);
      form.reset();
      if (universe) select.value = universe.id;
      setStatus(savedWhere("讨论", universeId, universe));
      paintDiscussLists();
    });
    return form;
  }

  function opportunityForm(universe) {
    const title = h("input", { class: "field", name: "title", maxlength: "40", placeholder: "一件想一起做的小事", autocomplete: "off" });
    const body = h("textarea", { class: "field", name: "body", maxlength: "600", placeholder: "你希望对方做哪一点" });
    const select = universeSelect(universe && universe.id);
    const t = labeled("标题", title);
    const b = labeled("需要怎样的帮助", body);
    const s = labeled("宇宙", select);
    b.wrap.classList.add("field-label--full");
    const form = h("form", { class: "form-card", novalidate: true });
    form.append(h("div", { class: "form-grid" }, [s.wrap, t.wrap, b.wrap]));
    form.append(h("div", { class: "form-actions" }, h("button", { class: "btn btn-primary", type: "submit", text: "写下机会" })));
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const titleText = clip(title.value, 40);
      const bodyText = clip(body.value, 600);
      const universeId = select.value;
      let ok = true;
      if (!universeId) { showError(select, s.err, "请选择宇宙"); ok = false; } else showError(select, s.err, "");
      if (!titleText) { showError(title, t.err, "请写一个标题"); ok = false; } else showError(title, t.err, "");
      if (!bodyText) { showError(body, b.err, "请写你需要的帮助"); ok = false; } else showError(body, b.err, "");
      if (!ok) { focusInvalid([select, title, body]); return; }
      const store = loadStore();
      store.opportunities.unshift({ id: uid("o-"), universeId, title: titleText, body: bodyText, created: new Date().toISOString() });
      store.opportunities = store.opportunities.slice(0, 50);
      saveStore(store);
      form.reset();
      if (universe) select.value = universe.id;
      setStatus(savedWhere("机会", universeId, universe));
      paintDiscussLists();
    });
    return form;
  }

  function renderPeople() {
    const root = document.getElementById("people-root");
    if (!root) return;
    const { universe, invalid, id } = currentUniverse();
    const mine = query().get("mine") === "1";
    root.replaceChildren();
    if (invalid) root.append(missingBanner(id));
    root.append(filters());
    root.append(h("div", { class: "toolbar" }, [
      h("p", { class: "local-note", text: "纸条只记在这台浏览器里，不会同步到别人的屏幕。示例纸条不是真实用户。" }),
      h("a", { class: "text-btn", href: hrefWith({ mine: mine ? null : "1" }) }, mine ? "也看示例" : "只看我写的"),
    ]));
    root.append(h("p", { class: "status", id: "status", role: "status" }));
    root.append(peopleForm(universe));
    root.append(h("h2", { class: "block-title", text: "纸条", style: "margin-bottom:0.7rem" }));
    root.append(h("div", { id: "people-list" }));
    paintPeople();
  }

  function paintPeople() {
    const { universe, invalid } = currentUniverse();
    const mine = query().get("mine") === "1";
    const store = loadStore();
    const items = invalid ? [] : combine(store.people, window.AIMING.seeds.people, universe, mine);
    fillList(document.getElementById("people-list"), items, "people", universe, mine, invalid);
    let clearer = document.getElementById("people-clear");
    if (clearer) clearer.remove();
    if (store.people.length) {
      const holder = h("div", { id: "people-clear" });
      holder.append(clearControl("清除我的同路人纸条", () => {
        const next = loadStore();
        next.people = [];
        saveStore(next);
        renderPeople();
        setStatus("同路人纸条已从这台浏览器清除。");
      }));
      document.getElementById("people-root").append(holder);
    }
  }

  function peopleForm(universe) {
    const name = h("input", { class: "field", maxlength: "20", placeholder: "可以不写真名", autocomplete: "nickname" });
    const can = h("textarea", { class: "field", maxlength: "200", placeholder: "例如：能指出第一句里缺的信息" });
    const want = h("textarea", { class: "field", maxlength: "200", placeholder: "例如：想一起把一家小店写成三句" });
    const select = universeSelect(universe && universe.id);
    const n = labeled("怎么称呼", name);
    const s = labeled("宇宙", select);
    const c = labeled("能做的", can);
    const w = labeled("想一起做的", want);
    c.wrap.classList.add("field-label--full");
    w.wrap.classList.add("field-label--full");
    const form = h("form", { class: "form-card", novalidate: true });
    form.append(h("div", { class: "form-grid" }, [n.wrap, s.wrap, c.wrap, w.wrap]));
    form.append(h("div", { class: "form-actions" }, h("button", { class: "btn btn-primary", type: "submit", text: "留下纸条" })));
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const canText = clip(can.value, 200);
      const wantText = clip(want.value, 200);
      const universeId = select.value;
      let ok = true;
      if (!universeId) { showError(select, s.err, "请选择宇宙"); ok = false; } else showError(select, s.err, "");
      if (!canText) { showError(can, c.err, "请写你能做的"); ok = false; } else showError(can, c.err, "");
      if (!wantText) { showError(want, w.err, "请写想一起做的事"); ok = false; } else showError(want, w.err, "");
      if (!ok) { focusInvalid([select, can, want]); return; }
      const store = loadStore();
      store.people.unshift({
        id: uid("p-"),
        universeId,
        name: clip(name.value, 20) || "未署名",
        can: canText,
        want: wantText,
        created: new Date().toISOString(),
      });
      store.people = store.people.slice(0, 50);
      saveStore(store);
      form.reset();
      if (universe) select.value = universe.id;
      setStatus(savedWhere("纸条", universeId, universe));
      paintPeople();
    });
    return form;
  }

  const page = document.body.dataset.page;
  initNav();
  if (page === "universe") renderUniverse();
  if (page === "learn") renderLearn();
  if (page === "discuss") renderDiscuss();
  if (page === "people") renderPeople();
})();
