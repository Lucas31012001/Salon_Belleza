<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\APIController;
use App\Http\Controllers\CitaController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ServicioController;
use App\Http\Controllers\PaginasController;
use App\Http\Controllers\LocationController;


// Páginas primeras
Route::get('/', [PaginasController::class, 'index']);
Route::get('/nosotros', [PaginasController::class, 'nosotros']);
Route::get('/blog', [PaginasController::class, 'blog']);
Route::get('/entrada', [PaginasController::class, 'entrada']);
Route::get('/entrada2', [PaginasController::class, 'entrada2']);
Route::get('/entrada3', [PaginasController::class, 'entrada3']);
Route::get('/entrada4', [PaginasController::class, 'entrada4']);
Route::get('/donde-estamos', [LocationController::class, 'index']);
Route::get('/google-maps', [LocationController::class, 'maps']);

// Iniciar  y Cerrar Sesión
Route::get('/login', [LoginController::class, 'login']);
Route::post('/login', [LoginController::class, 'login']);
Route::get('/logout', [LoginController::class, 'logout']);

// Recuperar Password
Route::get('/olvide', [LoginController::class, 'olvide']);
Route::post('/olvide', [LoginController::class, 'olvide']);
Route::get('/recuperar', [LoginController::class, 'recuperar']);
Route::post('/recuperar', [LoginController::class, 'recuperar']);

// Crear Cuenta
Route::get('/crear-cuenta', [LoginController::class, 'crear']);
Route::post('/crear-cuenta', [LoginController::class, 'crear']);

// Confirmar Cuenta
Route::get('/confirmar-cuenta', [LoginController::class, 'confirmar']);
Route::get('/mensaje', [LoginController::class, 'mensaje']);

// Área Privada
Route::get('/cita', [CitaController::class, 'index']);
Route::get('/admin', [AdminController::class, 'index']);

// API de Citas
Route::get('/api/servicios', [APIController::class, 'index']);
Route::post('/api/citas', [APIController::class, 'guardar']);
Route::get('/api/citas2', [APIController::class, 'index2']);
Route::post('/api/eliminar', [APIController::class, 'eliminar']);

// CRUD de Servicios
Route::get('/servicios', [ServicioController::class, 'index']);
Route::get('/servicios/crear', [ServicioController::class, 'crear']);
Route::post('/servicios/crear', [ServicioController::class, 'crear']);
Route::get('/servicios/actualizar', [ServicioController::class, 'actualizar']);
Route::post('/servicios/actualizar', [ServicioController::class, 'actualizar']);
Route::post('/servicios/eliminar', [ServicioController::class, 'eliminar']);
Route::get('/servicios/calendario', [ServicioController::class, 'calendario']);

