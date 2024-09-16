/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/scss/app.scss":
/*!*********************************!*\
  !*** ./resources/scss/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var obtenerFechasSeleccionadas = __webpack_require__(/*! ./calendario.js */ "./resources/js/calendario.js");
var paso = 1;
var pasoInicial = 1;
var pasoFinal = 5;
var cita = {
  id: '',
  nombre: '',
  fecha: '',
  hora: '',
  servicios: []
};
document.addEventListener('DOMContentLoaded', function () {
  // Espera a que el documento HTML esté completamente cargado y listo
  iniciarApp();
});
function iniciarApp() {
  mostrarSeccion(); // Muestra y oculta las secciones
  formularios();
  tabs(); // Cambia la sección cuando se presionen los tabs
  botonesPaginador(); // Agrega o quita los botones del paginador
  paginaSiguiente();
  paginaAnterior();
  consultarAPI(); // Consulta la API en el backend de PHP
  consultarAPI_2();
  idCliente();
  nombreCliente(); // Añade el nombre del cliente al objeto de cita
  seleccionarFecha(); // Añade la fecha de la cita en el objeto de cita
  generarOpcionesHora(); // Genera las opciones que se pueden seleccionar en la hora
  seleccionarHora(); // Añade la hora de la cita en el objeto de cita

  // Verificar disponibilidad solo después de seleccionar la fecha y hora
  document.querySelector('#hora').addEventListener('change', verificarDisponibilidad);
  mostrarResumen(); // Muestra el resumen de la cita
}
function mostrarSeccion() {
  // Ocultar la sección que tenga la clase de mostrar
  var seccionAnterior = document.querySelector('.mostrar');
  if (seccionAnterior) {
    seccionAnterior.classList.remove('mostrar');
  }

  // Mostrar la sección a la que hemos clicado
  var pasoSelector = "#paso-".concat(paso);
  var seccion = document.querySelector(pasoSelector);
  seccion.classList.add('mostrar');

  // Quita la clase de actual al tab anterior
  var tabAnterior = document.querySelector('.actual');
  if (tabAnterior) {
    tabAnterior.classList.remove('actual');
  }

  // Resalta el tab actual
  var tab = document.querySelector("[data-paso=\"".concat(paso, "\"]"));
  tab.classList.add('actual');
}
function formularios(servicios) {
  var formularioPerfil = document.getElementById('formularioPerfil');
  var selectOpciones = document.getElementById('opciones');
  formularioPerfil.addEventListener('change', function () {
    var perfilSeleccionado = document.querySelector('input[name="perfil"]:checked').value;
    selectOpciones.innerHTML = '<option value="" disabled selected>---</option>';
    if (perfilSeleccionado === 'hombre') {
      selectOpciones.innerHTML += '<option value="Corte_Hombre">Corte de pelo</option>';
      selectOpciones.innerHTML += '<option value="Afeitado_Hombre">Afeitado de barba</option>';
      selectOpciones.innerHTML += '<option value="Tenir_Hombre">Teñir pelo</option>';
    } else if (perfilSeleccionado === 'mujer') {
      selectOpciones.innerHTML += '<option value="Corte_Mujer">Corte de pelo</option>';
      selectOpciones.innerHTML += '<option value="Tenir_Mujer">Teñir pelo</option>';
      selectOpciones.innerHTML += '<option value="Peinado_Mujer">Peinado</option>';
    } else if (perfilSeleccionado === 'niño') {
      selectOpciones.innerHTML += '<option value="Corte_Nino">Corte de pelo</option>';
    } else if (perfilSeleccionado === 'niña') {
      selectOpciones.innerHTML += '<option value="Corte_Nina">Corte de pelo</option>';
    }

    // Limpiar los servicios mostrados al cambiar de perfil
    document.querySelector('#servicios').innerHTML = '';
  });
  var formularioServicio = document.getElementById('formularioServicio');
  formularioServicio.addEventListener('change', function () {
    var servicioSeleccionado = document.getElementById('opciones').value;
    generarOpcionesHora(servicioSeleccionado);

    // Filtrar y mostrar los servicios según la opción seleccionada
    var serviciosFiltrados = servicios.filter(function (servicio) {
      return servicio.seleccionar === servicioSeleccionado;
    });
    mostrarServicios(serviciosFiltrados);
  });
}
function tabs() {
  var botones = document.querySelectorAll('.tabs button');
  botones.forEach(function (boton) {
    boton.addEventListener('click', function (e) {
      e.preventDefault();
      paso = parseInt(e.target.dataset.paso); // dataset.paso accede al atributo de datos data-paso del botón y se convierte en un número entero

      mostrarSeccion();
      botonesPaginador();
    });
  });
}
function botonesPaginador() {
  var paginaSiguiente = document.querySelector('#siguiente');
  var paginaAnterior = document.querySelector('#anterior');
  if (paso === 1) {
    paginaAnterior.classList.add('ocultar');
    paginaSiguiente.classList.remove('ocultar');
  } else if (paso === 5) {
    paginaAnterior.classList.remove('ocultar');
    paginaSiguiente.classList.add('ocultar');
    mostrarResumen();
  } else {
    paginaAnterior.classList.remove('ocultar');
    paginaSiguiente.classList.remove('ocultar');
  }
  mostrarSeccion();
}
function paginaAnterior() {
  var paginaAnterior = document.querySelector('#anterior');
  paginaAnterior.addEventListener('click', function () {
    if (paso <= pasoInicial) return;
    paso--;
    botonesPaginador();
  });
}
function paginaSiguiente() {
  var paginaSiguiente = document.querySelector('#siguiente');
  paginaSiguiente.addEventListener('click', function () {
    if (paso >= pasoFinal) return;
    paso++;
    botonesPaginador();
  });
}
function consultarAPI() {
  return _consultarAPI.apply(this, arguments);
}
function _consultarAPI() {
  _consultarAPI = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var url, resultado, servicios;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          url = 'http://localhost:8000/api/servicios';
          _context.next = 4;
          return fetch(url);
        case 4:
          resultado = _context.sent;
          _context.next = 7;
          return resultado.json();
        case 7:
          servicios = _context.sent;
          formularios(servicios);
          _context.next = 14;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return _consultarAPI.apply(this, arguments);
}
function consultarAPI_2() {
  return _consultarAPI_.apply(this, arguments);
}
function _consultarAPI_() {
  _consultarAPI_ = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var url, resultado, citas;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          url = 'http://localhost:8000/api/citas2';
          _context2.next = 4;
          return fetch(url);
        case 4:
          resultado = _context2.sent;
          _context2.next = 7;
          return resultado.json();
        case 7:
          citas = _context2.sent;
          return _context2.abrupt("return", citas);
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 11]]);
  }));
  return _consultarAPI_.apply(this, arguments);
}
function mostrarServicios(servicios) {
  // Limpiar los servicios mostrados previamente
  document.querySelector('#servicios').innerHTML = '';
  servicios.forEach(function (servicio) {
    var id = servicio.id,
      nombre = servicio.nombre,
      precio = servicio.precio,
      descripcion = servicio.descripcion,
      imagen = servicio.imagen; // Extrae las propiedades id, nombre y precio del objeto servicio y las asigna a variables con el mismo nombre

    var nombreServicio = document.createElement('P');
    nombreServicio.classList.add('nombre-servicio');
    nombreServicio.textContent = nombre;
    var descripcionServicio = document.createElement('P');
    descripcionServicio.classList.add('descripcion-servicio');
    descripcionServicio.textContent = descripcion;
    var imagenServicio = document.createElement('img');
    imagenServicio.src = 'images/' + imagen;
    imagenServicio.classList.add('imagen-servicio');
    var precioServicio = document.createElement('P');
    precioServicio.classList.add('precio-servicio');
    if (precio == 0.00) {
      precioServicio.textContent = "...";
      imagenServicio.classList.add('imagen-servicio-telefono');
    } else {
      precioServicio.textContent = "".concat(precio, "\u20AC");
    }
    var servicioDiv = document.createElement('DIV');
    servicioDiv.classList.add('servicio');
    servicioDiv.dataset.idServicio = id; // "data-id-servicio" en el HTML se convierte en "idServicio" en el dataset de JavaScript
    // Los atributos data-* en un elemento HTML sirven para almacenar información personalizada y específica que puede ser utilizada por JavaScript para agregar comportamiento interactivo, realizar operaciones de manipulación del DOM

    servicioDiv.onclick = function () {
      seleccionarServicio(servicio);
    };
    servicioDiv.appendChild(nombreServicio);
    servicioDiv.appendChild(descripcionServicio);
    servicioDiv.appendChild(imagenServicio);
    servicioDiv.appendChild(precioServicio);
    document.querySelector('#servicios').appendChild(servicioDiv);
  });
}
function seleccionarServicio(servicio) {
  var id = servicio.id;
  var precio = servicio.precio;
  var servicios = cita.servicios;

  // No permitir seleccionar servicios con precio 0.00
  if (precio == 0.00) {
    return;
  }

  // Identificar el elemento al que se le da click
  var divServicio = document.querySelector("[data-id-servicio=\"".concat(id, "\"]"));

  // Deseleccionar todos los servicios
  var serviciosSeleccionados = document.querySelectorAll('.seleccionado');
  serviciosSeleccionados.forEach(function (servicioSeleccionado) {
    servicioSeleccionado.classList.remove('seleccionado');
  });

  // Comprobar si un servicio ya fue agregado
  if (servicios.some(function (agregado) {
    return agregado.id === id;
  })) {
    // Eliminarlo
    cita.servicios = [];
    divServicio.classList.remove('seleccionado');
  } else {
    // Agregarlo
    cita.servicios = [servicio]; // Solo un servicio debe estar en el array
    divServicio.classList.add('seleccionado');
  }
}
function idCliente() {
  cita.id = document.querySelector('#id').value;
}
function nombreCliente() {
  cita.nombre = document.querySelector('#nombre').value;
}
function seleccionarFecha() {
  var inputFecha = document.querySelector('#fecha');
  inputFecha.addEventListener('input', function (e) {
    var dia = new Date(e.target.value).getUTCDay();
    if ([6, 0].includes(dia)) {
      e.target.value = '';
      mostrarAlerta('Fines de semana no permitidos', 'error', '#paso-4 .formulario');
    } else {
      cita.fecha = e.target.value;
    }
  });
}
function desahabilitarhora() {
  var inputFecha = document.querySelector('#fecha');
  inputFecha.addEventListener('change', function () {
    // Deshabilitar el select de hora
    var selectHora = document.querySelector('#hora');
    selectHora.value = "";
  });
}
function generarOpcionesHora(servicioSeleccionado) {
  var selectHora = document.querySelector('#hora');
  selectHora.innerHTML = '';
  var minutos;

  // Definir los minutos dependiendo del servicio seleccionado
  if (servicioSeleccionado == 'Corte_Hombre' || servicioSeleccionado == 'Corte_Mujer') {
    minutos = ['00', '30'];
  } else if (servicioSeleccionado == 'Afeitado_Hombre' || 'Peinado_Mujer' || 0 || 0) {
    minutos = ['15', '45'];
  } else {}

  // Iterar sobre el rango de horas
  var _loop = function _loop(h) {
    minutos.forEach(function (min) {
      var hora = h.toString();
      var option = document.createElement('option');
      option.value = "".concat(hora, ":").concat(min);
      option.text = "".concat(hora, ":").concat(min);
      selectHora.add(option);
    });
  };
  for (var h = 10; h <= 18; h++) {
    _loop(h);
  }
}
function seleccionarHora() {
  var selectHora = document.querySelector('#hora');
  selectHora.addEventListener('change', function (e) {
    cita.hora = e.target.value;
  });
}

