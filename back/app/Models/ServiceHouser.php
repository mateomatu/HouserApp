<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceHouser extends Model
{
    use HasFactory;

    protected $table = "services_housers";
    protected $primaryKey = "id_service_houser";
    protected $fillable = ['id_service', 'fk_id_user', 'fk_id_service'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function service()
    {
        return $this->belongsToMany(Service::class, 'service', 'id_service');
    }
    public function houser()
    {
        return $this->belongsToMany(Users::class, 'users', 'id_user');
    }

}
