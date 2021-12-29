<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\MenuCat;
use App\Models\MenuProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;

class MenuController extends Controller
{
    public function index()
    {
        $locale = Session::get('locale');
        return Inertia::render('Menu/Index', [
            'categories' => MenuCat::all()->map(
                function ($cat) use ($locale) {
                    $products = $cat->products->map(function ($prod) {
                        return [
                            'id' => $prod->id,
                            'name' => $prod->getTranslation('name', App::getLocale()),
                            'type' => $prod->getTranslation('type', App::getLocale()),
                            'description' => $prod->getTranslation('description', App::getLocale()),
                        ];
                    });
                    return [
                        'id' => $cat->id,
                        'name' => $cat->getTranslation('name', App::getLocale()),
                        'products' => $products,
                    ];
                }
            )
        ]);
    }
    public function create()
    {

        return Inertia::render('Menu/Create', [
            'categories' => MenuCat::all()->map(
                function ($cat) {
                    return [
                        'id' => $cat->id,
                        'name' => $cat->getTranslation('name', App::getLocale()),
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
                        'category' => $prod->cat->getTranslation('name', App::getLocale()),
                        'cat_id' => $prod->cat_id,
                    ];
                }
            )
        ]);
    }
    public function store(Request $request)
    {
        dd($request->img);
        $request->validate([
            'en_name' => 'required',
            'ar_name' => 'required',
            'en_type' => 'max:255|nullable',
            'ar_type' => 'max:255|nullable',
            'cat_id' => 'required',
            'en_description' => 'required|max:255',
            'ar_description' => 'required|max:255'
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

        return redirect()->route('menu.create')->with('success', 'Product added successfully.');
    }
    public function destroy($id)
    {
        $product = MenuProduct::find($id);
        $product->delete();
        return redirect()->route('menu.create')->with('success', 'Product deleted successfully');
    }
}
