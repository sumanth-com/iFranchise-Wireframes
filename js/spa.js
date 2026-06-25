/* SPA Router — one page per module, path-based URLs (/leads/dashboard) */

const WF_SPA = (() => {
  let config = null;
  let screens = {};
  let currentId = null;

  function moduleBasePath() {
    if (!config) {
      const path = location.pathname.replace(/\/index\.html$/i, "");
      return path.replace(/\/$/, "") || "/";
    }
    const parts = location.pathname.replace(/\/index\.html$/i, "").split("/").filter(Boolean);
    const screenIds = Object.keys(screens);
    if (parts.length && screenIds.includes(parts[parts.length - 1])) {
      parts.pop();
    }
    return parts.length ? `/${parts.join("/")}` : "/";
  }

  function screenUrl(screenId) {
    if (!config) return location.pathname;
    const base = moduleBasePath();
    const id = screenId || config.defaultScreen;
    if (!id || id === config.defaultScreen) {
      return `${base}/${config.defaultScreen}`;
    }
    return `${base}/${id}`;
  }

  function screenFromPath() {
    const parts = location.pathname.replace(/\/index\.html$/i, "").split("/").filter(Boolean);
    const last = parts[parts.length - 1];
    if (screens[last]) return last;
    return null;
  }

  function init(moduleConfig) {
    config = moduleConfig;
    screens = {};
    moduleConfig.screens.forEach((s) => { screens[s.id] = s; });

    const isAuth = moduleConfig.layout === "auth";

    if (isAuth) {
      document.body.innerHTML = `
        <div class="wf-auth-app">
          <aside class="wf-auth__wire-panel" aria-label="Wireframe navigation">
            <div class="wf-card wf-auth__wire-nav-card">
              <div class="wf-card__header">
                <h2 class="wf-card__title">Wireframe screens</h2>
              </div>
              <div class="wf-card__body wf-auth__wire-nav-body">
                <p class="wf-auth__wire-nav-label">Quick access</p>
                <nav class="wf-auth__wire-nav" aria-label="Authentication screens">
                  <div class="wf-auth__wire-nav-links">
                  ${moduleConfig.screens.map((s) => `
                    <button type="button" class="wf-auth__wire-link" data-screen="${s.id}">${s.shortLabel || s.label}</button>
                  `).join("")}
                  </div>
                </nav>
              </div>
              <div class="wf-card__footer wf-auth__wire-nav-footer">
                <a href="/" class="wf-auth__wire-hub-link">← All modules</a>
              </div>
            </div>
          </aside>
          <main class="wf-auth">
            <div class="wf-auth__shell">
              <div id="wf-screen-container" class="wf-auth__screen"></div>
            </div>
          </main>
        </div>
        ${moduleConfig.modals ? moduleConfig.modals() : ""}
      `;
      document.body.classList.add("wf-spa-module", "wf-auth-module");
    } else {
      document.body.innerHTML = `
        <div class="wf-app">
          ${WF.spaSidebar(moduleConfig)}
          <div class="wf-main">
            ${WF.topbar(moduleConfig.searchPlaceholder)}
            <main class="wf-content">
              <div class="wf-ptr-indicator" id="wf-ptr-indicator">Pull to refresh</div>
              <div id="wf-mobile-screen-nav-wrap"></div>
              <nav class="wf-breadcrumb" id="wf-breadcrumb" aria-label="Breadcrumb"></nav>
              <div id="wf-screen-container"></div>
            </main>
          </div>
        </div>
        ${WF.mobileBottomNav(moduleConfig.screens, moduleConfig.defaultScreen)}
        ${moduleConfig.modals ? moduleConfig.modals() : WF.modals()}
      `;
      document.body.classList.add("wf-spa-module");
    }

    document.body.dataset.wfShellBound = "";
    WF.bindEvents();
    bindSpaNav();
    if (typeof moduleConfig.onAfterBind === "function") moduleConfig.onAfterBind();

    const initial = screenFromPath() || moduleConfig.defaultScreen;
    navigate(initial, false);

    if (!screenFromPath() && !location.pathname.endsWith(`/${moduleConfig.defaultScreen}`)) {
      history.replaceState({ screen: initial }, "", screenUrl(initial));
    }

    window.addEventListener("popstate", () => {
      navigate(screenFromPath() || config.defaultScreen, false);
    });
  }

  function resolveBreadcrumb(screen) {
    const bc = screen.breadcrumb;
    if (typeof bc === "function") return bc();
    return bc || [{ label: screen.label }];
  }

  function syncNavChrome() {
    if (!config || !currentId) return;
    const screen = screens[currentId];
    if (!screen) return;

    if (config.layout === "auth") {
      document.querySelectorAll(".wf-auth__wire-link").forEach((el) => {
        el.classList.toggle("is-active", el.getAttribute("data-screen") === currentId);
      });
      return;
    }

    const breadcrumbEl = document.getElementById("wf-breadcrumb");
    const mobileNavWrap = document.getElementById("wf-mobile-screen-nav-wrap");
    if (!breadcrumbEl || !mobileNavWrap) return;

    const crumbs = resolveBreadcrumb(screen);
    breadcrumbEl.innerHTML = WF.spaBreadcrumb(
      config.moduleLabel,
      screenUrl(config.defaultScreen),
      crumbs
    );

    if (WF.isMobileViewport()) {
      mobileNavWrap.innerHTML = WF.mobileScreenNavBar(config, { ...screen, breadcrumb: crumbs });
      breadcrumbEl.classList.add("wf-hidden");
      WF.refreshMobileBottomNav(config.screens, currentId);
    } else {
      mobileNavWrap.innerHTML = "";
      breadcrumbEl.classList.remove("wf-hidden");
    }

    WF.updateBottomNavActive(currentId, config.screens);
    highlightSidebarLink(currentId);
  }

  function highlightSidebarLink(screenId) {
    document.querySelectorAll(".wf-sidebar__link[data-screen]").forEach((el) => {
      el.classList.toggle("wf-sidebar__link--active", el.getAttribute("data-screen") === screenId);
    });
    const activeLink = document.querySelector(`.wf-sidebar__link[data-screen="${screenId}"]`);
    if (activeLink) activeLink.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  function navigate(screenId, pushState = true) {
    const screen = screens[screenId];
    if (!screen) {
      const fallback = screens[config.defaultScreen]
        ? config.defaultScreen
        : Object.keys(screens)[0];
      if (!fallback) return;
      if (pushState) {
        navigate(fallback, true);
      } else {
        navigate(fallback, false);
      }
      return;
    }

    currentId = screenId;
    const url = screenUrl(screenId);
    if (pushState && location.pathname !== url) {
      history.pushState({ screen: screenId }, "", url);
    }

    const container = document.getElementById("wf-screen-container");
    container.innerHTML = screen.render();
    container.classList.remove("wf-screen-enter");
    void container.offsetWidth;
    container.classList.add("wf-screen-enter");

    syncNavChrome();

    document.title = `${screen.label} — ${config.moduleTitle} — ${WF.BRAND_NAME}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (config.layout === "auth") {
      document.querySelector(".wf-auth")?.scrollTo({ top: 0 });
    } else {
      document.querySelector(".wf-content")?.scrollTo({ top: 0 });
    }

    WF.bindEvents();
    if (typeof config.onAfterBind === "function") config.onAfterBind();
  }

  function bindSpaNav() {
    if (document.body.dataset.spaNavBound) return;
    document.body.dataset.spaNavBound = "1";

    document.body.addEventListener("click", (e) => {
      const el = e.target.closest("[data-screen]");
      if (!el) return;
      const sid = el.getAttribute("data-screen");
      if (!sid || !screens[sid]) return;
      e.preventDefault();
      navigate(sid);
      document.getElementById("wf-sidebar")?.classList.remove("is-open");
      document.getElementById("wf-sidebar-overlay")?.classList.remove("is-visible");
    });
  }

  function go(screenId) { navigate(screenId); }

  function getCurrent() { return currentId; }

  function getModuleConfig() { return config; }

  return {
    init,
    navigate: go,
    getCurrent,
    syncNavChrome,
    getModuleConfig,
    screenUrl,
    moduleBasePath
  };
})();
