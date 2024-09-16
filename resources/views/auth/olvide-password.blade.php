@extends('layout')

@section('content')
<div class="contenedor-app">
    <div class="imagen">
        @include('templates.imagenes')
    </div>
    <div class="app app-olvide">

        <h1 class="nombre-pagina">Olvidé  mi Password</h2>
        <p class="descripcion-pagina">Reestablece tu password escribiendo tu email a continuación</p>

        @include('templates.alertas')

        <form class="formulario" action="/olvide" method="POST">
            @csrf <!-- Token CSRF -->

            <div class="campo">
                <label for="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="Tu E-mail">
            </div>

            <input type="submit" class="boton" value="Enviar Instrucciones">
        </form>

        <div class="acciones">
            <a href="/login">¿Ya tienes una cuenta? Inicia Sesión</a>
            <a href="/crear-cuenta">¿Aún no tienes una cuenta? Crear Una</a>
        </div>
    </div>
</div>
@endsection