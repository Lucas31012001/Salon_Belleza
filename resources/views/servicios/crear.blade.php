@extends('layout')

<div class="contenedor-app">
    <div class="imagen">
        @include('templates.imagenes')
    </div>
    <div class="app">

        <h1 class="nombre-pagina">Nuevo Servicio</h1>
        <p class="descripcion-pagina">Llena todos los campos para añadir un nuevo servicio</p>

            @include('templates.barra')
            @include('templates.alertas')

        <form action="/servicios/crear" method="POST" class="formulario" enctype="multipart/form-data">
            @csrf <!-- Token CSRF -->

            @include('servicios.formulario')
            <input type="submit" class="boton" value="Guardar Servicio">
        </form>
    </div>
</div>
