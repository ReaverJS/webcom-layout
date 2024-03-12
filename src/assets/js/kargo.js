let kargoSwiper = new Swiper(".task-solution__swiper", {
  slidesPerView: 1,
  spaceBetween: 32,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".task-solution__swiper-pagination",
    clickable: true,
  },
});
