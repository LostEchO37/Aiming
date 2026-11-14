(function () {
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

  function mediaNode(file) {
    if (file.kind === "video") return h("video", { class: "media", controls: true, src: "/api/files/" + file.id, preload: "metadata" });
    return h("img", { class: "media", alt: "", src: "/api/files/" + file.id });
  }

  function postCard(post) {
    const card = h("article", { class: "post" });
    card.append(h("div", { class: "post-head" }, [
      h("span", { class: "avatar", "aria-hidden": "true", text: (post.author || "").charAt(0) }),
      h("div", {}, [
        h("p", { class: "post-name" }, h("a", { href: "index.html?id=" + encodeURIComponent(post.authorId) }, post.author)),
        h("p", { class: "post-meta" }, post.universeId ? h("span", { class: "tag", text: (window.AIMING.byId[post.universeId] || {}).name || "" }) : null),
      ]),
    ]));
    card.append(h("p", { class: "post-body", text: post.body }));
    if (post.media && post.media.length) {
      const row = h("div", { class: "media-row" });
      post.media.forEach((file) => row.append(mediaNode(file)));
      card.append(row);
    }
    return card;
  }

  const discuss = document.getElementById("companion-posts");
  if (discuss && document.body.dataset.page === "discuss") {
    discuss.append(h("h2", { class: "block-title", "data-i18n": "discuss.companionPosts", text: t("discuss.companionPosts") }));
    const list = h("div", { class: "tab-panel" });
    discuss.append(list);
    fetch("/api/companion-posts", { credentials: "same-origin" })
      .then((res) => res.json())
      .then((data) => {
        const posts = data.posts || [];
        if (!posts.length) list.append(h("p", { class: "local-note", text: t("home.empty") }));
        posts.forEach((post) => list.append(postCard(post)));
      })
      .catch(() => {});
  }

  const root = document.getElementById("companion-root");
  if (!root) return;

  const withId = new URLSearchParams(location.search).get("with");

  async function paint() {
    root.replaceChildren();
    const session = await fetch("/api/session", { credentials: "same-origin" }).then((res) => res.json()).catch(() => ({}));
    const me = session.user;
    if (me && me.settings) window.AIMING_APPLY_SETTINGS(me.settings);
    root.append(h("p", { class: "page-tag", text: t("companions.title") }));
    root.append(h("h1", { class: "page-title", text: t("companions.title") }));
    root.append(h("p", { class: "page-intro", text: t("companions.intro") }));
    if (!me) {
      root.append(h("p", { class: "local-note", text: t("companions.login") }));
      root.append(h("p", {}, h("a", { class: "btn btn-primary", href: "login.html?next=" + encodeURIComponent("people.html") }, t("nav.login"))));
      return;
    }
    if (withId) {
      await thread(me, withId);
      return;
    }
    const input = h("input", { class: "search-input", type: "search", placeholder: t("companions.find"), "aria-label": t("companions.find") });
    const found = h("div", { class: "people-list" });
    root.append(h("div", { class: "search-block" }, input), found);
    const directory = await fetch("/api/directory", { credentials: "same-origin" }).then((res) => res.json()).catch(() => ({ people: [] }));
    function drawFind() {
      const q = input.value.trim().toLowerCase();
      found.replaceChildren();
      (directory.people || []).filter((person) => person.id !== me.id).filter((person) => {
        if (!q) return false;
        return (person.displayName + person.signature + person.about).toLowerCase().includes(q);
      }).slice(0, 12).forEach((person) => {
        found.append(h("a", { class: "person-row", href: "index.html?id=" + encodeURIComponent(person.id) }, [
          h("span", { class: "avatar", "aria-hidden": "true", text: person.displayName.charAt(0) }),
          h("span", { class: "person-copy" }, [
            h("span", { class: "post-name", text: person.displayName }),
            h("span", { class: "person-line", text: person.signature || person.about || "" }),
          ]),
        ]));
      });
    }
    input.addEventListener("input", drawFind);

    const list = h("div", { class: "people-list" });
    root.append(h("h2", { class: "block-title", text: t("companions.title") }), list);
    const data = await fetch("/api/companions", { credentials: "same-origin" }).then((res) => res.json()).catch(() => ({ people: [] }));
    const people = data.people || [];
    if (!people.length) list.append(h("p", { class: "local-note", text: t("companions.empty") }));
    people.forEach((person) => {
      list.append(h("a", { class: "person-row", href: "people.html?with=" + encodeURIComponent(person.id) }, [
        h("span", { class: "avatar", "aria-hidden": "true", text: person.displayName.charAt(0) }),
        h("span", { class: "person-copy" }, [
          h("span", { class: "post-name", text: person.displayName }),
          h("span", { class: "person-line", text: person.signature || t("home.message") }),
        ]),
        h("span", { class: "go" }, [t("home.message") + " ", h("span", { class: "go-arrow", "aria-hidden": "true" }, "→")]),
      ]));
    });
  }

  async function thread(me, otherId) {
    root.append(h("a", { class: "back", href: "people.html" }, "← " + t("companions.title")));
    const other = h("h2", { class: "block-title" });
    root.append(other);
    const log = h("div", { class: "thread" });
    const box = h("textarea", { class: "field", maxlength: "1000", placeholder: t("companions.placeholder") });
    const status = h("p", { class: "status", role: "status" });
    const form = h("form", { class: "form-card", novalidate: true }, [
      box,
      h("div", { class: "form-actions" }, h("button", { class: "btn btn-primary", type: "submit", text: t("companions.send") })),
      status,
    ]);
    root.append(log, form);
    async function refresh() {
      const res = await fetch("/api/messages?with=" + encodeURIComponent(otherId), { credentials: "same-origin" });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        status.textContent = data.error || "";
        return;
      }
      log.replaceChildren();
      (data.messages || []).forEach((item) => {
        log.append(h("p", { class: item.mine ? "bubble bubble--mine" : "bubble", text: item.body }));
      });
      log.scrollTop = log.scrollHeight;
    }
    const profile = await fetch("/api/profile/" + encodeURIComponent(otherId), { credentials: "same-origin" }).then((res) => res.json()).catch(() => ({}));
    other.textContent = (profile.profile && profile.profile.displayName) || t("companions.thread");
    other.append(document.createTextNode(" · "));
    other.append(h("a", { href: "index.html?id=" + encodeURIComponent(otherId) }, t("nav.home")));
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const text = box.value.trim();
      if (!text) return;
      const res = await fetch("/api/messages", {
        method: "POST",
        credentials: "same-origin",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ userId: otherId, body: text }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        status.textContent = data.error || "";
        return;
      }
      box.value = "";
      status.textContent = t("companions.sent");
      refresh();
    });
    refresh();
  }

  paint();
})();
