<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\MenuCat;
use App\Models\MenuProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;

class MenuController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:menu-list', ['only' => ['create']]);
        $this->middleware('permission:menu-create', ['only' => ['store']]);
        $this->middleware('permission:menu-edit', ['only' => ['update']]);
        $this->middleware('permission:menu-delete', ['only' => ['destroy']]);
    }
    public function index()
    {
        $user = Auth::user();
        $canList = $user ? $user->can('export-list') : false;
        $canListCat = $user ? $user->can('export-cat-list') : false;
        return Inertia::render('Menu/Index', [
            'categories' => MenuCat::query()
                ->filter(request(['search']))
                ->paginate(20)
                ->withQuerystring()
                ->through(fn ($cat) => [
                    $products = $cat->products->map(function ($prod) {
                        return [
                            'id' => $prod->id,
                            'name' => $prod->name,
                            'type' => $prod->type,
                            'description' => $prod->description,
                            'image' => $prod->getFirstMedia('menu')->getUrl('menu')
                        ];
                    }),
                    'id' => $cat->id,
                    'name' => $cat->name,
                    'products' => $products,
                ]),
            'filters' => request(['search']),
            'canList' => $canList,
            'canListCat' => $canListCat
        ]);
    }
    public function create()
    {

        return Inertia::render('Menu/Create', [
            'categories' => MenuCat::all()->map(
                function ($cat) {
                    return [
                        'id' => $cat->id,
                        'name' => $cat->name,
                    ];
                }
            ),
            'products' => MenuProduct::all()->map(
                function ($prod) {
                    return [
                        'id' => $prod->id,
                        'name' => $prod->getTranslations('name'),
                        'type' => $prod->getTranslations('type'),
                        'description' => $prod->getTranslations('description'),
                        'category' => $prod->cat->name,
                        'cat_id' => $prod->cat_id,
                        'img_url' => $prod->getFirstMedia('menu')->getUrl()
                    ];
                }
            )
        ]);
    }
    public function store(Request $request)
    {
        $request->validate([
            '*_name' => 'required',
            '*_type' => 'max:255|nullable',
            'cat_id' => 'required',
            '*_description' => 'required|max:255',
            'image' => 'required|mimes:jpg,jpeg,png|max:10240'
        ]);
        $product = MenuProduct::create([
            'name' => [
                'en' => $request->en_name,
                'ar' => $request->ar_name
            ],
            'type' => [
                'en' => $request->en_type,
                'ar' => $request->ar_type,
            ],
            'cat_id' => $request->cat_id,
            'description' => [
                'en' => $request->en_description,
                'ar' => $request->ar_description
            ],
        ]);
        $product->addMediaFromRequest('image')
            ->toMediaCollection('menu');
        return redirect()->route('menu.create')->with('success', 'Product added successfully.');
    }
    public function update(Request $request, $id)
    {
        $product = MenuProduct::find($id);
        $request->validate([
            'en_name' => 'required',
            'ar_name' => 'required',
            'en_type' => 'max:255|nullable',
            'ar_type' => 'max:255|nullable',
            'en_description' => 'required',
            'ar_description' => 'required',
            'cat_id' => 'required',
            'image' => 'nullable|mimes:jpg,jpeg,png|max:10240'
        ]);
        $product->update([
            'name' => [
                'en' => ucfirst(strtolower($request->en_name)),
                'ar' => $request->ar_name
            ],
            'type' => [
                'en' => ucfirst(strtolower($request->en_type)),
                'ar' => $request->ar_type
            ],
            'description' => [
                'en' => ucfirst(strtolower($request->en_description)),
                'ar' => $request->ar_description
            ],
            'cat_id' => $request->cat_id
        ]);
        if ($request->image) {
            $product->addMediaFromRequest('image')
                ->toMediaCollection('menu');
        }
        return redirect()->back()->with('success', 'Product updated successfully');
    }
    public function destroy($id)
    {
        $product = MenuProduct::find($id);
        $product->delete();
        return redirect()->route('menu.create')->with('success', 'Product deleted successfully');
    }
}
