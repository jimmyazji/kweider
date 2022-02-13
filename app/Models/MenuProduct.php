<?php

namespace App\Models;

use Spatie\MediaLibrary\HasMedia;
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
        'cat_id',
        'description',
    ];
    public $translatable = [
        'name',
        'type',
        'description'
    ];

    protected $with = ['media'];
    public function category()
    {
        return $this->belongsTo(MenuCat::class, 'cat_id', 'id');
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
