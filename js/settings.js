(function () {
  if (document.body.dataset.page !== "settings") return;
  const root = document.getElementById("settings-root");
  if (!root) return;

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

  const status = h("p", { class: "status", role: "status" });

  function segment(name, options, current) {
    const group = h("div", { class: "segment", role: "radiogroup", "aria-label": t(name) });
    options.forEach((option) => {
      const button = h("button", {
        type: "button",
        class: "segment__btn",
        "aria-pressed": option.value === current ? "true" : "false",
        text: t(option.label),
      });
      button.dataset.value = option.value;
      button.addEventListener("click", () => {
        group.querySelectorAll("button").forEach((node) => node.setAttribute("aria-pressed", node === button ? "true" : "false"));
        save({ [option.key]: option.value });
      });
      group.append(button);
    });
    return group;
  }

  let loggedIn = false;

  async function save(patch) {
    const next = window.AIMING_APPLY_SETTINGS({ ...window.AIMING_SETTINGS, ...patch });
    if (!loggedIn) {
      status.textContent = t("settings.local");
      return;
    }
    const res = await fetch("/api/settings", {
      method: "POST",
      credentials: "same-origin",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(next),
    });
    const data = await res.json().catch(() => ({}));
    status.textContent = res.ok ? t("settings.saved") : (data.error || "");
    if (res.ok && patch.language) start();
  }

  async function start() {
    const session = await fetch("/api/session", { credentials: "same-origin" }).then((res) => res.json()).catch(() => ({}));
    loggedIn = Boolean(session.user);
    const settings = (session.user && session.user.settings) || window.AIMING_SETTINGS || {};
    if (session.user && session.user.settings) window.AIMING_APPLY_SETTINGS(session.user.settings);
    root.replaceChildren();
    root.append(h("p", { class: "page-tag", "data-i18n": "settings.tag", text: t("settings.tag") }));
    root.append(h("h1", { class: "page-title", "data-i18n": "settings.title", text: t("settings.title") }));
    root.append(h("p", { class: "page-intro", "data-i18n": "settings.intro", text: t("settings.intro") }));
    const sheet = h("div", { class: "sheet" });
    sheet.append(h("h2", { text: t("settings.language") }));
    sheet.append(segment("settings.language", [
      { key: "language", value: "zh", label: "settings.language" },
    ], settings.language));
    const lang = h("div", { class: "segment", role: "radiogroup" });
    [["zh", "简体"], ["zhHant", "繁体"], ["en", "English"]].forEach(([value, label]) => {
      const button = h("button", {
        type: "button",
        class: "segment__btn",
        "aria-pressed": (settings.language || "zh") === value ? "true" : "false",
        text: label,
      });
      button.addEventListener("click", () => {
        lang.querySelectorAll("button").forEach((node) => node.setAttribute("aria-pressed", "false"));
        button.setAttribute("aria-pressed", "true");
        save({ language: value });
      });
      lang.append(button);
    });
    sheet.replaceChildren();
    sheet.append(row("settings.language", lang));
    const theme = h("div", { class: "segment", role: "radiogroup" });
    [["light", "settings.light"], ["dark", "settings.dark"]].forEach(([value, label]) => {
      const button = h("button", {
        type: "button",
        class: "segment__btn",
        "aria-pressed": (settings.theme || "light") === value ? "true" : "false",
        text: t(label),
        "data-i18n": label,
      });
      button.addEventListener("click", () => {
        theme.querySelectorAll("button").forEach((node) => node.setAttribute("aria-pressed", "false"));
        button.setAttribute("aria-pressed", "true");
        save({ theme: value });
      });
      theme.append(button);
    });
    sheet.append(row("settings.theme", theme));
    const motion = h("button", {
      type: "button",
      class: "switch",
      role: "switch",
      "aria-checked": settings.reduceMotion ? "true" : "false",
      "data-i18n": "settings.motion",
      text: t("settings.motion"),
    });
    motion.addEventListener("click", () => {
      const on = motion.getAttribute("aria-checked") !== "true";
      motion.setAttribute("aria-checked", on ? "true" : "false");
      save({ reduceMotion: on });
    });
    sheet.append(row("settings.motion", motion));
    sheet.append(h("p", { class: "local-note", "data-i18n": "settings.motionHelp", text: t("settings.motionHelp") }));
    const select = h("select", { class: "field" });
    select.append(h("option", { value: "", text: t("settings.universeNone") }));
    (window.AIMING.universes || []).forEach((item) => {
      select.append(h("option", { value: item.id, text: item.name, selected: item.id === settings.defaultUniverse ? true : null }));
    });
    select.addEventListener("change", () => save({ defaultUniverse: select.value }));
    sheet.append(row("settings.universe", select));
    root.append(sheet, status);
  }

  function row(key, control) {
    return h("div", { class: "sheet__row" }, [
      h("span", { class: "sheet__label", "data-i18n": key, text: t(key) }),
      control,
    ]);
  }

  start();
})();
