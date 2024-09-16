<div class="campo">
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" placeholder="Nombre Servicio" name="nombre" value="<?php echo $servicio->nombre; ?>">
</div>

<div class="campo">
    <label for="precio">Precio</label>
    <input type="number" id="precio" placeholder="Precio Servicio" name="precio" step="0.01" value="<?php echo $servicio->precio; ?>">
</div>

<div class="campo">
    <label for="descripcion">Descripción</label>
    <input type="text" id="descripcion" placeholder="Descripción Servicio" name="descripcion" value="<?php echo $servicio->descripcion; ?>">
</div>

<div class="campo">
    <label for="imagen">Imagen</label>
    <div id="campo2">
    <input type="file" id="imagen" name="imagen" >
    <?php if($servicio->imagen){ ?>
        <img src="/images/<?php echo $servicio->imagen ?>" id="imagen-small">
    <?php } ?>
    </div>
</div>

<div class="campo">
    <label for="seleccionar">Tipo de Servicio</label>
    <input type="text" id="seleccionar" placeholder="Tipo Servicio" name="seleccionar" value="<?php echo $servicio->seleccionar; ?>">
</div>

