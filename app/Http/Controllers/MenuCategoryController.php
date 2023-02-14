<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Str;
use App\Models\MenuCategory;
use Illuminate\Http\Request;

class MenuCategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:menu-category-list', ['only' => ['index']]);
        $this->middleware('permission:menu-category-create', ['only' => ['store']]);
        $this->middleware('permission:menu-category-edit', ['only' => ['update']]);
        $this->middleware('permission:menu-category-delete', ['only' => ['destroy']]);
    }
    public function index()
    {
        return Inertia::render(
            'MenuCategories/Index',
            [
                'categories' => MenuCategory::query()
                    ->orderBy('order', 'desc')
                    ->with('products')
                    ->filter(request(['search']))
                    ->paginate(10)
                    ->withQuerystring()
                    ->through(
                        fn ($category) => [
                            'id' => $category->id,
                            'name' => $category->getTranslations('name'),
                        ]
                    ),
                'filters' => [request()->search]
            ]
        );
    }
    public function store(Request $request)
    {
        $request->validate([
            '*_name' => 'required|unique_translation:menu_categories,name',
        ]);
        MenuCategory::create([
            'name' => [
                'en' => $request['en_name'],
                'ar' => $request['ar_name']
            ],
            'order' => ((MenuCategory::max('order') ?? 0) + 1),
            'slug' => Str::slug($request['en_name'])
        ]);
        return redirect()->route('menucategories.index')->with('success', 'Category Created Successfully.');
    }

    public function update(Request $request, $id)
    {
        $category = MenuCategory::find($id);
        $request->validate([
            '*_name' => 'required| unique_translation:menu_categories,name,' . $id
        ]);
        $category->update([
            'name' => [
                'en' => $request['en_name'],
                'ar' => $request['ar_name']
            ],
            'slug' => Str::slug($request['en_name'])
        ]);
        return redirect()->back()->with('success', 'Category updated successfully');
    }
    public function destroy($id)
    {
        $category = MenuCategory::find($id);
        $category->delete();
        return redirect()->route('menucategories.index')->with('success', 'Category Deleted Successfully.');
    }
    public function advance($id)
    {
        $category = MenuCategory::find($id);
        $nextCategory = MenuCategory::where('order', '>', $category->order)->orderBy('order', 'asc')->first();
        if ($nextCategory == null) {
            return redirect()->back()->with('error', 'Can\'t advance this category anymore.');
        }
        $nextCategory->order = $category->order;
        $category->order++;
        $category->save();
        $nextCategory->save();
        return redirect()->back()->with('success', 'New sorting applied');
    }
    public function postpone($id)
    {
        $category = MenuCategory::find($id);
        $prevCategory = MenuCategory::where('order', '<', $category->order)->orderBy('order', 'desc')->first();
        if ($prevCategory == null) {
            return redirect()->back()->with('error', 'Can\'t postpone this category anymore.');
        }
        $prevCategory->order = $category->order;
        $category->order--;
        $category->save();
        $prevCategory->save();
        return redirect()->back()->with('success', 'New sorting applied');
    }
}
