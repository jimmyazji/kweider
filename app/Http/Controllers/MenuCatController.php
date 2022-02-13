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
                'categories' => MenuCat::query()
                    ->orderBy('order', 'desc')
                    ->with('products')
                    ->filter(request(['search']))
                    ->paginate(10)
                    ->withQuerystring()
                    ->through(
                        fn ($cat) => [
                            'id' => $cat->id,
                            'name' => $cat->getTranslations('name'),
                        ]
                    ),
                'filters' => [request()->search]
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
                'en' => $request['en_name'],
                'ar' => $request['ar_name']
            ],
            'order' => ((MenuCat::max('order') ?? 0) + 1),
        ]);
        return redirect()->route('menucats.index')->with('success', 'Category Created Successfully.');
    }

    public function update(Request $request, $id)
    {
        $cat = MenuCat::find($id);
        $request->validate([
            '*_name' => 'required| unique_translation:menu_cats,name,' . $id
        ]);
        $cat->update([
            'name' => [
                'en' => $request['en_name'],
                'ar' => $request['ar_name']
            ],
        ]);
        return redirect()->back()->with('success', 'Category updated successfully');
    }
    public function destroy($id)
    {
        $cat = MenuCat::find($id);
        $cat->delete();
        return redirect()->route('menucats.index')->with('success', 'Category Deleted Successfully.');
    }
    public function advance($id)
    {
        $categories = MenuCat::query()->where('id', '=', $id)
            ->orWhere('order', '>', fn ($query) =>
            $query->select('order')->from('menu_cats')->where('id', '=', $id)->first())->orderBy('order', 'asc')->get();
        if ($categories->count() < 2) {
            return redirect()->back()->with('error', 'Can\'t advance this category anymore.');
        }
        $categories[1]->order = $categories[0]->order;
        $categories[0]->order++;
        $categories->each(function ($item) {
            $item->save();
        });
        return redirect()->back()->with('success', 'New sorting applied');
    }
    public function postpone($id)
    {
        $category = MenuCat::find($id);
        $prevCategory = MenuCat::where('order', '<', $category->order)->orderBy('order', 'desc')->first();
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
