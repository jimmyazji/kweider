<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware('permission:user-list', ['only' => ['index']]);
        $this->middleware('permission:user-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:user-edit', ['only' => ['edit', 'update']]);
        $this->middleware('permission:user-delete', ['only' => ['destroy']]);
    }
    public function index()
    {
        return Inertia::render('Users/Index', [
            'users' => User::query()
                ->when(request('search'), function ($query, $search) {
                    $query->where('first_name', 'like', "%{$search}%")
                        ->orWhere('last_name', 'like', "%{$search}%")
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
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Users/Create', [
            'roles' => Role::pluck('name')->all(),
            'permissions' => Permission::pluck('name')->all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'country' => 'required',
            'region' => 'required',
            'phone' => 'nullable|digits:10',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'first_name' => ucfirst(strtolower($request->first_name)),
            'last_name' => ucfirst(strtolower($request->last_name)),
            'email' => strtolower($request->email),
            'country' => $request->country,
            'region' => $request->region,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
        ]);
        $user->syncPermissions($request->permissions);
        $user->assignRole($request->roles);
        return redirect()->route('users.index')
            ->with('success', 'User created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Inertia::render('Users/Show', ['user' => User::find($id)]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = User::find($id);
        return Inertia::render('Users/Edit', [
            'user' => $user->only('id', 'first_name', 'last_name', 'email', 'phone', 'country', 'region'),
            'roles' => Role::pluck('name')->all(),
            'permissions' => Permission::pluck('name')->all(),
            'userRoles' => $user->roles->pluck('name','name')->all(),
            'userPermissions' => $user->permissions->pluck('name','name')->all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $id,
            'country' => 'required',
            'region' => 'required',
            'phone' => 'nullable|digits:10',
            'password' => ['nullable', 'confirmed', Rules\Password::defaults()],
        ]);
        $user->update([
            'first_name' => ucfirst(strtolower($request->first_name)),
            'last_name' => ucfirst(strtolower($request->last_name)),
            'email' => strtolower($request->email),
            'country' => $request->country,
            'region' => $request->region,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
        ]);
        $user->syncPermissions($request->permissions);
        $user->syncRoles($request->roles);
        return redirect()->back()->with('success','User Edited Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
