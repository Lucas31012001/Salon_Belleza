@extends('layout')

@section('content')
<div class="contenedor-app">
    <div class="imagen">
        @include('templates.imagenes')
    </div>
    <div class="app">

        <h1 class="nombre-pagina">Panel de Administración</h1>

        <div class="barra">
            <p>Hola, {{ $nombre ?? '' }}</p>

            <a class="boton" href="/logout">Cerrar Sesión</a>
        </div>

        @include('templates.barra')

        <h2>Buscar Citas</h2>
        <div class="busqueda">
            <form class="formulario">
                <div class="campo">
                    <label for="fecha">Fecha</label>
                    <input type="date" id="fecha" name="fecha" value="{{ e($fecha) }}">
                </div>
            </form>
        </div>

        
        @if (count($citas) === 0)
            <h2>No hay citas en esta fecha</h2>
        @endif

        <div id="citas-admin">
            <ul class="citas">
                @php $idCita = 0; @endphp
                @foreach($citas as $key => $cita)
                    @if($idCita !== $cita->id)
                        @php $total = 0; @endphp
                    <li>
                            <p>ID: <span>{{ e($cita->id) }}</span></p>
                            <p>Hora: <span>{{ e($cita->hora) }}</span></p>
                            <p>Cliente: <span>{{ e($cita->cliente) }}</span></p>
                            <p>Email: <span>{{ e($cita->email) }}</span></p>
                            <p>Teléfono: <span>{{ e($cita->telefono) }}</span></p>

                            <h3>Servicios</h3>
                        @php $idCita = $cita->id; @endphp
                    @endif
                    @php $total += $cita->precio; @endphp
                    <p class="servicio">{{ e($cita->servicio)}}</p>

                    @php
                        $actual = $cita->id;
                        $proximo = $citas[$key + 1]->id ?? 0;
                    @endphp

                        @if(esUltimo($actual, $proximo))
                            <p class="total">Total: <span>$ {{ e($total) }}</span></p>

                            <form action="/api/eliminar" method="POST">
                                @csrf <!-- Token CSRF -->

                                <input type="hidden" name="id" value="{{ e($cita->id) }}">
                                <input type="submit" class="boton-eliminar" value="Eliminar">
                            </form>
                        @endif
                @endforeach
            </ul>
        </div>
        @endsection

        @section('scripts')
            <script src="{{ asset('js/buscador.js') }}"></script>
        @endsection
    </div>
</div>