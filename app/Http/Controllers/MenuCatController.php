<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\MenuCat;
use Illuminate\Http\Request;

class MenuCatController extends Controller
{
    public function index()
    {
        return Inertia::render(
            'MenuCats/Index',
            [
                'categories' => MenuCat::all()->map(
                    function ($cat) {
                        return [
                            'id' => $cat->id,
                            'en_name' => $cat->en_name,
                            'ar_name' => $cat->ar_name,
                        ];
                    }
                )
            ]
        );
    }
    public function store(Request $request)
    {
        $request->validate([
            'en_name' => 'required|unique:menu_cats,en_name',
            'ar_name' => 'required|unique:menu_cats,ar_name'
        ]);
        MenuCat::create([
            'en_name' => ucfirst(strtolower($request->en_name)),
            'ar_name' => $request->ar_name
        ]);
        return redirect()->route('menucats.index')->with('success','Category Created Successfully.');
    }

    public function show($id)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        $cat = MenuCat::find($id);
        $request->validate([
            'en_name' => 'required|unique:menu_cats,en_name,'.$id,
            'ar_name' => 'required|unique:menu_cats,ar_name,'.$id,
        ]);
        $cat->update([
            'en_name' => $request->en_name,
            'ar_name' => $request->ar_name
        ]);
        return redirect()->back()->with('success','Category updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $menuCat = MenuCat::find($id);
        $menuCat->delete();
        return redirect()->route('menucats.index')->with('success','Category Deleted Successfully.');
    }
}

