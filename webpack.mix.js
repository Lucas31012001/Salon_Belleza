const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .js('resources/js/buscador.js', 'public/js')
   .js('resources/js/contrasena.js', 'public/js')
   .js('resources/js/calendario.js', 'public/js')
   .js('resources/js/testimonios.js', 'public/js')
   .js('resources/js/darkMode.js', 'public/js')
   .sass('resources/scss/app.scss', 'public/css')
   .copy('resources/img', 'public/img');



   

   


