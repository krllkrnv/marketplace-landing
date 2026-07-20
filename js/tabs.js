const scrollTabIntoView = (container, tab) => {
  const containerRect = container.getBoundingClientRect();
  const tabRect = tab.getBoundingClientRect();
  const left =
    tabRect.left -
    containerRect.left +
    container.scrollLeft -
    (containerRect.width / 2 - tabRect.width / 2);

  container.scrollTo({
    left,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
  });
};

export const initTabs = () => {
  document.querySelectorAll(".js-tabs").forEach((tabs) => {
    tabs.addEventListener("click", (event) => {
      const tab = event.target.closest(".products__tab");

      if (!tab || !tabs.contains(tab)) {
        return;
      }

      tabs.querySelectorAll(".products__tab").forEach((item) => {
        item.classList.remove("_active");
        item.setAttribute("aria-pressed", "false");
      });
      tab.classList.add("_active");
      tab.setAttribute("aria-pressed", "true");

      if (tabs.scrollWidth > tabs.clientWidth) {
        scrollTabIntoView(tabs, tab);
      }
    });
  });
};
