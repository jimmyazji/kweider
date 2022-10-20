<?php

namespace Database\Seeders;

use App\Models\Branch;
use Illuminate\Database\Seeder;

class BranchesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Branch::create([
            "slug" => "al-midan-branch",
            "name" => "al-midan branch",
            "map" => "https://maps.google.com/maps?q=Kweider%20Sweets,%20Al%20Midan,%20Damascus,%20Syria&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ]);
        Branch::create([
            "slug" => "al-mazzah-branch",
            "name" => "al-mazzah branch",
            "map" => "https://maps.google.com/maps?q=Kweider%20Sweets,%20Al%20Midan,%20Damascus,%20Syria&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ]);
    }
}
