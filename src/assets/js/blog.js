let blogSwiper = new Swiper(".card__swiper", {
  slidesPerView: 1,
  spaceBetween: 32,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".card__swiper-pagination",
    clickable: true,
  },
});
