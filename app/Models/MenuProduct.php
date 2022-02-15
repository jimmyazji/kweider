<?php

namespace App\Models;

use Spatie\MediaLibrary\HasMedia;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class MenuProduct extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    use HasTranslations;
    protected $fillable = [
        'name',
        'type',
        'category_id',
        'description',
    ];
    public $translatable = [
        'name',
        'type',
        'description'
    ];

    protected $with = ['media'];

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? false, fn ($query, $search) =>
        $query->where(fn ($query) => $query
            ->where(DB::raw('lower(name)'), 'LIKE', '%' . strtolower($search) . '%')
            ->orWhere(DB::raw('lower(type)'), 'LIKE', '%' . strtolower($search) . '%')
            ->orWhere(DB::raw('lower(description)'), 'LIKE', '%' . strtolower($search) . '%')
            ->orWherehas('category', fn ($query) =>
            $query->where(DB::raw('lower(name)'), 'LIKE', '%' . strtolower($search) . '%'))));
    }
    public function category()
    {
        return $this->belongsTo(MenuCategory::class, 'category_id', 'id');
    }
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('menu')->singleFile();
    }
    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('menu')->crop('crop-center', 450, 400)->keepOriginalImageFormat();
    }
}
