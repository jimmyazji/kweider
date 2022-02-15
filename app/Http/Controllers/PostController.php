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
                    'thumbnail' => $post->getFirstMedia('thumbnail') ? $post->getFirstMedia('thumbnail')->getUrl() : null
                ]),
            'categories' => PostCategory::all()->map(function ($category) {
                return ['name' => $category->name, 'slug' => $category->slug];
            }),
            'filters' => request(['sorting', 'search', 'category'])
        ]);
    }
    public function create()
    {
        return Inertia::render('Blog/Create', ['categories' => PostCategory::all()->map(function ($category) {
            return ['id' => $category->id, 'name' => $category->name];
        })]);
    }
    public function store(Request $request)
    {
        $request->validate([
            '*_title' => 'required',
            '*_excerpt' => 'required',
            '*_body' => 'required',
            'category_id' => 'required',
            'thumbnail' => 'required|mimes:jpg,jpeg,png|max:10240'
        ]);

        $post = Post::create([
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
        $post->addMediaFromRequest('thumbnail')
            ->toMediaCollection('thumbnail');
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
            'created_at' => $post->created_at->diffForHumans(),
            'thumbnail' => $post->getFirstMedia('thumbnail') ? $post->getFirstMedia('thumbnail')->getUrl() : null
        ];
        return Inertia::render('Blog/Show', ['post' => $data]);
    }
    public function edit(Post $post)
    {
        $post->load(['media', 'author', 'category']);
        $data = [
            'id' => $post->id,
            'title' => $post->getTranslations('title'),
            'excerpt' => $post->getTranslations('excerpt'),
            'body' => $post->getTranslations('body'),
            'category_id' => $post->category_id,
            'author' => $post->author->name,
            'thumbnail_url' => $post->getFirstMedia('thumbnail') ? $post->getFirstMedia('thumbnail')->getUrl() : null
        ];
        return Inertia::render('Blog/Edit', ['post' => $data, 'categories' => PostCategory::all()->map(function ($category) {
            return ['id' => $category->id, 'name' => $category->name];
        })]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            '*_title' => 'required',
            '*_excerpt' => 'required',
            '*_body' => 'required',
            'category_id' => 'required',
            'image' => 'nullable|mimes:jpg,jpeg,png|max:10240'
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
        if ($request->thumbnail) {
            $post->addMediaFromRequest('thumbnail')
                ->toMediaCollection('thumbnail');
        }
        return redirect()->route('blog.index')->with('success', 'Post updated successfully.');
    }
    public function destroy($id)
    {
        $post = Post::find($id);
        $post->delete();
        return redirect()->back()->with('success', 'Post deleted successfully.');
    }
}
