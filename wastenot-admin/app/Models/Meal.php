<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Meal extends Model
{
    /** @use HasFactory<\Database\Factories\MealFactory> */
    use HasFactory;

    protected $fillable = ['meal_name', 'meal_donation_amount', 'donation_id'];

    public function donation(): BelongsTo
    {
        return $this->belongsTo(Donation::class);
    }
}
