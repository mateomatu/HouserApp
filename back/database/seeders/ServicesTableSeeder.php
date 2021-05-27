<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServicesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Service::create([
            'id_service' => 1,
            'service' => "Plomería",
            'image' => 'fontanero.jpg',
        ]);
        Service::create([
            'id_service' => 2,
            'service' => "Técnico PC",
            'image' => 'tecnicopc.jpg',
        ]);
        Service::create([
            'id_service' => 3,
            'service' => "Pintor",
            'image' => 'pintor.jpg',
        ]);
        Service::create([
            'id_service' => 4,
            'service' => "Electricista",
            'image' => 'electricista.jpg',
        ]);
        Service::create([
            'id_service' => 5,
            'service' => "Gasista",
            'image' => 'gasista.jpg',
        ]);
        Service::create([
            'id_service' => 6,
            'service' => "Aire Acondicionado",
            'image' => 'aireacond.jpg',
        ]);
        Service::create([
            'id_service' => 7,
            'service' => "Profesor Particular",
            'image' => 'professor.jpg',
        ]);
    }
}
