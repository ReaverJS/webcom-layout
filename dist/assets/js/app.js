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

eval("AOS.init()\r\n\r\n// Slider\r\n\r\n\r\nvar swiper = new Swiper(\".news-swiper\", {\r\n  slidesPerView: 1,\r\n  spaceBetween: 32,\r\n  centeredSlides: true,\r\n  grabCursor: true,\r\n  loop: false,\r\n  // autoplay: {\r\n  //   delay: 10000,\r\n  // },\r\n  pagination: {\r\n    el: \".news-swiper-pagination\",\r\n    clickable: true,\r\n  },\r\n  navigation: {\r\n    nextEl: \".news-swiper-pagination-button--right\",\r\n    prevEl: \".news-swiper-pagination-button--left\",\r\n  },\r\n  breakpoints: {\r\n    930: {\r\n      slidesPerView: 3,\r\n      spaceBetween: 32,\r\n      loop: true,\r\n    },\r\n  }\r\n})\r\n\r\nvar swiper = new Swiper(\".trust-swiper\", {\r\n  slidesPerView: 2,\r\n  spaceBetween: 12,\r\n  grabCursor: true,\r\n  loop: true,\r\n  slidesPerGroup: 1,\r\n  watchOverflow: true,\r\n  // autoplay: {\r\n  //   delay: 5000,\r\n  // },\r\n  breakpoints: {\r\n    930: {\r\n      slidesPerView: 5,\r\n      spaceBetween: 38,\r\n      slidesPerGroup: 5,\r\n      watchOverflow: true,\r\n    },\r\n  },\r\n  pagination: {\r\n    el: \".trust-swiper-pagination\",\r\n    clickable: true,\r\n  }\r\n})\r\n\r\nvar swiper = new Swiper(\".subtintro-swiper\", {\r\n  slidesPerView: 2,\r\n  spaceBetween: 12,\r\n  grabCursor: true,\r\n  loop: false,\r\n  slidesPerGroup: 3,\r\n  watchOverflow: true,\r\n  // autoplay: {\r\n  //   delay: 5000,\r\n  // },\r\n  breakpoints: {\r\n    500: {\r\n      slidesPerView: 3,\r\n      spaceBetween: 12,\r\n    },\r\n  },\r\n  pagination: {\r\n    el: \".subtintro-swiper-pagination\",\r\n    clickable: true,\r\n  }\r\n})\r\n\r\nconst offerSwiperItems = document.querySelectorAll('.offer-swiper-item')\r\nvar swiper = new Swiper(\".offer-swiper\", {\r\n  slidesPerView: 1,\r\n  spaceBetween: 36,\r\n  grabCursor: true,\r\n  loop: true,\r\n  slidesPerGroup: 1,\r\n  watchOverflow: true,\r\n  centeredSlides: false,\r\n  // autoplay: {\r\n  //   delay: 10000,\r\n  // },\r\n  pagination: {\r\n    el: \".offer-swiper-pagination\",\r\n    clickable: true,\r\n  },\r\n  navigation: {\r\n    nextEl: \".offer-swiper-button--right\",\r\n    prevEl: \".offer-swiper-button--left\",\r\n  },\r\n  on: {\r\n    slideChange: function () {\r\n      offerSwiperItems.forEach((i) => i.classList.remove('flipped'))\r\n    },\r\n  },\r\n})\r\n\r\nvar swiper = new Swiper(\".case-swiper\", {\r\n  slidesPerView: 1,\r\n  spaceBetween: 36,\r\n  grabCursor: true,\r\n  loop: true,\r\n  slidesPerGroup: 1,\r\n  watchOverflow: true,\r\n  // autoplay: {\r\n  //   delay: 10000,\r\n  // },\r\n  pagination: {\r\n    el: \".case-swiper-pagination\",\r\n    clickable: true,\r\n  },\r\n  navigation: {\r\n    nextEl: \".case-swiper-pagination-button--right\",\r\n    prevEl: \".case-swiper-pagination-button--left\",\r\n  }\r\n})\r\n\r\nvar swiper = new Swiper(\".plus-swiper\", {\r\n  slidesPerView: 1,\r\n  spaceBetween: 50,\r\n  grabCursor: true,\r\n  loop: true,\r\n  slidesPerGroup: 1,\r\n  watchOverflow: true,\r\n  // autoplay: {\r\n  //   delay: 10000,\r\n  // },\r\n  pagination: {\r\n    el: \".plus-swiper-pagination\",\r\n    clickable: true,\r\n  },\r\n})\r\n\r\nvar swiper = new Swiper(\".inovation-swiper\", {\r\n  slidesPerView: 1,\r\n  spaceBetween: 50,\r\n  grabCursor: true,\r\n  loop: true,\r\n  slidesPerGroup: 1,\r\n  watchOverflow: true,\r\n  // autoplay: {\r\n  //   delay: 10000,\r\n  // },\r\n  pagination: {\r\n    el: \".inovation-swiper-pagination\",\r\n    clickable: true,\r\n  },\r\n})\r\n\r\nvar swiper = new Swiper(\".persons-swiper\", {\r\n  slidesPerView: 1,\r\n  spaceBetween: 50,\r\n  grabCursor: true,\r\n  loop: true,\r\n  slidesPerGroup: 1,\r\n  watchOverflow: true,\r\n  // autoplay: {\r\n  //   delay: 5000,\r\n  // },\r\n  pagination: {\r\n    el: \".persons-swiper-pagination\",\r\n    clickable: true,\r\n  },\r\n})\r\n\r\nvar swiper = new Swiper(\".reason-intro-swiper\", {\r\n  slidesPerView: 1,\r\n  spaceBetween: 50,\r\n  grabCursor: true,\r\n  loop: true,\r\n  slidesPerGroup: 1,\r\n  watchOverflow: true,\r\n  // autoplay: {\r\n  //   delay: 10000,\r\n  // },\r\n  pagination: {\r\n    el: \".reason-intro-swiper-pagination\",\r\n    clickable: true,\r\n  },\r\n})\r\n\r\nvar swiper = new Swiper(\".reasons-main-swiper\", {\r\n  slidesPerView: 1,\r\n  spaceBetween: 50,\r\n  grabCursor: true,\r\n  loop: true,\r\n  slidesPerGroup: 1,\r\n  watchOverflow: true,\r\n  // autoplay: {\r\n  //   delay: 10000,\r\n  // },\r\n  pagination: {\r\n    el: \".reasons-main-swiper-pagination\",\r\n    clickable: true,\r\n  },\r\n})\r\n\r\nvar swiper = new Swiper(\".services-cards-swiper\", {\r\n  slidesPerView: 1,\r\n  spaceBetween: 50,\r\n  grabCursor: true,\r\n  loop: true,\r\n  slidesPerGroup: 1,\r\n  watchOverflow: true,\r\n  // autoplay: {\r\n  //   delay: 10000,\r\n  // },\r\n  pagination: {\r\n    el: \".services-cards-swiper-pagination\",\r\n    clickable: true,\r\n  },\r\n})\r\n\r\nvar swiper = new Swiper(\".services-cards-swiper2\", {\r\n  slidesPerView: 1,\r\n  spaceBetween: 50,\r\n  grabCursor: true,\r\n  loop: true,\r\n  slidesPerGroup: 1,\r\n  watchOverflow: true,\r\n  // autoplay: {\r\n  //   delay: 10000,\r\n  // },\r\n  pagination: {\r\n    el: \".services-cards-swiper-pagination2\",\r\n    clickable: true,\r\n  },\r\n})\r\n\r\n\r\n// Map\r\nfunction init() {\r\n  let map = new ymaps.Map('contacts-map', {\r\n    center: [43.24863846837264,76.94724694140729],\r\n    zoom: 17,\r\n  })\r\n\r\n  let placemark = new ymaps.Placemark([43.24863846837264,76.94724694140729], {}, {\r\n\t});\r\n\r\n  map.controls.remove('geolocationControl'); // удаляем геолокацию\r\n  map.controls.remove('searchControl'); // удаляем поиск\r\n  map.controls.remove('trafficControl'); // удаляем контроль трафика\r\n  map.controls.remove('typeSelector'); // удаляем тип\r\n  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим\r\n  map.controls.remove('zoomControl'); // удаляем контрол зуммирования\r\n  map.controls.remove('rulerControl'); // удаляем контрол правил\r\n  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)\r\n\r\n  map.geoObjects.add(placemark);\r\n}\r\n\r\nymaps.ready(init)\r\n\r\n\r\n/* ============== intersection observe Swiper ============== */\r\nlet allSlidesSelector = \".news-swiper, .subtintro-swiper, .offer-swiper, .trust-swiper, .case-swiper, .news-swiper\"\r\n\r\nconst observerSwiper = new IntersectionObserver(function (entries, self) {\r\n  entries.forEach(entry => {\r\n    let elid;\r\n    if (entry.isIntersecting) {\r\n      elid = entry.target.id;\r\n    }\r\n    if (elid) {\r\n      let elsSwiper = document.querySelectorAll(allSlidesSelector);\r\n      elsSwiper.forEach((e) => {\r\n        if (e.id === elid) {\r\n          // play this swiper\r\n          e.swiper.params.autoplay.delay = e.dataset?.swiperAutoplay ? e.dataset.swiperAutoplay : 3000;\r\n\r\n          e.swiper.autoplay.start();\r\n        } else {\r\n          // stop other swiper\r\n          e.swiper.autoplay.stop();\r\n        }\r\n      });\r\n    }\r\n  });\r\n}, {\r\n    root: null,\r\n    threshold: 0.75,\r\n    rootMargin: '0px'\r\n});\r\n\r\n/* ============== intersection observe Swiper: init ============== */\r\nconst initOberverReveal = () => {\r\n  let elsSwiper = document.querySelectorAll(allSlidesSelector);\r\n\r\n  elsSwiper.forEach((el) => {\r\n    observerSwiper.observe(el);\r\n  });\r\n}\r\nwindow.addEventListener('load', initOberverReveal);\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/blog.js":
/*!*******************************!*\
  !*** ./src/assets/js/blog.js ***!
  \*******************************/
/***/ (function() {

eval("let blogSwiper = new Swiper(\".card__swiper\", {\r\n  slidesPerView: 1,\r\n  spaceBetween: 32,\r\n  centeredSlides: true,\r\n  grabCursor: true,\r\n  loop: true,\r\n  autoplay: {\r\n    delay: 3000,\r\n  },\r\n  pagination: {\r\n    el: \".card__swiper-pagination\",\r\n    clickable: true,\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/blog.js?");

/***/ }),

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/***/ (function() {

eval("const burger = document.getElementById('sidebarToggle');\r\nconst sidebar = document.getElementById('sidebar');\r\nconst page = document.getElementById('page');\r\nconst body = document.body;\r\n\r\nburger.addEventListener('click', event => {\r\n  if (body.classList.contains('show-sidebar')) {\r\n    closeSidebar();\r\n  } else {\r\n    showSidebar();\r\n  }\r\n});\r\n\r\nfunction showSidebar() {\r\n  /* let mask = document.createElement('div');\r\n  mask.classList.add('page__mask');\r\n  mask.addEventListener('click', closeSidebar);\r\n  page.appendChild(mask); */\r\n\r\n  body.classList.add('show-sidebar');\r\n  body.classList.add('no-scroll');\r\n}\r\n\r\nfunction closeSidebar() {\r\n  body.classList.remove('show-sidebar');\r\n  body.classList.remove('no-scroll');\r\n  //document.querySelector('.page__mask').remove();\r\n}\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/burger.js?");

/***/ }),

/***/ "./src/assets/js/dealer.js":
/*!*********************************!*\
  !*** ./src/assets/js/dealer.js ***!
  \*********************************/
/***/ (function() {

eval("let swiperSolution = new Swiper(\".solution__swiper\", {\r\n  slidesPerView: 1,\r\n  spaceBetween: 32,\r\n  centeredSlides: true,\r\n  grabCursor: true,\r\n  loop: true,\r\n  autoplay: {\r\n    delay: 3000,\r\n  },\r\n  pagination: {\r\n    el: \".solution__swiper-pagination\",\r\n    clickable: true,\r\n  },\r\n  breakpoints: {\r\n    930: {\r\n      grabCursor: false,\r\n      slidesPerView: 3,\r\n      spaceBetween: 0,\r\n      loop: false,\r\n      autoplay: false,\r\n      centeredSlides: false,\r\n    },\r\n  }\r\n});\r\n\r\nlet swiperImplementaion;\r\n\r\nfunction initSwiperImplementation() {\r\n  swiperImplementaion = new Swiper(\".implementation-dealer__swiper\", {\r\n    slidesPerView: 1,\r\n    spaceBetween: 32,\r\n    centeredSlides: true,\r\n    grabCursor: true,\r\n    loop: true,\r\n    autoplay: {\r\n      delay: 3000,\r\n    },\r\n    pagination: {\r\n      el: \".implementation-dealer__swiper-pagination\",\r\n      clickable: true,\r\n    },\r\n    breakpoints: {\r\n      768: {\r\n        grabCursor: false,\r\n        slidesPerView: 2,\r\n        spaceBetween: 32,\r\n        loop: false,\r\n        autoplay: false,\r\n        centeredSlides: false,\r\n      },\r\n    }\r\n  });\r\n}\r\n\r\nfunction checkSwiper() {\r\n  if (window.innerWidth <= 1024) {\r\n    if (!swiperImplementaion) {\r\n      initSwiperImplementation();\r\n    }\r\n  } else {\r\n    if (swiperImplementaion) {\r\n      swiperImplementaion.destroy(true, true);\r\n      swiperImplementaion = null;\r\n    }\r\n  }\r\n}\r\n\r\n// Проверка при инициализации\r\ncheckSwiper();\r\n\r\n// Обработчик для события изменения размера окна\r\nwindow.addEventListener('resize', function() {\r\n  checkSwiper();\r\n});\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/dealer.js?");

/***/ }),

/***/ "./src/assets/js/flipItems.js":
/*!************************************!*\
  !*** ./src/assets/js/flipItems.js ***!
  \************************************/
/***/ (function() {

eval("const offerSwiperItems = document.querySelectorAll('.offer-swiper-item')\r\n\r\nconst flipFunction = (array) => {\r\n  array.forEach((i) => {\r\n    i.addEventListener('click', function() {\r\n    const isFlipped = i.classList.contains('flipped')\r\n      if (isFlipped) {\r\n        i.classList.remove('flipped')\r\n      } else {\r\n        i.classList.add('flipped')\r\n      }\r\n    })\r\n  })\r\n}\r\n\r\nflipFunction(offerSwiperItems)\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/flipItems.js?");

/***/ }),

/***/ "./src/assets/js/kargo.js":
/*!********************************!*\
  !*** ./src/assets/js/kargo.js ***!
  \********************************/
/***/ (function() {

eval("let kargoSwiper = new Swiper(\".task-solution__swiper\", {\r\n  slidesPerView: 1,\r\n  spaceBetween: 32,\r\n  centeredSlides: true,\r\n  grabCursor: true,\r\n  loop: true,\r\n  autoplay: {\r\n    delay: 3000,\r\n  },\r\n  pagination: {\r\n    el: \".task-solution__swiper-pagination\",\r\n    clickable: true,\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/kargo.js?");

/***/ }),

/***/ "./src/assets/js/letter.js":
/*!*********************************!*\
  !*** ./src/assets/js/letter.js ***!
  \*********************************/
/***/ (function() {

eval("let letterSwiper = new Swiper(\".letter__swiper\", {\r\n  slidesPerView: 1,\r\n  spaceBetween: 32,\r\n  centeredSlides: true,\r\n  grabCursor: true,\r\n  loop: true,\r\n  autoplay: {\r\n    delay: 3000,\r\n  },\r\n  pagination: {\r\n    el: \".letter__swiper-pagination\",\r\n    clickable: true,\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/letter.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ (function() {

eval("/* const modalOverlay = document.querySelector('.modal-overlay ');\r\nconst modalMain = document.querySelector('.modal-main');\r\nconst modalMainClose = document.querySelector('.modal-main-close')\r\n\r\nmodalOverlay.addEventListener('click', (e) => {\r\n\tif (e.target == modalOverlay) {\r\n\t\tmodalOverlay.classList.remove('modal-overlay--visible');\r\n\t\tmodalMain.el.classList.remove('modal--visible');\r\n\t}\r\n});\r\n\r\nmodalMainClose.addEventListener('click', e => {\r\n  modalOverlay.classList.remove('modal-overlay--visible');\r\n\tmodalMain.el.classList.remove('modal--visible');\r\n})\r\n\r\nvar timeoutId;\r\n\r\nfunction addActiveClass() {\r\n  modalMain.classList.add('modal--visible');\r\n  modalOverlay.classList.add('modal-overlay--visible');\r\n}\r\n\r\nfunction resetTimer() {\r\n  clearTimeout(timeoutId);\r\n  \r\n  timeoutId = setTimeout(addActiveClass, 5000); // 5000 миллисекунд (5 секунд)\r\n}\r\n\r\ndocument.addEventListener('mousemove', resetTimer);\r\ndocument.addEventListener('keydown', resetTimer);\r\ndocument.addEventListener('click', resetTimer);\r\n\r\ntimeoutId = setTimeout(addActiveClass, 5000);\r\n */\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/sidebar.js":
/*!**********************************!*\
  !*** ./src/assets/js/sidebar.js ***!
  \**********************************/
/***/ (function() {

eval("\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/sidebar.js?");

/***/ }),

/***/ "./src/assets/js/virazh-page.js":
/*!**************************************!*\
  !*** ./src/assets/js/virazh-page.js ***!
  \**************************************/
/***/ (function() {

eval("let swiperSolution = new Swiper(\".solution__swiper\", {\r\n  slidesPerView: 1,\r\n  spaceBetween: 32,\r\n  centeredSlides: true,\r\n  grabCursor: true,\r\n  loop: true,\r\n  autoplay: {\r\n    delay: 3000,\r\n  },\r\n  pagination: {\r\n    el: \".solution__swiper-pagination\",\r\n    clickable: true,\r\n  },\r\n  breakpoints: {\r\n    930: {\r\n      grabCursor: false,\r\n      slidesPerView: 3,\r\n      spaceBetween: 0,\r\n      loop: false,\r\n      autoplay: false,\r\n      centeredSlides: false,\r\n    },\r\n  }\r\n});\r\n\r\nlet swiperImplementaion;\r\n\r\nfunction initSwiperImplementation() {\r\n  swiperImplementaion = new Swiper(\".implementation__swiper\", {\r\n    slidesPerView: 1,\r\n    spaceBetween: 32,\r\n    centeredSlides: true,\r\n    grabCursor: true,\r\n    loop: true,\r\n    autoplay: {\r\n      delay: 3000,\r\n    },\r\n    pagination: {\r\n      el: \".implementation__swiper-pagination\",\r\n      clickable: true,\r\n    },\r\n    breakpoints: {\r\n      768: {\r\n        grabCursor: false,\r\n        slidesPerView: 2,\r\n        spaceBetween: 32,\r\n        loop: false,\r\n        autoplay: false,\r\n        centeredSlides: false,\r\n      },\r\n    }\r\n  });\r\n}\r\n\r\nfunction checkSwiper() {\r\n  if (window.innerWidth <= 1024) {\r\n    if (!swiperImplementaion) {\r\n      initSwiperImplementation();\r\n    }\r\n  } else {\r\n    if (swiperImplementaion) {\r\n      swiperImplementaion.destroy(true, true);\r\n      swiperImplementaion = null;\r\n    }\r\n  }\r\n}\r\n\r\n// Проверка при инициализации\r\ncheckSwiper();\r\n\r\n// Обработчик для события изменения размера окна\r\nwindow.addEventListener('resize', function() {\r\n  checkSwiper();\r\n});\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/virazh-page.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/blog.js"]();
/******/ 	__webpack_modules__["./src/assets/js/burger.js"]();
/******/ 	__webpack_modules__["./src/assets/js/dealer.js"]();
/******/ 	__webpack_modules__["./src/assets/js/flipItems.js"]();
/******/ 	__webpack_modules__["./src/assets/js/kargo.js"]();
/******/ 	__webpack_modules__["./src/assets/js/letter.js"]();
/******/ 	__webpack_modules__["./src/assets/js/modal.js"]();
/******/ 	__webpack_modules__["./src/assets/js/sidebar.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/virazh-page.js"]();
/******/ 	
/******/ })()
;