import Swiper from 'swiper';


var swiper = new Swiper('.swiper-intro', {
  pagination: {
    el: '.swiper-pagination-intro',
    clickable: true,
  },
});


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
