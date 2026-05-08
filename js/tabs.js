export function initTabs() {
  const tabsLayouts = document.querySelectorAll("[data-tabs-layout]");

  tabsLayouts.forEach((layout) => {
    const tabs = layout.querySelectorAll("[data-tabs-tab]");
    const panels = layout.querySelectorAll("[data-tabs-panel]");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.tabsTab;

        tabs.forEach((item) => {
          item.classList.remove("is-active");
          item.setAttribute("aria-selected", "false");
        });

        panels.forEach((panel) => {
          panel.classList.remove("is-active");
          panel.hidden = true;
        });

        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");

        const activePanel = layout.querySelector(
          `[data-tabs-panel="${target}"]`,
        );

        if (activePanel) {
          activePanel.classList.add("is-active");
          activePanel.hidden = false;
        }
      });
    });

    panels.forEach((panel) => {
      if (!panel.classList.contains("is-active")) {
        panel.hidden = true;
      }
    });
  });
}
