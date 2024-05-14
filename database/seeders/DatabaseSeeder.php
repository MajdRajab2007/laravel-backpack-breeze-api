<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(1)->create();

        \App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'test2@example.com',
            'password' => '123412341234'
        ]);
<<<<<<< HEAD
        \App\Models\User::factory()->create([
           'name' => 'Test User',
           'email' => 'admin@example.com',
           'password' => '123412341234',
           'is_admin' => true
        ]);

=======
         \App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'admin@example.com',
            'password' => '123412341234',
            'is_admin' => true
        ]);
        
>>>>>>> 993d48f22e69d6d6fe15482aa40fa197136aaefa
    }
}
