<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;

class CountryController extends Controller
{
    public function getCountries()
    {
        $data = Cache::remember('countries', 3600, function () {
            $response = Http::get('https://restcountries.com/v3.1/all');
            return array_map(function ($country) {
                return [
                    'name' => $country['name']['common'],
                    'flag' => $country['flags']['png']
                ];
            }, $response->json());
        });

        return response()->json($data);
    }
}
