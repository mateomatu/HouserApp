<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
//        $this->call(OrderStateSeeder::class);
//        $this->call(ContractTableSeeder::class);
//        $this->call(WorksTableSeeder::class);
//        $this->call(ServicesHousersTableSeeder::class);
        $this->call(ServicesTableSeeder::class);
        $this->call(LevelsTableSeeder::class);
        $this->call(UserTableSeeder::class);
    }
}
