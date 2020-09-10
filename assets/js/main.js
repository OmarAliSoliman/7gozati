$(document).ready(function(){

  "use strict";

  AOS.init();

  var navBar = $('.uppernav .navbar');
  $(window).scroll(()=>{
    if($(this).scrollTop() > 10){
      $(navBar).addClass('fixed-navbar');
    }else{
      $(navBar).removeClass('fixed-navbar');
    }
  })

  if($('.header-slider').length){
    $('.header-slider').slick({
      arrows: true,
    })
  }

  if($('.monitor-slider').length){
    $('.monitor-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      loop: true,
      arrows: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        }
      ]
    });

  }
})