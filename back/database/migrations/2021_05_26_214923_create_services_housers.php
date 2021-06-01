<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServicesHousers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('services_housers', function (Blueprint $table) {
            $table->increments('id_service_houser');
            $table->unsignedInteger('fk_id_user');
            $table->unsignedInteger('fk_id_service');
            $table->timestamps();

            $table->foreign('fk_id_user')->references('id_user')->on('user');
            $table->foreign('fk_id_service')->references('id_service')->on('services');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('services_housers');
    }
}
