<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
use App\Models\PostCategory;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PostCategory::factory(5)->create();
        for ($i = 0; $i < 30; $i++) {
            Post::factory()->create(['user_id' => User::inRandomOrder()->first(), 'category_id' => PostCategory::inRandomOrder()->first()]);
        }
    }
}
