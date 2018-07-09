
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
