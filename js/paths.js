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
      const field = h("textarea", { class: "field", maxlength: "800" });
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

  function courseHref(id) {
    return "learn.html?course=" + encodeURIComponent(id);
  }

  function skillSlides(universe) {
    const skill = skillOf(universe.id);
    if (!skill) return [];
    const slides = [];
    (skill.lessons || []).forEach((lesson, lessonIndex) => {
      slides.push({ type: "concept", lesson, lessonIndex, skillId: universe.id });
      if (lesson.case) slides.push({ type: "case", lesson, lessonIndex, skillId: universe.id });
      tasksOf(skill, universe.id).filter((item) => item.lessonIndex === lessonIndex).forEach((item) => {
        slides.push({ type: "task", item, skillId: universe.id });
      });
    });
    const tasks = tasksOf(skill, universe.id);
    if (tasks.length && count(tasks) === tasks.length) {
      slides.push({ type: "certificate", name: line(skill.title), skillId: universe.id });
    }
    return slides;
  }

  function extraSlides(course) {
    const slides = [];
    const groups = [];
    courseTasks(course).forEach((item) => {
      const index = item.step.lessonIndex || 1;
      let group = groups.find((entry) => entry.index === index);
      if (!group) {
        group = { index, title: item.step.lessonTitle, reading: item.step.lessonReading, items: [] };
        groups.push(group);
      }
      group.items.push(item);
    });
    groups.forEach((group) => {
      slides.push({ type: "reading", title: group.title, reading: group.reading, course });
      group.items.forEach((item) => slides.push({ type: "extra-task", item, course }));
    });
    const tasks = courseTasks(course);
    if (course.status === "approved" && tasks.length && count(tasks) === tasks.length) {
      slides.push({ type: "certificate", name: course.title, course });
    }
    return slides;
  }

  function deck(slides, index, label) {
    const safe = Math.max(0, Math.min(index, Math.max(slides.length - 1, 0)));
    const slide = slides[safe];
    const wrap = h("section", { class: "deck", id: "deck" });
    wrap.append(h("p", { class: "page-tag", text: label }));
    wrap.append(h("p", { class: "local-note", text: trf("path.slide", { n: safe + 1, total: slides.length }) }));
    const frame = h("div", { class: "deck-slide" });
    if (slide) frame.append(renderSlide(slide));
    wrap.append(frame);
    const controls = h("div", { class: "deck-controls" });
    const prev = h("button", { type: "button", class: "btn btn-ghost", text: tr("path.prev"), disabled: safe === 0 ? true : null });
    const next = h("button", { type: "button", class: "btn btn-primary", text: tr("path.next"), disabled: safe >= slides.length - 1 ? true : null });
    prev.addEventListener("click", () => goSlide(safe - 1));
    next.addEventListener("click", () => goSlide(safe + 1));
    controls.append(prev, next);
    wrap.append(controls);
    return wrap;
  }

  function renderSlide(slide) {
    if (slide.type === "certificate") return certificate(slide.name, viewer && viewer.displayName);
    if (slide.type === "concept" || slide.type === "case") {
      const lesson = slide.lesson;
      const pack = slide.type === "case" ? lesson.case : (lesson.concept || lesson.reading || { zh: [] });
      const block = h("article", { class: "path-card" });
      block.append(h("p", { class: "kicker", text: trf("path.lesson", { n: slide.lessonIndex + 1 }) + " · " + tr(slide.type === "case" ? "path.case" : "path.concept") }));
      block.append(h("h2", { text: line(lesson.title) }));
      (pack[lang()] || pack.zh || []).forEach((paragraph) => block.append(h("p", { class: "lecture-prose", text: paragraph })));
      return block;
    }
    if (slide.type === "task") return h("article", { class: "path-card" }, taskBlock(slide.item, slide.skillId));
    if (slide.type === "reading") {
      const block = h("article", { class: "path-card" });
      block.append(h("p", { class: "kicker", text: tr("path.concept") }));
      block.append(h("h2", { text: slide.title || "" }));
      if (slide.reading) block.append(h("p", { class: "lecture-prose", text: slide.reading }));
      return block;
    }
    if (slide.type === "extra-task") {
      const item = slide.item;
      const block = h("article", { class: "path-card task" + (isDone(item.key) ? " is-done" : "") });
      block.append(h("p", { class: "kicker", text: tr("path.task") }));
      block.append(h("h2", { text: item.step.title }));
      if (slide.course.status === "approved" && viewer) {
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
      return block;
    }
    return h("p", { text: "" });
  }

  function goSlide(index) {
    const url = new URL(location.href);
    url.searchParams.set("n", String(index));
    history.pushState({}, "", url);
    draw();
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

  function skillCard(universe) {
    const skill = skillOf(universe.id);
    if (!skill) return null;
    const tasks = tasksOf(skill, universe.id);
    const done = count(tasks);
    return h("a", { class: "path-card", href: courseHref(universe.id) }, [
      h("p", { class: "page-tag", text: universe.name }),
      h("h2", { text: line(skill.title) }),
      h("p", { class: "local-note", text: trf("path.minutes", { n: skill.minutes || 45 }) }),
      h("p", { class: "local-note", text: progressLine(done, tasks.length) }),
      bar(done, tasks.length),
    ]);
  }

  function extraCard(course) {
    const tasks = courseTasks(course);
    return h("a", { class: "path-card", href: courseHref("x:" + course.id) }, [
      h("p", { class: "page-tag", text: tr("path.extend") }),
      h("h2", { text: course.title }),
      h("p", { class: "local-note", text: progressLine(count(tasks), tasks.length) }),
    ]);
  }

  async function draw() {
    const params = new URLSearchParams(location.search);
    const opened = params.get("course") || "";
    const tag = params.get("tag") || "";
    const q = (params.get("q") || "").trim().toLowerCase();
    const universes = (window.AIMING && window.AIMING.universes) || [];
    const payload = await fetch("/api/courses", { credentials: "same-origin" }).then((res) => res.json()).catch(() => ({ courses: [] }));
    const rows = payload.courses || [];
    const approved = rows.filter((course) => course.status === "approved");
    root.replaceChildren();

    const intro = document.querySelector(".page-intro");
    if (intro) intro.hidden = Boolean(opened);
    if (opened) {
      root.append(h("p", {}, h("a", { class: "back", href: "learn.html" }, tr("path.backIndex"))));
      if (opened.indexOf("x:") === 0) {
        const course = rows.find((item) => item.id === opened.slice(2));
        if (!course) {
          root.append(h("p", { text: tr("path.missing") }));
          return;
        }
        const slides = extraSlides(course);
        const index = Number(params.get("n") || "0") || 0;
        const tasks = courseTasks(course);
        root.append(h("p", { class: "local-note", text: progressLine(count(tasks), tasks.length) }));
        root.append(deck(slides, index, course.title));
        return;
      }
      const universe = window.AIMING.byId[opened];
      const skill = universe && skillOf(opened);
      if (!skill) {
        root.append(h("p", { text: tr("path.missing") }));
        return;
      }
      const slides = skillSlides(universe);
      const tasks = tasksOf(skill, opened);
      const index = Number(params.get("n") || "0") || 0;
      root.append(h("p", { class: "local-note", text: trf("path.minutes", { n: skill.minutes || 45 }) + " · " + progressLine(count(tasks), tasks.length) }));
      root.append(h("p", { text: tr("path.notYet") }));
      root.append(deck(slides, index, line(skill.title)));
      return;
    }

    const search = h("input", {
      class: "search-input",
      type: "search",
      value: params.get("q") || "",
      placeholder: tr("path.find"),
      "aria-label": tr("path.find"),
    });
    search.addEventListener("change", () => {
      const url = new URL(location.href);
      const value = search.value.trim();
      if (value) url.searchParams.set("q", value);
      else url.searchParams.delete("q");
      history.pushState({}, "", url);
      draw();
    });
    root.append(h("form", { class: "search-form", role: "search" }, search));

    const tags = h("div", { class: "tag-row" });
    const all = h("a", { class: "tag" + (tag ? "" : " is-on"), href: q ? "learn.html?q=" + encodeURIComponent(q) : "learn.html" }, tr("feed.all"));
    tags.append(all);
    universes.forEach((universe) => {
      tags.append(h("a", {
        class: "tag" + (tag === universe.id ? " is-on" : ""),
        href: "learn.html?tag=" + universe.id,
      }, universe.name));
    });
    approved.forEach((course) => {
      tags.append(h("a", {
        class: "tag" + (tag === "x:" + course.id ? " is-on" : ""),
        href: "learn.html?tag=" + encodeURIComponent("x:" + course.id),
      }, course.title));
    });
    root.append(tags);

    const list = h("div", { class: "path-list" });
    universes.forEach((universe) => {
      const skill = skillOf(universe.id);
      const title = skill ? line(skill.title) : universe.name;
      const hay = (universe.name + " " + title).toLowerCase();
      if (tag && tag !== universe.id) return;
      if (q && !hay.includes(q)) return;
      const card = skillCard(universe);
      if (card) list.append(card);
    });
    approved.forEach((course) => {
      const hay = (course.title + " " + (course.summary || "")).toLowerCase();
      if (tag && tag !== "x:" + course.id && tag !== course.universeId) return;
      if (q && !hay.includes(q)) return;
      list.append(extraCard(course));
    });
    if (!list.childNodes.length) list.append(h("p", { class: "local-note", text: tr("path.none") }));
    root.append(list);
    const offer = h("details", { class: "extend-card" });
    offer.append(h("summary", { text: tr("path.make") }));
    offer.append(h("p", { class: "local-note", text: tr("path.extendIntro") }));
    offer.append(maker());
    root.append(offer);
  }

  document.addEventListener("aiming-i18n", () => { draw(); });
  window.addEventListener("popstate", () => { draw(); });
  loadRemote().then(draw);
})();
