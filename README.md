# ManobSheba NGO Management System

A complete NGO donation and village management platform with a Laravel API backend and React + Tailwind frontend.

## Project structure

- `backend/` — Laravel API backend files, migrations, models, controllers, and Sanctum config.
- `src/` — React + Vite frontend pages, dashboard, authentication, and API integration.

## Backend setup

1. Install Composer dependencies:
   ```bash
   cd backend
   composer install
   ```
2. Copy the environment template and update database credentials:
   ```bash
   cp .env.example .env
   ```
3. Generate the application key:
   ```bash
   php artisan key:generate
   ```
4. Run migrations and seed initial roles and admin accounts:
   ```bash
   php artisan migrate --seed
   ```
5. Start the Laravel development server:
   ```bash
   php artisan serve
   ```

## Frontend setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment variables:
   ```bash
   cp .env.example .env
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

## Authentication flow

- Register and login use Laravel Sanctum token authentication.
- Tokens are stored in `localStorage` as `ms_token` and the current user profile is stored in `ms_user`.
- Protected dashboard routes use role-based navigation for `super_admin`, `sub_admin`, and `user`.

## API endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/user`
- `GET /api/users`
- `POST /api/users`
- `GET /api/donations`
- `POST /api/donations`
- `GET /api/transactions`
- `POST /api/transactions`

## Notes

- Frontend uses Axios with a central API config in `src/api/axios.ts`.
- Tailwind styling is applied across the public site and dashboard.
- The backend is API-only and returns JSON responses for all resources.
