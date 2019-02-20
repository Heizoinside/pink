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
editToggle.addEventListener('click', function() {
  for (var i = 0; i < editToggle.length; i++) {
    editToggle[i] = editToggle.classList.add('user__toggle--active');
    console.log("obj");
  }
};
