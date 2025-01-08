<?php

namespace Database\Factories;

use App\Models\Cause;
use App\Models\Donator;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Donation>
 */
class DonationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'donation_address' => fake()->address(),
            'donation_shipping_type' => fake()->randomElement(['self-delivered', 'pickup']),
            'donator_id' => Donator::factory(),
            'cause_id' => Cause::factory(),
        ];
    }
}
