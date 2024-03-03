const burger = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const page = document.getElementById('page');
const body = document.body;

burger.addEventListener('click', event => {
  if (body.classList.contains('show-sidebar')) {
    closeSidebar();
  } else {
    showSidebar();
  }
});

function showSidebar() {
  /* let mask = document.createElement('div');
  mask.classList.add('page__mask');
  mask.addEventListener('click', closeSidebar);
  page.appendChild(mask); */

  body.classList.add('show-sidebar');
  body.classList.add('no-scroll');
}

function closeSidebar() {
  body.classList.remove('show-sidebar');
  body.classList.remove('no-scroll');
  //document.querySelector('.page__mask').remove();
}
