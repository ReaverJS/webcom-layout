/* const modalOverlay = document.querySelector('.modal-overlay ');
const modalMain = document.querySelector('.modal-main');
const modalMainClose = document.querySelector('.modal-main-close')

modalOverlay.addEventListener('click', (e) => {
	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modalMain.el.classList.remove('modal--visible');
	}
});

modalMainClose.addEventListener('click', e => {
  modalOverlay.classList.remove('modal-overlay--visible');
	modalMain.el.classList.remove('modal--visible');
})

var timeoutId;

function addActiveClass() {
  modalMain.classList.add('modal--visible');
  modalOverlay.classList.add('modal-overlay--visible');
}

function resetTimer() {
  clearTimeout(timeoutId);
  
  timeoutId = setTimeout(addActiveClass, 5000); // 5000 миллисекунд (5 секунд)
}

document.addEventListener('mousemove', resetTimer);
document.addEventListener('keydown', resetTimer);
document.addEventListener('click', resetTimer);

timeoutId = setTimeout(addActiveClass, 5000);
 */
