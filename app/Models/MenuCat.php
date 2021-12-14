<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuCat extends Model
{
    use HasFactory;

    protected $fillable = [
        'en_name',
        'ar_name',
    ];
    public function products()
    {
        return $this->hasMany(MenuProduct::class, 'cat_id', 'id');
    }
}
