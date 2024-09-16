@extends('layout')

@section('content')
<div class="contenedor-app">
    <div class="imagen">
        @include('templates.imagenes')
    </div>
    <div class="app">

        <h1 class="nombre-pagina">Recuperar Password</h1>
        <p class="descripcion-pagina">Coloca tu nuevo password a continuación</p>

        @include('templates.alertas')

        <?php if($error){ ?>
            <div class="alerta"></div>
        <?php } ?> 
        <form class="formulario" method="POST">
            @csrf <!-- Token CSRF -->

            <div class="campo">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Tu Nuevo Password">
            </div>

            <input type="submit" class="boton" value="Guardar Nuevo Password">
        </form>

        <div class="acciones">
            <a href="/login">¿Ya tienes cuenta? Iniciar Sesión</a>
            <a href="/crear-cuenta">¿Aún no tienes cuenta? Obtener una</a>
        </div>
    </div>
</div>
@endsection