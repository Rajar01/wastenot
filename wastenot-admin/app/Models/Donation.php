<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Donation extends Model
{
    /** @use HasFactory<\Database\Factories\DonationFactory> */
    use HasFactory;

    protected $fillable = ['donation_shipping_type', 'donation_address', 'donator_id', 'cause_id'];

    public function meals(): HasMany
    {
        return $this->hasMany(Meal::class);
    }

    public function donator(): BelongsTo
    {
        return $this->belongsTo(Donator::class);
    }

    public function cause(): BelongsTo
    {
        return $this->belongsTo(Cause::class);
    }
}
