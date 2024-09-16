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
    <main class="contenedor sobre-nosotros">
        <h1>Conoce sobre Nosotros</h1>

        <div class="contenido-nosotros">
                <img loading="lazy" src="{{ asset('img/nosotros.jpg') }}" alt="Sobre Nosotros">
            <div class="texto-nosotros">
                <blockquote>
                    25 Años de esperiencia
                </blockquote>

                <p>Nuestra peluquería unisex abrió sus puertas en el año 1999, con la misión de ofrecer servicios de alta calidad en un ambiente 
                    acogedor y profesional. Desde entonces, nos hemos dedicado a perfeccionar el arte del estilismo, brindando cortes de pelo modernos 
                    y clásicos, servicios de barbería de primera clase, técnicas avanzadas de teñido y peinados elegantes para cualquier ocasión.</p>

                <p>Nuestro equipo está compuesto por trabajadores altamente cualificados y apasionados por su oficio, quienes se mantienen al día con 
                    las últimas tendencias y técnicas del sector. Además, entendemos la importancia de cuidar a los más pequeños de la familia, por lo 
                    que ofrecemos cortes de pelo especiales para niños y niñas, asegurando una experiencia divertida y cómoda. En nuestra peluquería, tu 
                    satisfacción es nuestra prioridad, y trabajamos con esmero para que cada visita supere tus expectativas.</p>
            </div>
        </div>
    </main>

    <section class="contenedor sobre-nosotros"> <!--Siempre que se coloque un header grande (h1 o h2) poner antes un section-->
        <h1>Más Sobre Nosotros</h1>
        
        @include('templates.iconos')
    </section>

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
