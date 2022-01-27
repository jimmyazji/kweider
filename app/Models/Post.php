<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'category_id',
        'user_id',
        'excerpt',
        'body',
    ];
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->diffForHumans();
    }
    public function category()
    {
        return $this->belongsTo(PostCategory::class);
    }
    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? false, fn ($query, $search) =>
        $query->where(fn ($query) => $query->where('title', 'LIKE', "%{$search}%")
            ->orWhere('excerpt', 'LIKE', "%{$search}%")
            ->orWhere('body', 'LIKE', "%{$search}%")))
            ->when($filters['category'] ?? false, fn ($query, $category) =>
            $query->whereHas(
                'category',
                fn ($query) => $query->where('slug', $category)
            ));
    }
    public function author()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
