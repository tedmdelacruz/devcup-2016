<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/orders', function () {
    return [
        [
            'id' => 1,
            'status' => 'Ready for pickup',
            'created' => null,
            'weight' => '1.2 kg',
            'cost' => 'PHP 128.00',
            'remarks' => '',
            'laundromat' => [
                'id' => 1,
                'name' => 'Lavandera Ko',
            ],
        ],
        [
            'id' => 2,
            'status' => 'Awaiting confirmation',
            'created' => null,
            'weight' => '2.1 kg',
            'cost' => 'PHP 212.00',
            'remarks' => 'Dry clean',
            'laundromat' => [
                'id' => 1,
                'name' => 'SUDS Laundry',
            ],
        ],
        [
            'id' => 3,
            'status' => 'Awaiting confirmation',
            'created' => null,
            'weight' => '1.3 kg',
            'cost' => 'PHP 132.00',
            'remarks' => '',
            'laundromat' => [
                'id' => 1,
                'name' => 'Lavandera Ko',
            ],
        ]
    ];
});

Route::get('/laundromats', function () {
    return [
        [
            'id' => 1,
            'name' => 'Lavandera Ko',
            'phone' => '+63 998 765 4321',
            'business_hours' => '7AM to 10PM',
            'address' => '123 Test Building, Test Street, Test City',
        ],
        [
            'id' => 2,
            'name' => 'SUDS Laundry',
            'phone' => '+63 998 765 4321',
            'business_hours' => '7AM to 10PM',
            'address' => '123 Test Building, Test Street, Test City',
        ],
    ];
});

Route::post('/request_pickup', function () {
    return ['result' => 'success'];
});
