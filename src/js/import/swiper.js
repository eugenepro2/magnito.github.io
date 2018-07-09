import Swiper from 'swiper';

//intro
var swiper = new Swiper('.swiper-intro', {
  pagination: {
    el: '.swiper-pagination-intro',
    clickable: true,
  },
});

//home-kinds
var swiper1 = new Swiper('.home-kinds__swiper', {
  loop: true,
  spaceBetween: 30,
});

//sentence
var swiper2 = new Swiper('.swiper-sentence', {
  pagination: {
    el: '.swiper-pagination-sentence',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-sentence-next',
    prevEl: '.swiper-sentence-prev',
  },
});

//hit
var swiper3 = new Swiper('.swiper-hit', {
  navigation: {
    nextEl: '.swiper-hit-next',
    prevEl: '.swiper-hit-prev',
  },
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 40
    }
  }
});
