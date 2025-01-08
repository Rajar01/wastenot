<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Cause extends Model
{
    /** @use HasFactory<\Database\Factories\CauseFactory> */
    use HasFactory;

    protected $fillable = ['cause_title', 'cause_desc', 'cause_geocoordinate', 'cause_meal_goal_amount', 'image'];

    public function donations(): HasMany
    {
        return $this->hasMany(Donation::class);
    }
}
