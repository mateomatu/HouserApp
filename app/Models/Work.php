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

    /**
     * Validation Rules
     * @return string[]
     */
    public static function rulesCreate()
    {
        return [
            'work' => 'required|min:3',
            'precio' => 'required|numeric',
        ];
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function services()
    {
        return $this->belongsTo(Service::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function contracts()
    {
        return $this->belongsTo(Contract::class);
    }


}
