<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
        'Dashboard');  
})->name('dashboard');
Route::get('/users', function () {
    return Inertia::render(
        'Users/Index');  
})->name('users');
Route::get('/settings', function () {
    return Inertia::render(
        'Settings');  
})->name('settings');
Route::get('/products',function(){
    return Inertia::render('Products/Index');
})->name('products');
Route::get('/menu',function(){
    return Inertia::render('Menu/Index');
})->name('menu');
Route::get('/about',function(){
    return Inertia::render('About/Index');
})->name('about');
Route::get('/contact',function(){
    return Inertia::render('Contact/Index');
})->name('contact');

require __DIR__ . '/auth.php';
