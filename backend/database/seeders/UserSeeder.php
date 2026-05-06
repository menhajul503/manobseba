<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $users = [
            [
                'name' => 'Super Admin',
                'email' => 'superadmin@manobsheba.com',
                'password' => Hash::make('password'),
                'role_id' => 1,
            ],
            [
                'name' => 'Sub Admin',
                'email' => 'subadmin@manobsheba.com',
                'password' => Hash::make('password'),
                'role_id' => 2,
            ],
            [
                'name' => 'Regular User',
                'email' => 'user@manobsheba.com',
                'password' => Hash::make('password'),
                'role_id' => 3,
            ],
        ];

        foreach ($users as $user) {
            User::create($user);
        }
    }
}