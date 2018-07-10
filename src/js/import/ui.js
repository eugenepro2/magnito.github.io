
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

$('.header__menu__block').hover(function() {
  $(this).find('.header__menu__block-list').slideToggle();
});
