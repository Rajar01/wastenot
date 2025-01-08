<?php

namespace Database\Seeders;

use App\Models\Donation;
use App\Models\Meal;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@admin.com',
            'password' => bcrypt('123'),
        ]);

        Donation::factory(20)
            ->has(Meal::factory()->count(2))
            ->create();
    }
}
