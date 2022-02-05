<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MenuCatController;
use App\Http\Controllers\ExportCatContoller;
use App\Http\Controllers\ExportProductController;
use App\Http\Controllers\PostController;

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
    App::setLocale($locale);
    session()->put('locale', $locale);
    return redirect()->back();
})->name('locale');

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/settings', function () {
    return Inertia::render('Settings');
})->name('settings');


Route::get('/about', function () {
    return Inertia::render('About/Index');
})->name('about.index');

Route::get('/contact', function () {
    return Inertia::render('Contact/Index');
})->name('contact.index');

Route::get('blog', [PostController::class, 'index'])->name('blog.index');
Route::get('posts/create', [PostController::class, 'create'])->name('posts.create');
Route::post('blog', [PostController::class, 'store'])->name('posts.store');
Route::get('posts/{post:slug}/edit', [PostController::class, 'edit'])->name('posts.edit');
Route::put('blog/{post}', [PostController::class, 'update'])->name('posts.update');
Route::get('posts/{post:slug}', [PostController::class, 'show'])->name('posts.show');
Route::delete('posts/{post}', [PostController::class, 'destroy'])->name('posts.delete');

Route::resource('users', UserController::class);
Route::resource('products', ExportProductController::class);
Route::resource('exportcats', ExportCatContoller::class);
Route::resource('menu', MenuController::class);
Route::resource('menucats', MenuCatController::class);
Route::resource('roles', RoleController::class);
require __DIR__ . '/auth.php';
