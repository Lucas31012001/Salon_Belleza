<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LocationController extends Controller {
    public static function index(){
        $latitude = '41.66940423535154';
        $longitude = '-0.8768450858424045';

        return view('paginas.donde-estamos', [
            'latitude' => $latitude,
            'longitude' => $longitude
        ]);
    }

    public static function maps(){
        // Coordenadas de la peluquería en Zaragoza
        $latitude = '41.66940423535154';
        $longitude = '-0.8768450858424045';
        $peluqueria_nombre = 'Peluqueria Zaragoza Naila';

        // URL de Google Maps para mostrar la ubicación específica
        $url = "https://www.google.com/maps/search/?api=1&query={$peluqueria_nombre}+@{$latitude},{$longitude}";

        return redirect($url);
    }
}
