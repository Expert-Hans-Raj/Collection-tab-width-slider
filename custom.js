/******/
$(document).ready(function (){
   $('.col-tab-pro-slider').slick({
      infinite: true,
      slidesToShow: 4, 
      autoplay: false,
      dots: true,
     slidesToScroll: 1, 
      arrows: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerPadding: '40px',
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerPadding: '40px',
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
/******/
