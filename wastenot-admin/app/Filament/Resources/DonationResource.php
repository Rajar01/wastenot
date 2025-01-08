<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DonationResource\Pages;
use App\Models\Donation;
use Filament\Resources\Resource;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class DonationResource extends Resource
{
    protected static ?string $model = Donation::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function canCreate(): bool
    {
        return false;
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('donator.donator_name')->label('Donator name'),
                TextColumn::make('cause.cause_title')->label('Cause title')->wrap(),
                TextColumn::make('created_at')->label('Date of donation')->date(),
                TextColumn::make('donation_shipping_type')->label('Shipping type')
                    ->formatStateUsing(fn (string $state): string => ucfirst($state))
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'self-delivered' => 'success',
                        'pickup' => 'info',
                    })
                    ->icon(fn (string $state): string => match ($state) {
                        'self-delivered' => 'heroicon-s-user',
                        'pickup' => 'heroicon-s-truck',
                    }),
                TextColumn::make('donation_address')->label('Donation address')->default('N/A'),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListDonations::route('/'),
        ];
    }
}
