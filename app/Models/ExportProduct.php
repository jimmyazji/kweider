<?php

namespace App\Models;

use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class ExportProduct extends Model implements HasMedia
{
    use HasTranslations;
    use HasFactory;
    use InteractsWithMedia;
    public $translatable = ['name', 'description'];
    protected $fillable = [
        'name',
        'description',
        'weight',
        'quantity',
        'cat_id',
        'box_w_c',
        'box_w_a',
        'box_l',
        'box_w',
        'box_h',
        'box_q',
        'pack_w_c',
        'pack_w_a',
        'pack_l',
        'pack_w',
        'pack_h',
        'pack_q',
    ];
    public function category()
    {
        return $this->belongsTo(ExportCat::class, 'cat_id', 'id');
    }
    public function registerMediaConversions(?Media $media = null): void
    {
        $this->addMediaConversion('export')->crop(['crop-center', 450, 400]);
    }
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('export')->onlyKeepLatest(4);
    }
}
