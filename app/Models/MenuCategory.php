<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MenuCategory extends Model
{
    use HasFactory;
    use HasTranslations;
    protected $fillable = [
        'name',
        'order',
        'slug'
    ];
    public $translatable = [
        'name'
    ];

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? false, fn ($query, $search) =>
        $query
            ->whereHas('Products', function ($query) use ($search) {
                $query->where(DB::raw('lower(name)'), 'LIKE', '%' . strtolower($search) . '%')
                    ->orWhere(DB::raw('lower(type)'), 'LIKE', '%' . strtolower($search) . '%')
                    ->orWhere(DB::raw('lower(description)'), 'LIKE', '%' . strtolower($search) . '%');
            })
            ->orWhere(DB::raw('lower(name)'), 'LIKE', '%' . strtolower($search) . '%')
            ->orWhere('slug', 'Like', $search));
    }
    public function products()
    {
        return $this->hasMany(MenuProduct::class, 'category_id', 'id');
    }
}
