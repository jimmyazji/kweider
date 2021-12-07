<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class MenuProduct extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    protected $filable = [
        'en_name',
        'ar_name',
        'en_type',
        'ar_type',
        'cat_id',
        'img',
        'en_description',
        'ar_description',
    ];
    public function cat()
    {
        return $this->belongsTo(MenuCat::class, 'cat_id', 'id');
    }
}
