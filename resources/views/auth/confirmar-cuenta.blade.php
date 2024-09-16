@extends('layout')

@section('content')
<div class="contenedor-app">
    <div class="imagen">
        @include('templates.imagenes')
    </div>
    <div class="app">

        <h1 class="nombre-pagina">Confirmar Cuenta</h1>

        @include('templates.alertas')

        <div class="acciones">
            <a href="/login">Iniciar Sesión</a>
        </div>
    </div>
</div>
@endsection