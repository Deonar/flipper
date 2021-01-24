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

  //=================== scroll to page
  $('.scrollto').on('click', function () {
    let href = $(this).attr('href');

    $('html, body').animate(
      {
        scrollTop: $(href).offset().top,
      },
      {
        duration: 370, // по умолчанию «400»
        easing: 'linear', // по умолчанию «swing»
      }
    );
    if ($(window).width() < 768) {
      $('html, body').animate({
        scrollTop: $(href).offset().top,
      });
    }
    return false;
  });
  // ======================== MASK
  $('.mask-phone').mask('+7 (999) 999-99-99');

  //scroll-header-menu
  var scrollPos = 0;
  $(document).scroll(function () {
    if (300 < $(document).scrollTop()) {
      $('#header').addClass('h-fixed');
    } else {
      $('#header').removeClass('h-fixed');
    }

    var st = $(this).scrollTop();
    if (st < scrollPos) {
      $('#header').removeClass('active');
    } else {
      $('#header').addClass('active');
    }
    scrollPos = st;
    if (scrollPos <= 200) {
      $('#header').removeClass('active');
    }
  });

  //======================== SLICK SLIDERS
  //===========================  front-page Slider
  $('#panel-left-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '#panel-slider',
  });

  $('#panel-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    prevArrow: '<button class="slider-btn slider-btn__prev"><span></span></button>',
    nextArrow: '<button class="slider-btn slider-btn__next"><span></span></button>',
    fade: true,
    dots: true,
    infinite: false,
    asNavFor: '#panel-left-slider',
  });
  $('#panel-slider')[0].slick.refresh();

  let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach((item) => {
      item.addEventListener('click', selectToggle);
    });

    selectItem.forEach((item) => {
      item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
      this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
      let text = this.innerHTML,
        select = this.closest('.select-custom-js'),
        selectDataValue = this.dataset.selectValue;
      if (select) {
        currentText = select.querySelector('.select__current');
        currentInput = select.querySelector('input');

        currentText.innerHTML = text;
        currentInput.value = selectDataValue;
      }
      select.classList.remove('is-active');
    }
  };
  select();

  $(document).mouseup(function (e) {
    var select = $('.select');
    if (e.target != select[0] && select.has(e.target).length === 0) {
      $('.select').removeClass('is-active');
    }
  });
  //end
});
