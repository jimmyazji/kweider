<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'first_name' => 'Jimmy',
            'last_name' => 'Yazji',
            'email' => 'jimmy@gmail.com',
            'country' => 'SY',
            'region' => 'DI',
            'phone' => '0937954758',
            'password' => bcrypt('12345678'),
        ]);
        User::factory(100)->create();
    }
}
