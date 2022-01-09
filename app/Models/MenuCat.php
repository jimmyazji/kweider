<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;
use Illuminate\Contracts\Session\Session;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MenuCat extends Model
{
    use HasFactory;
    use HasTranslations;
    protected $fillable = [
        'name',
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
            ->orWhere(DB::raw('lower(name)'), 'LIKE', '%' . strtolower($search) . '%'));
    }
    public function products()
    {
        return $this->hasMany(MenuProduct::class, 'cat_id', 'id');
    }
}
