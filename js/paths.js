/* A skill is several lessons. Each lesson is reading plus more than one task. */
(function () {
  if (document.body.dataset.page !== "learn") return;
  const root = document.getElementById("path-root");
  if (!root) return;
  const KEY = "aiming.path.v1";
  const ISSUED = "aiming.certificate.v1";

  function lang() {
    const value = document.documentElement.getAttribute("data-lang") || "zh";
    return value === "en" || value === "zhHant" ? value : "zh";
  }

  function line(pack) {
    if (!pack) return "";
    if (typeof pack === "string") return pack;
    return pack[lang()] || pack.zh || "";
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

  function readMap(name) {
    try { return JSON.parse(localStorage.getItem(name) || "{}") || {}; } catch (error) { return {}; }
  }

  function localDone() { return readMap(KEY); }

  function saveLocal(done) { localStorage.setItem(KEY, JSON.stringify(done)); }

  function issuedMap() { return readMap(ISSUED); }

  function skillOf(id) {
    return (window.AIMING_SKILLS || {})[id] || null;
  }

  function tasksOf(skill, id) {
    const tasks = [];
    (skill.lessons || []).forEach((lesson, lessonIndex) => {
      (lesson.tasks || []).forEach((task, taskIndex) => {
        tasks.push({
          key: "skill:" + id + ":" + lessonIndex + ":" + taskIndex,
          lesson,
          lessonIndex,
          task,
          taskIndex,
        });
      });
    });
    return tasks;
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

  function mark(key, skillId) {
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
    const skill = skillOf(skillId);
    if (skill) {
      const tasks = tasksOf(skill, skillId);
      if (tasks.length && tasks.every((item) => isDone(item.key))) {
        const stamps = issuedMap();
        if (!stamps[skillId]) {
          stamps[skillId] = new Date().toISOString();
          localStorage.setItem(ISSUED, JSON.stringify(stamps));
        }
      }
    }
    draw();
  }

  function count(tasks) {
    return tasks.filter((item) => isDone(item.key)).length;
  }

  function progressLine(done, total) {
    return trf("path.taskProgress", { done, total });
  }

  function bar(done, total) {
    const width = total ? Math.round(done / total * 100) : 0;
    return h("div", { class: "path-bar" }, h("span", { style: "width:" + width + "%" }));
  }

  function certificate(name, holder) {
    const card = h("section", { class: "certificate", id: "certificate" });
    card.append(h("p", { class: "kicker", text: tr("path.certificateLead") }));
    card.append(h("h2", { text: tr("path.certificate") }));
    card.append(h("p", { class: "certificate__skill", text: name }));
    card.append(h("p", { text: tr("path.holder") + " " + (holder || tr("path.learner")) }));
    card.append(h("p", { class: "local-note", text: tr("path.certificateNote") }));
    return card;
  }

  function taskBlock(item, skillId) {
    const task = item.task;
    const done = isDone(item.key);
    const block = h("div", { class: "task" + (done ? " is-done" : "") });
    block.append(h("p", { class: "kicker", text: tr("path.task") + " " + (item.taskIndex + 1) }));
    block.append(h("p", { text: line(task.prompt) }));
    if (done) {
      block.append(h("p", { class: "local-note", text: tr("path.taskDone") }));
      return block;
    }
    if (task.kind === "check") {
      const options = h("div", { class: "check-options" });
      (task.options || []).forEach((option, optionIndex) => {
        const button = h("button", { type: "button", class: "btn btn-ghost", text: line(option) });
        button.addEventListener("click", () => {
          if (optionIndex === task.answer) mark(item.key, skillId);
          else button.textContent = tr("path.wrong");
        });
        options.append(button);
      });
      block.append(options);
    } else {
      const field = h("textarea", { class: "field", maxlength: "400" });
      const button = h("button", { type: "button", class: "btn btn-primary", text: tr("path.saveTask") });
      const note = h("p", { class: "status", role: "status" });
      button.addEventListener("click", () => {
        const text = field.value.trim();
        if (text.length < (task.min || 8)) {
          note.textContent = tr("path.taskShort");
          return;
        }
        mark(item.key, skillId);
      });
      block.append(field, button, note);
    }
    return block;
  }

  function seriesCard(universe) {
    const skill = skillOf(universe.id);
    if (!skill) return null;
    const tasks = tasksOf(skill, universe.id);
    const done = count(tasks);
    return h("a", { class: "path-card", href: "learn.html?id=" + universe.id + "#series" }, [
      h("p", { class: "page-tag", text: universe.name }),
      h("h2", { text: line(skill.title) }),
      h("p", { class: "local-note", text: progressLine(done, tasks.length) }),
      bar(done, tasks.length),
    ]);
  }

  function seriesDetail(universe) {
    const skill = skillOf(universe.id);
    if (!skill) return null;
    const tasks = tasksOf(skill, universe.id);
    const done = count(tasks);
    const wrap = h("section", { class: "path-card", id: "series" });
    wrap.append(h("p", { class: "page-tag", text: universe.name }));
    wrap.append(h("h2", { text: line(skill.title) }));
    wrap.append(h("p", { class: "local-note", text: progressLine(done, tasks.length) }));
    wrap.append(bar(done, tasks.length));
    wrap.append(h("p", { text: tr("path.notYet") }));
    (skill.lessons || []).forEach((lesson, lessonIndex) => {
      const block = h("article", { class: "lesson" });
      block.append(h("p", { class: "kicker", text: trf("path.lesson", { n: lessonIndex + 1 }) }));
      block.append(h("h3", { text: line(lesson.title) }));
      (lesson.reading[lang()] || lesson.reading.zh || []).forEach((paragraph) => block.append(h("p", { text: paragraph })));
      tasks.filter((item) => item.lessonIndex === lessonIndex).forEach((item) => block.append(taskBlock(item, universe.id)));
      wrap.append(block);
    });
    if (tasks.length && done === tasks.length) {
      wrap.append(certificate(line(skill.title), viewer && viewer.displayName));
    }
    return wrap;
  }

  function courseTasks(course) {
    return (course.steps || []).map((step) => ({
      key: "c:" + course.id + ":" + step.id,
      step,
    }));
  }

  function extendCard(course) {
    const tasks = courseTasks(course);
    const done = count(tasks);
    const card = h("article", { class: "extend-card" });
    card.append(h("p", { class: "page-tag", text: course.status === "approved" ? tr("path.approved") : course.status === "rejected" ? tr("path.rejected") : tr("path.pending") }));
    card.append(h("h3", { text: course.title }));
    if (course.summary) card.append(h("p", { text: course.summary }));
    card.append(h("p", { class: "local-note", text: progressLine(done, tasks.length) }));
    card.append(bar(done, tasks.length));
    if (course.author) card.append(h("p", { class: "local-note", text: tr("path.by") + " " + course.author }));
    const groups = [];
    tasks.forEach((item) => {
      const index = item.step.lessonIndex || 1;
      let group = groups.find((entry) => entry.index === index);
      if (!group) {
        group = { index, title: item.step.lessonTitle, reading: item.step.lessonReading, items: [] };
        groups.push(group);
      }
      group.items.push(item);
    });
    groups.forEach((group) => {
      card.append(h("h3", { text: trf("path.lesson", { n: group.index }) + " " + (group.title || "") }));
      if (group.reading) card.append(h("p", { text: group.reading }));
      group.items.forEach((item, taskIndex) => {
        const block = h("div", { class: "task" + (isDone(item.key) ? " is-done" : "") });
        block.append(h("p", { class: "kicker", text: tr("path.task") + " " + (taskIndex + 1) }));
        block.append(h("p", { text: item.step.title }));
        if (course.status === "approved" && viewer) {
          if (isDone(item.key)) block.append(h("p", { class: "local-note", text: tr("path.taskDone") }));
          else {
            const field = h("textarea", { class: "field", maxlength: "400" });
            const button = h("button", { type: "button", class: "btn btn-primary", text: tr("path.saveTask") });
            button.addEventListener("click", () => {
              if (field.value.trim().length < 8) return;
              mark(item.key, "");
            });
            block.append(field, button);
          }
        }
        card.append(block);
      });
    });
    if (course.fileId) card.append(h("p", {}, h("a", { href: "/api/course-file?id=" + course.fileId }, tr("path.open"))));
    if (course.status === "approved" && tasks.length && done === tasks.length) {
      card.append(certificate(course.title, viewer && viewer.displayName));
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

  function lessonFields(index) {
    const title = h("input", { class: "field", maxlength: "40" });
    const reading = h("textarea", { class: "field", maxlength: "1200" });
    const taskA = h("input", { class: "field", maxlength: "200" });
    const taskB = h("input", { class: "field", maxlength: "200" });
    const box = h("fieldset", { class: "lesson-fields" }, [
      h("legend", { text: trf("path.lesson", { n: index }) }),
      h("label", { class: "field-label" }, [h("span", { text: tr("path.lessonTitle") }), title]),
      h("label", { class: "field-label" }, [h("span", { text: tr("path.reading") }), reading]),
      h("label", { class: "field-label" }, [h("span", { text: tr("path.task") + " 1" }), taskA]),
      h("label", { class: "field-label" }, [h("span", { text: tr("path.task") + " 2" }), taskB]),
    ]);
    box.collect = () => ({
      title: title.value,
      reading: reading.value,
      tasks: [{ prompt: taskA.value }, { prompt: taskB.value }],
    });
    return box;
  }

  function maker() {
    if (!viewer) return h("p", {}, h("a", { href: "login.html?next=" + encodeURIComponent("learn.html") }, tr("path.needLogin")));
    const universe = h("select", { class: "field" });
    (window.AIMING.universes || []).forEach((item) => universe.append(h("option", { value: item.id, text: item.name })));
    const title = h("input", { class: "field", maxlength: "40" });
    const summary = h("input", { class: "field", maxlength: "200" });
    const first = lessonFields(1);
    const second = lessonFields(2);
    const file = h("input", { class: "field", type: "file", accept: "application/pdf" });
    const status = h("p", { class: "status", role: "status" });
    const form = h("form", { class: "form-card", novalidate: true }, [
      h("h3", { text: tr("path.make") }),
      h("p", { class: "local-note", text: tr("path.makeRule") }),
      h("label", { class: "field-label" }, [h("span", { text: tr("feed.universe") }), universe]),
      h("label", { class: "field-label" }, [h("span", { text: tr("path.skillName") }), title]),
      h("label", { class: "field-label" }, [h("span", { text: tr("path.summary") }), summary]),
      first,
      second,
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
        lessons: [first.collect(), second.collect()],
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
    if (id && window.AIMING.byId[id]) {
      const detail = seriesDetail(window.AIMING.byId[id]);
      if (detail) root.append(detail);
    }
    const list = h("div", { class: "path-list" });
    universes.forEach((universe) => {
      const card = seriesCard(universe);
      if (card) list.append(card);
    });
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
