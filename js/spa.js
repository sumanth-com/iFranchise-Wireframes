/* SPA Router — one page per module, all screens in-page */

const WF_SPA = (() => {
  let config = null;
  let screens = {};
  let currentId = null;

  function init(moduleConfig) {
    config = moduleConfig;
    screens = {};
    moduleConfig.screens.forEach((s) => { screens[s.id] = s; });

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

    document.body.dataset.wfShellBound = "";
    document.body.classList.add("wf-spa-module");
    WF.bindEvents();
    bindSpaNav();

    const initial = location.hash.slice(1) || moduleConfig.defaultScreen;
    navigate(initial, false);
    window.addEventListener("hashchange", () => navigate(location.hash.slice(1), false));
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

    const breadcrumbEl = document.getElementById("wf-breadcrumb");
    const mobileNavWrap = document.getElementById("wf-mobile-screen-nav-wrap");
    if (!breadcrumbEl || !mobileNavWrap) return;

    const crumbs = resolveBreadcrumb(screen);
    breadcrumbEl.innerHTML = WF.spaBreadcrumb(
      config.moduleLabel,
      config.moduleHref,
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

  function navigate(screenId, pushHash = true) {
    const screen = screens[screenId];
    if (!screen) {
      const fallback = screens[config.defaultScreen]
        ? config.defaultScreen
        : Object.keys(screens)[0];
      if (!fallback) return;
      if (pushHash) {
        location.replace(`#${fallback}`);
      } else {
        navigate(fallback, true);
      }
      return;
    }

    currentId = screenId;
    if (pushHash && location.hash.slice(1) !== screenId) {
      location.hash = screenId;
    }

    const container = document.getElementById("wf-screen-container");
    container.innerHTML = screen.render();
    container.classList.remove("wf-screen-enter");
    void container.offsetWidth;
    container.classList.add("wf-screen-enter");

    syncNavChrome();

    document.title = `${screen.label} — ${config.moduleTitle} — ${WF.BRAND_NAME}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.querySelector(".wf-content")?.scrollTo({ top: 0 });

    WF.bindEvents();
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

  return { init, navigate: go, getCurrent, syncNavChrome, getModuleConfig };
})();
