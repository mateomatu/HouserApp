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
            'name' => "Mateo",
            'lastname' => "Maturano",
            'telephone' => "155550010",
            'quote' => "Usuario común de Houser",
            'birthday' => "1990-06-01",
            'address' => "Ciudad de la paz 2129",
            'portrait' => "carpi1.jpg",
            'avatar' => "yo.jpg",
            'alt' => "foto de perfil del usuario",
            'fk_level' => 1
        ]);
        Users::create([
            'id_user' => 2,
            'password' => Hash::make('user'),
            'email' => "user@mail.com",
            'name' => "Sol",
            'lastname' => "Damieri",
            'telephone' => "155550011",
            'quote' => "Soy un usuario común de Houser",
            'birthday' => "1990-05-28",
            'address' => "Scalabrini Ortiz 2021",
            'portrait' => "cold1.jpg",
            'avatar' => "perfil1.jpg",
            'alt' => "foto de perfil del usuario",
            'fk_level' => 2
        ]);
        Users::create([
            'id_user' => 3,
            'password' => Hash::make('user'),
            'email' => "professional@mail.com",
            'name' => "Javier",
            'lastname' => "Garmenia",
            'telephone' => "155550012",
            'quote' => "Soy Técnico de PC",
            'birthday' => "1988-10-15",
            'address' => "Cabildo 5100",
            'portrait' => "compu1.jpg",
            'avatar' => "javier.jpg",
            'alt' => "foto de perfil del usuario",
            'fk_level' => 3,
            'fk_service' => 2
        ]);
        Users::create([
            'id_user' => 4,
            'password' => Hash::make('user'),
            'email' => "laurareggiano@mimail.com",
            'name' => "Laura",
            'lastname' => "Reggiano",
            'telephone' => "155550012",
            'quote' => "Soy Ténica de Pc",
            'birthday' => "1988-10-15",
            'address' => "Las Heras 2020",
            'portrait' => "compu2.jpg",
            'avatar' => "laura.jpg",
            'alt' => "foto de perfil del usuario",
            'fk_level' => 3,
            'fk_service' => 2
        ]);
        Users::create([
            'id_user' => 5,
            'password' => Hash::make('user'),
            'email' => "jorgelaurenzo12@mimail.com",
            'name' => "Jorge",
            'lastname' => "Laurenzo",
            'telephone' => "155550012",
            'quote' => "Soy Carpintero",
            'birthday' => "1988-10-15",
            'address' => "Superí 210",
            'portrait' => "carpi1.jpg",
            'avatar' => "jorge.jpg",
            'alt' => "foto de perfil del usuario",
            'fk_level' => 3,
            'fk_service' => 1
        ]);
        Users::create([
            'id_user' => 6,
            'password' => Hash::make('user'),
            'email' => "raulrak@mimail.com",
            'name' => "Raul",
            'lastname' => "Rakora",
            'telephone' => "155550012",
            'quote' => "Soy Carpintero y Ebanista",
            'birthday' => "1988-10-15",
            'address' => "Conde 700",
            'portrait' => "carpi2.jpg",
            'avatar' => "raul.jpg",
            'alt' => "foto de perfil del usuario",
            'fk_level' => 3,
            'fk_service' => 1
        ]);
        Users::create([
            'id_user' => 7,
            'password' => Hash::make('user'),
            'email' => "matiburzaco@mimail.com",
            'name' => "Matias",
            'lastname' => "Buzcaco",
            'telephone' => "155550012",
            'quote' => "Soy Pintor de casas y establecimientos",
            'birthday' => "1988-10-15",
            'address' => "Freire 1100",
            'portrait' => "pintu1.jpg",
            'avatar' => "matias.jpg",
            'alt' => "foto de perfil del usuario",
            'fk_level' => 3,
            'fk_service' => 3
        ]);
        Users::create([
            'id_user' => 8,
            'password' => Hash::make('user'),
            'email' => "pablojulens@minimail.com",
            'name' => "Pablo",
            'lastname' => "Julens",
            'telephone' => "155550010",
            'quote' => "Soy Pintor hace 10 años",
            'birthday' => "1988-10-15",
            'address' => "Monroe 3000",
            'portrait' => "pintu2.jpg",
            'avatar' => "pablo.jpg",
            'alt' => "foto de perfil del usuario",
            'fk_level' => 3,
            'fk_service' => 3
        ]);
        Users::create([
            'id_user' => 9,
            'password' => Hash::make('user'),
            'email' => "valeriaandreeti@gmail.com",
            'name' => "Valeria",
            'lastname' => "Andreeti",
            'telephone' => "155550010",
            'quote' => "Soy Carpintera profesional hace más de 2 años",
            'birthday' => "1988-10-15",
            'address' => "Céspedes 3700",
            'portrait' => "carpi3.jpg",
            'avatar' => "valeria.jpg",
            'alt' => "foto de perfil del usuario",
            'fk_level' => 3,
            'fk_service' => 1
        ]);
        Users::create([
            'id_user' => 10,
            'password' => Hash::make('user'),
            'email' => "gladysenglish@gmail.com",
            'name' => "Gladys",
            'lastname' => "Lamanuch",
            'telephone' => "155550010",
            'quote' => "Experta en carpientería de mesitas ratonas y estantes",
            'birthday' => "1988-10-15",
            'address' => "Conesa 828",
            'portrait' => "carpi4.jpg",
            'avatar' => "gladys.jpg",
            'alt' => "foto de perfil del usuario",
            'fk_level' => 3,
            'fk_service' => 1
        ]);
        Users::create([
            'id_user' => 11,
            'password' => Hash::make('user'),
            'email' => "teresa@gmail.com",
            'name' => "Teresa",
            'lastname' => "Salendis",
            'telephone' => "155550010",
            'quote' => "He reparado diversos electrodomésticos a lo largo de 15 años",
            'birthday' => "1988-10-15",
            'address' => "Blanco encalada 1100",
            'portrait' => "cold1.jpg",
            'avatar' => "teresa.jpg",
            'alt' => "foto de perfil del usuario",
            'fk_level' => 3,
            'fk_service' => 4
        ]);
        Users::create([
            'id_user' => 12,
            'password' => Hash::make('user'),
            'email' => "fedelew@gmail.com",
            'name' => "Federico",
            'lastname' => "Lewis",
            'telephone' => "155550010",
            'quote' => "¡Reparador especial de Aires Acondicionados!",
            'birthday' => "1988-10-15",
            'address' => "Olazabal 2300",
            'portrait' => "cold2.jpg",
            'avatar' => "fede.jpg",
            'alt' => "foto de perfil del usuario",
            'fk_level' => 3,
            'fk_service' => 4
        ]);
        Users::create([
            'id_user' => 13,
            'password' => Hash::make('user'),
            'email' => "manunande@gmail.com",
            'name' => "Manuel",
            'lastname' => "Nandez",
            'telephone' => "155550010",
            'quote' => "Reparo todo tipo de electrodomésticos: Aires - Heladeras - Hornos y mas!",
            'birthday' => "1988-10-15",
            'address' => "Jose hernandez 1101",
            'portrait' => "cold3.jpg",
            'avatar' => "manuel.jpg",
            'alt' => "foto de perfil del usuario",
            'fk_level' => 3,
            'fk_service' => 4
        ]);
        Users::create([
            'id_user' => 14,
            'password' => Hash::make('user'),
            'email' => "ramirogus@gmail.com",
            'name' => "Ramiro",
            'lastname' => "Gustamonte",
            'telephone' => "155550010",
            'quote' => "Servicio de fletería a domicilio, el mejor servicio en Houser",
            'birthday' => "1988-10-15",
            'address' => "Virrey loreto 974",
            'portrait' => "flete1.jpg",
            'avatar' => "ramiro.jpg",
            'alt' => "foto de perfil del usuario",
            'fk_level' => 3,
            'fk_service' => 5
        ]);
        Users::create([
            'id_user' => 15,
            'password' => Hash::make('user'),
            'email' => "nicolastofe@gmail.com",
            'name' => "Nicolas",
            'lastname' => "Tofe",
            'telephone' => "155550010",
            'quote' => "Servicio de Flete con experiencia de más de 20 años",
            'birthday' => "1988-10-15",
            'address' => "Florida 3100",
            'portrait' => "flete2.jpg",
            'avatar' => "nicolas.jpg",
            'alt' => "foto de perfil del usuario",
            'fk_level' => 3,
            'fk_service' => 5
        ]);
    }
}

