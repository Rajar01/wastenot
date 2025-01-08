<?php

use App\Http\Resources\CauseResource;
use App\Http\Resources\DonatorResource;
use App\Models\Cause;
use App\Models\Donator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/donators', function (Request $request) {
    return DonatorResource::collection(Donator::paginate(12));
});

Route::get('/causes', function (Request $request) {
    return CauseResource::collection(Cause::paginate(12));
});
