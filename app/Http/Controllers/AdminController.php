<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;

class AdminController extends Controller
{
    public static function index(Request $request){

        // Verificar si el usuario está autenticado
        if (!Session::has('admin')) {
            return redirect('/login'); // Redireccionar al inicio si no está autenticado
        }

        $fecha = $request->query('fecha', date('Y-m-d'));
        $fechas = explode('-', $fecha); // explode divide una cadena en un array utilizando un delimitador específico

        if(!checkdate($fechas[1], $fechas[2], $fechas[0])){
            return redirect('/404');
        }

        // Consultar la base de datos
        $citas = DB::table('citas')
            ->leftJoin('usuarios', 'citas.usuarioId', '=', 'usuarios.id')
            ->leftJoin('cita_servicios', 'cita_servicios.citaId', '=', 'citas.id')
            ->leftJoin('servicios', 'servicios.id', '=', 'cita_servicios.servicioId')
            ->select(
                'citas.id',
                'citas.hora',
                DB::raw("CONCAT(usuarios.nombre, ' ', usuarios.apellido) as cliente"),
                'usuarios.email',
                'usuarios.telefono',
                'servicios.nombre as servicio',
                'servicios.precio'
            )
            ->where('citas.fecha', $fecha)
            ->get();

        $nombre = session('nombre');

        return view('admin.index', [
            'nombre' => $nombre,
            'citas' => $citas,
            'fecha' => $fecha
        ]);
    }
}
