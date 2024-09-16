/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./resources/js/buscador.js ***!
  \**********************************/
document.addEventListener('DOMContentLoaded', function () {
  iniciarApp();
});
function iniciarApp() {
  buscarPorFecha();
}
function buscarPorFecha() {
  var fechaInput = document.querySelector('#fecha');
  fechaInput.addEventListener('input', function (e) {
    var fechaSeleccionada = e.target.value;
    window.location = "?fecha=".concat(fechaSeleccionada);
  });
}
/******/ })()
;