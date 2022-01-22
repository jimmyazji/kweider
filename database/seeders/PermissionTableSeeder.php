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
            'export-list',
            'export-create',
            'export-edit',
            'export-delete',
            'export-cat-list',
            'export-cat-create',
            'export-cat-edit',
            'export-cat-delete',
            'menu-list',
            'menu-create',
            'menu-edit',
            'menu-delete',
            'menu-cat-list',
            'menu-cat-create',
            'menu-cat-edit',
            'menu-cat-delete',
        ];
        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }
    }
}
