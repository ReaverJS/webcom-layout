let swiperSolution = new Swiper(".solution__swiper", {
  slidesPerView: 1,
  spaceBetween: 32,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".solution__swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    930: {
      grabCursor: false,
      slidesPerView: 3,
      spaceBetween: 32,
      loop: false,
      autoplay: false,
      centeredSlides: false,
    },
  }
});

let swiperImplementaion;

function initSwiperImplementation() {
  swiperImplementaion = new Swiper(".implementation__swiper", {
    slidesPerView: 1,
    spaceBetween: 32,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".implementation__swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      930: {
        grabCursor: false,
        slidesPerView: 2,
        spaceBetween: 32,
        loop: false,
        autoplay: false,
        centeredSlides: false,
      },
    }
  });
}

function checkSwiper() {
  if (window.innerWidth <= 1024) {
    if (!swiperImplementaion) {
      initSwiperImplementation();
    }
  } else {
    if (swiperImplementaion) {
      swiperImplementaion.destroy(true, true);
      swiperImplementaion = null;
    }
  }
}

// Проверка при инициализации
checkSwiper();

// Обработчик для события изменения размера окна
window.addEventListener('resize', function() {
  checkSwiper();
});