// Función para verificar si la fecha y hora seleccionadas ya están reservadas
function verificarDisponibilidad() {
  return _verificarDisponibilidad.apply(this, arguments);
}
function _verificarDisponibilidad() {
  _verificarDisponibilidad = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var fechaAnterior, horaAnterior, inputFecha, inputHora, selectedDates, citas, fechaHoraSeleccionada, citaExistente;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          // Variables para almacenar el valor anterior de la fecha y la hora
          fechaAnterior = '';
          horaAnterior = ''; // Obtener los elementos del input
          inputFecha = document.getElementById('fecha');
          inputHora = document.getElementById('hora'); // Obtener las fechas seleccionadas desde el calendario
          selectedDates = obtenerFechasSeleccionadas();
          console.log(cita.fecha);
          if (!selectedDates.includes(cita.fecha)) {
            _context3.next = 14;
            break;
          }
          mostrarAlerta('En esta fecha el local no permite reservar citas, disculpe las molestias', 'error', '#paso-4 .formulario');
          // Restaurar el valor anterior de los inputs
          inputFecha.value = fechaAnterior;
          inputHora.value = horaAnterior;
          cita.fecha = fechaAnterior;
          cita.hora = horaAnterior;
          _context3.next = 21;
          break;
        case 14:
          _context3.next = 16;
          return consultarAPI_2();
        case 16:
          citas = _context3.sent;
          fechaHoraSeleccionada = "".concat(cita.fecha, " ").concat(cita.hora, ":00");
          citaExistente = false;
          citas.forEach(function (cita2) {
            var fecha = cita2.fecha,
              hora = cita2.hora;
            var fechaHoraCita2 = "".concat(fecha, " ").concat(hora);
            if (fechaHoraCita2 === fechaHoraSeleccionada) {
              citaExistente = true;
            }
          });
          if (citaExistente) {
            mostrarAlerta('En ese momento ya hay una cita reservada', 'error', '#paso-4 .formulario');
            // Restaurar el valor anterior de los inputs
            inputFecha.value = fechaAnterior;
            inputHora.value = horaAnterior;
            cita.fecha = fechaAnterior;
            cita.hora = horaAnterior;
          } else {
            mostrarAlerta('La cita está disponible', 'exito', '#paso-4 .formulario');
            desahabilitarhora();
          }
        case 21:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _verificarDisponibilidad.apply(this, arguments);
}
function mostrarAlerta(mensaje, tipo, elemento) {
  var desaparece = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var alertaPrevia = document.querySelector('.alerta');
  if (alertaPrevia) {
    alertaPrevia.remove(); // Si ya hay una alerta la elimino
  }

  // Crear la alerta
  var alerta = document.createElement('DIV');
  alerta.textContent = mensaje;
  alerta.classList.add('alerta');
  alerta.classList.add(tipo);
  var referencia = document.querySelector(elemento);
  referencia.appendChild(alerta);
  if (desaparece) {
    // Eliminar la alerta
    setTimeout(function () {
      alerta.remove();
    }, 3000);
  }
}
function mostrarResumen() {
  var resumen = document.querySelector('.contenido-resumen');

  // Limpiar el contenido de resumen cada vez que llame a la función mostrarResumen()
  while (resumen.firstChild) {
    resumen.removeChild(resumen.firstChild);
  }
  if (Object.values(cita).includes('') || cita.servicios.length === 0) {
    mostrarAlerta('Faltan datos de servicios, fecha u hora', 'error', '.contenido-resumen', false);
    return;
  }

  // Formatear el div de resumen
  var nombre = cita.nombre,
    fecha = cita.fecha,
    hora = cita.hora,
    servicios = cita.servicios;

  // Heading para servicios en resumen
  var headingServicios = document.createElement('H3');
  headingServicios.textContent = 'Resumen de Servicios';
  resumen.appendChild(headingServicios);

  // Iterando y mostrando los servicios
  servicios.forEach(function (servicio) {
    var id = servicio.id,
      precio = servicio.precio,
      nombre = servicio.nombre;
    var contenedorServicio = document.createElement('DIV');
    contenedorServicio.classList.add('contenedor-servicio');
    var textoServicio = document.createElement('P');
    textoServicio.textContent = nombre;
    var precioServicio = document.createElement('P');
    precioServicio.innerHTML = "<span>Precio:</span> $".concat(precio);
    contenedorServicio.appendChild(textoServicio);
    contenedorServicio.appendChild(precioServicio);
    resumen.appendChild(contenedorServicio);
  });

  // Heading para cita en resumen
  var headingCita = document.createElement('H3');
  headingCita.textContent = 'Resumen de Cita';
  resumen.appendChild(headingCita);
  var nombreCliente = document.createElement('P');
  nombreCliente.innerHTML = "<span>Nombre:</span> ".concat(nombre);

  // Formatear la fecha en español
  var fechaObj = new Date(fecha);
  var mes = fechaObj.getMonth();
  var dia = fechaObj.getDate();
  var year = fechaObj.getFullYear();
  var fechaUTC = new Date(Date.UTC(year, mes, dia));
  var opciones = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var fechaFormateada = fechaUTC.toLocaleDateString('es-ES', opciones);
  var fechaCita = document.createElement('P');
  fechaCita.innerHTML = "<span>Fecha:</span> ".concat(fechaFormateada);
  var horaCita = document.createElement('P');
  horaCita.innerHTML = "<span>Hora:</span> ".concat(hora, " Horas");

  // Boton para crear una cita
  var botonReservar = document.createElement('BUTTON');
  botonReservar.classList.add('boton');
  botonReservar.textContent = 'Reservar Cita';
  botonReservar.onclick = reservarCita;
  resumen.appendChild(nombreCliente);
  resumen.appendChild(fechaCita);
  resumen.appendChild(horaCita);
  resumen.appendChild(botonReservar);
}
function reservarCita() {
  return _reservarCita.apply(this, arguments);
}
function _reservarCita() {
  _reservarCita = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var nombre, fecha, hora, servicios, id, idServicios, datos, token, url, respuesta, resultado;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          nombre = cita.nombre, fecha = cita.fecha, hora = cita.hora, servicios = cita.servicios, id = cita.id;
          idServicios = servicios.map(function (servicio) {
            return servicio.id;
          });
          datos = new FormData(); // FormData es una interfaz que proporciona una manera fácil de construir un conjunto de pares clave/valor para enviar datos mediante fetch
          datos.append('fecha', fecha);
          datos.append('hora', hora);
          datos.append('usuarioId', id);
          datos.append('servicios', idServicios);

          // Obtener el token CSRF desde una meta tag
          token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
          datos.append('_token', token);
          console.log(_toConsumableArray(datos));
          _context4.prev = 10;
          // Petición hacia la API
          url = 'http://localhost:8000/api/citas';
          _context4.next = 14;
          return fetch(url, {
            method: 'POST',
            // method y body son propiedades del objeto de configuración que se pasan como argumento a la función fetch
            body: datos,
            headers: {
              'X-CSRF-TOKEN': token // Incluye el token CSRF en los headers
            }
          });
        case 14:
          respuesta = _context4.sent;
          _context4.next = 17;
          return respuesta.json();
        case 17:
          resultado = _context4.sent;
          console.log(resultado.resultado);
          if (resultado.resultado) {
            Swal.fire({
              icon: "success",
              title: "Cita Creada",
              text: 'Tu cita fue creada correctamente',
              button: 'OK'
            }).then(function () {
              setTimeout(function () {
                window.location.reload(); // Recarga la página
              }, 3000);
            });
          }
          _context4.next = 25;
          break;
        case 22:
          _context4.prev = 22;
          _context4.t0 = _context4["catch"](10);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Hubo un error al guardar la cita"
          });
        case 25:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[10, 22]]);
  }));
  return _reservarCita.apply(this, arguments);
}

/***/ }),

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/scss/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;