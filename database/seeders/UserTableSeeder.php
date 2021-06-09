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
            'desc' => "Soy el Administrador de Houser",
            'birthday' => "1990-06-01",
            'address' => "avenida buena vibra 123",
            'portrait' => "avatar.png",
            'avatar' => "yo.jpg",
            'alt' => "foto de perfil del usuario",
            'fk_level' => 1
        ]);
        Users::create([
            'id_user' => 2,
            'password' => Hash::make('user'),
            'email' => "user@mail.com",
            'name' => "user",
            'lastname' => "user",
            'telephone' => "155550011",
            'desc' => "Soy un Usuario de prueba",
            'birthday' => "1990-05-28",
            'address' => "avenida buena vibra 123",
            'portrait' => "avatar.png",
            'avatar' => "perfil1.jpg",
            'alt' => "foto de perfil del usuario",
            'fk_level' => 2
        ]);
        Users::create([
            'id_user' => 3,
            'password' => Hash::make('user'),
            'email' => "professional@mail.com",
            'name' => "Javier",
            'lastname' => "Profesional",
            'telephone' => "155550012",
            'desc' => "Soy Técnico de PC",
            'birthday' => "1988-10-15",
            'address' => "avenida buena vibra 123",
            'portrait' => "avatar.png",
            'avatar' => "perfil2.jpg",
            'alt' => "foto de perfil del usuario",
            'fk_level' => 3
        ]);
        Users::create([
            'id_user' => 4,
            'password' => Hash::make('user'),
            'email' => "laurareggiano@mimail.com",
            'name' => "Laura",
            'lastname' => "Reggiano",
            'telephone' => "155550012",
            'desc' => "Soy Ténica de Pc",
            'birthday' => "1988-10-15",
            'address' => "avenida buena vibra 123",
            'portrait' => "avatar.png",
            'avatar' => "avatar.png",
            'alt' => "foto de perfil del usuario",
            'fk_level' => 3
        ]);
        Users::create([
            'id_user' => 5,
            'password' => Hash::make('user'),
            'email' => "jorgelaurenzo12@mimail.com",
            'name' => "Jorge",
            'lastname' => "Laurenzo",
            'telephone' => "155550012",
            'desc' => "Soy Carpintero",
            'birthday' => "1988-10-15",
            'address' => "avenida buena vibra 123",
            'portrait' => "avatar.png",
            'avatar' => "avatar.png",
            'alt' => "foto de perfil del usuario",
            'fk_level' => 3
        ]);
        Users::create([
            'id_user' => 6,
            'password' => Hash::make('user'),
            'email' => "raulrak@mimail.com",
            'name' => "Raul",
            'lastname' => "Rakora",
            'telephone' => "155550012",
            'desc' => "Soy Carpintero y Ebanista",
            'birthday' => "1988-10-15",
            'address' => "avenida buena vibra 123",
            'portrait' => "avatar.png",
            'avatar' => "avatar.png",
            'alt' => "foto de perfil del usuario",
            'fk_level' => 3
        ]);
        Users::create([
            'id_user' => 7,
            'password' => Hash::make('user'),
            'email' => "matiburzaco@mimail.com",
            'name' => "Matias",
            'lastname' => "Buzcaco",
            'telephone' => "155550012",
            'desc' => "Soy Pintor de casas y establecimientos",
            'birthday' => "1988-10-15",
            'address' => "avenida buena vibra 123",
            'portrait' => "avatar.png",
            'avatar' => "avatar.png",
            'alt' => "foto de perfil del usuario",
            'fk_level' => 3
        ]);
        Users::create([
            'id_user' => 8,
            'password' => Hash::make('user'),
            'email' => "pablojulens@minimail.com",
            'name' => "Pablo",
            'lastname' => "Julens",
            'telephone' => "155550010",
            'desc' => "Soy Pintor hace 10 años",
            'birthday' => "1988-10-15",
            'address' => "avenida buena vibra 123",
            'portrait' => "avatar.png",
            'avatar' => "avatar.png",
            'alt' => "foto de perfil del usuario",
            'fk_level' => 3
        ]);
        Users::create([
            'id_user' => 9,
            'password' => Hash::make('user'),
            'email' => "valeriaandreeti@gmail.com",
            'name' => "Valeria",
            'lastname' => "Andreeti",
            'telephone' => "155550010",
            'desc' => "Soy Profesora Particular de Matemática",
            'birthday' => "1988-10-15",
            'address' => "avenida buena vibra 123",
            'portrait' => "avatar.png",
            'avatar' => "avatar.png",
            'alt' => "foto de perfil del usuario",
            'fk_level' => 3
        ]);
        Users::create([
            'id_user' => 10,
            'password' => Hash::make('user'),
            'email' => "gladysenglish@gmail.com",
            'name' => "Gladys",
            'lastname' => "Lamanuch",
            'telephone' => "155550010",
            'desc' => "Soy profesora de inglés para todos los niveles",
            'birthday' => "1988-10-15",
            'address' => "avenida buena vibra 123",
            'portrait' => "avatar.png",
            'avatar' => "avatar.png",
            'alt' => "foto de perfil del usuario",
            'fk_level' => 3
        ]);
    }
}

