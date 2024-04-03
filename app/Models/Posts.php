<?php

namespace App\Models;

use App\Models\Tag;
use App\Models\Team;
use Illuminate\Database\Eloquent\Model;
use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;


class Posts extends Model
{
    protected $fillable = [
        'title',
        'body',
        'image',
        'tag_name',
        'team_name',
        'coding_language_name',
        'design_type_name',
        'review',
    ];
    use CrudTrait;
    use HasFactory;
    
    public function coding_language(){
        return $this->belongsTo(CodingLanguage::class);
    }
    public function tag(){
        return $this->belongsTo(Tag::class);
    }
    public function team_member(){
        return $this->belongsTo(Team::class);
    }
    public function design_type(){
        return $this->belongsTo(DesignType::class);
    }
}
