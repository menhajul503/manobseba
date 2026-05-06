<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        $roles = [
            ['id' => 1, 'name' => 'super_admin'],
            ['id' => 2, 'name' => 'sub_admin'],
            ['id' => 3, 'name' => 'user'],
        ];

        foreach ($roles as $role) {
            Role::create($role);
        }
    }
}