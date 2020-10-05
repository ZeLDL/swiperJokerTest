const swiper = new Swiper('.swiper-banner', {
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next_banner',
      prevEl: '.swiper-button-prev_banner',
    },
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
  });

const swiperFooter = new Swiper('.swiper-footer-container', {
  slidesPerView: 'auto',
  spaceBetween: 25,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-footer-button_next',
    prevEl: '.swiper-footer-button_prev',
  },
});