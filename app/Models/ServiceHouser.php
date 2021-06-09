<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceHouser extends Model
{
    use HasFactory;

    protected $table = "services_housers";
    protected $primaryKey = "id_service_houser";
    protected $fillable = ['fk_id_user', 'fk_id_service'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(Users::class);
    }

    public function service()
    {
        return $this->belongsTo(Service::class);
    }

}
