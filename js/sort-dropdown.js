export const initSortDropdown = () => {
  const root = document.querySelector(".js-sort");

  if (!root) {
    return;
  }

  const toggle = root.querySelector(".js-sort-toggle");
  const list = root.querySelector(".js-sort-list");
  const label = root.querySelector(".js-sort-label");
  const options = root.querySelectorAll(".js-sort-option");

  if (!toggle || !list || !label) {
    return;
  }

  const isOpen = () => root.classList.contains("_opened");

  const close = ({ restoreFocus = false } = {}) => {
    if (!isOpen()) {
      return;
    }

    root.classList.remove("_opened");
    list.hidden = true;
    toggle.setAttribute("aria-expanded", "false");

    if (restoreFocus) {
      toggle.focus();
    }
  };

  const open = () => {
    root.classList.add("_opened");
    list.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    isOpen() ? close() : open();
  });

  root.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("click", () => {
    close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) {
      close({ restoreFocus: true });
    }
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      options.forEach((item) => {
        item.classList.remove("_active");
        item.setAttribute("aria-selected", "false");
      });
      option.classList.add("_active");
      option.setAttribute("aria-selected", "true");
      label.textContent = option.textContent.trim();
      close();
    });
  });
};
