<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExportProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('export_products', function (Blueprint $table) {
            $table->id();
            
            $table->json('name');
            $table->json('description');
            
            $table->unsignedInteger('weight')->nullable();
            $table->unsignedBigInteger('cat_id');
            $table->foreign('cat_id')
            ->references('id')
            ->on('export_cats')
            ->onDelete('cascade');

            $table->unsignedInteger('box_w_c')->nullable();
            $table->unsignedInteger('box_w_a')->nullable();
            $table->unsignedInteger('box_l')->nullable();
            $table->unsignedInteger('box_w')->nullable();
            $table->unsignedInteger('box_h')->nullable();
            $table->unsignedInteger('box_q')->nullable();

            $table->unsignedInteger('pack_w_c')->nullable();
            $table->unsignedInteger('pack_w_a')->nullable();
            $table->unsignedInteger('pack_l')->nullable();
            $table->unsignedInteger('pack_w')->nullable();
            $table->unsignedInteger('pack_h')->nullable();
            $table->unsignedInteger('pack_q')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('export_products');
    }
}
