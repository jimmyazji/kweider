<?php

namespace App\Http\Controllers;

use App\Models\MenuCat;
use App\Models\MenuProduct;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuController extends Controller
{
    public function index()
    {
        $locale = Session::get('locale');
        if ($locale === 'ar') {
            $categories = MenuCat::all()->map(
                function ($cat) {
                    $products = $cat->products->map(function ($prod) {
                        return [
                            'id' => $prod->id,
                            'name' => $prod->ar_name,
                            'type' => $prod->ar_type,
                            'description' => $prod->ar_description,
                        ];
                    });
                    return [
                        'id' => $cat->id,
                        'name' => $cat->ar_name,
                        'products' => $products,
                    ];
                }
            );
        } else {
            $categories = MenuCat::all()->map(
                function ($cat) {
                    $products = $cat->products->map(function ($prod) {
                        return [
                            'id' => $prod->id,
                            'name' => $prod->en_name,
                            'type' => $prod->en_type,
                            'description' => $prod->en_description,
                        ];
                    });
                    return [
                        'id' => $cat->id,
                        'name' => $cat->en_name,
                        'products' => $products,
                    ];
                }
            );
        }
        return Inertia::render('Menu/Index', ['categories' => $categories]);
    }
    public function create()
    {
        $locale = Session::get('locale');
        if ($locale === 'ar') {
            $products = MenuProduct::all()->map(
                function ($prod) {
                    return [
                        'id' => $prod->id,
                        'en_name' => $prod->en_name,
                        'ar_name' => $prod->ar_name,
                        'en_type' => $prod->en_type,
                        'ar_type' => $prod->ar_type,
                        'en_desc' => $prod->en_description,
                        'ar_desc' => $prod->ar_description,
                        'cat_name' => $prod->cat->ar_name,
                        'cat_id' => $prod->cat_id,
                    ];
                }
            );
            $categories =  MenuCat::all()->map(
                function ($cat) {
                    return [
                        'id' => $cat->id,
                        'name' => $cat->ar_name,
                    ];
                }
            );
        } else {
            $categories =  MenuCat::all()->map(
                function ($cat) {
                    return [
                        'id' => $cat->id,
                        'name' => $cat->en_name,
                    ];
                }
            );
            $products = MenuProduct::all()->map(
                function ($prod) {
                    return [
                        'id' => $prod->id,
                        'en_name' => $prod->en_name,
                        'ar_name' => $prod->ar_name,
                        'en_type' => $prod->en_type,
                        'ar_type' => $prod->ar_type,
                        'en_desc' => $prod->en_description,
                        'ar_desc' => $prod->ar_description,
                        'cat_name' => $prod->cat->en_name,
                        'cat_id' => $prod->cat_id,
                    ];
                }
            );
        }

        return Inertia::render('Menu/Create', ['categories' => $categories, 'products' => $products]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'en_name' => 'required',
            'ar_name' => 'required',
            'en_type' => 'max:255|nullable',
            'ar_type' => 'max:255|nullable',
            'cat_id' => 'required',
            'en_desc' => 'required|max:255',
            'ar_desc' => 'required|max:255'
        ]);
        $product = MenuProduct::create([
            'en_name' => $request->en_name,
            'ar_name' => $request->ar_name,
            'en_type' => $request->en_type,
            'ar_type' => $request->ar_type,
            'cat_id' => $request->cat_id,
            'en_description' => $request->en_desc,
            'ar_description' => $request->ar_desc,
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
