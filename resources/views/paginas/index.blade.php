@extends('layout')
@section('content')
<div class="cuerpo">
    <header class="header inicio">
        <div class="overlay"></div> <!-- Mueve la capa aquí -->
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
                        <a href="/login">Iniciar Sesión</a>
                        <a href="/crear-cuenta">Crear Cuenta</a>
                    </nav>
                </div>
                
            </div> <!--.barra-->
                <h1>"Transformamos tu estilo, realzamos tu belleza."</h1>
        </div>
    </header>

    <main class="sobre-nosotros"> <!--Siempre que se coloque un header grande (h1 o h2) poner antes un section-->
        <h1>Sobre Nosotros</h1>
        @include('templates.iconos')
    </main>

    <section class="imagen-contacto">
        <div class="overlay"></div> 
        <h2>Encuentra la casa de tus sueños</h2>
        <p>Llena el formularo de contacto y un asesor se pondrá en contacto contigo a la brevedad</p>
        <a href="contacto.php" class="boton-amarillo">Contáctanos</a>
    </section>

    <div class="contenedor seccion-inferior">
        <section class="blog">
            <h3>Nuestro Blog</h3>

            <article class="entrada-blog">
                <div class="imagen-blog-index">
                    <img class="imagen-blog" loading="lazy" src="{{ asset('img/blog1.jpg') }}" alt="Texto Entrada Blog">
                </div>

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
                <div class="imagen-blog-index">
                    <img class="imagen-blog" loading="lazy" src="{{ asset('img/blog2.jpg') }}" alt="Texto Entrada Blog">
                </div>

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
        </section>

        <section class="testimoniales">
            <h3>Testimoniales</h3>

            <div class="testimonial">
                <blockquote>
                    "El personal se comportó de una excelente forma, muy buena atención y la casa que me ofrecieron cumple con todas mis expectativas."
                </blockquote>
                <p>- Juan Sánchez</p>
                <div class="flecha">
                    <p id="siguiente-testimonio-1">&#8594;</p>
                </div>
            </div>

            <div id="extraTestimonial">
                <blockquote>
                    "La experiencia fue fantástica, lo recomendaré a mis amigos y repetiría sin ningún tipo de duda, muchas gracias por el servicio."
                </blockquote>
                <p>- María López</p>
                <div class="flecha">
                    <p id="siguiente-testimonio-2">&#8594;</p>
                </div>
            </div>

            <div id="extraTestimonial-2">
                <blockquote>
                    "Un trato inigualable, sin duda lo recomendaré a otros y volveré en el futuro, muchas gracias por su amabilidad."          
                </blockquote>
                <p>- Cristina González</p>
                <div class="flecha">
                    <p id="siguiente-testimonio-3">&#8594;</p>
                </div>
            </div>

            <div id="extraTestimonial-3">
                <blockquote>
                    "El servicio fue impecable, lo recomendaré a todos mis conocidos y repetiré con total confianza, muchas gracias."          
                </blockquote>
                <p>- Martín Ojeda</p>
                <div class="flecha">
                    <p id="siguiente-testimonio-4">&#8594;</p>
                </div>
            </div>

            <div id="extraTestimonial-4">
                <blockquote>
                    "El servicio superó mis expectativas, definitivamente lo recomendaría y volvería sin dudarlo, muchas gracias por todo."          
                </blockquote>
                <p>- Paula Martín</p>
                <div class="flecha">
                    <p id="siguiente-testimonio-5">&#8594;</p>
                </div>
            </div>
        </section>
    </div>

    <footer class="footer">
        <div class="contenedor contenedor-footer">
            <nav class="navegacion">
                <a href="/nosotros">Nosotros</a>
                <a href="/blog">Blog</a>
                <a href="/donde-estamos">¿Dónde estamos?</a>
                <a href="/login">Iniciar Sesión</a>
                <a href="/crear-cuenta">Crear Cuenta</a>
            </nav>
        </div>

        <p class="copyright">Todos los derechos Reservados {{ date('Y') }} &copy;</p>
    </footer>
    @endsection

    @section('scripts')
        <script src="{{ asset('js/testimonios.js') }}"></script>
        <script src="{{ asset('js/darkMode.js') }}"></script>
    @endsection
</div>


