import '../lib/selectize.min.js';
import modal from 'jquery-modal';
import rangeslider from 'rangeslider.js';

//select
$('select').selectize('options');


//range
$('input[type="range"]').rangeslider({
  polyfill: false,
  // onSlide: function() {
  //   day();
  // },
});

//size catalog
$('.catalog-card__size span').on('click', function() {
  $('.catalog-card__size__list').slideToggle();
  $(this).find('i').toggleClass('active');
});


//aside
$('.aside h4').on('click', function() {
  event.preventDefault();
  $(this).next('.aside-list').slideToggle();
  $(this).find('i').toggleClass('active');
});


//header-menu

$('.header__tools__burger').on('click', function() {
  $(this).toggleClass('active');
  $('.header__menu').fadeToggle();
});

if($(window).width() > 767) {
  $('.header__menu__block').hover(function() {
    $(this).find('.header__menu__block-list').slideToggle();
  });
}
