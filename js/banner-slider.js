export const initBannerSlider = () => {
  const slider = document.querySelector(".js-banner-slider");

  if (!slider || typeof Swiper === "undefined") {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  new Swiper(slider, {
    loop: true,
    speed: prefersReducedMotion ? 0 : 650,
    autoplay: prefersReducedMotion
      ? false
      : {
          delay: 5000,
          disableOnInteraction: false,
        },
    navigation: {
      prevEl: ".js-banner-prev",
      nextEl: ".js-banner-next",
    },
    pagination: {
      el: ".js-banner-pagination",
      clickable: true,
    },
  });
};
