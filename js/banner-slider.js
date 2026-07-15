export const initBannerSlider = () => {
  const slider = document.querySelector(".js-banner-slider");

  if (!slider || typeof Swiper === "undefined") {
    return;
  }

  new Swiper(slider, {
    loop: true,
    speed: 650,
    autoplay: {
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
