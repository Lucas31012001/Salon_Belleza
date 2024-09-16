<?php

namespace App\Http\Controllers;

use App\Models\Servicio;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;

class ServicioController extends Controller
{
    public static function index(){

        isAdmin();

        $servicios = Servicio::all();

        $nombre = session('nombre');
        
        return view('servicios.index', [
            'nombre' => $nombre,
            'servicios' => $servicios
        ]);
    }

    public static function crear(Request $request){

        isAdmin();

        $servicio = new Servicio();
        $alertas = [];
        
        if ($request->isMethod('post')) {
            $servicio->sincronizar($request->all());

            /** SUBIDA DE ARCHIVOS */
            // Validar la solicitud para asegurar que el archivo existe y es válido
            $request->validate([
                'imagen' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            ]);
    
            // Verificar si el archivo 'imagen' está presente y es válido
            if ($request->hasFile('imagen') && $request->file('imagen')->isValid()) {
                // Obtener el archivo
                $file = $request->file('imagen');

                // Generar un nombre único para el archivo
                $nombreImagen = md5(uniqid(rand(), true)) . '.' . $file->getClientOriginalExtension();

                // Guardar el archivo en la carpeta de almacenamiento público
                $file->move(public_path('images'), $nombreImagen);

                // Establecer el nombre de la imagen en el modelo
                $servicio->setImagen($nombreImagen);
            }

            $alertas = $servicio->validar();

            if(empty($alertas)){
                $servicio->guardar();
                return redirect('/servicios');
            }
        }

        $nombre = session('nombre');

        return view('servicios.crear', [
            'nombre' => $nombre,
            'servicio' => $servicio,
            'alertas' => $alertas
        ]);
    }

    public static function actualizar(Request $request){
        isAdmin();

        if(!is_numeric($request->query('id'))) return;
        $servicio = Servicio::find($request->query('id'));
        if (!$servicio) {
        return redirect('/servicios')->withErrors('Servicio no encontrado');
    }
        $alertas = [];

        if ($request->isMethod('post')) {
            $servicio->sincronizar($request->all());

            /** SUBIDA DE ARCHIVOS */
            // Validar la solicitud para asegurar que el archivo existe y es válido
            $request->validate([
                'imagen' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            ]);
    
            // Verificar si el archivo 'imagen' está presente y es válido
            if ($request->hasFile('imagen') && $request->file('imagen')->isValid()) {
                // Obtener el archivo
                $file = $request->file('imagen');

                // Generar un nombre único para el archivo
                $nombreImagen = md5(uniqid(rand(), true)) . '.' . $file->getClientOriginalExtension();

                // Guardar el archivo en la carpeta de almacenamiento público
                $file->move(public_path('images'), $nombreImagen);

                // Establecer el nombre de la imagen en el modelo
                $servicio->setImagen($nombreImagen);
            }

            $alertas = $servicio->validar();

            if(empty($alertas)){
                $servicio->guardar();
                return redirect('/servicios');
            }
        }

        $nombre = session('nombre');

        return view('servicios.actualizar', [
            'nombre' => $nombre,
            'servicio' => $servicio,
            'alertas' => $alertas
        ]);
    }

    public static function eliminar(Request $request){
        isAdmin();

        if ($request->isMethod('post')) {
            $id = $request->input('id');
            $servicio = Servicio::find($id);
            $servicio->eliminar();
            return redirect('/servicios');
        }
    }

    public static function calendario(){

        return view('servicios.calendario', [
        ]);
    }

}
