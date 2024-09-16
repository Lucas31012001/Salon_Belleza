<?php

namespace App\Http\Controllers;

use App\Models\Cita;
use App\Models\Servicio;
use App\Models\CitaServicio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;

class APIController extends Controller
{
    public static function index(){
        $servicios = Servicio::all();
        return response()->json($servicios);
    }

    public static function index2(){
        $citas = Cita::all();
        return response()->json($citas);
    }

    public static function guardar(Request $request){
        Log::info('Datos recibidos:', $request->all());

        // Almacena la cita y devuelve el ID
        $cita = new Cita($request->all());
        $cita->save();

        $id = $cita->id;
        Log::info('ID de cita guardada:', ['id' => $id]);

        // Almacena los servicios con el ID de la cita
        $idServicios = explode(",", $request->input('servicios'));

        foreach($idServicios as $idServicio){
            $args = [
                'citaId' => $id,
                'servicioId' => $idServicio
            ];
            $citaServicio = new CitaServicio($args);
            $citaServicio->save();
            Log::info('Servicio guardado:', $args);
        }

        return response()->json(['resultado' => true]);
    }

    public static function eliminar(Request $request){
        if ($request->isMethod('post')) {
            $id = $request->input('id');
            $cita = Cita::find($id);
            $cita->delete();
            return redirect()->back(); // Volvemos a la página de la que veníamos
        }
    }
}
