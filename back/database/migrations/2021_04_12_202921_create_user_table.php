<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user', function (Blueprint $table) {
            $table->bigIncrements('id_user');
            $table->unsignedTinyInteger('fk_level');
            $table->string('username', 45);
            $table->string('password', 100);
            $table->string('email', 150);
            $table->string('name', 80);
            $table->string('surname', 80);
            $table->string('telephone', 20);
            $table->string('quote', 200);
            $table->date('birth-day');
            $table->string('image', 255);
            $table->rememberToken();
            $table->timestamps();

            $table->foreign('fk_level')->references('id_level')->on('levels');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user');
    }
}
