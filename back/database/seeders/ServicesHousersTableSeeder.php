<?php

namespace Database\Seeders;

use App\Models\ServicesHousers;
use Illuminate\Database\Seeder;

class ServicesHousersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ServicesHouser::create([
            'id_service_houser'=> 1,
            'fk_id_user' => 3,
            'fk_id_service' => 1,
        ]);
        ServicesHouser::create([
            'id_service_houser'=> 2,
            'fk_id_user' => 4,
            'fk_id_service' => 1,
        ]);
        ServicesHouser::create([
            'id_service_houser'=> 3,
            'fk_id_user' => 5,
            'fk_id_service' => 2,
        ]);
        ServicesHouser::create([
            'id_service_houser'=> 4,
            'fk_id_user' => 6,
            'fk_id_service' => 2,
        ]);
        ServicesHouser::create([
            'id_service_houser'=> 5,
            'fk_id_user' => 7,
            'fk_id_service' => 3,
        ]);
        ServicesHouser::create([
            'id_service_houser'=> 6,
            'fk_id_user' => 8,
            'fk_id_service' => 3,
        ]);
        ServicesHouser::create([
            'id_service_houser'=> 7,
            'fk_id_user' => 9,
            'fk_id_service' =>  4,
        ]);
        ServicesHouser::create([
            'id_service_houser'=> 8,
            'fk_id_user' => 10,
            'fk_id_service' => 4,
        ]);
    }
}
