<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class ExportProduct extends Model
{
    use HasTranslations;
    use HasFactory;
    public $translatable = ['name', 'description'];
    protected $fillable = [
        'name',
        'description',
        'weight',
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
        return $this->belongsTo(ExportCat::class,'cat_id', 'id');
    }
}
