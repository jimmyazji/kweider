<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\ExportCategory;
use Illuminate\Http\Request;
use App\Models\ExportProduct;
use Illuminate\Support\Facades\Auth;

class ExportProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:export-list', ['only' => ['create']]);
        $this->middleware('permission:export-create', ['only' => ['store']]);
        $this->middleware('permission:export-edit', ['only' => ['update']]);
        $this->middleware('permission:export-delete', ['only' => ['destroy']]);
    }

    public function index()
    {
        $user = Auth::user();
        $canList = $user ? $user->can('export-list') : false;
        $canListCategories = $user ? $user->can('export-category-list') : false;
        return Inertia::render(
            'Products/Index',
            [
                'products' => ExportProduct::query()
                    ->with('category', 'media')
                    ->filter(request(['search', 'category']))
                    ->orderBy('created_at', request('sorting') ?? 'desc')
                    ->paginate(20)
                    ->withQueryString()
                    ->through(
                        fn ($prod) => [
                            'id' => $prod->id,
                            'name' => $prod->name,
                            'description' => $prod->description,
                            'weight' => $prod->weight,
                            'category' => $prod->category->name,
                            'box_w_c' => $prod->box_w_c,
                            'box_w_a' => $prod->box_w_a,
                            'box_l' => $prod->box_l,
                            'box_w' => $prod->box_w,
                            'box_h' => $prod->box_h,
                            'box_q' => $prod->box_q,
                            'pack_w_c' => $prod->pack_w_c,
                            'pack_w_a' => $prod->pack_w_a,
                            'pack_l' => $prod->pack_l,
                            'pack_w' => $prod->pack_w,
                            'pack_h' => $prod->pack_h,
                            'pack_q' => $prod->pack_q,
                            'prod_url' => $prod->getFirstMedia('prod') ? $prod->getFirstMedia('prod')->getUrl('export') : null,
                            'box_url' => $prod->getFirstMedia('box') ? $prod->getFirstMedia('box')->getUrl('export') : null,
                            'pack_url' => $prod->getFirstMedia('package') ? $prod->getFirstMedia('package')->getUrl('export') : null
                        ]
                    ),
                'categories' => ExportCategory::all()->map(
                    function ($category) {
                        return [
                            'id' => $category->id,
                            'name' => $category->name
                        ];
                    }
                ),
                'filters' => request(['search', 'category']),
                'canList' => $canList,
                'canListCategories' => $canListCategories
            ]
        );
    }
    public function create()
    {

        return Inertia::render(
            'Products/Create',
            [
                'products' => ExportProduct::all()->map(
                    function ($prod) {
                        return [
                            'id' => $prod->id,
                            'name' => $prod->getTranslations('name'),
                            'description' => $prod->getTranslations('description'),
                            'category' => $prod->category->name,
                            'category_id' => $prod->category->id,
                            'weight' => $prod->weight,
                            'box_w_c' => $prod->box_w_c,
                            'box_w_a' => $prod->box_w_a,
                            'box_l' => $prod->box_l,
                            'box_w' => $prod->box_w,
                            'box_h' => $prod->box_h,
                            'box_q' => $prod->box_q,
                            'pack_w_c' => $prod->pack_w_c,
                            'pack_w_a' => $prod->pack_w_a,
                            'pack_l' => $prod->pack_l,
                            'pack_w' => $prod->pack_w,
                            'pack_h' => $prod->pack_h,
                            'pack_q' => $prod->pack_q,
                            'prod_url' => $prod->getFirstMedia('prod') ? $prod->getFirstMedia('prod')->getUrl('export') : null,
                            'box_url' => $prod->getFirstMedia('box') ? $prod->getFirstMedia('box')->getUrl('export') : null,
                            'pack_url' => $prod->getFirstMedia('package') ? $prod->getFirstMedia('package')->getUrl('export') : null
                        ];
                    }
                ),
                'categories' => ExportCategory::all()->map(
                    function ($category) {
                        return [
                            'id' => $category->id,
                            'name' => $category->name,
                        ];
                    }
                )
            ]
        );
    }
    public function store(Request $request)
    {
        $request->validate([
            'en_name' => 'required',
            'ar_name' => 'required',
            'category_id' => 'required',
            'en_description' => 'required',
            'ar_description' => 'required',
            'weight' => 'nullable|numeric|min:0',
            'box_w' => 'required_if:box,true|numeric|nullable|min:0',
            'box_h' => 'required_if:box,true|numeric|nullable|min:0',
            'box_l' => 'required_if:box,true|numeric|nullable|min:0',
            'box_q' => 'required_if:box,true|integer|nullable|min:0',
            'box_w_c' => 'required_if:box,true|numeric|nullable|min:0',
            'box_w_a' => 'required_if:box,true|numeric|nullable|min:0',
            'pack_w' => 'required_if:package,true|numeric|nullable|min:0',
            'pack_h' => 'required_if:package,true|numeric|nullable|min:0',
            'pack_l' => 'required_if:package,true|numeric|nullable|min:0',
            'pack_q' => 'required_if:package,true|integer|nullable|min:0',
            'pack_w_c' => 'required_if:package,true|numeric|nullable|min:0',
            'pack_w_a' => 'required_if:package,true|numeric|nullable|min:0',
            'prod_image' => 'required|max:10240',
            'box_image' => 'required_if:box,true|max:10240',
            'pack_image' => 'required_if:package,true|max:10240'
        ]);
        $product = ExportProduct::create([
            'name' => [
                'en' => $request->en_name,
                'ar' => $request->ar_name,
            ],
            'description' => [
                'en' => $request->en_description,
                'ar' => $request->ar_description,
            ],
            'weight' => $request->weight,
            'category_id' => $request->category_id,
            'box_w' => $request->box_w,
            'box_h' => $request->box_h,
            'box_l' => $request->box_l,
            'box_q' => $request->box_q,
            'box_w_c' => $request->box_w_c,
            'box_w_a' => $request->box_w_a,
            'pack_w' => $request->pack_w,
            'pack_l' => $request->pack_l,
            'pack_h' => $request->pack_h,
            'pack_q' => $request->pack_q,
            'pack_w_c' => $request->pack_w_c,
            'pack_w_a' => $request->pack_w_a,
        ]);
        $product->addMediaFromRequest('prod_image')
            ->toMediaCollection('prod');
        if ($request['box_image']) {
            $product->addMediaFromRequest('box_image')
                ->toMediaCollection('box');
        }
        if ($request['pack_image']) {
            $product->addMediaFromRequest('pack_image')
                ->toMediaCollection('package');
        }
        return redirect()->back()->with('success', 'Product added successfully.');
    }
    public function update(Request $request, $id)
    {
        $product = ExportProduct::find($id);
        $request->validate([
            'en_name' => 'required',
            'ar_name' => 'required',
            'category_id' => 'required',
            'en_description' => 'required',
            'ar_description' => 'required',
            'weight' => 'nullable|numeric|min:0',
            'box_w' => 'required_if:box,true|numeric|nullable|min:0',
            'box_h' => 'required_if:box,true|numeric|nullable|min:0',
            'box_l' => 'required_if:box,true|numeric|nullable|min:0',
            'box_q' => 'integer|nullable|min:0',
            'box_w_c' => 'required_if:box,true|numeric|nullable|min:0',
            'box_w_a' => 'required_if:box,true|numeric|nullable|min:0',
            'pack_w' => 'required_if:package,true|numeric|nullable|min:0',
            'pack_h' => 'required_if:package,true|numeric|nullable|min:0',
            'pack_l' => 'required_if:package,true|numeric|nullable|min:0',
            'pack_q' => 'required_if:package,true|integer|nullable|min:0',
            'pack_w_c' => 'required_if:package,true|numeric|nullable|min:0',
            'pack_w_a' => 'required_if:package,true|numeric|nullable|min:0',
        ]);
        $product->update([
            'name' => [
                'en' => $request->en_name,
                'ar' => $request->ar_name,
            ],
            'description' => [
                'en' => $request->en_description,
                'ar' => $request->ar_description,
            ],
            'weight' => $request->weight,
            'category_id' => $request->category_id,
            'box_w' => $request->box_w,
            'box_h' => $request->box_h,
            'box_l' => $request->box_l,
            'box_q' => $request->box_q,
            'box_w_c' => $request->box_w_c,
            'box_w_a' => $request->box_w_a,
            'pack_w' => $request->pack_w,
            'pack_l' => $request->pack_l,
            'pack_h' => $request->pack_h,
            'pack_q' => $request->pack_q,
            'pack_w_c' => $request->pack_w_c,
            'pack_w_a' => $request->pack_w_a,
        ]);
        if ($request['prod_image']) {
            $product->addMediaFromRequest('prod_image')
                ->toMediaCollection('prod');
        }
        if ($request['box_image']) {
            $product->addMediaFromRequest('box_image')
                ->toMediaCollection('box');
        }
        if ($request['pack_image']) {
            $product->addMediaFromRequest('pack_image')
                ->toMediaCollection('package');
        }
        return redirect()->back()->with('success', 'Product updated successfully.');
    }
    public function destroy($id)
    {
        $product = ExportProduct::find($id);
        $product->delete();
        return redirect()->route('products.create')->with('success', 'Product deleted successfully');
    }
}
