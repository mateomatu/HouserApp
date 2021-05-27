<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;
    protected $table = "services";
    protected $primaryKey = "id_service";
    protected $fillable = ['service', 'price', 'image'];

    /** @var array validation rules. */
    public static $rules = [
        'service' => 'required|min:4',
        'price' => 'required|numeric',
    ];
    /** @var array error Messages. */
    public static $errorMessages = [
        'service.required' => 'El nombre del servicio no puede quedar vacío.',
        'service.min' => 'El nombre del servicio debe tener al menos :min caracteres.',
        'price.required' => 'El precio no puede estar vacío.',
        'price.numeric' => 'El precio debe ser un número.'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function contracts()
    {
        return $this->belongsTo(Contract::class);
    }


}
