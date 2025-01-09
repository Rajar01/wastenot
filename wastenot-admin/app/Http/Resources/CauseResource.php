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
        $cause_meal_raised_amount = function () {
            $donations = Donation::with('meals')->where('cause_id', $this->id)->get();
            $cause_meal_raised_amount = 0;

            foreach ($donations as $donation) {
                $cause_meal_raised_amount += $donation->meals()->sum('meal_donation_amount');
            }

            return $cause_meal_raised_amount;
        };

        return [
            'id' => $this->id,
            'cause_title' => $this->cause_title,
            'cause_desc' => $this->cause_desc,
            'cause_geocoordinate' => $this->cause_geocoordinate,
            'cause_meal_goal_amount' => $this->cause_meal_goal_amount,
            'photo' => $this->image == null ? null : asset('storage/'.$this->image),
            'cause_meal_raised_amount' => $cause_meal_raised_amount(),
        ];
    }
}
