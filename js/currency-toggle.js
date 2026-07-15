export const initCurrencyToggle = () => {
  const currency = document.querySelector(".js-currency");
  const amountLabel = document.querySelector(".js-amount-label");
  const payButton = document.querySelector(".js-pay-button");

  if (!currency) {
    return;
  }

  const syncLabels = (sign) => {
    if (amountLabel) {
      amountLabel.textContent = `500${sign}`;
    }

    if (payButton) {
      payButton.textContent = `Оплатить 500${sign}`;
    }
  };

  const setActive = (button) => {
    currency.querySelectorAll(".currency__button").forEach((item) => {
      item.classList.remove("_active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("_active");
    button.setAttribute("aria-pressed", "true");
    syncLabels(button.dataset.currency || "₽");
  };

  const initial = currency.querySelector(".currency__button._active") || currency.querySelector(".currency__button");

  if (initial) {
    setActive(initial);
  }

  currency.addEventListener("click", (event) => {
    const button = event.target.closest(".currency__button");

    if (!button) {
      return;
    }

    setActive(button);
  });
};
