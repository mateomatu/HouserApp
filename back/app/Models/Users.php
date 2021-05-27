<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Users extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    protected $table = 'user';
    protected $primaryKey = 'id_user';

    protected $fillable = ['email', 'password', 'name', 'lastname', 'avatar', 'portrait', 'fk_level'];

    /**
     * @var array
     */
    protected $hidden = ['password', 'remember_token'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Validation Rules.
     * @var array validation rules.
     */
    public static $rules = [
        'email' => 'required|email',
        'password' => 'required'
    ];

    /**
     * Create Validation Rules.
     * @var string[]
     */
    public static $rulesCreate = [
        'email' => 'required|email|unique:user',
        'password' => 'required'
    ];

    /**
     * Validation Error Messages.
     * @var array error Messages.
     */
    public static $errorMessages = [
        'email.required' => 'El email no puede quedar vacío.',
        'email.email' => 'Formato inválido, el email debe ser: ejemplo@dominio.com.',
        'email.unique' => 'Este usuario ya se encuentra registrado.',
        'password.required' => 'La contraseña no puede quedar vacía.'
    ];

    public function level()
    {
        return $this->belongsTo(Level::class, 'fk_level', 'id_level');
    }

    public function contracts()
    {
        return $this->belongsToMany(Contract::class, 'users_has_contracts', 'id_user', 'id_contract', 'id_user', 'id_contract');
    }

}
