<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Branch;
use Illuminate\Http\Request;

class BranchController extends Controller
{
    public function index()
    {
        return redirect()->route('contact.show', Branch::first());
    }
    public function show(Branch $branch)
    {
        $branches = Branch::all();
        return Inertia::render('Contact/Show', ["branches" => $branches, "branch" => $branch]);
    }
}
