<?php

namespace App\Http\Controllers;

use App\Models\ExportCat;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ExportCatContoller extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:export-cat-list', ['only' => ['index']]);
        $this->middleware('permission:export-cat-create', ['only' => ['store']]);
        $this->middleware('permission:export-cat-edit', ['only' => ['update']]);
        $this->middleware('permission:export-cat-delete', ['only' => ['delete']]);
    }
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
    public function store(Request $request)
    {
        $request->validate([
            'name.*' => 'required|unique_translation:export_cats,name',
        ]);
        ExportCat::create([
            'name' => [
                'en' => $request['name.en'],
                'ar' => $request['name.ar']
            ]
        ]);
        return redirect()->route('exportcats.index')->with('success', 'Category Created Successfully.');
    }

    public function update(Request $request, $id)
    {
        $cat = ExportCat::find($id);
        $request->validate([
            'name.*' => 'required| unique_translation:menu_cats,name,' . $id
        ]);
        $cat->update([
            'name' => [
                'en' => $request['name.en'],
                'ar' => $request['name.ar']
            ],
        ]);
        return redirect()->back()->with('success', 'Category updated successfully');
    }
    public function destroy($id)
    {
        $exportCat = ExportCat::find($id);
        $exportCat->delete();
        return redirect()->route('exportcat.index')->with('success', 'Category Deleted Successfully.');
    }
}
