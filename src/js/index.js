import tagline from "./modules/tagline";
import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper(".swiper", {
  // Optional parameters
  modules: [Navigation, Pagination],
  simulateTouch: true,
  slideClass: 'card',
  slidesPerView: 'auto',

  pagination: {
    el: '.dots',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
