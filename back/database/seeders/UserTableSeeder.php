<?php

namespace Database\Seeders;

use App\Models\Users;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Users::create([
            'id_user' => 1,
            'username' => "adminHouser",
            'password' => Hash::make('admin'),
            'email' => "admin@mail.com",
            'name' => "Admin",
            'surname' => "Houser",
            'telephone' => "155550010",
            'quote' => "Soy el Administrador de Houser",
            'birth-day' => "1990-06-01",
            'image' => "avatar.png",
            'fk_level' => 1
        ]);
        Users::create([
            'id_user' => 2,
            'username' => "testUser",
            'password' => Hash::make('user'),
            'email' => "user@mail.com",
            'name' => "user",
            'surname' => "user",
            'telephone' => "155550011",
            'quote' => "Soy un Usuario de prueba",
            'birth-day' => "1990-05-28",
            'image' => "avatar.png",
            'fk_level' => 2
        ]);
        Users::create([
            'id_user' => 3,
            'username' => "testPro",
            'password' => Hash::make('user'),
            'email' => "professional@mail.com",
            'name' => "Javier",
            'surname' => "Profesional",
            'telephone' => "155550012",
            'quote' => "Soy un Profesional",
            'birth-day' => "1988-10-15",
            'image' => "avatar.png",
            'fk_level' => 3
        ]);
    }
}

