export const initCurrencyToggle = () => {
  const currency = document.querySelector(".js-currency");
  const amountLabel = document.querySelector(".js-amount-label");
  const payButton = document.querySelector(".js-pay-button");

  if (!currency) {
    return;
  }

  currency.addEventListener("click", (event) => {
    const button = event.target.closest(".currency__button");

    if (!button) {
      return;
    }

    currency.querySelectorAll(".currency__button").forEach((item) => {
      item.classList.remove("_active");
    });
    button.classList.add("_active");

    const sign = button.dataset.currency || "$";

    if (amountLabel) {
      amountLabel.textContent = `500${sign}`;
    }

    if (payButton) {
      payButton.textContent = `Оплатить 500${sign}`;
    }
  });
};
