$('#navbar-toggle').click(function (e) {
  e.preventDefault();
  $('#navbar-toggle-mobile').toggleClass('actived');
  console.log('a');
  $('.popup').css('display', 'block');
});
$('#navbar-toggle-mobile').click(function (e) {
  e.preventDefault();
  $('#navbar-toggle-mobile').toggleClass('actived');
  console.log('a');
  $('.popup').css('display', 'none');
});
$(window).on('scroll', function () {
  if ($(window).scrollTop() > 50) {
    $('.navbar').css('background', 'white');
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $('.navbar').css('background', 'transparent');
  }
});

var swiper = new Swiper('.object3_slide .swiper-container', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  // spaceBetween: 30,
  //Responsive breakpoints
  breakpoints: {
    720: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
  },
  centeredSlides: false,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.object3_slide .swiper-button-next',
    prevEl: '.object3_slide .swiper-button-prev',
  },
});

var swiper2 = new Swiper('.object4_work .swiper-container', {
  spaceBetween: 30,
  effect: 'fade',
  navigation: {
    nextEl: '.object4_work .swiper-button-next',
    prevEl: '.object4_work .swiper-button-prev',
  },
});
