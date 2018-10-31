$(document).ready(function() {
  var pageHeader = $('.js-page-header');

  if ( pageHeader.offset().top > 400 ) {
    setTimeout(function () {
      pageHeader.addClass('page-header--visible');
    }, 1500)
  }

  $(window).on('scroll', function() {
    pageHeader.toggleClass('page-header--visible', window.scrollY >= 400 || window.pageYOffset >= 400);
  })
});
