<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DonatorResource\Pages;
use App\Models\Donator;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Table;

class DonatorResource extends Resource
{
    protected static ?string $model = Donator::class;

    protected static ?string $navigationIcon = 'heroicon-s-user-group';

    public static function canCreate(): bool
    {
        return false;
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('donator_name')->label('Donator name')->columnSpanFull()
                    ->required()
                    ->maxLength(255),
                Select::make('donator_type')
                    ->required()
                    ->options([
                        'individual' => 'Individual',
                        'company' => 'Company',
                        'restaurant' => 'Restaurant',
                        'others' => 'Others',
                    ]),
                TextInput::make('donator_phone_number')->label('Donator phone number')
                    ->tel()
                    ->maxLength(255),
                FileUpload::make('image')
                    ->image()
                    ->directory('donator-images')
                    ->label('Photo')->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('donator_name')->label('Donator name'),
                Tables\Columns\TextColumn::make('donator_type')->label('Donator type')
                    ->formatStateUsing(fn (string $state): string => ucfirst($state))
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'individual' => 'success',
                        'company' => 'info',
                        'restaurant' => 'warning',
                        'others' => 'gray',
                    })
                    ->icon(fn (string $state): string => match ($state) {
                        'individual' => 'heroicon-s-user',
                        'company' => 'heroicon-m-building-office',
                        'restaurant' => 'heroicon-m-building-storefront',
                        'others' => 'heroicon-m-ellipsis-horizontal-circle',
                    }),
                Tables\Columns\TextColumn::make('donator_phone_number')->label('Donator Phone Number')->default('N/A'),
                ImageColumn::make('image')->label('Photo')->square()->defaultImageUrl(url('https://placehold.co/600x400?text=No+Photo&font=roboto'))->size(50),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListDonators::route('/'),
            'create' => Pages\CreateDonator::route('/create'),
            'edit' => Pages\EditDonator::route('/{record}/edit'),
        ];
    }
}
