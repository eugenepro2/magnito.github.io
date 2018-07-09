

$('.catalog-card__size span').on('click', function() {
  $('.catalog-card__size__list').slideToggle();
  $(this).find('i').toggleClass('active');
});
