<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PostCategory extends Model
{
    use HasFactory;
    use HasTranslations;
    
    protected $fillable = [
        'name',
        'slug'
    ];

    public $translatable = [
        'name'
    ];
    
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
