/* eslint-disable no-unused-vars */
import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import Swiper from './vendor/swiper';
import {initTabs} from './modules/init-tabs';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initTabs();
  });
});

const swiper = new Swiper('.coach__swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 40,
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: '.coach__swiper-button-next',
    prevEl: '.coach__swiper-button-prev',
  },
});

const getCarousel = new Swiper('.feedback__swiper', {
  direction: 'horizontal',
  spaceBetween: 60,
  speed: 1000,
  slidesPerView: 1,

  navigation: {
    nextEl: '.feedback__swiper-button-next',
    prevEl: '.feedback__swiper-button-prev',
  },
});


const playVideo = document.querySelector('[data-play="button"]');
const player = document.querySelector('[data-player="player"]');

playVideo.addEventListener('click', function () {
  player.style.display = 'block';
  player.style.zIndex = '2';
  player.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&start=0';
});

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------


  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
