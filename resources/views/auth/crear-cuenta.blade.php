@extends('layout')

@section('content')
<div class="contenedor-app">
    <div class="imagen">
        @include('templates.imagenes')
    </div>
    <div class="app">

        <h1 class="nombre-pagina">Crear Cuenta</h1>
        <p class="descripcion-pagina">Llena el siguiente formulario para crear una cuenta</p>

        @include('templates.alertas')

        <form class="formulario" method="POST" action="/crear-cuenta">
            @csrf <!-- Token CSRF -->

            <div class="campo">
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" placeholder="Tu Nombre" value="{{ e(old('nombre', $usuario->nombre ?? '')) }}">
            </div>

            <div class="campo">
                <label for="apellido">Apellido</label>
                <input type="text" name="apellido" id="apellido" placeholder="Tu Apellido" value="{{ e(old('apellido', $usuario->apellido ?? '')) }}">
            </div>

            <div class="campo">
                <label for="telefono">Teléfono</label>
                <input type="tel" name="telefono" id="telefono" placeholder="Tu Teléfono" value="{{ e(old('telefono', $usuario->telefono ?? '')) }}">
            </div>

            <div class="campo">
                <label for="email">E-mail</label>
                <input type="email" name="email" id="email" placeholder="Tu E-mail" value="{{ e(old('email', $usuario->email ?? '')) }}">
            </div>

            <div class="campo">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Tu Password">
                <button type="button" id="togglePassword">Mostrar</button>
            </div>  

            <input type="submit" value="Crear Cuenta" class="boton">
        </form>

        <div class="acciones">
            <a href="/login">¿Ya tienes una cuenta? Inicia Sesión</a>
            <a href="/olvide">¿Olvidaste tu password?</a>
        </div>
        @endsection

        @section('scripts')
            <script src="{{ asset('js/contrasena.js') }}"></script>
        @endsection
    </div>
</div>
