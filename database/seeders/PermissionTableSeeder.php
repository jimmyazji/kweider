<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = [
            'role-list',
            'role-create',
            'role-edit',
            'role-delete',

            'user-list',
            'user-create',
            'user-edit',
            'user-delete',

            'post-create',
            'post-edit',
            'post-delete',


            'post-category-list',
            'post-category-create',
            'post-category-edit',
            'post-category-delete',

            'export-list',
            'export-create',
            'export-edit',
            'export-delete',
            'export-category-list',
            'export-category-create',
            'export-category-edit',
            'export-category-delete',

            'menu-list',
            'menu-create',
            'menu-edit',
            'menu-delete',
            'menu-category-list',
            'menu-category-create',
            'menu-category-edit',
            'menu-category-delete',
        ];
        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }
    }
}
