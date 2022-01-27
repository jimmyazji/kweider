<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\PostCategory;
use Inertia\Inertia;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Inertia::render('Blog/Index', [
            'posts' => Post::with('author', 'category')
                ->filter(request(['search', 'category', 'sorting']))
                ->orderBy('created_at', $request->sorting ?? 'desc')
                ->paginate(9)
                ->withQueryString()
                ->through(fn ($post) => [
                    'title' => $post->title,
                    'excerpt' => $post->excerpt,
                    'slug' => $post->slug,
                    'body' => $post->body,
                    'created_at' => $post->created_at->diffForHumans(),
                    'updated_at' =>  $post->updated_at ? $post->updated_at->diffForHumans() : null,
                    'published_at' => $post->published_at ? $post->published_at->diffForHumans() : null,
                    'category' => $post->category->name,
                    'author' => $post->author->first_name . ' ' . $post->author->last_name,
                ]),
            'categories' => PostCategory::all()->map(function ($cat) {
                return ['name' => $cat->name, 'slug' => $cat->slug];
            }),
            'filters' => request(['sorting', 'search', 'category'])
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        return Inertia::render('Blog/Show', ['post' => $post->load('category', 'author')]);
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
