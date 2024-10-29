@extends('layout')
@section('content')
<div class="cuerpo">
    <header class="header2">
        <div class="contenedor contenido-header">
            <div class="barra">
                <a href="/"><img class="logotipo" src="{{ asset('img/logotipo2.png') }}" alt="Logotipo"></a>

                <div class="mobile-menu">
                    <img src="{{ asset('img/barras.svg') }}" alt="icono menu responsive">
                </div>

                <div class="derecha">
                    <img class="dark-mode-boton" src="{{ asset('img/dark-mode.svg') }}">
                    <nav class="navegacion">
                        <a href="/nosotros">Nosotros</a>
                        <a href="/blog">Blog</a>
                        <a href="/donde-estamos">¿Dónde estamos?</a>
                        <a href="/contacto">Contacto</a>
                        <a href="/login">Iniciar Sesión</a>
                        <a href="/crear-cuenta">Crear Cuenta</a>
                    </nav>
                </div>
            </div> <!--.barra-->
        </div>
    </header>
    <main class="blog2 cuerpo-donde-estamos">
        <h1>¿Dónde estamos?</h1>

        <div class="address">
            <h3>Dirección</h3>
            <p>Av. de Salvador Allende, 21, 50015 Zaragoza</p>

            <div class="iframe">
                <iframe
                    width="600"
                    height="450"
                    frameborder="0" style="border:0"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2pPbh7YQXPr-SOlbuGtNjTjKtvY8L1dI&q={{ $latitude }},{{ $longitude }}"
                    allowfullscreen>
                </iframe>
            </div>

            <div class="address2">
                <a class="boton-amarillo" href="{{ url('google-maps') }}" target="_blank">Ver en Google Maps</a>
            </div>
        </div>

        <div class="hours">
            <h3>Horarios de Atención</h3>
            <p>Lunes a Viernes: 9:00 AM - 8:00 PM</p>
            <p>Sábado y Domingo: Cerrado</p>
        </div>

        <div class="transport">
            <h3>Medios de Transporte Cercanos</h3>
            <p>Parada de autobús: Línea 5 a 100m</p>
            <p>Estación de tranvía: Plaza Central a 300m</p>
        </div>

        <div class="parking">
            <h3>Estacionamiento</h3>
            <p>Estacionamiento público en la calle paralela</p>
            <p>Parking privado a 200m</p>
        </div>

        <div class="photos">
            <h3>Fotografías del Exterior</h3>
            <div class="photos2">
                <img src="{{ asset('img/Naila.jpg') }}" alt="Foto exterior 1">
                <img src="{{ asset('img/Naila2.jpg') }}" alt="Foto exterior 2">
            </div>
        </div>

        <div class="contact">
            <h3>Contacto</h3>
            <p>Teléfono: (+34) 643 22 15 67</p>
            <p>Email: Naila@peluqueria.com</p>
        </div>
    </main>

    <footer class="footer">
        <div class="contenedor contenedor-footer">
            <nav class="navegacion">
                <a href="/nosotros">Nosotros</a>
                <a href="/blog">Blog</a>
                <a href="/donde-estamos">¿Dónde estamos?</a>
                <a href="/contacto">Contacto</a>
                <a href="/login">Iniciar Sesión</a>
                <a href="/crear-cuenta">Crear Cuenta</a>
            </nav>
        </div>

        <p class="copyright">Todos los derechos Reservados {{ date('Y') }} &copy;</p>
    </footer>
    @endsection

    @section('scripts')
        <script src="{{ asset('js/darkMode.js') }}"></script>
    @endsection
</div>

