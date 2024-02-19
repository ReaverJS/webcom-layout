AOS.init();

// Slider
var swiper = new Swiper(".news-swiper", {
  slidesPerView: 1,
  spaceBetween: 32,
  centeredSlides: true,
  grabCursor: true,
  loop: false,
  pagination: {
    el: ".news-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".news-swiper-pagination-button--right",
    prevEl: ".news-swiper-pagination-button--left",
  },
  breakpoints: {
    930: {
      slidesPerView: 3,
      spaceBetween: 32,
      loop: true,
    },
  }
})

var swiper = new Swiper(".trust-swiper", {
  slidesPerView: 2,
  spaceBetween: 12,
  grabCursor: true,
  loop: false,
  slidesPerGroup: 2,
  watchOverflow: true,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    930: {
      slidesPerView: 5,
      spaceBetween: 38,
      slidesPerGroup: 5,
      watchOverflow: true,
    },
  },
  pagination: {
    el: ".trust-swiper-pagination",
    clickable: true,
  }
})

var swiper = new Swiper(".subtintro-swiper", {
  slidesPerView: 2,
  spaceBetween: 12,
  grabCursor: true,
  loop: false,
  slidesPerGroup: 3,
  watchOverflow: true,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    500: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
  },
  pagination: {
    el: ".subtintro-swiper-pagination",
    clickable: true,
  }
})

var swiper = new Swiper(".offer-swiper", {
  slidesPerView: 1,
  spaceBetween: 36,
  grabCursor: true,
  loop: true,
  slidesPerGroup: 1,
  watchOverflow: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".offer-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".offer-swiper-button--right",
    prevEl: ".offer-swiper-button--left",
  },
})

var swiper = new Swiper(".case-swiper", {
  slidesPerView: 1,
  spaceBetween: 36,
  grabCursor: true,
  loop: true,
  slidesPerGroup: 1,
  watchOverflow: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".case-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".case-swiper-pagination-button--right",
    prevEl: ".case-swiper-pagination-button--left",
  }
})

var swiper = new Swiper(".plus-swiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  grabCursor: true,
  loop: true,
  slidesPerGroup: 1,
  watchOverflow: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".plus-swiper-pagination",
    clickable: true,
  },
})

var swiper = new Swiper(".inovation-swiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  grabCursor: true,
  loop: true,
  slidesPerGroup: 1,
  watchOverflow: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".inovation-swiper-pagination",
    clickable: true,
  },
})

var swiper = new Swiper(".persons-swiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  grabCursor: true,
  loop: true,
  slidesPerGroup: 1,
  watchOverflow: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".persons-swiper-pagination",
    clickable: true,
  },
})

// Map
function init() {
  let map = new ymaps.Map('contacts-map', {
    center: [43.24863846837264,76.94724694140729],
    zoom: 17,
  })

  let placemark = new ymaps.Placemark([43.24863846837264,76.94724694140729], {}, {
	});

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);
}

ymaps.ready(init)
