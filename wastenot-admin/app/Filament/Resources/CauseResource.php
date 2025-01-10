<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CauseResource\Pages;
use App\Models\Cause;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class CauseResource extends Resource
{
    protected static ?string $model = Cause::class;

    protected static ?string $navigationIcon = 'heroicon-s-globe-asia-australia';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('cause_title')
                    ->label('Cause title')
                    ->required()
                    ->minLength(2)
                    ->maxLength(255)
                    ->columnSpanFull(),
                Textarea::make('cause_desc')->label('Cause description')->required()->rows(10)->columnSpanFull(),
                TextInput::make('cause_geocoordinate')->label('Cause location')->required(),
                TextInput::make('cause_meal_goal_amount')->label('Cause meal goal amount')->required()->numeric()->minValue(1),
                FileUpload::make('image')
                    ->image()
                    ->directory('cause-images')
                    ->label('Photo')->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('cause_title')->wrap(),
                TextColumn::make('cause_desc')->limit(20)->wrap(),
                TextColumn::make('cause_geocoordinate'),
                TextColumn::make('cause_meal_goal_amount')->numeric(),
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
            'index' => Pages\ListCauses::route('/'),
            'create' => Pages\CreateCause::route('/create'),
            'edit' => Pages\EditCause::route('/{record}/edit'),
        ];
    }
}
