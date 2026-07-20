export const initOfficialSlider = () => {
  const slider = document.querySelector(".js-official-slider");

  if (!slider || typeof Swiper === "undefined") {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  new Swiper(slider, {
    slidesPerView: "auto",
    spaceBetween: 16,
    freeMode: true,
    grabCursor: true,
    speed: prefersReducedMotion ? 0 : 450,
    navigation: {
      prevEl: ".js-official-prev",
      nextEl: ".js-official-next",
    },
  });
};
