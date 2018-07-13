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
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination-sentence',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-sentence-next',
    prevEl: '.swiper-sentence-prev',
  },
  on: {
    slideChangeTransitionEnd: function() {
      if ($('.swiper-slide-active').hasClass('red')) {
        $('.home-sentence__content__before, .swiper-pagination-sentence').addClass('red');
      } else{
        $('.home-sentence__content__before, .swiper-pagination-sentence').removeClass('red');
      }
    }
  }
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
