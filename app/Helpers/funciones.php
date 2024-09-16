<?php

use Illuminate\Support\Facades\Session;

function debuguear($variable) : string {
    echo "<pre>";
    var_dump($variable);
    echo "</pre>";
    exit;
}

// Escapa / Sanitizar el HTML
function s($html) : string {
    $s = htmlspecialchars($html);
    return $s;
}

function esUltimo(string $actual, string $proximo): bool {
    if($actual !== $proximo){
        return true;
    } 
    return false;
}

function isAdmin(){
    if (!Session::has('admin')) {
        return redirect('/'); // Redireccionar al inicio si no está autenticado
    }
}