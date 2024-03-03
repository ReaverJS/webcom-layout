const offerSwiperItems = document.querySelectorAll('.offer-swiper-item')

const flipFunction = (array) => {
  array.forEach((i) => {
    i.addEventListener('click', function() {
    const isFlipped = i.classList.contains('flipped')
      if (isFlipped) {
        i.classList.remove('flipped')
      } else {
        i.classList.add('flipped')
      }
    })
  })
}

flipFunction(offerSwiperItems)
