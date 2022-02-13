<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Str;
use App\Models\PostCategory;
use Illuminate\Http\Request;

class PostCategoryContoller extends Controller
{
    public function index()
    {
        return Inertia::render(
            'PostCats/Index',
            [
                'categories' => PostCategory::all()->map(
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
            '*_name' => 'required|unique_translation:post_categories,name',
        ]);
        PostCategory::create([
            'name' => [
                'en' => ucfirst(strtolower($request['en_name'])),
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
                'en' => ucfirst(strtolower($request['en_name'])),
                'ar' => $request['ar_name']
            ],
            'slug' => Str::slug($request->en_name),
        ]);
        return redirect()->back()->with('success', 'Category updated successfully.');
    }
    public function destroy($id)
    {
        $cat = PostCategory::find($id);
        $cat->delete();
        return redirect()->route('menucats.index')->with('success', 'Category Deleted Successfully.');
    }
}
