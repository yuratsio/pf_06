const swiperReport = new Swiper('.feature__swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1.5,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  breakpoints: {
    768: {
      autoplay: false,
      slidesPerView: 3,
    }
  },
});

const swiper = new Swiper('.recipe__container', {
  // Optional parameters
  loop: true,
  slidesPerView: 1.5,
  centeredSlides: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
