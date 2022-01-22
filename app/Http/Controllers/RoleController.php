<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleController extends Controller
{

    public function index()
    {
        return Inertia::render('Roles/Index', [
            'roles' => Role::where('name', '!=', Null)->when(request('search'), function ($query, $search) {
                $query->where('name', 'like', "%{$search}%");
            })->paginate(10)->withQuerystring()
                ->through(fn ($role) => [
                    'id' => $role->id,
                    'name' => $role->name,
                    'permissions' => $role->permissions->pluck('name')
                ]),
            'filters' => request(['search'])
        ]);
    }
    public function create()
    {
        return Inertia::render('Roles/Create', ['permissions' => Permission::all()->pluck('name')]);
    }
    public function store(Request $request)
    {
        //
    }
    public function show($id)
    {
        //
    }
    public function edit($id)
    {
        //
    }
    public function update(Request $request, $id)
    {
        //
    }
    public function destroy($id)
    {
        //
    }
}
