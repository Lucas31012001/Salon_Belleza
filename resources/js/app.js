const obtenerFechasSeleccionadas = require('./calendario.js');

let paso = 1;
const pasoInicial = 1;
const pasoFinal = 5;

const cita = {
    id: '',
    nombre: '',
    fecha: '',
    hora: '',
    servicios: []
}

document.addEventListener('DOMContentLoaded', function(){ // Espera a que el documento HTML esté completamente cargado y listo
    iniciarApp();
});

function iniciarApp(){
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

function mostrarSeccion(){

    // Ocultar la sección que tenga la clase de mostrar
    const seccionAnterior = document.querySelector('.mostrar');
    if(seccionAnterior){
    seccionAnterior.classList.remove('mostrar');
    }

    // Mostrar la sección a la que hemos clicado
    const pasoSelector = `#paso-${paso}`;
    const seccion = document.querySelector(pasoSelector);
    seccion.classList.add('mostrar');

    // Quita la clase de actual al tab anterior
    const tabAnterior = document.querySelector('.actual');
    if(tabAnterior){
        tabAnterior.classList.remove('actual');
    }

    // Resalta el tab actual
    const tab = document.querySelector(`[data-paso="${paso}"]`);
    tab.classList.add('actual');
}

function formularios(servicios){
    const formularioPerfil = document.getElementById('formularioPerfil');
    const selectOpciones = document.getElementById('opciones');

    formularioPerfil.addEventListener('change', function() {
        const perfilSeleccionado = document.querySelector('input[name="perfil"]:checked').value;

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

    const formularioServicio = document.getElementById('formularioServicio');

    formularioServicio.addEventListener('change', function() {
        const servicioSeleccionado = document.getElementById('opciones').value;
        generarOpcionesHora(servicioSeleccionado);

        // Filtrar y mostrar los servicios según la opción seleccionada
        const serviciosFiltrados = servicios.filter(servicio => servicio.seleccionar === servicioSeleccionado);
        mostrarServicios(serviciosFiltrados);
    });
}

function tabs(){
    const botones = document.querySelectorAll('.tabs button');

    botones.forEach(boton => {
        boton.addEventListener('click', function(e){
            e.preventDefault();
            paso = parseInt(e.target.dataset.paso); // dataset.paso accede al atributo de datos data-paso del botón y se convierte en un número entero

            mostrarSeccion();
            botonesPaginador();
        });
    })
}

function botonesPaginador(){
    const paginaSiguiente = document.querySelector('#siguiente');
    const paginaAnterior = document.querySelector('#anterior');

    if(paso === 1){
        paginaAnterior.classList.add('ocultar');
        paginaSiguiente.classList.remove('ocultar');
    } else if(paso === 5){
        paginaAnterior.classList.remove('ocultar');
        paginaSiguiente.classList.add('ocultar');

        mostrarResumen();
    } else {
        paginaAnterior.classList.remove('ocultar');
        paginaSiguiente.classList.remove('ocultar');
    }

    mostrarSeccion();
}

function paginaAnterior(){
    const paginaAnterior = document.querySelector('#anterior');
    paginaAnterior.addEventListener('click', function(){

        if(paso <= pasoInicial) return;
        paso--;

        botonesPaginador();
    })
}

function paginaSiguiente(){
    const paginaSiguiente = document.querySelector('#siguiente');
    paginaSiguiente.addEventListener('click', function(){

        if(paso >= pasoFinal) return;
        paso++;

        botonesPaginador();
    })
}

async function consultarAPI(){ 
    try{
        const url = 'http://localhost:8000/api/servicios';
        const resultado = await fetch(url);
        const servicios = await resultado.json();
        formularios(servicios);

    } catch (error){
        console.log(error);
    }

/* Una función asíncrona arranca mientras lo hacen otras funciones a la vez. El await se utiliza en JavaScript para esperar a que una Promesa 
se resuelva antes de continuar con la ejecución de la función. La palabra clave await solo se puede usar dentro de una función 
declarada con async.

fetch API sirve para que javascript pueda consultar datos de una base de datos porque js por sí misma no puede hacerlo
*/
}

async function consultarAPI_2(){ 
    try{
        const url = 'http://localhost:8000/api/citas2';
        const resultado = await fetch(url);
        const citas = await resultado.json();
        return citas;
        
    } catch (error){
        console.log(error);
    }
}

function mostrarServicios(servicios){
    // Limpiar los servicios mostrados previamente
    document.querySelector('#servicios').innerHTML = '';

    servicios.forEach(servicio => {
        const {id, nombre, precio, descripcion, imagen} = servicio; // Extrae las propiedades id, nombre y precio del objeto servicio y las asigna a variables con el mismo nombre

        const nombreServicio = document.createElement('P');
        nombreServicio.classList.add('nombre-servicio');
        nombreServicio.textContent = nombre;

        const descripcionServicio = document.createElement('P');
        descripcionServicio.classList.add('descripcion-servicio');
        descripcionServicio.textContent = descripcion;

        const imagenServicio = document.createElement('img');
        imagenServicio.src = 'images/' + imagen;
        imagenServicio.classList.add('imagen-servicio');

        const precioServicio = document.createElement('P');
        precioServicio.classList.add('precio-servicio');
        if(precio == 0.00){
            precioServicio.textContent = `...`;
            imagenServicio.classList.add('imagen-servicio-telefono');
        } else {
            precioServicio.textContent = `${precio}€`;
        }

        const servicioDiv = document.createElement('DIV');
        servicioDiv.classList.add('servicio');
        servicioDiv.dataset.idServicio = id; // "data-id-servicio" en el HTML se convierte en "idServicio" en el dataset de JavaScript
        // Los atributos data-* en un elemento HTML sirven para almacenar información personalizada y específica que puede ser utilizada por JavaScript para agregar comportamiento interactivo, realizar operaciones de manipulación del DOM

        servicioDiv.onclick = function(){
            seleccionarServicio(servicio)
        }

        servicioDiv.appendChild(nombreServicio);
        servicioDiv.appendChild(descripcionServicio);
        servicioDiv.appendChild(imagenServicio);
        servicioDiv.appendChild(precioServicio);

        document.querySelector('#servicios').appendChild(servicioDiv);
    });
}

function seleccionarServicio(servicio){
    const { id } = servicio;
    const { precio } = servicio;
    const { servicios } = cita;

    // No permitir seleccionar servicios con precio 0.00
    if (precio == 0.00) {
        return;
    }

    // Identificar el elemento al que se le da click
    const divServicio = document.querySelector(`[data-id-servicio="${id}"]`);

    // Deseleccionar todos los servicios
    const serviciosSeleccionados = document.querySelectorAll('.seleccionado');
    serviciosSeleccionados.forEach(servicioSeleccionado => {
        servicioSeleccionado.classList.remove('seleccionado');
    });

    // Comprobar si un servicio ya fue agregado
    if(servicios.some(agregado => agregado.id === id)){
        // Eliminarlo
        cita.servicios = [];
        divServicio.classList.remove('seleccionado');
    } else {
        // Agregarlo
        cita.servicios = [servicio]; // Solo un servicio debe estar en el array
        divServicio.classList.add('seleccionado');
    }
}

function idCliente(){
    cita.id = document.querySelector('#id').value;
}

function nombreCliente(){
    cita.nombre = document.querySelector('#nombre').value;
}

function seleccionarFecha(){
    const inputFecha = document.querySelector('#fecha');
    inputFecha.addEventListener('input', function(e){

        const dia = new Date(e.target.value).getUTCDay();

        if([6, 0].includes(dia)){
            e.target.value = '';
            mostrarAlerta('Fines de semana no permitidos', 'error', '#paso-4 .formulario');
        } else {
            cita.fecha = e.target.value;
        }
    })
}

function desahabilitarhora(){
    const inputFecha = document.querySelector('#fecha');
    inputFecha.addEventListener('change', function() {
        // Deshabilitar el select de hora
        const selectHora = document.querySelector('#hora');
        selectHora.value = "";
    });
}

function generarOpcionesHora(servicioSeleccionado) {
    const selectHora = document.querySelector('#hora');
    selectHora.innerHTML = '';
    let minutos;

    // Definir los minutos dependiendo del servicio seleccionado
    if (servicioSeleccionado == 'Corte_Hombre' || servicioSeleccionado == 'Corte_Mujer') {
        minutos = ['00', '30'];
    } else if (servicioSeleccionado == 'Afeitado_Hombre' || 'Peinado_Mujer' || servicioSeleccionado == 'Corte_Nino' || servicioSeleccionado == 'Corte_Nina') {
        minutos = ['15', '45'];
    } else if (servicioSeleccionado == 'Tenir_Hombre' || servicioSeleccionado == 'Tenir_Mujer') {
        minutos = ['00'];
    }

    // Iterar sobre el rango de horas
    for (let h = 10; h <= 18; h++) {
        minutos.forEach(min => {
            const hora = h.toString();
            const option = document.createElement('option');
            option.value = `${hora}:${min}`;
            option.text = `${hora}:${min}`;
            selectHora.add(option);
        });
    }
}

function seleccionarHora(){
    const selectHora = document.querySelector('#hora');
    selectHora.addEventListener('change', function(e) {
        cita.hora = e.target.value;
    })
}

// Función para verificar si la fecha y hora seleccionadas ya están reservadas
async function verificarDisponibilidad() {
    // Variables para almacenar el valor anterior de la fecha y la hora
    let fechaAnterior = '';
    let horaAnterior = '';

    // Obtener los elementos del input
    const inputFecha = document.getElementById('fecha');
    const inputHora = document.getElementById('hora');

    // Obtener las fechas seleccionadas desde el calendario
    const selectedDates = obtenerFechasSeleccionadas();
    console.log(cita.fecha);


    if (selectedDates.includes(cita.fecha)) {
        mostrarAlerta('En esta fecha el local no permite reservar citas, disculpe las molestias', 'error', '#paso-4 .formulario');
        // Restaurar el valor anterior de los inputs
        inputFecha.value = fechaAnterior;
        inputHora.value = horaAnterior;
        cita.fecha = fechaAnterior;
        cita.hora = horaAnterior;
    } else {
        const citas = await consultarAPI_2();
        const fechaHoraSeleccionada = `${cita.fecha} ${cita.hora}:00`;

        let citaExistente = false;

        citas.forEach(cita2 => {
            const { fecha, hora } = cita2;
            const fechaHoraCita2 = `${fecha} ${hora}`;

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
    }
}

function mostrarAlerta(mensaje, tipo, elemento, desaparece = true){
    const alertaPrevia = document.querySelector('.alerta');
    if(alertaPrevia){
        alertaPrevia.remove(); // Si ya hay una alerta la elimino
    } 

    // Crear la alerta
    const alerta = document.createElement('DIV');
    alerta.textContent = mensaje;
    alerta.classList.add('alerta');
    alerta.classList.add(tipo);

    const referencia = document.querySelector(elemento);
    referencia.appendChild(alerta);

    if(desaparece){
        // Eliminar la alerta
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

function mostrarResumen(){
    const resumen = document.querySelector('.contenido-resumen');

    // Limpiar el contenido de resumen cada vez que llame a la función mostrarResumen()
    while(resumen.firstChild){
        resumen.removeChild(resumen.firstChild);
    }

    if(Object.values(cita).includes('') || cita.servicios.length === 0){
        mostrarAlerta('Faltan datos de servicios, fecha u hora', 'error', '.contenido-resumen', false);

        return;
    }

    // Formatear el div de resumen
    const {nombre, fecha, hora, servicios} = cita;

    // Heading para servicios en resumen
    const headingServicios = document.createElement('H3');
    headingServicios.textContent = 'Resumen de Servicios';

    resumen.appendChild(headingServicios);

    // Iterando y mostrando los servicios
    servicios.forEach(servicio => {
        const { id, precio, nombre } = servicio;
        const contenedorServicio = document.createElement('DIV');
        contenedorServicio.classList.add('contenedor-servicio');

        const textoServicio = document.createElement('P');
        textoServicio.textContent = nombre;

        const precioServicio = document.createElement('P');
        precioServicio.innerHTML = `<span>Precio:</span> $${precio}`;

        contenedorServicio.appendChild(textoServicio);
        contenedorServicio.appendChild(precioServicio);

        resumen.appendChild(contenedorServicio);
    });

    // Heading para cita en resumen
    const headingCita = document.createElement('H3');
    headingCita.textContent = 'Resumen de Cita';

    resumen.appendChild(headingCita);

    const nombreCliente = document.createElement('P');
    nombreCliente.innerHTML = `<span>Nombre:</span> ${nombre}`;

    // Formatear la fecha en español
    const fechaObj = new Date(fecha);
    const mes = fechaObj.getMonth();
    const dia = fechaObj.getDate();
    const year = fechaObj.getFullYear();

    const fechaUTC = new Date( Date.UTC(year, mes, dia));
    
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
    const fechaFormateada = fechaUTC.toLocaleDateString('es-ES', opciones);

    const fechaCita = document.createElement('P');
    fechaCita.innerHTML = `<span>Fecha:</span> ${fechaFormateada}`;

    const horaCita = document.createElement('P');
    horaCita.innerHTML = `<span>Hora:</span> ${hora} Horas`;

    // Boton para crear una cita
    const botonReservar = document.createElement('BUTTON');
    botonReservar.classList.add('boton');
    botonReservar.textContent = 'Reservar Cita';
    botonReservar.onclick = reservarCita;

    resumen.appendChild(nombreCliente);
    resumen.appendChild(fechaCita);
    resumen.appendChild(horaCita);

    resumen.appendChild(botonReservar);
}

async function reservarCita(){

    const { nombre, fecha, hora, servicios, id } = cita;

    const idServicios = servicios.map(servicio => servicio.id);

    const datos = new FormData(); // FormData es una interfaz que proporciona una manera fácil de construir un conjunto de pares clave/valor para enviar datos mediante fetch

    datos.append('fecha', fecha);
    datos.append('hora', hora);
    datos.append('usuarioId', id);
    datos.append('servicios', idServicios);

    // Obtener el token CSRF desde una meta tag
    const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    datos.append('_token', token);

    console.log([...datos]);

    try{
        // Petición hacia la API
        const url = 'http://localhost:8000/api/citas';

        const respuesta = await fetch(url, {
            method: 'POST', // method y body son propiedades del objeto de configuración que se pasan como argumento a la función fetch
            body: datos,
            headers: {
                'X-CSRF-TOKEN': token // Incluye el token CSRF en los headers
            }
        });

        const resultado = await respuesta.json();
        console.log(resultado.resultado);

        if(resultado.resultado){
            Swal.fire({
                icon: "success",
                title: "Cita Creada",
                text: 'Tu cita fue creada correctamente',
                button: 'OK'
            }).then( () => {
                setTimeout(() => {
                    window.location.reload(); // Recarga la página
                }, 3000);
            })
        }
    } catch (error){
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Hubo un error al guardar la cita"
          });
    }
}



