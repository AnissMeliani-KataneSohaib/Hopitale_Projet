<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class bookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'titre' => fake()->name(),
            'année de puplication'=> fake()->date(),
            'nombre de pages' => $this->faker->numberBetween(1, 300),
            'auteur id' => $this->faker->numberBetween(1, 10),
        ];
    }
}
