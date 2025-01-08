<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MealResource\Pages;
use App\Models\Meal;
use Filament\Resources\Resource;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class MealResource extends Resource
{
    protected static ?string $model = Meal::class;

    protected static ?string $navigationIcon = 'heroicon-m-cake';

    public static function canCreate(): bool
    {
        return false;
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('donation.donator.donator_name')->label('Donator name')->wrap(),
                TextColumn::make('donation.cause.cause_title')->label('Cause title')->wrap(),
                TextColumn::make('meal_name')->label('Meal name')->wrap(),
                TextColumn::make('meal_donation_amount')->label('Meal donation amount')->wrap(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListMeals::route('/'),
        ];
    }
}
