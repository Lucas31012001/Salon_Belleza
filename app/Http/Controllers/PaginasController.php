<?php

namespace App\Http\Controllers;

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
}