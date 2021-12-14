<?php

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;
use Spatie\Permission\Contracts\Role;
use Illuminate\Foundation\Application;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MenuCatController;

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
Route::get('locale/{locale}', function ($locale) {
    app()->setLocale($locale);
    session()->put('locale', $locale);
    return redirect()->back();
})->name('locale');

Route::get('/', function () {
    return Inertia::render(
        'Home'
    );
})->name('home');

Route::resource('users', UserController::class);

Route::get('/settings', function () {
    return Inertia::render(
        'Settings'
    );
})->name('settings');
Route::get('/products', function () {
    return Inertia::render('Products/Index');
})->name('products.index');
Route::resource('menu', MenuController::class);
Route::get('/blog', function () {
    return Inertia::render('Blog/Index');
})->name('blog.index');
Route::get('/about', function () {
    return Inertia::render('About/Index');
})->name('about.index');
Route::get('/contact', function () {
    return Inertia::render('Contact/Index');
})->name('contact.index');
Route::resource('menucats',MenuCatController::class);
require __DIR__ . '/auth.php';
