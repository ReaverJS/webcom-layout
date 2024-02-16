/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("AOS.init();\n\n// Slider\nvar swiper = new Swiper(\".news-swiper\", {\n  slidesPerView: 1,\n  spaceBetween: 32,\n  centeredSlides: true,\n  grabCursor: true,\n  loop: false,\n  pagination: {\n    el: \".news-swiper-pagination\",\n    clickable: true,\n  },\n  navigation: {\n    nextEl: \".news-swiper-pagination-button--right\",\n    prevEl: \".news-swiper-pagination-button--left\",\n  },\n  breakpoints: {\n    930: {\n      slidesPerView: 3,\n      spaceBetween: 32,\n      loop: true,\n    },\n  }\n})\n\nvar swiper = new Swiper(\".trust-swiper\", {\n  slidesPerView: 2,\n  spaceBetween: 12,\n  grabCursor: true,\n  loop: false,\n  slidesPerGroup: 2,\n  watchOverflow: true,\n  autoplay: {\n    delay: 5000,\n  },\n  breakpoints: {\n    930: {\n      slidesPerView: 5,\n      spaceBetween: 38,\n      slidesPerGroup: 5,\n      watchOverflow: true,\n    },\n  },\n  pagination: {\n    el: \".trust-swiper-pagination\",\n    clickable: true,\n  }\n})\n\nvar swiper = new Swiper(\".subtintro-swiper\", {\n  slidesPerView: 2,\n  spaceBetween: 12,\n  grabCursor: true,\n  loop: false,\n  slidesPerGroup: 3,\n  watchOverflow: true,\n  autoplay: {\n    delay: 5000,\n  },\n  breakpoints: {\n    500: {\n      slidesPerView: 3,\n      spaceBetween: 12,\n    },\n  },\n  pagination: {\n    el: \".subtintro-swiper-pagination\",\n    clickable: true,\n  }\n})\n\nvar swiper = new Swiper(\".offer-swiper\", {\n  slidesPerView: 1,\n  spaceBetween: 36,\n  grabCursor: true,\n  loop: true,\n  slidesPerGroup: 1,\n  watchOverflow: true,\n  autoplay: {\n    delay: 5000,\n  },\n  pagination: {\n    el: \".offer-swiper-pagination\",\n    clickable: true,\n  },\n  navigation: {\n    nextEl: \".offer-swiper-button--right\",\n    prevEl: \".offer-swiper-button--left\",\n  },\n})\n\nvar swiper = new Swiper(\".case-swiper\", {\n  slidesPerView: 1,\n  spaceBetween: 36,\n  grabCursor: true,\n  loop: true,\n  slidesPerGroup: 1,\n  watchOverflow: true,\n  autoplay: {\n    delay: 5000,\n  },\n  pagination: {\n    el: \".case-swiper-pagination\",\n    clickable: true,\n  },\n  navigation: {\n    nextEl: \".case-swiper-pagination-button--right\",\n    prevEl: \".case-swiper-pagination-button--left\",\n  }\n})\n\n// Map\nfunction init() {\n  let map = new ymaps.Map('contacts-map', {\n    center: [43.24863846837264,76.94724694140729],\n    zoom: 17,\n  })\n\n  let placemark = new ymaps.Placemark([43.24863846837264,76.94724694140729], {}, {\n\t});\n\n  map.controls.remove('geolocationControl'); // удаляем геолокацию\n  map.controls.remove('searchControl'); // удаляем поиск\n  map.controls.remove('trafficControl'); // удаляем контроль трафика\n  map.controls.remove('typeSelector'); // удаляем тип\n  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим\n  map.controls.remove('zoomControl'); // удаляем контрол зуммирования\n  map.controls.remove('rulerControl'); // удаляем контрол правил\n  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)\n\n  map.geoObjects.add(placemark);\n}\n\nymaps.ready(init)\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/***/ (function() {

eval("const burger = document.getElementById('sidebarToggle');\nconst sidebar = document.getElementById('sidebar');\nconst page = document.getElementById('page');\nconst body = document.body;\n\nburger.addEventListener('click', event => {\n  if (body.classList.contains('show-sidebar')) {\n    closeSidebar();\n  } else {\n    showSidebar();\n  }\n});\n\nfunction showSidebar() {\n  /* let mask = document.createElement('div');\n  mask.classList.add('page__mask');\n  mask.addEventListener('click', closeSidebar);\n  page.appendChild(mask); */\n\n  body.classList.add('show-sidebar');\n  body.classList.add('no-scroll');\n}\n\nfunction closeSidebar() {\n  body.classList.remove('show-sidebar');\n  body.classList.remove('no-scroll');\n  //document.querySelector('.page__mask').remove();\n}\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/burger.js?");

/***/ }),

/***/ "./src/assets/js/flipItems.js":
/*!************************************!*\
  !*** ./src/assets/js/flipItems.js ***!
  \************************************/
/***/ (function() {

eval("const offerSwiperItems = document.querySelectorAll('.offer-swiper-item')\n\nconst flipFunction = (array) => {\n  array.forEach((i) => {\n    i.addEventListener('click', function() {\n    const isFlipped = i.classList.contains('flipped')\n      if (isFlipped) {\n        i.classList.remove('flipped')\n      } else {\n        i.classList.add('flipped')\n      }\n    })\n  })\n}\n\nflipFunction(offerSwiperItems)\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/flipItems.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ (function() {

eval("/* const modalOverlay = document.querySelector('.modal-overlay ');\nconst modalMain = document.querySelector('.modal-main');\nconst modalMainClose = document.querySelector('.modal-main-close')\n\nmodalOverlay.addEventListener('click', (e) => {\n\tif (e.target == modalOverlay) {\n\t\tmodalOverlay.classList.remove('modal-overlay--visible');\n\t\tmodalMain.el.classList.remove('modal--visible');\n\t}\n});\n\nmodalMainClose.addEventListener('click', e => {\n  modalOverlay.classList.remove('modal-overlay--visible');\n\tmodalMain.el.classList.remove('modal--visible');\n})\n\nvar timeoutId;\n\nfunction addActiveClass() {\n  modalMain.classList.add('modal--visible');\n  modalOverlay.classList.add('modal-overlay--visible');\n}\n\nfunction resetTimer() {\n  clearTimeout(timeoutId);\n  \n  timeoutId = setTimeout(addActiveClass, 5000); // 5000 миллисекунд (5 секунд)\n}\n\ndocument.addEventListener('mousemove', resetTimer);\ndocument.addEventListener('keydown', resetTimer);\ndocument.addEventListener('click', resetTimer);\n\ntimeoutId = setTimeout(addActiveClass, 5000);\n */\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/modal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/burger.js"]();
/******/ 	__webpack_modules__["./src/assets/js/flipItems.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/modal.js"]();
/******/ 	
/******/ })()
;