/* Account slot in the nav. One small request; it does not block the page. */
(function () {
  const nav = document.getElementById("site-nav");
  if (!nav) return;
  const slot = document.createElement("span");
  slot.className = "nav-account";
  nav.append(slot);

  function draw(user) {
    slot.replaceChildren();
    if (!user) {
      const login = document.createElement("a");
      login.href = "login.html";
      login.textContent = window.t ? t("nav.login") : "登录";
      const register = document.createElement("a");
      register.href = "register.html";
      register.textContent = window.t ? t("nav.register") : "注册";
      slot.append(login, register);
      return;
    }
    const name = document.createElement("span");
    name.className = "nav-name";
    name.textContent = user.displayName || "";
    const out = document.createElement("button");
    out.type = "button";
    out.className = "nav-btn";
    out.textContent = window.t ? t("nav.logout") : "退出";
    out.addEventListener("click", () => {
      out.disabled = true;
      fetch("/api/logout", { method: "POST", credentials: "same-origin" }).finally(() => {
        location.href = "index.html";
      });
    });
    slot.append(name, out);
  }

  document.addEventListener("aiming-session", () => {
    draw(window.AIMING_USER || null);
  });

  fetch("/api/session", { credentials: "same-origin" })
    .then((res) => (res.ok ? res.json() : { user: null }))
    .then((data) => {
      window.AIMING_USER = data.user || null;
      if (data.user && data.user.settings && window.AIMING_APPLY_SETTINGS) {
        window.AIMING_APPLY_SETTINGS(data.user.settings);
      }
      document.dispatchEvent(new CustomEvent("aiming-session"));
    })
    .catch(() => draw(null));
})();
