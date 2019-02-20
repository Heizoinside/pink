var mainNav = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
mainNav.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.remove("main-nav--opened");
    mainNav.classList.add('main-nav--closed');
  }
});

var editToggle = document.querySelectorAll('.user__toggle');

  editToggle.forEach(c => {
    c.addEventListener('click', () => {
      editToggle.forEach(s => s.classList.remove('user__toggle--active'));
      c.classList.add('user__toggle--active');
    })
  });
