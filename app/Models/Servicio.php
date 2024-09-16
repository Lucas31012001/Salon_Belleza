<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Servicio extends Model{
    protected $tabla = 'servicios';
    protected  $fillable = ['id', 'nombre', 'precio', 'descripcion', 'seleccionar', 'imagen'];

    protected static $alertas = [];

    public function validar(){
        if(!$this->nombre){
            self::$alertas['error'][] = 'El nombre del servicio es obligatorio';
        }

        if(!$this->precio){
            self::$alertas['error'][] = 'El precio del servicio es obligatorio';
        }

        if(!is_numeric($this->precio)){
            self::$alertas['error'][] = 'El precio no es válido';
        }

        if(!$this->descripcion){
            self::$alertas['error'][] = 'La descripción del servicio es obligatorio';
        }

        if(!$this->seleccionar){
            self::$alertas['error'][] = 'El tipo del servicio es obligatorio';
        } else if($this->seleccionar !== 'Corte_Hombre' && $this->seleccionar !== 'Afeitado_Hombre' && $this->seleccionar !== 'Tenir_Hombre' && $this->seleccionar !== 'Corte_Mujer' && $this->seleccionar !== 'Tenir_Mujer' && $this->seleccionar !== 'Peinado_Mujer' && $this->seleccionar !== 'Corte_Nino' && $this->seleccionar !== 'Corte_Nina'){
            self::$alertas['error'][] = 'El tipo del servicio no es correcto';
        }

        if(!$this->imagen){
            self::$alertas['error'][] = 'La imagen del servicio es obligatorio';
        }

        return self::$alertas;
    }

    public function sincronizar(array $args = [])
    {
        $this->fill($args);
    }

    public function guardar() {
        return $this->save();
    }

    public function eliminar() {
        return $this->delete();
    }

    // Subida de archivos
    public function setImagen($imagen){
        // Elimina la imagen previa
        if(!is_null($this->id)){
            $this->borrarImagen();
        }
        // Asignar al atributo de imagen el nombre de la imagen
        if($imagen){
            $this->imagen = $imagen;
        }
    }

    // Elimina el archivo
    public function borrarImagen(){
        // Definir la ruta completa de la imagen
        $rutaImagen = public_path('images/' . $this->imagen);

        // Comprobar si existe el archivo y eliminarlo
        if (file_exists($rutaImagen)) {
            unlink($rutaImagen);
        }
    }
}
