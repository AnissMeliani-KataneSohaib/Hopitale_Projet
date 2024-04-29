<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Médecin>
 */
class MédecinFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'nom'=>fake()->name(),
            'prenom'=>fake()->name(),
            'email'=>fake()->email(),
            'telephone'=>fake()->phoneNumber(),
            'specialité'=>fake()->name(),

        ];
    }
}
