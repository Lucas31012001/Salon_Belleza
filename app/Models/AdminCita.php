<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdminCita extends Model{
    protected $tabla = 'citasServicios';
    protected $fillable = ['id', 'hora', 'cliente', 'email', 'telefono', 'servicio', 'precio']; 
}