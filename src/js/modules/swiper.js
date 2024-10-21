import Swiper from "swiper";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  modules: [Pagination],
  simulateTouch: true,
  slideClass: "card",
  slidesPerView: "auto",
  // slidesPerGroup: 4,
  slidesPerGroupAuto: true,
  spaceBetween: 12,

  pagination: {
    el: ".dots",
    // horizontalClass: "dots--horizontal",
    // bulletClass: "dots__dot",
    // bulletActiveClass: "dots__dot--active",
    // clickableClass: "dots--clickable",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    320: {
      spaceBetween: 12,
      // centeredSlides: true,
    },
    900: {
      spaceBetween: 24,
    },
  },
});
