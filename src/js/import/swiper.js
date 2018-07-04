import Swiper from 'swiper';

//intro
var swiper = new Swiper('.swiper-intro', {
  pagination: {
    el: '.swiper-pagination-intro',
    clickable: true,
  },
});

//sentence
var swiper = new Swiper('.swiper-sentence', {
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
var swiper = new Swiper('.swiper-hit', {
  navigation: {
    nextEl: '.swiper-hit-next',
    prevEl: '.swiper-hit-prev',
  },
});
