import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  modules: [Navigation, Pagination],
  simulateTouch: true,
  slideClass: "card",
  slidesPerView: "auto",
  slidesPerGroup: 4,
  slidesPerGroupAuto: true,
  spaceBetween: 24,

  pagination: {
    el: ".dots",
    horizontalClass: "dots--horizontal",
    bulletClass: "dots__dot",
    bulletActiveClass: "dots__dot--active",
    clickableClass: "dots--clickable",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
