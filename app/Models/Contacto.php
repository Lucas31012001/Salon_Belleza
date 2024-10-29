<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contacto extends Model{
    protected $tabla = 'contacto';
    protected  $fillable = ['id', 'nombre', 'email', 'mensaje'];

    public static $alertas = [];

    public static function setAlerta($tipo, $mensaje) {
        static::$alertas[$tipo][] = $mensaje;
    }

    public function validar(){
        if(!$this->nombre){
            self::$alertas['error'][] = 'El nombre es obligatorio';
        }

        if(!$this->email){
            self::$alertas['error'][] = 'El e-mail es obligatorio';
        }

        if(!$this->mensaje){
            self::$alertas['error'][] = 'El mensaje es obligatorio';
        }

        return self::$alertas;
    }

    public function guardar() {
        return $this->save();
    }
}