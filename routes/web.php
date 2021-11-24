<?php

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;
use Spatie\Permission\Contracts\Role;
use Illuminate\Foundation\Application;
use App\Http\Controllers\UsersController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render(
        'Home'
    );
})->name('home');
Route::get('/users', function () {
    return Inertia::render('Users/Index', [
        'users' => User::query()
            ->when(request('search'),function($query, $search) {
                $query->where('first_name','like',"%{$search}%")
                ->orWhere('last_name','like',"%{$search}%")
                ->orWhereRaw("concat(first_name,' ',last_name) like '%{$search}%'");
            })
            ->paginate(19)
            ->withQuerystring()
            ->through(fn ($user) => [
                'id' => $user->id,
                'first_name' => $user->first_name,
                'last_name' => $user->last_name,
                'email' => $user->email,
                'phone' => $user->phone,
                'country' => $user->country,
                'region' => $user->region,
            ]),
            'filters' => request(['search'])
    ]);
})->name('users');
Route::get('/users/create', function () {
    return Inertia::render(
        'Users/Create'
    );
})->name('users.create');
Route::get('users/{id}/edit', function () {
    return Inertia::render(
        'Users/Edit'
    );
})->name('users.edit');
Route::get('/settings', function () {
    return Inertia::render(
        'Settings'
    );
})->name('settings');
Route::get('/products', function () {
    return Inertia::render('Products/Index');
})->name('products');
Route::get('/menu', function () {
    return Inertia::render('Menu/Index');
})->name('menu');
Route::get('/about', function () {
    return Inertia::render('About/Index');
})->name('about');
Route::get('/contact', function () {
    return Inertia::render('Contact/Index');
})->name('contact');

require __DIR__ . '/auth.php';
