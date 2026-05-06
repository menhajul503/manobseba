<?php

return [
    'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', 'localhost:4176,127.0.0.1:4176,localhost:5173,127.0.0.1:5173')),

    'expiration' => null,

    'middleware' => [
        'verify_csrf_token' => [
            App\Http\Middleware\VerifyCsrfToken::class,
        ],
        'encrypt_cookies' => [
            App\Http\Middleware\EncryptCookies::class,
        ],
    ],
];
