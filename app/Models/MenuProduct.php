<?php

namespace App\Models;

use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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
    public function cat()
    {
        return $this->belongsTo(MenuCat::class, 'cat_id', 'id');
    }
}
