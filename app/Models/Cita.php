<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cita extends Model {
    // Base de datos
    protected $tabla = 'citas';
    protected $fillable = ['id', 'fecha', 'hora', 'usuarioId'];
}