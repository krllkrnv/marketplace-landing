export const initCatalogMenu = () => {
  const toggle = document.querySelector(".js-catalog-toggle");
  const menu = document.querySelector(".js-catalog-menu");

  if (!toggle || !menu) {
    return;
  }

  const closeMenu = () => {
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    menu.classList.contains("is-open") ? closeMenu() : openMenu();
  });

  menu.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  menu.querySelectorAll(".catalog__category").forEach((button) => {
    button.addEventListener("click", () => {
      menu.querySelectorAll(".catalog__category").forEach((item) => {
        item.classList.remove("catalog__category--active");
      });
      button.classList.add("catalog__category--active");
    });
  });
};
