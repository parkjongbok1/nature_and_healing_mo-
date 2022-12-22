$(document).ready(function(){
    $('.visual_slider').slick({
        dots: true,
        infinite: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3800,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        swipe: true, 
     });

     $('.introduction_slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3800,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        customPaging: function(slider, i) {
          var target_txt = $(slider.$slides[i]).attr('data-slide-nav');
    
          var thumb = "<span>" + target_txt + "</span>";
    
          return thumb
        },
      });

      $('.premium_slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: $(".premium_p"),
        nextArrow: $(".premium_n"),
        autoplay: true,
        autoplaySpeed: 3800,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      });
    
      function visualActive() {
    
        if ($('.itemP01').hasClass('slick-active')) {
            $('.p_item.P_01').addClass('active');
        } else if ($('.itemP02').hasClass('slick-active')) {
            $('.p_item.P_02').addClass('active');
        } else if ($('.itemP03').hasClass('slick-active')) {
            $('.p_item.P_03').addClass('active');
        } else if ($('.itemP04').hasClass('slick-active')) {
            $('.p_item.P_04').addClass('active');
        }
      }
    
      $('.premium_slider').on({
        init: function (event, slick) {
    
        },
        beforeChange: function (event, slick, currentSlide, nextSlide) {
            $('.p_item').removeClass('active');
        },
        afterChange: function (event, slick, currentSlide, nextSlide) {
          visualActive();
        }
      });
  
});
