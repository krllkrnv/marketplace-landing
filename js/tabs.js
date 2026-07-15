export const initTabs = () => {
  document.querySelectorAll(".js-tabs").forEach((tabs) => {
    tabs.addEventListener("click", (event) => {
      const tab = event.target.closest(".products__tab");

      if (!tab) {
        return;
      }

      tabs.querySelectorAll(".products__tab").forEach((item) => {
        item.classList.remove("_active");
        item.setAttribute("aria-pressed", "false");
      });
      tab.classList.add("_active");
      tab.setAttribute("aria-pressed", "true");
    });
  });
};
