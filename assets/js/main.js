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

  $('#client-phone').on('blur input', function () {
    if ($(this).val().length >= 18) {
      $(this).closest('.form-input__wrapp').removeClass('--error');
    } else {
      $(this).closest('.form-input__wrapp').addClass('--error');
    }
  });

  $('#form-action').submit(function (e) {
    e.preventDefault();
    $(this).hide();
    $('#form-thank').show();
  });

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
  //======================== Select
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
  //======================== Select End

  $('body').mousemove(function (event) {
    var moveX = ($(window).width() / 2 - event.pageX) * 0.1;
    var moveY = ($(window).height() / 2 - event.pageY) * 0.1;
    $('.parallax-js').css('transform', 'translate(' + moveX + 'px, ' + moveY + 'px)');
  });

  //Wow
  new WOW().init();

  if ($('*').is('#how-works')) {
    let scrollOptions = {
      scrollBot: $('.how-works').offset().top,
      scrollTop: $('.text.vanta').offset().top,
      textBlock: $('.block-text-js'),
      scHeight: $(window).height(),
    };

    let scrollToElemBot = scrollOptions['scrollBot'] - scrollOptions['scHeight'] - 200,
      scrollToElemTop = scrollOptions['scrollTop'] - scrollOptions['scHeight'] + 200;
    var windowWidth = $('body').innerWidth();
    if (windowWidth > 1439) {
      $(document).scroll(function () {
        var winScrollTop = $(this).scrollTop();
        if (winScrollTop > scrollToElemBot) {
          $('.flipper').addClass('move');
          $('.block-text-js').fadeIn(1000);
          $('.img-arrow').fadeOut(1000);
        } else if (winScrollTop < scrollToElemTop) {
          $('.flipper').removeClass('move');
          $('.block-text-js').fadeOut(1000);
          $('.img-arrow').fadeIn(1000);
        }
      });
    }
  }
});
