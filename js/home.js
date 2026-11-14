(function () {
  if (document.body.dataset.page !== "home") return;
  const guest = document.getElementById("guest-home");
  const app = document.getElementById("home-app");
  if (!app) return;

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

  function universeName(id) {
    const item = window.AIMING && window.AIMING.byId[id];
    return item ? item.name : id;
  }

  function mediaNode(file) {
    if (file.kind === "video") return h("video", { class: "media", controls: true, src: "/api/files?id=" + file.id, preload: "metadata" });
    return h("img", { class: "media", alt: "", src: "/api/files?id=" + file.id });
  }

  function postCard(post, mine) {
    const card = h("article", { class: "post", id: "home-" + post.id });
    const name = h("a", { href: "index.html?id=" + encodeURIComponent(post.authorId) }, post.author);
    const meta = h("p", { class: "post-meta" });
    if (post.universeId) meta.append(h("a", { class: "tag", href: "universe.html?id=" + post.universeId }, universeName(post.universeId)));
    if (post.hidden) meta.append(h("span", { class: "badge badge--hidden", text: t("home.hidden") }));
    card.append(h("div", { class: "post-head" }, [
      h("span", { class: "avatar", "aria-hidden": "true", text: (post.author || "我").charAt(0) }),
      h("div", {}, [h("p", { class: "post-name" }, name), meta]),
    ]));
    if (post.title) card.append(h("h3", { class: "who", text: post.title }));
    card.append(h("p", { class: "post-body", text: post.body }));
    if (post.media && post.media.length) {
      const row = h("div", { class: "media-row" });
      post.media.forEach((file) => row.append(mediaNode(file)));
      card.append(row);
    }
    if (mine) {
      const button = h("button", { type: "button", class: "text-btn", text: post.hidden ? t("home.show") : t("home.hide") });
      button.addEventListener("click", () => {
        button.disabled = true;
        fetch("/api/hide", {
          method: "POST",
          credentials: "same-origin",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ postId: post.id }),
        })
          .then(() => load())
          .catch(() => { button.disabled = false; });
      });
      card.append(button);
    }
    return card;
  }

  function editor(profile) {
    const name = h("input", { class: "field", name: "displayName", maxlength: "20", value: profile.displayName });
    const signature = h("input", { class: "field", maxlength: "80", value: profile.signature || "" });
    const about = h("textarea", { class: "field", maxlength: "400" });
    about.value = profile.about || "";
    const place = h("input", { class: "field", maxlength: "40", value: profile.place || "" });
    const tags = h("div", { class: "tag-picks" });
    (window.AIMING.universes || []).forEach((item) => {
      const box = h("label", { class: "check" }, [
        h("input", { type: "checkbox", value: item.id, checked: profile.tags.includes(item.id) ? true : null }),
        item.name,
      ]);
      tags.append(box);
    });
    const file = h("input", { class: "field", type: "file", accept: "application/pdf" });
    const pub = h("input", { type: "checkbox", checked: profile.cvPublic ? true : null });
    const status = h("p", { class: "status", role: "status" });
    const form = h("form", { class: "form-card", novalidate: true }, [
      label(t("home.name"), name),
      label(t("home.signature"), signature),
      label(t("home.about"), about),
      label(t("home.place"), place),
      label(t("home.tags"), tags),
      label(t("home.cv"), file),
      profile.hasCv ? h("p", { class: "local-note", text: t("home.cvReady") }) : null,
      h("label", { class: "check" }, [pub, t("home.cvPublic")]),
      h("div", { class: "form-actions" }, h("button", { class: "btn btn-primary", type: "submit", text: t("home.save") })),
      status,
    ]);
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const picked = [...tags.querySelectorAll("input:checked")].map((node) => node.value);
      const res = await fetch("/api/profile", {
        method: "POST",
        credentials: "same-origin",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          displayName: name.value,
          signature: signature.value,
          about: about.value,
          place: place.value,
          tags: picked,
          cvPublic: pub.checked,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        status.textContent = data.error || "";
        return;
      }
      const cv = file.files && file.files[0];
      if (cv) {
        const dataUrl = await blobToData(cv);
        const up = await fetch("/api/cv", {
          method: "POST",
          credentials: "same-origin",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ mime: "application/pdf", name: cv.name, data: dataUrl }),
        });
        if (!up.ok) {
          const err = await up.json().catch(() => ({}));
          status.textContent = err.error || "";
          return;
        }
      }
      status.textContent = t("home.saved");
      load();
    });
    return form;
  }

  function label(text, control) {
    return h("label", { class: "field-label" }, [h("span", { text }), control]);
  }

  function blobToData(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  }

  async function load() {
    const params = new URLSearchParams(location.search);
    const asked = params.get("id");
    const session = await fetch("/api/session", { credentials: "same-origin" }).then((res) => res.json()).catch(() => ({}));
    const me = session.user || null;
    if (me && me.settings) window.AIMING_APPLY_SETTINGS(me.settings);
    const target = asked || (me && me.id);
    if (!target) {
      guest.hidden = false;
      app.hidden = true;
      app.replaceChildren();
      return;
    }
    const res = await fetch("/api/profile?id=" + encodeURIComponent(target), { credentials: "same-origin" });
    if (!res.ok) {
      guest.hidden = false;
      app.hidden = true;
      return;
    }
    const data = await res.json();
    guest.hidden = true;
    app.hidden = false;
    paint(data, me);
  }

  function paint(data, me) {
    const profile = data.profile;
    const mine = Boolean(me && me.id === profile.id);
    app.replaceChildren();
    const head = h("header", { class: "profile-head" });
    head.append(h("p", { class: "page-tag", text: mine ? t("nav.home") : profile.displayName }));
    head.append(h("h1", { class: "page-title", text: profile.displayName }));
    if (profile.signature) head.append(h("p", { class: "signature", text: profile.signature }));
    if (profile.place) head.append(h("p", { class: "local-note", text: profile.place }));
    if (profile.about) head.append(h("p", { class: "lede", text: profile.about }));
    if (profile.tags.length) {
      const row = h("p", { class: "post-meta" });
      profile.tags.forEach((id) => row.append(h("a", { class: "tag", href: "universe.html?id=" + id }, universeName(id))));
      head.append(row);
    }
    if (profile.cvId && (mine || profile.cvPublic)) {
      head.append(h("p", {}, h("a", { href: "/api/files?id=" + profile.cvId }, t("home.download"))));
    }
    const actions = h("div", { class: "form-actions" });
    if (mine) {
      const edit = h("button", { type: "button", class: "btn btn-primary", text: t("home.edit") });
      const form = editor(profile);
      form.hidden = true;
      edit.addEventListener("click", () => {
        form.hidden = !form.hidden;
        edit.setAttribute("aria-expanded", form.hidden ? "false" : "true");
      });
      actions.append(edit);
      head.append(actions, form);
    } else if (me) {
      const follow = h("button", {
        type: "button",
        class: "btn btn-primary",
        text: profile.following ? t("home.unfollow") : t("home.follow"),
      });
      follow.addEventListener("click", async () => {
        follow.disabled = true;
        await fetch("/api/follow", {
          method: "POST",
          credentials: "same-origin",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ userId: profile.id }),
        });
        load();
      });
      actions.append(follow);
      if (profile.companion) {
        actions.append(h("a", { class: "btn btn-ghost", href: "people.html?with=" + encodeURIComponent(profile.id) }, t("home.message")));
      }
      head.append(actions);
    }
    app.append(head);
    app.append(h("h2", { class: "block-title", text: t("home.posts") }));
    if (!data.posts.length) app.append(h("p", { class: "local-note", text: t("home.empty") }));
    data.posts.forEach((post) => app.append(postCard(post, mine)));
    if (mine) {
      const block = h("section", { id: "companion-posts", class: "companion-posts" });
      block.append(h("h2", { class: "block-title", text: t("home.companionPosts") }));
      const list = h("div", {});
      block.append(list);
      app.append(block);
      fetch("/api/companion-posts", { credentials: "same-origin" })
        .then((res) => res.json())
        .then((payload) => {
          const posts = payload.posts || [];
          if (!posts.length) list.append(h("p", { class: "local-note", text: t("home.empty") }));
          posts.forEach((post) => list.append(postCard(post, false)));
        })
        .catch(() => {});
    }
  }

  load();
})();
