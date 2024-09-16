@extends('layout')

@section('content')
<div class="contenedor-app">
    <div class="imagen">
        @include('templates.imagenes')
    </div>
    <div class="app">

        <h1 class="nombre-pagina">Crear Nueva Cita</h1>
        <p class="descripcion-pagina">Elige tus servicios y coloca tus datos</p>

        <div class="barra">
            <p>Hola, {{ $nombre ?? '' }}</p>
            <a class="boton" href="/logout">Cerrar Sesión</a>
        </div>
        
        <div id="app">
            <nav class="tabs">
                <button class="actual" type="button" data-paso="1">Perfil</button> <!-- El atributo data-paso es útil para manejar procesos secuenciales y facilita la interacción y manipulación de elementos en el DOM -->
                <button type="button" data-paso="2">Servicio</button>
                <button type="button" data-paso="3">Servicios</button>
                <button type="button" data-paso="4">Información Cita</button>
                <button type="button" data-paso="5">Resumen</button>
            </nav>

            <div id="paso-1" class="seccion">
                <h2>¿Para qué perfil de cliente quieres el servicio?</h2>
                <form class="formulario" id="formularioPerfil">
                    <div class="campo">
                    <label>
                        <input type="radio" name="perfil" value="hombre" required>Hombre
                    </label>
                    </div>

                    <div class="campo">
                    <label>
                        <input type="radio" name="perfil" value="mujer">Mujer
                    </label>
                    </div>

                    <div class="campo">
                    <label> 
                        <input type="radio" name="perfil" value="niño">Niño (hasta 12 años)
                    </label>
                    </div>

                    <div class="campo">
                    <label>
                        <input type="radio" name="perfil" value="niña">Niña (hasta 12 años)
                    </label>
                    </div>
                </form>
            </div>

            <div id="paso-2" class="seccion">
                <h2>Elige un servicio</h2>
                <form class="formulario" id="formularioServicio">
                    <select id="opciones" name="opcion" required>
                        <option value="" disabled selected>---</option>
                    </select>
                </form>
            </div>

            <div id="paso-3" class="seccion">
                <h2>Servicios</h2>
                <p class="text-center">Elige tus servicios a continuación</p>
                <div id="servicios" class="listado-servicios"></div>
            </div>
            <div id="paso-4" class="seccion">
                <h2>Tus Datos y Cita</h2>
                <p class="text-center">Coloca tus datos y fecha de tu cita</p>

                <form class="formulario">
                    <div class="campo">
                        <label for="nombre">Nombre</label>
                        <input id="nombre" type="text" placeholder="Tu Nombre" value="{{ e($nombre) }}" disabled>
                    </div>

                    <div class="campo">
                        <label for="fecha">Fecha</label>
                        <input id="fecha" type="date" min="{{ date('Y-m-d') }}">
                    </div>

                    <div class="campo">
                        <label for="hora">Hora</label>
                        <select id="hora">
                        <option value="" disabled selected>---</option>;
                            <!-- Las opciones se generarán dinámicamente con JavaScript -->
                        </select>
                    </div>
                    <input type="hidden" id="id" value="{{ e($id) }}">
                </form>
            </div>
            <div id="paso-5" class="seccion contenido-resumen">
                <h2>Resumen</h2>
                <p class="text-center">Verifica que la información sea correcta</p>
            </div>

            <div class="paginacion">
                <button id="anterior" class="boton">&laquo; Anterior</button>
                <button id="siguiente" class="boton">Siguiente &raquo;</button>
            </div>
        </div>
        @endsection
        
        @section('scripts')
            <script src='//cdn.jsdelivr.net/npm/sweetalert2@11'></script>
            <script src="{{ asset('js/app.js') }}"></script>
        @endsection
    </div>
</div>
