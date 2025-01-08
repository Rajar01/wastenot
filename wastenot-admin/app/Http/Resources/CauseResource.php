<?php

namespace App\Http\Resources;

use App\Models\Donation;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CauseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'cause_title' => $this->cause_title,
            'cause_desc' => $this->cause_desc,
            'cause_meal_goal_amount' => $this->cause_meal_goal_amount,
            'image' => $this->image == null ? null : asset('storage/'.$this->image),
            'cause_meal_raised_amount' => Donation::with('meals')->where('cause_id', $this->id)->first()->meals->sum('meal_donation_amount'),
        ];
    }
}
