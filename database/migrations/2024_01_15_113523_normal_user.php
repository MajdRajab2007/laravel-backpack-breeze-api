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
        Schema::create('normal_users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('about')->nullable();
            $table->string('status');
            $table->dateTime('date');
            $table->string('gender');
            $table->string('image')->nullable();
            $table->string('lName')->nullable();
            $table->string('email')->unique();
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
        Schema::dropIfExists('normal_users');
    }
};
