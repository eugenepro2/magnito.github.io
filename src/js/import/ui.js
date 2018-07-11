import '../lib/selectize.min.js';
import modal from 'jquery-modal';
import rangeslider from 'rangeslider.js';
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


//size catalog
$('.catalog-card__size span').on('click', function() {
  $('.catalog-card__size__list').fadeToggle();
  $(this).find('i').toggleClass('active');
  $(this).toggleClass('active');
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


//calculation
$('.calculation__form__text a').on('click', function() {
  let btn = $(this);
  event.preventDefault();
  btn.fadeOut();
  setTimeout(function() {
    btn.next().fadeIn();
  }, 370);
});


//map

google.maps.event.addDomListener(window, 'load', init);
        
function init() {
  var coordinates = {lat: 55.894384, lng: 37.406382};
  if($(window).width() > 767) {
    var mapOptions = {
      zoom: 16,
      center: {lat: 55.894366, lng: 37.4026382},
    };
  }else {
    var mapOptions = {
      zoom: 16,
      center: {lat: 55.896772, lng: 37.406382},
    };
  }
  var mapElement = document.getElementById('map');
  var map = new google.maps.Map(mapElement, mapOptions);
  var image = 'img/pin.svg';
  var beachMarker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: image
  });
}
