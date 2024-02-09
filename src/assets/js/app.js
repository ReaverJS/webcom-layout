AOS.init();

// Slider
var swiper = new Swiper(".news-swiper", {
  slidesPerView: 3,
  spaceBetween: 32,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".news-swiper-pagination",
    clickable: true,
  },
})

var swiper = new Swiper(".trust-swiper", {
  slidesPerView: 5,
  spaceBetween: 38,
  grabCursor: true,
  loop: false,
  slidesPerGroup: 5,
  watchOverflow: true,
  autoplay: {
    delay: 5000,
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
