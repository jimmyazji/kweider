<?php

namespace App\Http\Controllers;

use App\Models\ExportCategory;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ExportCategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:export-category-list', ['only' => ['index']]);
        $this->middleware('permission:export-category-create', ['only' => ['store']]);
        $this->middleware('permission:export-category-edit', ['only' => ['update']]);
        $this->middleware('permission:export-category-delete', ['only' => ['delete']]);
    }
    public function index()
    {
        return Inertia::render(
            'ExportCategories/Index',
            [
                'categories' => ExportCategory::all()->map(
                    function ($category) {
                        return [
                            'id' => $category->id,
                            'name' => $category->getTranslations('name'),
                        ];
                    }
                )
            ]
        );
    }
    public function store(Request $request)
    {
        $request->validate([
            'name.*' => 'required|unique_translation:export_categories,name',
        ]);
        ExportCategory::create([
            'name' => [
                'en' => $request['name.en'],
                'ar' => $request['name.ar']
            ]
        ]);
        return redirect()->route('exportcategories.index')->with('success', 'Category Created Successfully.');
    }

    public function update(Request $request, $id)
    {
        $category = ExportCategory::find($id);
        $request->validate([
            'name.*' => 'required| unique_translation:menu_categories,name,' . $id
        ]);
        $category->update([
            'name' => [
                'en' => $request['name.en'],
                'ar' => $request['name.ar']
            ],
        ]);
        return redirect()->back()->with('success', 'Category updated successfully');
    }
    public function destroy($id)
    {
        $exportCategory= ExportCategory::find($id);
        $exportCategory->delete();
        return redirect()->route('exportcategory.index')->with('success', 'Category Deleted Successfully.');
    }
}
