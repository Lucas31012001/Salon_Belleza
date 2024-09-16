/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./resources/js/testimonios.js ***!
  \*************************************/
document.addEventListener('DOMContentLoaded', function () {
  iniciarApp();
});
function iniciarApp() {
  testimonios();
}
function testimonios() {
  var testimonial1 = document.querySelector('.testimonial');
  var extraTestimonial = document.getElementById('extraTestimonial');
  var extraTestimonial2 = document.getElementById('extraTestimonial-2');
  var extraTestimonial3 = document.getElementById('extraTestimonial-3');
  var extraTestimonial4 = document.getElementById('extraTestimonial-4');
  var siguienteTestimonio1 = document.getElementById('siguiente-testimonio-1');
  var siguienteTestimonio2 = document.getElementById('siguiente-testimonio-2');
  var siguienteTestimonio3 = document.getElementById('siguiente-testimonio-3');
  var siguienteTestimonio4 = document.getElementById('siguiente-testimonio-4');
  var siguienteTestimonio5 = document.getElementById('siguiente-testimonio-5');
  siguienteTestimonio1.addEventListener('click', function () {
    testimonial1.style.display = 'none';
    extraTestimonial.style.display = 'block';
    extraTestimonial2.style.display = 'none';
    extraTestimonial3.style.display = 'none';
    extraTestimonial4.style.display = 'none';
  });
  siguienteTestimonio2.addEventListener('click', function () {
    testimonial1.style.display = 'none';
    extraTestimonial.style.display = 'none';
    extraTestimonial2.style.display = 'block';
    extraTestimonial3.style.display = 'none';
    extraTestimonial4.style.display = 'none';
  });
  siguienteTestimonio3.addEventListener('click', function () {
    testimonial1.style.display = 'none';
    extraTestimonial.style.display = 'none';
    extraTestimonial2.style.display = 'none';
    extraTestimonial3.style.display = 'block';
    extraTestimonial4.style.display = 'none';
  });
  siguienteTestimonio4.addEventListener('click', function () {
    testimonial1.style.display = 'none';
    extraTestimonial.style.display = 'none';
    extraTestimonial2.style.display = 'none';
    extraTestimonial3.style.display = 'none';
    extraTestimonial4.style.display = 'block';
  });
  siguienteTestimonio5.addEventListener('click', function () {
    testimonial1.style.display = 'block';
    extraTestimonial.style.display = 'none';
    extraTestimonial2.style.display = 'none';
    extraTestimonial3.style.display = 'none';
    extraTestimonial4.style.display = 'none';
  });
}
/******/ })()
;