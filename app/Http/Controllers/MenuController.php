<?php

namespace App\Http\Controllers;

use App\Models\MenuCat;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuController extends Controller
{
    public function index()
    {
        return Inertia::render(
            'Menu/Index'
        );
    }
}
