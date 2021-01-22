jQuery(document).ready(function ($) {
  //Mob-menu
  $('#header-burger').on('click', function (e) {
    $(this).toggleClass('active');
    $('#mobMenu').toggleClass('active');
    $('body').toggleClass('overflow-h');
  });
  $('.close-mob-menu-js').on('click', function (e) {
    $('body').removeClass('overflow-h');
    $('#header-burger').removeClass('active');
    $('#mobMenu').removeClass('active');
  });

  //===========================  main-slider
  $('#main-slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    adaptiveHeight: true,
  });
  $('#team-slider').slick({
    dots: false,
    slidesToShow: 3,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //scroll-header-menu
  var scrollPos = 0;
  $(document).scroll(function () {
    if (300 < $(document).scrollTop()) {
      $('#header').addClass('h-fixed');
    } else {
      $('#header').removeClass('h-fixed');
    }

    // var st = $(this).scrollTop();
    // if (st < scrollPos) {
    //   $('#header').removeClass('active');
    // } else {
    //   $('#header').addClass('active');
    // }
    // scrollPos = st;
    // if (scrollPos <= 200) {
    //   $('#header').removeClass('active');
    // }
  });

  //======================== POPUP
  $('.popup').magnificPopup({
    mainClass: 'mfp-fade',
  });

  //pricing hover
  $('.pricing-item').on('click', function (e) {
    $(this).toggleClass('active');
  });
  if ($(window).width() <= '767') {
    $('.pricing-item').removeClass('_hover');
  }

  //pricing calculate

  function calcPriceRow(sumOut, pricingItem, dataPrice) {
    $(pricingItem).on('click', function () {
      let sum = 0;
      $(pricingItem).each(function (index, element) {
        if ($(element).hasClass('active')) {
          sum += +$(this).attr(dataPrice);
        }
      });
      $(sumOut).text(sum);
    });
  }
  calcPriceRow('#sum-price-patent', '.pricing-item-patent', 'data-price-patent');
  calcPriceRow('#sum-price-fto', '.pricing-item-fto', 'data-price-fto');

  $('#list-price').on('click', function (e) {
    let resultPrice = 0;
    resultPrice = +$('.custom-radio__input[type="radio"]:checked').closest('.table-row').find('.pricing-result__num').text();
    $('#result-price').text(resultPrice);
  });

  //end
});
