;( function( window, document )
{
  'use strict';

  var file     = 'img/sprite-svg.svg',
    revision = 1;

  if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
    return true;

  var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
    request,
    data,
    insertIT = function()
    {
      document.body.insertAdjacentHTML( 'afterbegin', data );
    },
    insert = function()
    {
      if( document.body ) insertIT();
      else document.addEventListener( 'DOMContentLoaded', insertIT );
    };

  if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
  {
    data = localStorage.getItem( 'inlineSVGdata' );
    if( data )
    {
      insert();
      return true;
    }
  }

  try
  {
    request = new XMLHttpRequest();
    request.open( 'GET', file, true );
    request.onload = function()
    {
      if( request.status >= 200 && request.status < 400 )
      {
        data = request.responseText;
        insert();
        if( isLocalStorage )
        {
          localStorage.setItem( 'inlineSVGdata',  data );
          localStorage.setItem( 'inlineSVGrev',   revision );
        }
      }
    }
    request.send();
  }
  catch( e ){}

}( window, document ) );

$( document ).ready(function() {
  $('.js-control-next').on('click', function(e){
    e.preventDefault();
    $('#gallery').trigger('next.owl.carousel');
  });

  $('.js-control-prev').on('click', function(e){
    e.preventDefault();
    $('#gallery').trigger('prev.owl.carousel');
  });

  $('.js-footer-date').text(new Date().getFullYear());

  var mainNav = $('#nav');
  var burger = $('.burger');

  $('a[href^="#"]').on('click', function () {
    let target = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop: $(target).offset().top
      },
      800
    );
    if (mainNav.hasClass('main-nav--open')) {
      mainNav.removeClass('main-nav--open');
    }

    if (burger.hasClass('burger--close')) {
      burger.removeClass('burger--close');
    }
  });


});
