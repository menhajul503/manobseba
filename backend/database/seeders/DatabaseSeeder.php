<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $roles = [
            ['id' => 1, 'name' => 'super_admin'],
            ['id' => 2, 'name' => 'sub_admin'],
            ['id' => 3, 'name' => 'user'],
        ];

        foreach ($roles as $role) {
            Role::updateOrCreate(['id' => $role['id']], ['name' => $role['name']]);
        }

        User::updateOrCreate(
            ['email' => 'superadmin@manobsheba.org'],
            [
                'name' => 'Super Admin',
                'password' => Hash::make('SuperAdmin123!'),
                'role_id' => 1,
            ]
        );

        User::updateOrCreate(
            ['email' => 'subadmin@manobsheba.org'],
            [
                'name' => 'Sub Admin',
                'password' => Hash::make('SubAdmin123!'),
                'role_id' => 2,
            ]
        );
    }
}
