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
                    </nav>
                </div>
            </div> <!--.barra-->
        </div>
    </header>
    <main class="blog2">
        <h1>Nuestro Blog</h1>

        <article class="entrada-blog">
            <img class="imagen-blog2" loading="lazy" src="{{ asset('img/blog1.jpg') }}" alt="Texto Entrada Blog">

            <div class="texto-entrada">
                <a href="/entrada">
                    <h4>Terraza en el techo de tu casa</h4>
                    <p class="informacion-meta">Escrito el: <span>20/10/2001</span> por: <span>Admin</span></p>
                    <p>
                        Consejos para construir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero
                    </p>
                </a>
            </div>
        </article>

        <article class="entrada-blog">
            <img class="imagen-blog2" loading="lazy" src="{{ asset('img/blog2.jpg') }}" alt="Texto Entrada Blog">

            <div class="texto-entrada">
                <a href="/entrada2">
                    <h4>Guía para la decoración de tu hogar</h4>
                    <p class="informacion-meta">Escrito el: <span>20/10/2001</span> por: <span>Admin</span></p>
                    <p>
                        Consejos para construir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero
                    </p>
                </a>
            </div>
        </article>

        <article class="entrada-blog">
            <img class="imagen-blog2" loading="lazy" src="{{ asset('img/barberia.jpg') }}" alt="Texto Entrada Blog">

            <div class="texto-entrada">
                <a href="/entrada3">
                    <h4>Terraza en el techo de tu casa</h4>
                    <p class="informacion-meta">Escrito el: <span>20/10/2001</span> por: <span>Admin</span></p>
                    <p>
                        Consejos para construir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero
                    </p>
                </a>
            </div>
        </article>

        <article class="entrada-blog">
            <img class="imagen-blog2" loading="lazy" src="{{ asset('img/barberia2.jpg') }}" alt="Texto Entrada Blog">

            <div class="texto-entrada">
                <a href="/entrada4">
                    <h4>Guía para la decoración de tu hogar</h4>
                    <p class="informacion-meta">Escrito el: <span>20/10/2001</span> por: <span>Admin</span></p>
                    <p>
                        Consejos para construir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero
                    </p>
                </a>
            </div>
        </article>
    </main>

    <footer class="footer">
        <div class="contenedor contenedor-footer">
            <nav class="navegacion">
                <a href="/nosotros">Nosotros</a>
                <a href="/blog">Blog</a>
                <a href="/donde-estamos">¿Dónde estamos?</a>
            </nav>
        </div>

        <p class="copyright">Todos los derechos Reservados {{ date('Y') }} &copy;</p>
    </footer>
    @endsection

    @section('scripts')
        <script src="{{ asset('js/darkMode.js') }}"></script>
    @endsection
</div>