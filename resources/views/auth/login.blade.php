@extends('layout')

@section('content')
<div class="contenedor-app">
    <div class="imagen">
        @include('templates.imagenes')
    </div>
    <div class="app app-login">

        <h1 class="nombre-pagina">Login</h1>
        <p class="descripcion-pagina">Inicia sesión con tus datos</p>

        @include('templates.alertas')

        <form class="formulario" method="POST" action="/login">
            @csrf <!-- Token CSRF -->

            <div class="campo">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Tu Email" name="email">
            </div>

            <div class="campo">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Tu Password" name="password">
                <button type="button" id="togglePassword">Mostrar</button>
            </div>

            <input type="submit" class="boton" value="Iniciar Sesión">
        </form>

        <div class="acciones">
            <a href="/crear-cuenta">¿Aún no tienes una cuenta? Crear una</a>
            <a href="/olvide">¿Olvidaste tu password?</a>
        </div>
        <div>
            <a href="/" style="color: white;">&#8592; Volver</a>
        </div>
        @endsection

        @section('scripts')
            <script src="{{ asset('js/contrasena.js') }}"></script>
        @endsection
    </div>
</div>
