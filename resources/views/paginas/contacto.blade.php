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

    <main class="sobre-nosotros contenedor"> <!--Siempre que se coloque un header grande (h1 o h2) poner antes un section-->
        <h1>Contacto</h1>

        @include('templates.alertas')

        <div class="contacto-bg"></div>

        <form class="formulario2" method="POST">
            @csrf <!-- Token CSRF -->

            <div class="campo2">
                <label class="campo__label" for="nombre">Nombre</label>
                <input class="campo__field" type="text" placeholder="Tu Nombre" id="nombre" name="nombre">
            </div>

            <div class="campo2">
                <label class="campo__label" for="email">E-mail</label>
                <input class="campo__field" type="email" placeholder="Tu E-mail" id="email" name="email">
            </div>

            <div class="campo2">
                <label class="campo__label" for="mensaje">Mensaje</label>
                <textarea class="campo__field campo__field--textarea" id="mensaje" name="mensaje"></textarea>
            </div>

            <div class="campo2">
                <input type="submit" value="Enviar" class="boton-formulario">
            </div>
        </form>
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