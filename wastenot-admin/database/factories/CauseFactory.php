<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cause>
 */
class CauseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'cause_title' => fake()->sentence(rand(3, 7)),
            'cause_desc' => fake()->paragraph(rand(5, 10)),
            'cause_geocoordinate' => fake()->latitude().', '.fake()->longitude(),
            'cause_meal_goal_amount' => rand(50, 100),
        ];
    }
}
