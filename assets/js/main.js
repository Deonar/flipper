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

  //end
});
