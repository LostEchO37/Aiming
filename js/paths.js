/* One self-paced series per universe, plus courses people submit for review. */
(function () {
  if (document.body.dataset.page !== "learn") return;
  const root = document.getElementById("path-root");
  if (!root) return;
  const KEY = "aiming.path.v1";

  const CHECKS = {
    yingxiao: {
      q: { zh: "三句话的顺序是哪一个？", zhHant: "三句話的順序是哪一個？", en: "Which order are the three sentences?" },
      options: [
        { zh: "它是什么，谁会用，一个差别", zhHant: "它是什麼，誰會用，一個差別", en: "What it is, who uses it, one difference" },
        { zh: "最好，所有人，很多优点", zhHant: "最好，所有人，很多優點", en: "Best, everyone, many advantages" },
        { zh: "先问好不好，再改三句", zhHant: "先問好不好，再改三句", en: "Ask if it is good, then change all three" },
      ],
      answer: 0,
    },
    renshi: {
      q: { zh: "四行纸条里不该留下哪一个词？", zhHant: "四行紙條裡不該留下哪一個詞？", en: "Which word does not belong on the four-line note?" },
      options: [
        { zh: "周四下午三点", zhHant: "週四下午三點", en: "Thursday at three" },
        { zh: "尽快", zhHant: "盡快", en: "As soon as possible" },
        { zh: "谁来做", zhHant: "誰來做", en: "Who does it" },
      ],
      answer: 1,
    },
    kaifa: {
      q: { zh: "怎样才算用手机看过这一页？", zhHant: "怎樣才算用手機看過這一頁？", en: "What counts as looking at the page on a phone?" },
      options: [
        { zh: "把桌面窗口缩窄", zhHant: "把桌面窗口縮窄", en: "Narrow the desktop window" },
        { zh: "用自己的手机打开公开地址", zhHant: "用自己的手機打開公開地址", en: "Open the public address on your phone" },
        { zh: "先装一个框架", zhHant: "先裝一個框架", en: "Install a framework first" },
      ],
      answer: 1,
    },
    meishu: {
      q: { zh: "请人评图时只收哪三个词？", zhHant: "請人評圖時只收哪三個詞？", en: "Which three words do you ask for?" },
      options: [
        { zh: "层次、可读、一个想法", zhHant: "層次、可讀、一個想法", en: "Hierarchy, readable, one idea" },
        { zh: "好看、大气、换字体", zhHant: "好看、大氣、換字體", en: "Nice, grander, another typeface" },
        { zh: "颜色、滤镜、心情", zhHant: "顏色、濾鏡、心情", en: "Color, filter, mood" },
      ],
      answer: 0,
    },
    anquan: {
      q: { zh: "验证码该怎么处理？", zhHant: "驗證碼該怎麼處理？", en: "What do you do with a verification code?" },
      options: [
        { zh: "念给来说出你名字的人", zhHant: "念給來說出你名字的人", en: "Read it to someone who says your name" },
        { zh: "只填进你自己打开的页面", zhHant: "只填進你自己打開的頁面", en: "Type it only on a page you opened" },
        { zh: "贴到讨论里给大家看", zhHant: "貼到討論裡給大家看", en: "Paste it into Discuss" },
      ],
      answer: 1,
    },
  };

  function lang() {
    const value = document.documentElement.getAttribute("data-lang") || "zh";
    return value === "en" || value === "zhHant" ? value : "zh";
  }

  function line(pack) {
    return pack[lang()] || pack.zh;
  }

  function tr(key) {
    return window.t ? window.t(key) : key;
  }

  function trf(key, vars) {
    return tr(key).replace(/\{(\w+)\}/g, (_, name) => (vars && vars[name] != null ? String(vars[name]) : ""));
  }

  function h(tag, attrs, children) {
    const node = document.createElement(tag);
    Object.entries(attrs || {}).forEach(([key, value]) => {
      if (value == null || value === false) return;
      if (key === "class") node.className = value;
      else if (key === "text") node.textContent = value;
      else node.setAttribute(key, value === true ? "" : String(value));
    });
    [].concat(children || []).forEach((child) => {
      if (child == null || child === false) return;
      node.append(child.nodeType ? child : document.createTextNode(String(child)));
    });
    return node;
  }

  function localDone() {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (error) { return {}; }
  }

  function saveLocal(done) {
    localStorage.setItem(KEY, JSON.stringify(done));
  }

  function stepsFor(universe) {
    const materials = universe.materials || [];
    const steps = [];
    materials.forEach((material, index) => {
      steps.push({ key: universe.id + ":read:" + material.id, kind: "read", title: material.title, body: (material.paragraphs || []).join("\n\n") });
      if (index > 2) return;
    });
    if (universe.practice) {
      steps.push({
        key: universe.id + ":try",
        kind: "try",
        title: universe.practice.title,
        body: universe.practice.body,
      });
    }
    const check = CHECKS[universe.id];
    if (check) {
      steps.push({ key: universe.id + ":check", kind: "check", title: line(check.q), check });
    }
    return steps.slice(0, 4);
  }

  let remoteDone = {};
  let viewer = null;

  async function loadRemote() {
    const session = await fetch("/api/session", { credentials: "same-origin" }).then((res) => res.json()).catch(() => ({}));
    viewer = session.user || null;
    if (!viewer) return;
    const progress = await fetch("/api/path-progress", { credentials: "same-origin" }).then((res) => res.json()).catch(() => ({}));
    (progress.steps || []).forEach((key) => { remoteDone[key] = true; });
    const local = localDone();
    Object.keys(local).forEach((key) => {
      if (!remoteDone[key]) {
        fetch("/api/path-progress", {
          method: "POST",
          credentials: "same-origin",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ stepKey: key }),
        }).catch(() => {});
        remoteDone[key] = true;
      }
    });
  }

  function isDone(key) {
    return Boolean(localDone()[key] || remoteDone[key]);
  }

  function mark(key) {
    const done = localDone();
    done[key] = true;
    saveLocal(done);
    remoteDone[key] = true;
    if (viewer) {
      fetch("/api/path-progress", {
        method: "POST",
        credentials: "same-origin",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ stepKey: key }),
      }).catch(() => {});
    }
    const read = key.split(":read:")[1];
    if (read) {
      try {
        const marks = JSON.parse(localStorage.getItem("aiming.read.v1") || "{}") || {};
        marks[read] = true;
        localStorage.setItem("aiming.read.v1", JSON.stringify(marks));
      } catch (error) { /* the series still records its own mark */ }
    }
    draw();
  }

  function seriesCard(universe) {
    const steps = stepsFor(universe);
    const done = steps.filter((step) => isDone(step.key)).length;
    const card = h("a", { class: "path-card", href: "learn.html?id=" + universe.id + "#series" }, [
      h("p", { class: "page-tag", text: universe.name }),
      h("h2", { text: universe.practice ? universe.practice.title : universe.name }),
      h("p", { class: "local-note", text: trf("path.progress", { done, total: steps.length }) }),
      h("div", { class: "path-bar" }, h("span", { style: "width:" + (steps.length ? Math.round(done / steps.length * 100) : 0) + "%" })),
    ]);
    return card;
  }

  function seriesDetail(universe) {
    const steps = stepsFor(universe);
    const wrap = h("section", { class: "path-card", id: "series" });
    wrap.append(h("p", { class: "page-tag", text: universe.name }));
    wrap.append(h("h2", { text: universe.practice ? universe.practice.title : universe.name }));
    steps.forEach((step, index) => {
      const block = h("article", { class: "step" + (isDone(step.key) ? " is-done" : "") });
      block.append(h("p", { class: "kicker", text: (index + 1) + " · " + tr("path." + step.kind) }));
      block.append(h("h3", { text: step.title }));
      if (step.body) step.body.split("\n\n").forEach((paragraph) => block.append(h("p", { text: paragraph })));
      if (step.kind === "check" && !isDone(step.key)) {
        const options = h("div", { class: "check-options" });
        step.check.options.forEach((option, optionIndex) => {
          const button = h("button", { type: "button", class: "btn btn-ghost", text: line(option) });
          button.addEventListener("click", () => {
            if (optionIndex === step.check.answer) mark(step.key);
            else button.textContent = tr("path.wrong");
          });
          options.append(button);
        });
        block.append(options);
      } else if (!isDone(step.key)) {
        const button = h("button", { type: "button", class: "btn btn-primary", text: tr("path.done") });
        button.addEventListener("click", () => mark(step.key));
        block.append(button);
      } else {
        block.append(h("p", { class: "local-note", text: tr("path.correct") }));
      }
      wrap.append(block);
    });
    return wrap;
  }

  function extendCard(course) {
    const card = h("article", { class: "extend-card" });
    card.append(h("p", { class: "page-tag", text: course.status === "approved" ? tr("path.approved") : course.status === "rejected" ? tr("path.rejected") : tr("path.pending") }));
    card.append(h("h3", { text: course.title }));
    if (course.summary) card.append(h("p", { text: course.summary }));
    card.append(h("p", { class: "local-note", text: course.author ? tr("path.by") + " " + course.author : "" }));
    (course.steps || []).forEach((step, index) => {
      card.append(h("h3", { text: (index + 1) + ". " + step.title }));
      card.append(h("p", { text: step.body }));
    });
    if (course.fileId) {
      card.append(h("p", {}, h("a", { href: "/api/course-file?id=" + course.fileId }, tr("path.open"))));
    }
    if (viewer && viewer.reviewer && course.status === "pending") {
      const row = h("div", { class: "form-actions" });
      ["approved", "rejected"].forEach((status) => {
        const button = h("button", { type: "button", class: status === "approved" ? "btn btn-primary" : "btn btn-ghost", text: tr(status === "approved" ? "path.approve" : "path.reject") });
        button.addEventListener("click", () => review(course.id, status));
        row.append(button);
      });
      card.append(row);
    }
    return card;
  }

  async function review(id, status) {
    await fetch("/api/courses", {
      method: "POST",
      credentials: "same-origin",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ review: true, id, status }),
    });
    draw();
  }

  function maker() {
    if (!viewer) return h("p", {}, h("a", { href: "login.html?next=" + encodeURIComponent("learn.html") }, tr("path.needLogin")));
    const universe = h("select", { class: "field" });
    (window.AIMING.universes || []).forEach((item) => universe.append(h("option", { value: item.id, text: item.name })));
    const title = h("input", { class: "field", maxlength: "40" });
    const summary = h("input", { class: "field", maxlength: "200" });
    const stepTitle = h("input", { class: "field", maxlength: "40" });
    const stepBody = h("textarea", { class: "field", maxlength: "1200" });
    const file = h("input", { class: "field", type: "file", accept: "application/pdf" });
    const status = h("p", { class: "status", role: "status" });
    const form = h("form", { class: "form-card", novalidate: true }, [
      h("h3", { text: tr("path.make") }),
      h("label", { class: "field-label" }, [h("span", { text: tr("feed.universe") }), universe]),
      h("label", { class: "field-label" }, [h("span", { text: tr("feed.title") }), title]),
      h("label", { class: "field-label" }, [h("span", { text: tr("path.summary") }), summary]),
      h("label", { class: "field-label" }, [h("span", { text: tr("path.stepTitle") }), stepTitle]),
      h("label", { class: "field-label" }, [h("span", { text: tr("path.stepBody") }), stepBody]),
      h("label", { class: "field-label" }, [h("span", { text: tr("path.upload") }), file]),
      h("div", { class: "form-actions" }, h("button", { class: "btn btn-primary", type: "submit", text: tr("path.submit") })),
      status,
    ]);
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const payload = {
        universeId: universe.value,
        title: title.value,
        summary: summary.value,
        steps: [{ title: stepTitle.value, body: stepBody.value }],
      };
      const chosen = file.files && file.files[0];
      if (chosen) {
        const data = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = () => reject(reader.error);
          reader.readAsDataURL(chosen);
        });
        payload.file = { name: chosen.name, mime: "application/pdf", data };
      }
      const res = await fetch("/api/courses", {
        method: "POST",
        credentials: "same-origin",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      status.textContent = res.ok ? tr("path.saved") : ((window.tMsg && tMsg(data.error)) || data.error || "");
      if (res.ok) draw();
    });
    return form;
  }

  async function draw() {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    const universes = (window.AIMING && window.AIMING.universes) || [];
    root.replaceChildren();
    root.append(h("h2", { class: "block-title", text: tr("path.series") }));
    root.append(h("p", { class: "page-intro", text: tr("path.intro") }));
    if (id && window.AIMING.byId[id]) root.append(seriesDetail(window.AIMING.byId[id]));
    const list = h("div", { class: "path-list" });
    universes.forEach((universe) => list.append(seriesCard(universe)));
    root.append(list);

    root.append(h("h2", { class: "block-title", text: tr("path.extend") }));
    root.append(h("p", { class: "page-intro", text: tr("path.extendIntro") }));
    const courses = await fetch("/api/courses" + (id ? "?universe=" + encodeURIComponent(id) : ""), { credentials: "same-origin" })
      .then((res) => res.json())
      .catch(() => ({ courses: [] }));
    const extend = h("div", { class: "extend-list" });
    const rows = courses.courses || [];
    if (!rows.length) extend.append(h("p", { class: "local-note", text: tr("path.empty") }));
    rows.forEach((course) => extend.append(extendCard(course)));
    root.append(extend, maker());
  }

  document.addEventListener("aiming-i18n", () => { draw(); });
  loadRemote().then(draw);
})();
