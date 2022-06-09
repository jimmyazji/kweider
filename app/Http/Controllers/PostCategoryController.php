<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Str;
use App\Models\PostCategory;
use Illuminate\Http\Request;

class PostCategoryController extends Controller
{
    public function index()
    {
        return Inertia::render(
            'PostCategories/Index',
            [
                'categories' => PostCategory::all()->map(
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
            '*_name' => 'required|unique_translation:post_categories,name',
        ]);
        PostCategory::create([
            'name' => [
                'en' => $request['en_name'],
                'ar' => $request['ar_name']
            ],
            'slug' => Str::slug($request->en_name),
        ]);
        return redirect()->back()->with('success', 'Category created successfully.');
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            '*_name' => 'required|unique_translation:post_categories,name,' . $id,
        ]);
        $post = PostCategory::find($id);
        $post->update([
            'name' => [
                'en' => $request['en_name'],
                'ar' => $request['ar_name']
            ],
            'slug' => Str::slug($request->en_name),
        ]);
        return redirect()->back()->with('success', 'Category updated successfully.');
    }
    public function destroy($id)
    {
        $category = PostCategory::find($id);
        $category->delete();
        return redirect()->route('menucategories.index')->with('success', 'Category Deleted Successfully.');
    }
}
