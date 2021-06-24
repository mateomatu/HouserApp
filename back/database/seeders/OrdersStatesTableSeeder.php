<?php

namespace Database\Seeders;

use App\Models\OrderState;
use Illuminate\Database\Seeder;

class OrdersStatesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        OrderState::create([
            'id_order_state' => 1,
            'state' => "Pendiente"
        ]);
        OrderState::create([
            'id_order_state' => 2,
            'state' => "Cancelado"
        ]);
        OrderState::create([
            'id_order_state' => 3,
            'state' => "Completado"
        ]);
        OrderState::create([
            'id_order_state' => 4,
            'state' => "Valorado"
        ]);
    }
}
