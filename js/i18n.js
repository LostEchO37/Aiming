(function () {
  const STRINGS = {
    zh: {
      "nav.home": "首页",
      "nav.universes": "宇宙",
      "nav.learn": "学习",
      "nav.discuss": "讨论",
      "nav.companions": "同伴",
      "nav.settings": "设置",
      "nav.login": "登录",
      "nav.register": "注册",
      "nav.logout": "退出",
      "menu": "菜单",
      "close": "关闭",
      "settings.tag": "设置",
      "settings.title": "设置",
      "settings.intro": "这些选择会跟着你。登录之后记在账号上，没登录就留在这台浏览器。",
      "settings.language": "语言",
      "settings.theme": "外观",
      "settings.light": "浅色",
      "settings.dark": "深色",
      "settings.motion": "减少动效",
      "settings.motionHelp": "页面切换和颜色变化不再做动画。",
      "settings.universe": "默认宇宙",
      "settings.universeNone": "不指定",
      "settings.saved": "已记下。",
      "settings.local": "先记在这台浏览器。登录后会记在账号上。",
      "home.edit": "编辑资料",
      "home.save": "保存",
      "home.signature": "签名",
      "home.about": "简介",
      "home.place": "所在",
      "home.name": "怎么称呼",
      "home.tags": "标签",
      "home.cv": "简历",
      "home.cvPublic": "在主页上公开这份简历",
      "home.cvReady": "已有一份简历。",
      "home.download": "下载简历",
      "home.follow": "关注",
      "home.unfollow": "取消关注",
      "home.companion": "同伴",
      "home.message": "发消息",
      "home.hidden": "已隐藏",
      "home.hide": "对别人隐藏",
      "home.show": "重新公开",
      "home.posts": "写下的",
      "home.companionPosts": "同伴帖",
      "home.empty": "还没有写下。",
      "home.guest": "登录之后，这里是你的主页。",
      "home.saved": "资料已记下。",
      "companions.title": "同伴",
      "companions.intro": "互相关注的人是同伴。同伴之间可以发消息。",
      "companions.empty": "还没有同伴。可以先从讨论里点进一个人的主页。",
      "companions.find": "找人",
      "companions.login": "登录后可以关注，互相关注就是同伴。",
      "companions.thread": "消息",
      "companions.send": "发送",
      "companions.placeholder": "写给同伴的一句。",
      "companions.sent": "已发出。",
      "discuss.companionPosts": "同伴帖",
      "discuss.attach": "图片或视频",
      "discuss.all": "全部讨论",
    },
    zhHant: {
      "nav.home": "首頁",
      "nav.universes": "宇宙",
      "nav.learn": "學習",
      "nav.discuss": "討論",
      "nav.companions": "同伴",
      "nav.settings": "設置",
      "nav.login": "登入",
      "nav.register": "註冊",
      "nav.logout": "退出",
      "menu": "選單",
      "close": "關閉",
      "settings.tag": "設置",
      "settings.title": "設置",
      "settings.intro": "這些選擇會跟著你。登入之後記在帳號上，沒登入就留在這台瀏覽器。",
      "settings.language": "語言",
      "settings.theme": "外觀",
      "settings.light": "淺色",
      "settings.dark": "深色",
      "settings.motion": "減少動效",
      "settings.motionHelp": "頁面切換和顏色變化不再做動畫。",
      "settings.universe": "預設宇宙",
      "settings.universeNone": "不指定",
      "settings.saved": "已記下。",
      "settings.local": "先記在這台瀏覽器。登入後會記在帳號上。",
      "home.edit": "編輯資料",
      "home.save": "保存",
      "home.signature": "簽名",
      "home.about": "簡介",
      "home.place": "所在",
      "home.name": "怎麼稱呼",
      "home.tags": "標籤",
      "home.cv": "簡歷",
      "home.cvPublic": "在主頁上公開這份簡歷",
      "home.cvReady": "已有一份簡歷。",
      "home.download": "下載簡歷",
      "home.follow": "關注",
      "home.unfollow": "取消關注",
      "home.companion": "同伴",
      "home.message": "發消息",
      "home.hidden": "已隱藏",
      "home.hide": "對別人隱藏",
      "home.show": "重新公開",
      "home.posts": "寫下的",
      "home.companionPosts": "同伴帖",
      "home.empty": "還沒有寫下。",
      "home.guest": "登入之後，這裡是你的主頁。",
      "home.saved": "資料已記下。",
      "companions.title": "同伴",
      "companions.intro": "互相關注的人是同伴。同伴之間可以發消息。",
      "companions.empty": "還沒有同伴。可以先從討論裡點進一個人的主頁。",
      "companions.find": "找人",
      "companions.login": "登入後可以關注，互相關注就是同伴。",
      "companions.thread": "消息",
      "companions.send": "發送",
      "companions.placeholder": "寫給同伴的一句。",
      "companions.sent": "已發出。",
      "discuss.companionPosts": "同伴帖",
      "discuss.attach": "圖片或視頻",
      "discuss.all": "全部討論",
    },
    en: {
      "nav.home": "Home",
      "nav.universes": "Universes",
      "nav.learn": "Learn",
      "nav.discuss": "Discuss",
      "nav.companions": "Companions",
      "nav.settings": "Settings",
      "nav.login": "Log in",
      "nav.register": "Register",
      "nav.logout": "Log out",
      "menu": "Menu",
      "close": "Close",
      "settings.tag": "Settings",
      "settings.title": "Settings",
      "settings.intro": "These stay with you. On an account when you are logged in, and in this browser when you are not.",
      "settings.language": "Language",
      "settings.theme": "Appearance",
      "settings.light": "Light",
      "settings.dark": "Dark",
      "settings.motion": "Reduce motion",
      "settings.motionHelp": "Page changes and color shifts stay still.",
      "settings.universe": "Default universe",
      "settings.universeNone": "None",
      "settings.saved": "Saved.",
      "settings.local": "Saved in this browser. It moves to your account when you log in.",
      "home.edit": "Edit profile",
      "home.save": "Save",
      "home.signature": "Signature",
      "home.about": "About",
      "home.place": "Place",
      "home.name": "Name",
      "home.tags": "Tags",
      "home.cv": "CV",
      "home.cvPublic": "Show this CV on the profile",
      "home.cvReady": "A CV is already here.",
      "home.download": "Download CV",
      "home.follow": "Follow",
      "home.unfollow": "Unfollow",
      "home.companion": "Companions",
      "home.message": "Message",
      "home.hidden": "Hidden",
      "home.hide": "Hide from others",
      "home.show": "Show again",
      "home.posts": "Posts",
      "home.companionPosts": "Companion posts",
      "home.empty": "Nothing here yet.",
      "home.guest": "After you log in, this is your home.",
      "home.saved": "Profile saved.",
      "companions.title": "Companions",
      "companions.intro": "People who follow each other are companions. Companions can message each other.",
      "companions.empty": "No companions yet. Open someone’s home from a post.",
      "companions.find": "Find people",
      "companions.login": "Log in to follow. When you both follow, you are companions.",
      "companions.thread": "Messages",
      "companions.send": "Send",
      "companions.placeholder": "A note to your companion.",
      "companions.sent": "Sent.",
      "discuss.companionPosts": "Companion posts",
      "discuss.attach": "Image or video",
      "discuss.all": "All posts",
    },
  };

  function current() {
    const lang = document.documentElement.getAttribute("data-lang") || "zh";
    return STRINGS[lang] ? lang : "zh";
  }

  function t(key) {
    const pack = STRINGS[current()] || STRINGS.zh;
    return pack[key] || STRINGS.zh[key] || key;
  }

  function applyI18n(root) {
    (root || document).querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.getAttribute("data-i18n"));
    });
  }

  function readSettings() {
    try {
      return JSON.parse(localStorage.getItem("aiming.settings.v1") || "{}") || {};
    } catch (error) {
      return {};
    }
  }

  function applySettings(settings) {
    const next = {
      language: settings.language === "zhHant" || settings.language === "en" ? settings.language : "zh",
      theme: settings.theme === "dark" ? "dark" : "light",
      reduceMotion: Boolean(settings.reduceMotion),
      defaultUniverse: settings.defaultUniverse || "",
    };
    localStorage.setItem("aiming.settings.v1", JSON.stringify(next));
    const root = document.documentElement;
    root.setAttribute("data-lang", next.language);
    root.lang = next.language === "en" ? "en" : next.language === "zhHant" ? "zh-Hant" : "zh-Hans";
    if (next.theme === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    if (next.reduceMotion) root.setAttribute("data-motion", "reduce");
    else root.removeAttribute("data-motion");
    const theme = document.querySelector('meta[name="theme-color"]');
    if (theme) theme.setAttribute("content", next.theme === "dark" ? "#1c1915" : "#f3efe7");
    window.AIMING_SETTINGS = next;
    applyI18n(document);
    document.dispatchEvent(new CustomEvent("aiming-i18n"));
    return next;
  }

  window.t = t;
  window.AIMING_APPLY_SETTINGS = applySettings;
  window.AIMING_SETTINGS = readSettings();
  applyI18n(document);
})();
