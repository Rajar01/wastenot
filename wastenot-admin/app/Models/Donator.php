<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Donator extends Model
{
    /** @use HasFactory<\Database\Factories\DonatorFactory> */
    use HasFactory;

    protected $fillable = ['donator_name', 'donator_type', 'donator_phone_number', 'image'];

    public function donations(): HasMany
    {
        return $this->hasMany(Donation::class);
    }
}
