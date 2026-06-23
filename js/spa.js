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
            <nav class="wf-breadcrumb" id="wf-breadcrumb" aria-label="Breadcrumb"></nav>
            <div id="wf-screen-container"></div>
          </main>
        </div>
      </div>
      ${moduleConfig.modals ? moduleConfig.modals() : WF.modals()}
    `;

    document.body.dataset.wfShellBound = "";
    WF.bindEvents();
    bindSpaNav();

    const initial = location.hash.slice(1) || moduleConfig.defaultScreen;
    navigate(initial, false);
    window.addEventListener("hashchange", () => navigate(location.hash.slice(1), false));
  }

  function navigate(screenId, pushHash = true) {
    const screen = screens[screenId];
    if (!screen) {
      navigate(config.defaultScreen, pushHash);
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

    document.getElementById("wf-breadcrumb").innerHTML = WF.spaBreadcrumb(
      config.moduleLabel,
      config.moduleHref,
      screen.breadcrumb || [{ label: screen.label }]
    );

    document.querySelectorAll(".wf-sidebar__link[data-screen]").forEach((el) => {
      el.classList.toggle("wf-sidebar__link--active", el.getAttribute("data-screen") === screenId);
    });

    document.title = `${screen.label} — ${config.moduleTitle} — FranchiseCRM`;
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
    });
  }

  function go(screenId) { navigate(screenId); }

  function getCurrent() { return currentId; }

  return { init, navigate: go, getCurrent };
})();
