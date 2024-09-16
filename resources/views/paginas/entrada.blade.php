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
        <h1>Guía para la decoración de tu hogar</h1>

        <div class="div-imagen">
        <img class="imagen-blog3" src="{{ asset('img/blog1.jpg') }}" alt="imagen de la propiedad">
        </div>

        <p class="informacion-meta">Escrito el: <span>20/10/2021</span> por: <span>Admin</span></p>

        <div class="resumen-propiedad">
            <p class="parrafo-blog">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit iste cum ea quisquam, odio, optio labore molestias 
                neque, laborum quo eius ratione perferendis fugiat error odit voluptas explicabo aliquid nobis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci fugiat doloribus, ipsum at totam voluptatibus 
                sapiente pariatur eaque! Ab nihil quam voluptatem aliquam molestiae. Excepturi, ipsa hic ipsam officiis autem vel placeat 
                voluptates minus ad repellendus, voluptas omnis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci fugiat doloribus, ipsum at totam voluptatibus 
                sapiente pariatur eaque! Ab nihil quam voluptatem aliquam molestiae. Excepturi, ipsa hic ipsam officiis autem vel placeat 
                voluptates minus ad repellendus, voluptas omnis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci fugiat doloribus, ipsum at totam voluptatibus 
                sapiente pariatur eaque! Ab nihil quam voluptatem aliquam molestiae. Excepturi, ipsa hic ipsam officiis autem vel placeat 
                voluptates minus ad repellendus, voluptas omnis.</p>
        </div>
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