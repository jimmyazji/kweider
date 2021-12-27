<?php

namespace App\Http\Controllers;

use App\Models\ExportCat;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\ExportProduct;
use Illuminate\Support\Facades\App;
use phpDocumentor\Reflection\PseudoTypes\LowercaseString;

class ExportProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render(
            'Products/Index',
            [
                'products' => ExportProduct::all()->map(
                    function ($prod) {
                        return [
                            'name' => $prod->getTranslation('name', App::getLocale()),
                            'description' => $prod->getTranslation('description', App::getLocale()),
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
                        ];
                    }
                )
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render(
            'Products/Create',
            [
                'products' => ExportProduct::all()->map(
                    function ($prod) {
                        return [
                            'name' => $prod->getTranslations('name'),
                            'description' => $prod->getTranslations('description'),
                            'category' => $prod->category->getTranslation('name',App::getLocale()),
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
                        ];
                    }
                ),
                'categories' => ExportCat::all()->map(
                    function ($cat) {
                        return [
                            'id' => $cat->id,
                            'name' => $cat->getTranslation('name', App::getLocale()),
                        ];
                    }
                )
            ]
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'en_name' => 'required',
            'ar_name' => 'required',
            'cat_id' => 'required',
            'en_description' => 'required',
            'ar_description' => 'required',
            'weight' => 'nullable|numeric',
            'box_w' => 'required_if:box,true|numeric|nullable',
            'box_h' => 'required_if:box,true|numeric|nullable',
            'box_l' => 'required_if:box,true|numeric|nullable',
            'box_q' => 'required_if:box,true|integer|nullable',
            'box_w_c' => 'required_if:box,true|numeric|nullable',
            'box_w_a' => 'required_if:box,true|numeric|nullable',
            'pack_w' => 'required_if:package,true|numeric|nullable',
            'pack_h' => 'required_if:package,true|numeric|nullable',
            'pack_l' => 'required_if:package,true|numeric|nullable',
            'pack_q' => 'required_if:package,true|integer|nullable',
            'pack_w_c' => 'required_if:package,true|numeric|nullable',
            'pack_w_a' => 'required_if:package,true|numeric|nullable',
        ]);
        $product = ExportProduct::create([
            'name' => [
                'en' => ucfirst(strtolower($request->en_name)),
                'ar' => $request->ar_name,
            ],
            'description' => [
                'en' => $request->en_description,
                'ar' => $request->ar_description,
            ],
            'weight' => $request->weight,
            'cat_id' => $request->cat_id,
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
        return redirect()->back()->with('success', 'Product added successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
