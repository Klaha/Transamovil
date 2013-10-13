<?php

use Illuminate\Database\Migrations\Migration;

class CreateMediosDePagoTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() 
	{
      Schema::create('medios_de_pago', function($table)
      {
      	$table->increments('id');
        $table->integer('usuario_id');
        $table->integer('banco_id');
        $table->string('numero', 50);
        $table->string('alias', 100);
        $table->enum('tipo', array('Tarjeta de Crédito', 'Cuenta'));
        $table->boolean('pago_servicio');
        $table->boolean('medio_principal');
        $table->enum('status', array('Activo', 'Inactivo'));
        $table->timestamps();
        $table->foreign('banco_id')->references('id')->on('bancos');
        $table->foreign('usuario_id')->references('id')->on('usuarios');
      });
    }

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
      Schema::drop('medios_de_pago');
    }

}