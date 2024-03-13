let letterSwiper = new Swiper(".letter__swiper", {
  slidesPerView: 1,
  spaceBetween: 32,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".letter__swiper-pagination",
    clickable: true,
  },
});
