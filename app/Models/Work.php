<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Work extends Model
{
    use HasFactory;

    protected $table = "works";
    protected $primaryKey = "id_works";
    protected $fillable = ['work', 'price', 'fk_service'];

    /** @var array validation rules. */
    public static $rules = [
        'work' => 'required',
    ];
    /** @var array error Messages. */
    public static $errorMessages = [
        'work.required' => 'El servicio debe ser obligatorio.',
        'price.required' => 'El precio del servicio no puede quedar sin valor.'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function contracts()
    {
        return $this->belongsTo(Contract::class);
    }


}
