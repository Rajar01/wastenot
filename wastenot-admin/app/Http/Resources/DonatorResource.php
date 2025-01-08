<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DonatorResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return
            [
                'id' => $this->id,
                'donator_name' => $this->donator_name,
                'donator_type' => ucfirst($this->donator_type),
                'donator_phone_number' => $this->donator_phone_number,
                'photo' => $this->image == null ? null : asset('storage/'.$this->image),
            ];
    }
}
