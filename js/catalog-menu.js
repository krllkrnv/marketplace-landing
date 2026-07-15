export const initCatalogMenu = () => {
  const toggle = document.querySelector(".js-catalog-toggle");
  const menu = document.querySelector(".js-catalog-menu");

  if (!toggle || !menu) {
    return;
  }

  const isOpen = () => menu.classList.contains("_opened");

  const closeMenu = ({ restoreFocus = false } = {}) => {
    if (!isOpen()) {
      return;
    }

    menu.classList.remove("_opened");
    menu.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");

    if (restoreFocus) {
      toggle.focus();
    }
  };

  const openMenu = () => {
    menu.classList.add("_opened");
    menu.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    isOpen() ? closeMenu() : openMenu();
  });

  menu.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("click", () => {
    closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) {
      closeMenu({ restoreFocus: true });
    }
  });

  menu.querySelectorAll(".catalog__category").forEach((button) => {
    button.addEventListener("click", () => {
      menu.querySelectorAll(".catalog__category").forEach((item) => {
        item.classList.remove("_active");
        item.setAttribute("aria-pressed", "false");
      });
      button.classList.add("_active");
      button.setAttribute("aria-pressed", "true");
    });
  });
};
