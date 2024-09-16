<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Hash;

class Usuario extends Authenticatable {
    protected $tabla = 'usuarios';
    protected $fillable = ['nombre', 'apellido', 'email', 'password', 'telefono', 'admin', 'confirmado', 'token'];
    protected $hidden = ['password', 'remember_token'];

    protected static $alertas = [];

    public static function setAlerta($tipo, $mensaje) {
        static::$alertas[$tipo][] = $mensaje;
    }

    public static function getAlertas() {
        return static::$alertas;
    }

    public function validarNuevaCuenta() {
        if (!$this->nombre) {
            self::$alertas['error'][] = 'El nombre es obligatorio';
        }

        if (!$this->apellido) {
            self::$alertas['error'][] = 'El apellido es obligatorio';
        }

        if (!$this->email) {
            self::$alertas['error'][] = 'El email es obligatorio';
        }

        if (!$this->password) {
            self::$alertas['error'][] = 'El password es obligatorio';
        }

        if (strlen($this->password) < 6) {
            self::$alertas['error'][] = 'El password debe contener al menos 6 caracteres';
        }

        return self::$alertas;
    }

    public function validarLogin() {
        if (!$this->email) {
            self::$alertas['error'][] = 'El email es obligatorio';
        }

        if (!$this->password) {
            self::$alertas['error'][] = 'El password es obligatorio';
        }

        return self::$alertas;
    }

    public function validarEmail() {
        if (!$this->email) {
            self::$alertas['error'][] = 'El email es obligatorio';
        }

        return self::$alertas;
    }

    public function validarPassword() {
        if (!$this->password) {
            self::$alertas['error'][] = 'El password es obligatorio';
        }

        if (strlen($this->password) < 6) {
            self::$alertas['error'][] = 'El password debe tener al menos 6 caracteres';
        }

        return self::$alertas;
    }

    public static function existeUsuario($email) {
        $usuario = static::where('email', $email)->first();

        if ($usuario) {
            self::$alertas['error'][] = 'El usuario ya está registrado';
        }

        return $usuario;
    }

    public function hashPassword() {
        $this->password = Hash::make($this->password);
    }

    public function crearToken() {
        $this->token = uniqid();
    }

    public function sincronizar(array $args = [])
    {
        $this->fill($args);
    }

    public function comprobarPasswordAndVerificado($password) {
        if (Hash::check($password, $this->password) && $this->confirmado) {
            return true;
        } else {
            self::$alertas['error'][] = 'Password incorrecto o tu cuenta no ha sido confirmada';
            return false;
        }
    }

    public function guardar() {
        return $this->save();
    }

    public function eliminar() {
        return $this->delete();
    }
}
