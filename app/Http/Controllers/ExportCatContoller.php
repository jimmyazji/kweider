<?php

namespace App\Http\Controllers;

use App\Models\ExportCat;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ExportCatContoller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render(
            'ExportCats/Index',
            [
                'categories' => ExportCat::all()->map(
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

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
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
            'name.*' => 'required|unique_translation:export_cats,name',
        ]);
        ExportCat::create([
            'name' => [
                'en' => ucfirst(strtolower($request['name.en'])),
                'ar' => $request['name.ar']
            ]
        ]);
        return redirect()->route('exportcats.index')->with('success', 'Category Created Successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        $cat = ExportCat::find($id);
        $request->validate([
            'name.*' => 'required| unique_translation:menu_cats,name,' . $id
        ]);
        $cat->update([
            'name' => [
                'en' => ucfirst(strtolower($request['name.en'])),
                'ar' => $request['name.ar']
            ],
        ]);
        return redirect()->back()->with('success', 'Category updated successfully');    }

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
