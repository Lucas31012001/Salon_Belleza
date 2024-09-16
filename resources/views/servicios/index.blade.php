@extends('layout')

<div class="contenedor-app">
    <div class="imagen">
        @include('templates.imagenes')
    </div>
    <div class="app">

        <h1 class="nombre-pagina">Servicios</h1>
        <p class="descripcion-pagina">Administración de Servicios</p>

        @include('templates.barra')

        <ul class="servicios">
            <?php foreach($servicios as $servicio){ ?>
                <li>
                    <p>Nombre: <span><?php echo $servicio->nombre; ?></span></p>
                    <p>Precio: <span>$<?php echo $servicio->precio; ?></span></p>
                    <div id="campo2">
                    <?php if($servicio->imagen){ ?>
                        <img src="/images/<?php echo $servicio->imagen ?>" id="imagen-medium">
                    <?php } ?>
                    </div>

                    <div class="acciones">
                        <a class="boton" href="/servicios/actualizar?id=<?php echo $servicio->id; ?>">Actualizar</a>

                        <form action="/servicios/eliminar" method="POST">
                            @csrf <!-- Token CSRF -->

                            <input type="hidden" name="id" value="<?php echo $servicio->id; ?>">
                            <input type="submit" class="boton-eliminar" value="Borrar">
                        </form>
                    </div>
                </li>
            <?php } ?>
        </ul>
    </div>
</div>