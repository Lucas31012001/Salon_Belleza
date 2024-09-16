/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/calendario.js":
/*!************************************!*\
  !*** ./resources/js/calendario.js ***!
  \************************************/
/***/ ((module) => {

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
document.addEventListener('DOMContentLoaded', function () {
  iniciarApp();
});
var selectedDates = [];
function iniciarApp() {
  calendario();
  cargarSelecciones();
  obtenerFechasSeleccionadas();
}
function calendario() {
  var calendar = document.getElementById('calendario');
  if (!calendar) {
    console.error("El elemento con id 'calendario' no se encontró en el DOM.");
    return;
  }
  var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  var days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  var currentYear = new Date().getFullYear();
  months.forEach(function (month, monthIndex) {
    var monthDiv = document.createElement('div');
    monthDiv.classList.add('month');
    var monthHeader = document.createElement('h3');
    monthHeader.textContent = "".concat(month, " ").concat(currentYear);
    monthDiv.appendChild(monthHeader);
    var daysDiv = document.createElement('div');
    daysDiv.classList.add('days');

    // Añadir encabezados de los días de la semana
    days.forEach(function (day) {
      var dayHeader = document.createElement('div');
      dayHeader.classList.add('day', 'header');
      dayHeader.textContent = day;
      daysDiv.appendChild(dayHeader);
    });

    // Obtener el primer día del mes
    var firstDay = new Date(currentYear, monthIndex, 1).getDay(); // Crea un objeto de fecha para el 1 de cada mes de 2024 y luego obtiene el día de la semana que corresponde a esa fecha
    // Ajustar para que lunes sea el primer día de la semana
    firstDay = firstDay === 0 ? 6 : firstDay - 1;

    // Añadir celdas vacías para los días antes del primer día del mes
    for (var i = 0; i < firstDay; i++) {
      var emptyCell = document.createElement('div');
      emptyCell.classList.add('day');
      daysDiv.appendChild(emptyCell);
    }

    // Añadir los días del mes
    var daysInMonth = new Date(currentYear, monthIndex + 1, 0).getDate();
    for (var day = 1; day <= daysInMonth; day++) {
      var dayCell = document.createElement('div');
      dayCell.classList.add('day');
      dayCell.textContent = day;
      dayCell.addEventListener('click', seleccionarDia);
      daysDiv.appendChild(dayCell);
    }
    monthDiv.appendChild(daysDiv);
    calendar.appendChild(monthDiv);
  });
}
function formatDate(date) {
  var year = date.getFullYear();
  var month = (date.getMonth() + 1).toString().padStart(2, '0'); // Sumamos 1 ya que los meses en JavaScript son 0-indexed
  var day = date.getDate().toString().padStart(2, '0');
  return "".concat(year, "-").concat(month, "-").concat(day);
}
function seleccionarDia(event) {
  var clickedDateElement = event.target;
  var day = parseInt(clickedDateElement.textContent);
  if (isNaN(day)) return; // Ignorar clics en celdas vacías

  // Obtener el mes del calendario contenedor más cercano
  var monthDiv = clickedDateElement.closest('.month');
  var monthHeader = monthDiv.querySelector('h3').textContent;
  // console.log("Encabezado del mes:", monthHeader);

  // Array de nombres de meses en español
  var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  // Separar el nombre del mes y el año del encabezado
  var _monthHeader$split = monthHeader.split(' '),
    _monthHeader$split2 = _slicedToArray(_monthHeader$split, 2),
    monthName = _monthHeader$split2[0],
    year = _monthHeader$split2[1];
  var currentYear = parseInt(year); // Convertir el año a número

  // Buscar el índice del mes
  var monthIndex = months.indexOf(monthName);
  if (monthIndex === -1) {
    console.error("Nombre de mes no encontrado:", monthName);
    return;
  }

  // Crear la fecha usando el año actual, el índice del mes y el día
  var clickedDate = new Date(currentYear, monthIndex, day);
  // console.log("Fecha seleccionada:", clickedDate);

  // Formato de la fecha
  var formattedDate = formatDate(clickedDate); // Usar la nueva función formatDate
  // console.log("Fecha formateada:", formattedDate);

  // Verificar si el elemento ya tiene la clase 'selected'
  if (clickedDateElement.classList.contains('selected')) {
    // Si tiene la clase 'selected', eliminar la clase
    clickedDateElement.classList.remove('selected');

    // Remover la fecha de la lista de fechas seleccionadas
    var index = selectedDates.indexOf(formattedDate);
    if (index > -1) {
      selectedDates.splice(index, 1);
    }
  } else {
    // Si no tiene la clase 'selected', añadir la clase
    clickedDateElement.classList.add('selected');

    // Añadir la fecha a la lista de fechas seleccionadas
    selectedDates.push(formattedDate);
  }
  // console.log(selectedDates);
  guardarSelecciones(); // Guardar en localStorage
}
function guardarSelecciones() {
  localStorage.setItem('selectedDates', JSON.stringify(selectedDates));
}
function cargarSelecciones() {
  var storedDates = localStorage.getItem('selectedDates');
  if (storedDates) {
    selectedDates = JSON.parse(storedDates);
    // Actualizar el calendario con las fechas almacenadas
    actualizarCalendario();
  }
}
function actualizarCalendario() {
  var monthDivs = document.querySelectorAll('.month');
  monthDivs.forEach(function (monthDiv) {
    var monthHeader = monthDiv.querySelector('h3').textContent;
    var _monthHeader$split3 = monthHeader.split(' '),
      _monthHeader$split4 = _slicedToArray(_monthHeader$split3, 2),
      monthName = _monthHeader$split4[0],
      year = _monthHeader$split4[1];
    var currentYear = parseInt(year);
    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var monthIndex = months.indexOf(monthName);
    if (monthIndex === -1) return;
    var daysInMonth = monthDiv.querySelectorAll('.day');
    daysInMonth.forEach(function (dayCell) {
      var day = parseInt(dayCell.textContent);
      if (isNaN(day)) return;
      var date = new Date(currentYear, monthIndex, day);
      var formattedDate = formatDate(date); // Usar la nueva función formatDate
      if (selectedDates.includes(formattedDate)) {
        dayCell.classList.add('selected');
      } else {
        dayCell.classList.remove('selected');
      }
    });
  });
}
function obtenerFechasSeleccionadas() {
  return selectedDates;
}
module.exports = obtenerFechasSeleccionadas;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/js/calendario.js");
/******/ 	
/******/ })()
;