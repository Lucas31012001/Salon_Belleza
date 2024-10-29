<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contacto;


class PaginasController extends Controller {
    public static function index(){

        return view('paginas.index', [
            //'propiedades' => $propiedades,
            //'inicio' => $inicio
        ]);
    }

    public static function nosotros(){
        return view('paginas.nosotros', [

        ]);
    }

    public static function blog(){
        return view('paginas.blog', [

        ]);
    }

    public static function entrada(){
        return view('paginas.entrada', [

        ]);
    }

    public static function entrada2(){
        return view('paginas.entrada2', [

        ]);
    }

    public static function entrada3(){
        return view('paginas.entrada3', [

        ]);
    }

    public static function entrada4(){
        return view('paginas.entrada4', [

        ]);
    }

    public static function contacto(Request $request){
        $alertas = [];

        if ($request->isMethod('post')) {
            $contacto = new Contacto($request->all()); 
            $alertas = $contacto->validar();

            if (empty($alertas)) {
                // Guarda el contacto en la base de datos
                $resultado = $contacto->guardar();

                if($resultado){
                    Contacto::setAlerta('exito', 'Hemos recibido tu solicitud correctamente. En breve, uno de nuestros asesores se pondrá en contacto contigo para atender tu consulta. Gracias por tu interés.');
                } else {
                    Contacto::setAlerta('error', 'No se pudo guardar el contacto.');
                }

                // Obtener todas las alertas configuradas
                $alertas = Contacto::$alertas;
            }
        }
        
        return view('paginas.contacto', [
            'alertas' => $alertas
        ]);
    }
}