<?php

use App\Http\Resources\CauseResource;
use App\Http\Resources\DonatorResource;
use App\Models\Cause;
use App\Models\Donation;
use App\Models\Donator;
use App\Models\Meal;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Route;

Route::get('/donators', function (Request $request) {
    return DonatorResource::collection(Donator::paginate(12));
});

Route::get('/causes', function (Request $request) {
    return CauseResource::collection(Cause::paginate(12));
});

Route::get('/causes/{id}', function (Request $request) {
    return new CauseResource(Cause::find($request->id));
});

Route::post('/causes/{id}/donate', function (Request $request) {
    $donator = Donator::create([
        'donator_name' => $request->donator_name,
        'donator_type' => $request->donator_type,
        'donator_phone_number' => $request->donator_phone_number,
    ]);

    $donation = Donation::create([
        'donation_shipping_type' => $request->donation_shipping_type,
        'donation_address' => $request->donation_address,
        'donator_id' => $donator->id,
        'cause_id' => $request->id,
    ]);

    $meal = Meal::create([
        'meal_name' => $request->meal_name,
        'meal_donation_amount' => $request->meal_donation_amount,
        'donation_id' => $donation->id,
    ]);

    return response(null, Response::HTTP_OK);
});
