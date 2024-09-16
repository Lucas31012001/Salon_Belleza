@extends('layout')

@section('content')
<div class="contenedor-app">
    <div class="imagen">
        @include('templates.imagenes')
    </div>
    <div class="app">

        <h1 class="nombre-pagina">Calendario</h1>
        <p class="descripcion-pagina">Administración del Calendario</p>

        @include('templates.barra')

        <p class="selecciona">&#x1F534; Selecciona en rojo las fechas en las que quieres que el local no permita reservar citas a los clientes</p>
        <div id="calendario"></div>
@endsection

@section('scripts')
    <script type="module" src="{{ asset('js/calendario.js') }}"></script>
@endsection
    </div>
</div>