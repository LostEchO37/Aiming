(function () {
  const form = document.getElementById("account-form");
  const status = document.getElementById("status");
  if (!form || !status) return;
  const mode = document.body.dataset.page === "register" ? "register" : "login";

  function safeNext(raw) {
    if (!raw) return "discuss.html";
    let value = raw;
    try { value = decodeURIComponent(raw); } catch (err) { return "discuss.html"; }
    if (value.length > 180) return "discuss.html";
    if (!/^(index|universes|universe|learn|discuss|people|about)\.html(?:\?[A-Za-z0-9\-._~%=&]*)?(?:#[A-Za-z0-9\-._~%]*)?$/.test(value)) {
      return "discuss.html";
    }
    return value;
  }

  const next = safeNext(new URLSearchParams(location.search).get("next"));
  document.querySelectorAll("[data-next]").forEach((link) => {
    const file = link.getAttribute("href").split("?")[0];
    link.setAttribute("href", file + "?next=" + encodeURIComponent(next));
  });

  function say(text) {
    status.textContent = text || "";
  }

  function showError(control, message) {
    const err = document.getElementById(control.getAttribute("aria-describedby"));
    if (err) {
      err.hidden = !message;
      err.textContent = message || "";
    }
    if (message) control.setAttribute("aria-invalid", "true");
    else control.removeAttribute("aria-invalid");
  }

  form.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => showError(input, ""));
  });

  fetch("/api/session", { credentials: "same-origin" })
    .then((res) => (res.ok ? res.json() : { user: null }))
    .then((data) => {
      if (!data.user) return;
      say(t("register.already") + data.user.displayName + "。");
    })
    .catch(() => {});

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = form.email.value.trim();
    const password = form.password.value;
    const displayName = form.displayName ? form.displayName.value.trim() : "";
    let ok = true;
    if (mode === "register" && (!displayName || displayName.length > 20)) {
      showError(form.displayName, t("register.nameError"));
      ok = false;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError(form.email, t("register.emailError"));
      ok = false;
    }
    if (password.length < 8) {
      showError(form.password, t("register.passwordError"));
      ok = false;
    }
    if (!ok) {
      const bad = form.querySelector("[aria-invalid=true]");
      if (bad) bad.focus();
      return;
    }
    const button = form.querySelector("button[type=submit]");
    button.disabled = true;
    say("");
    const body = mode === "register"
      ? { email, password, displayName }
      : { email, password };
    fetch(mode === "register" ? "/api/register" : "/api/login", {
      method: "POST",
      credentials: "same-origin",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    }).then(async (res) => {
      let data = {};
      try { data = await res.json(); } catch (err) { data = {}; }
      if (!res.ok) throw new Error((window.tMsg && tMsg(data.error)) || t("feed.failed"));
      location.href = next;
    }).catch((err) => {
      button.disabled = false;
      say((window.tMsg && tMsg(err.message)) || t("feed.failed"));
    });
  });
})();
