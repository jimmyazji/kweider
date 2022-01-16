<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\MenuCat;
use Illuminate\Http\Request;

class MenuCatController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:menu-cat-list', ['only' => ['index']]);
        $this->middleware('permission:menu-cat-create', ['only' => ['store']]);
        $this->middleware('permission:menu-cat-edit', ['only' => ['update']]);
        $this->middleware('permission:menu-cat-delete', ['only' => ['delete']]);
    }
    public function index()
    {
        return Inertia::render(
            'MenuCats/Index',
            [
                'categories' => MenuCat::all()->map(
                    function ($cat) {
                        return [
                            'id' => $cat->id,
                            'name' => $cat->getTranslations('name'),
                        ];
                    }
                )
            ]
        );
    }
    public function store(Request $request)
    {
        $request->validate([
            '*_name' => 'required| unique_translation:menu_cats,name',
        ]);
        MenuCat::create([
            'name' => [
                'en' => ucfirst(strtolower($request['en_name'])),
                'ar' => $request['ar_name']
            ],
        ]);
        return redirect()->route('menucats.index')->with('success', 'Category Created Successfully.');
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
            '*_name' => 'required| unique_translation:menu_cats,name,' . $id
        ]);
        $cat->update([
            'name' => [
                'en' => ucfirst(strtolower($request['en_name'])),
                'ar' => $request['ar_name']
            ],
        ]);
        return redirect()->back()->with('success', 'Category updated successfully');
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
        return redirect()->route('menucats.index')->with('success', 'Category Deleted Successfully.');
    }
}
