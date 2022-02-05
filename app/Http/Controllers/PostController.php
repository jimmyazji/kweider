<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\PostCategory;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PostController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Blog/Index', [
            'posts' => Post::with('author', 'category')
                ->filter(request(['search', 'category', 'sorting']))
                ->orderBy('created_at', $request->sorting ?? 'desc')
                ->paginate(9)
                ->withQueryString()
                ->through(fn ($post) => [
                    'id' => $post->id,
                    'title' => $post->title,
                    'excerpt' => $post->excerpt,
                    'slug' => $post->slug,
                    'body' => $post->body,
                    'created_at' => $post->created_at->diffForHumans(),
                    'updated_at' =>  $post->updated_at ? $post->updated_at->diffForHumans() : null,
                    'published_at' => $post->published_at ? $post->published_at->diffForHumans() : null,
                    'category' => [
                        'name' => $post->category->name,
                        'slug' => $post->category->slug
                    ],
                    'author' => $post->author->name,
                ]),
            'categories' => PostCategory::all()->map(function ($cat) {
                return ['name' => $cat->name, 'slug' => $cat->slug];
            }),
            'filters' => request(['sorting', 'search', 'category'])
        ]);
    }
    public function create()
    {
        return Inertia::render('Blog/Create', ['categories' => PostCategory::all()->map(function ($cat) {
            return ['id' => $cat->id, 'name' => $cat->name];
        })]);
    }
    public function store(Request $request)
    {
        $request->validate([
            '*_title' => 'required',
            '*_excerpt' => 'required',
            '*_body' => 'required',
            'category_id' => 'required',
        ]);

        Post::create([
            'title' => [
                'en' => $request->en_title,
                'ar' => $request->ar_title
            ],
            'slug' => Str::slug($request->en_title),
            'excerpt' => [
                'en' => $request->en_excerpt,
                'ar' => $request->ar_excerpt
            ],
            'body' => [
                'en' => $request->en_body,
                'ar' => $request->ar_body
            ],
            'category_id' => $request->category_id,
            'user_id' => auth()->id(),
        ]);
        return redirect()->route('blog.index')->with('success', 'Post Created Successfully.');
    }
    public function show(Post $post)
    {
        $post->load('category', 'author');
        $data = [
            'title' => $post->title,
            'excerpt' => $post->excerpt,
            'body' => $post->body,
            'category' => $post->category->name,
            'author' => $post->author->name,
            'created_at' => $post->created_at->diffForHumans()
        ];
        return Inertia::render('Blog/Show', ['post' => $data]);
    }
    public function edit(Post $post)
    {
        return Inertia::render('Blog/Edit', ['post' => $post, 'categories' => PostCategory::all()->map(function ($cat) {
            return ['id' => $cat->id, 'name' => $cat->name];
        })]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            '*_title' => 'required',
            '*_excerpt' => 'required',
            '*_body' => 'required',
            'category_id' => 'required',
        ]);
        $post = Post::find($id);
        $post->update([
            'title' => [
                'en' => $request->en_title,
                'ar' => $request->ar_title
            ],
            'excerpt' => [
                'en' => $request->en_excerpt,
                'ar' => $request->ar_excerpt
            ],
            'body' => [
                'en' => $request->en_body,
                'ar' => $request->ar_body
            ],
            'category_id' => $request->category_id,
        ]);
        return redirect()->route('blog.index')->with('success', 'Post updated successfully.');
    }
    public function destroy($id)
    {
        $post = Post::find($id);
        $post->delete();
        return redirect()->back()->with('success', 'Post deleted successfully.');
    }
}
