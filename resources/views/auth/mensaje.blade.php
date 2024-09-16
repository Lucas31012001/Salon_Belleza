@extends('layout')

@section('content')
<div class="contenedor-app">
    <div class="imagen">
        @include('templates.imagenes')
    </div>
    <div class="app">

        <h1 class="nombre-pagina">Confirma tu cuenta</h1>
        <p class="descripcion-pagina">Hemos enviado las instrucciones para confirmar tu cuenta a tu E-mail.</p>
        
    </div>
</div>
@endsection