export const initFilters = () => {
  const root = document.querySelector(".js-filters");

  if (!root) {
    return;
  }

  root.querySelectorAll(".js-filters-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.closest(".filters__group");

      if (!group) {
        return;
      }

      const opened = group.classList.toggle("_opened");
      button.setAttribute("aria-expanded", String(opened));
    });
  });

  const resetButton = root.querySelector(".js-filters-reset");

  resetButton?.addEventListener("click", () => {
    root.querySelectorAll(".filters-checkbox__input").forEach((input) => {
      input.checked = false;
    });

    const priceRoot = root.querySelector(".js-price-range");

    if (priceRoot) {
      priceRoot.dispatchEvent(new CustomEvent("filters:reset-price"));
    }
  });
};
