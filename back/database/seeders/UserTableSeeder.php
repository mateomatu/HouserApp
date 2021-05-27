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
            'password' => Hash::make('admin'),
            'email' => "admin@mail.com",
            'name' => "Admin",
            'lastname' => "Houser",
            'telephone' => "155550010",
            'address' => 'Buenas vibras 213',
            'desc' => "Soy el Administrador de Houser",
            'birthday' => "1990-06-01",
            'portrait' => "avatar.png",
            'avatar' => "yo.jpg",
            'fk_level' => 1
        ]);
        Users::create([
            'id_user' => 2,
            'password' => Hash::make('user'),
            'email' => "user@mail.com",
            'name' => "user",
            'lastname' => "user",
            'telephone' => "155550011",
            'address' => 'Avenida siempre viva 123',
            'desc' => "Soy un Usuario de prueba",
            'birthday' => "1990-05-28",
            'portrait' => "avatar.png",
            'avatar' => "perfil2.jpg",
            'fk_level' => 2
        ]);
        Users::create([
            'id_user' => 3,
            'password' => Hash::make('user'),
            'email' => "professional@mail.com",
            'name' => "Javier",
            'lastname' => "Profesional",
            'telephone' => "155550012",
            'address' => 'Conde 888',
            'desc' => "Soy un Profesional",
            'birthday' => "1988-10-15",
            'portrait' => "avatar.png",
            'avatar' => "perfil1.jpg",
            'fk_level' => 3
        ]);
    }
}

