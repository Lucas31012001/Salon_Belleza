<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Session;

class CitaController extends Controller{

    public static function index(){

        // Verificar si el usuario está autenticado
        if (!Session::has('login')) {
            return redirect('/login'); // Redireccionar al inicio si no está autenticado
        }

        // Obtener datos de la sesión
        $nombre = session('nombre');
        $id = session('id');

        // Pasar datos a la vista
        return view('cita.index', [
            'nombre' => $nombre,
            'id' => $id
        ]);
    }
}
