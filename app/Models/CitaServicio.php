<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CitaServicio extends Model {
    protected $tabla = 'citasServicios';
    protected $fillable = ['id', 'citaId', 'servicioId'];
}