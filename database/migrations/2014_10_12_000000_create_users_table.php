<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('lName')->nullable();
            $table->string('gender')->nullable();
            $table->boolean('is_admin')->default(false);
            $table->string('status')->nullable();
            $table->string('image')->nullable();
            $table->string('about')->nullable();
            $table->dateTime('date')->nullable();
            $table->string('email')->unique();
            // $table->string('image')->nullable();
            // $table->string('about')->nullable();
            $table->json('read_articles')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
