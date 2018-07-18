import '../lib/selectize.min.js';
import Rangeslider from 'rangeslider.js';
import '../lib/maskedinput.js';


//mask input
$('input[type="tel"]').mask('+7 (999) 999-99-99');




//search
$('.header__tools__search').on('click', function() {
  $('.search').addClass('active');
  $('.search').find('input[type="text"]').focus();
});
$('.search__close').on('click', function() {
  $('.search').removeClass('active');
});



//select
$('select').selectize('options');


//range

$('[rel="modal:open"]').on('click', function() {
  setTimeout(function() {
    $('input[type="range"]').rangeslider({
      polyfill: false,
      onSlide: function() {
        result();
      },
    });
    function result() {
      let val = $('input[type="range"]').val();
      let coins = $('.coins');
      let coinsSum = $('.coins-sum');
      let edition = $('.edition');
      let spanVal = $('.form__range__block__top span');
      coins.text(val + ' ₽');
      spanVal.removeClass('active');
      spanVal.eq(val).prev('span').addClass('active');
    
    }
  }, 50);
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
  $('.header__menu__block i').on('click', function() {
    event.preventDefault();
    $(this).toggleClass('active');
    $(this).parents('.header__menu__block').find('.header__menu__block-list').slideToggle();
  });
}

$(document).mouseup(function(e) {
  var block = $('.header__menu, .header__tools__burger');
  if (!block.is(e.target) && block.has(e.target).length === 0) { 
    $('.header__menu').fadeOut();
    $('.header__tools__burger').removeClass('active');
  }
});


//calculation
$('.calculation__form__text a, .calculation-order .form__text a').on('click', function() {
  let btn = $(this);
  event.preventDefault();
  btn.fadeOut();
  setTimeout(function() {
    btn.next().fadeIn();
  }, 370);
});

