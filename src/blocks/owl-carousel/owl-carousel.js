$(document).ready(function(){

  $("#gallery").owlCarousel({
    items: 3,
    loop: true,
    center: true,
    dots: false,
    nav: false,
    responsive : {
      0 : {
        items: 1,
        loop: true,
        center: true,
      },
      480 : {
        items: 3,
      },
      768 : {
        items: 3,
      },
      992 : {
        items: 3,
      },
      1200 : {
        items: 3,
      },
      1800 : {
        items: 3,
      }
    }
  });

});
