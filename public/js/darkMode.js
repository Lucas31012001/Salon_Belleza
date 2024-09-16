/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./resources/js/darkMode.js ***!
  \**********************************/
document.addEventListener('DOMContentLoaded', function () {
  iniciarApp();
});
function iniciarApp() {
  darkmode();
}
function darkmode() {
  var prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  if (prefiereDarkMode.matches) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
  prefiereDarkMode.addEventListener('change', function () {
    // Si el usuario cambia las preferencias desde ajustes también se cambia en la página web al momento
    if (prefiereDarkMode.matches) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  });
  var botonDarkMode = document.querySelector('.dark-mode-boton');
  botonDarkMode.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
  });
}
/******/ })()
;