<?php

namespace App\Filament\Widgets;

use App\Models\Cause;
use App\Models\Donator;
use App\Models\Meal;
use Filament\Support\Enums\IconPosition;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

function formatNumber($number)
{
    if ($number >= 1000000) {
        return number_format($number / 1000000, 1).'M';
    } elseif ($number >= 1000) {
        return number_format($number / 1000, 1).'k';
    } else {
        return number_format($number);
    }
}

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Meals Donated', formatNumber(Meal::sum('meal_donation_amount')))
                ->description('Total meals contributed.')
                ->descriptionIcon('heroicon-m-cake', IconPosition::Before)
                ->chart([7, 2, 10, 3, 15, 4, 17])
                ->color('success'),

            Stat::make('Total Donators', formatNumber(Donator::count()))
                ->description('Total individuals who have made donations.')
                ->descriptionIcon('heroicon-o-user-group', IconPosition::Before)
                ->chart([7, 2, 10, 3, 15, 4, 17])
                ->color('info'),

            Stat::make('Total Causes Supported', formatNumber(Cause::count()))
                ->description('Total causes currently being supported.')
                ->descriptionIcon('heroicon-s-globe-asia-australia', IconPosition::Before)
                ->chart([7, 2, 10, 3, 15, 4, 17])
                ->color('warning'),
        ];
    }
}
