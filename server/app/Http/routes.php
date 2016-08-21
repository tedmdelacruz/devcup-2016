<?php

Route::get('/', function () {
    return view('welcome');
});

Route::get('/orders', 'OrdersController@get');

use App\Laundromat;
Route::get('/laundromats', function () {
    return Laundromat::all();
});

Route::post('/request_pickup', 'OrdersController@create');

Route::post('/request_delivery', function () {
    return ['result' => 'success'];
});

Route::auth();

Route::get('/home', 'HomeController@index');
