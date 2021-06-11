<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContractsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contracts', function (Blueprint $table) {
            $table->bigIncrements('id_contract');
            $table->unsignedBigInteger('fk_user');
            $table->unsignedBigInteger('fk_service');
            $table->unsignedBigInteger('fk_work');
            $table->unsignedBigInteger('fk_state');
            $table->date('finish_date');
            $table->timestamps();

            $table->foreign('fk_state')->references('id_order_state')->on('orders_states');
            $table->foreign('fk_work')->references('id_works')->on('works');
            $table->foreign('fk_service')->references('id_service')->on('services');
            $table->foreign('fk_user')->references('id_user')->on('user');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contracts');
    }
}
