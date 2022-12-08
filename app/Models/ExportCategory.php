<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ExportCategory extends Model
{
    use HasFactory;
    use HasTranslations;

    protected $fillable = [
        'name',
    ];

    public $translatable = [
        'name'
    ];
    public function products()
    {
        return $this->hasMany(ExportProduct::class, 'category_id', 'id');
    }
    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? false, fn ($query, $search) =>
        $query
            ->whereHas('products', function ($query) use ($search) {
                $query->where(DB::raw('lower(name)'), 'LIKE', '%' . strtolower($search) . '%');
            })
            ->orWhere(DB::raw('lower(name)'), 'LIKE', '%' . strtolower($search) . '%'));
    }
}
