<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use App\Services\Email;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller {
    
    public static function login(Request $request) {
        $alertas = [];

        if ($request->isMethod('post')) {
            $auth = new Usuario($request->only(['email', 'password']));

            $alertas = $auth->validarLogin();

            if (empty($alertas)) {
                // Comprobar que exista el usuario
                $usuario = Usuario::where('email', $auth->email)->first();

                if ($usuario) {
                    // Verificar el password
                    if($usuario->comprobarPasswordAndVerificado($auth->password)){

                        // Autenticar el usuario
                        Session::put('id', $usuario->id);
                        Session::put('nombre', $usuario->nombre . " " . $usuario->apellido);
                        Session::put('email', $usuario->email);
                        Session::put('login', true);

                        // Redireccionamiento
                        if ($usuario->admin === 1) {
                            Session::put('admin', $usuario->admin);
                            return redirect('/admin');
                        } else {
                            return redirect('/cita');
                        }
                    }
                } else {
                    Usuario::setAlerta('error', 'Usuario no encontrado o contraseña incorrecta');
                }
            }
        }

        $alertas = Usuario::getAlertas();

        return view('auth.login', [
            'alertas' => $alertas
        ]);
    }

    public static function logout() {
        Auth::logout(); // Cerrar sesión del usuario

        return redirect('/login');
    }

    public static function crear(Request $request) {

        $usuario = new Usuario;

        // Alertas vacías
        $alertas = [];

        if ($request->isMethod('post')) {

            $usuario->sincronizar($request->all());
            $alertas = $usuario->validarNuevaCuenta();

            // Revisar que alertas esté vacío
            if(empty($alertas)){
                // Verificar que el usuario no esté registrado
                $resultado = $usuario->existeUsuario($usuario->email);

                if($resultado){
                    $alertas = Usuario::getAlertas();
                } else {
                    // No está registrado
                    // Hashear el Password
                    $usuario->hashPassword();

                    // Generar un Token único
                    $usuario->crearToken();

                    // Enviar el Email
                    $email = new Email($usuario->email, $usuario->nombre, $usuario->token);
                    $email->enviarConfirmacion();

                    // Crear el usuario
                    $resultado = $usuario->guardar();
                    if($resultado){
                        return redirect('/mensaje');
                    }
                }
            }
        }

        return view('auth.crear-cuenta', [
            'usuario' => $usuario,
            'alertas' => $alertas
        ]);
    }

    public static function mensaje(){
        return view('auth.mensaje', [
        ]);    
    }

    public static function confirmar(Request $request){
        $alertas = [];

        $token = s($request->query('token'));

        $usuario = Usuario::where('token', $token)->first();

        if(!($usuario)){
            // Mostrar mensaje de error
            Usuario::setAlerta('error', 'Token no válido');
        } else {
            // Modificar a usuario confirmado
            $usuario->confirmado = "1";
            $usuario->token = null;
            $usuario->guardar();
            Usuario::setAlerta('exito', 'Cuenta comprobada correctamente');
        }

        // Obtener alertas
        $alertas = Usuario::getAlertas();

        return view('auth.confirmar-cuenta', [
            'alertas' => $alertas
        ]);
    }

    public static function olvide(Request $request) {

        $alertas = [];

        if ($request->isMethod('post')) {
            $auth = new Usuario($request->all());
            $alertas = $auth->validarEmail();

            if(empty($alertas)){
                
                $usuario = Usuario::where('email', $auth->email)->first();

                if($usuario ){

                    // Verificar que el usuario esté confirmado
                    if ((int) $usuario->confirmado === 1) {

                    // Generar un token
                    $usuario->crearToken();
                    $usuario->guardar();

                    // Enviar el email
                    $email = new Email($usuario->email, $usuario->nombre, $usuario->token);
                    $email->enviarInstrucciones();

                    // Alerta de éxito
                    Usuario::setAlerta('exito', 'Revisa tu email');
                } else {
                    Usuario::setAlerta('error', 'El usuario no existe o no está confirmado');
                }
            }
        }
        }
    
        $alertas = Usuario::getAlertas();

        return view('auth.olvide-password', [
            'alertas' => $alertas
        ]);
    }
    

    public static function recuperar(Request $request) {

        $alertas = [];
        $error = false;

        $token = s($request->query('token'));

        // Buscar usuario por su token
        $usuario = Usuario::where('token', $token)->first();

        if(!($usuario)){
            Usuario::setAlerta('error', 'Token no válido');
            $error = true;
        }

        if ($request->isMethod('post')) {

            // Leer el nuevo password y guardarlo
            $password = new Usuario($request->all());

            $alertas = $password->validarPassword();

            if(!($alertas)){
                
                $usuario->password = null;
                $usuario->password = $password->password;
                $usuario->hashPassword();
                $usuario->token = null;

                $resultado = $usuario->guardar();
                if($resultado){
                    return redirect('/login');
                }
            }
        }

        $alertas = Usuario::getAlertas();

        return view('auth.recuperar-password', [
            'alertas' => $alertas,
            'error' => $error
        ]);
    }
}
