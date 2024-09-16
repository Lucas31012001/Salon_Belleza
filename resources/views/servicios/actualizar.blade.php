@extends('layout')

<div class="contenedor-app">
    <div class="imagen">
        @include('templates.imagenes')
    </div>
    <div class="app">

        <h1 class="nombre-pagina">Actualizar Servicio</h1>
        <p class="descripcion-pagina">Modifica los valores del formulario</p>

            @include('templates.barra')
            @include('templates.alertas')

        <form method="POST" class="formulario" enctype="multipart/form-data">
            @csrf <!-- Token CSRF -->

            @include('servicios.formulario')
            <input type="submit" class="boton" value="Actualizar">
        </form>
    </div>
</div>