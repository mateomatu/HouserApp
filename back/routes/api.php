<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/****************  LOGIN *****************/
Route::prefix('auth')
    ->group(function() {
        Route::post('login', 'api\\AuthController@login')
            ->name('auth.login');
        Route::post('logout', 'api\\AuthController@logout')
            ->name('auth.logout');
    });

/**************** USERS PROFILE *****************/
Route::get('users/{id}', [
    'uses' => 'api\\UsersController@showProfile',
    'as' => 'api.users.profile',
//    'middleware' => ['auth:sanctum']
]);

Route::get('users/{id}/profile', [
    'uses' => 'api\\UsersController@showEditProfile',
    'as' => 'api.users.profile-form',
//    'middleware' => ['auth:sanctum']
]);

Route::post('users/{id}/profile', [
    'uses' => 'api\\UsersController@editProfile',
    'as' => 'api.users.profile-edit',
//    'middleware' => ['auth:sanctum']
]);

/*************** SERVICES **************/

Route::get('service', [
    'uses' => 'api\\ServicesController@getAllServices',
    'as' => 'api.service'
]);

Route::get('service/{id}', [
    'uses' => 'api\\ServicesController@getIDService',
    'as' => 'api.services.id'
]);

Route::get('service/search', [
    'uses' => 'api\\ServicesController@searchService',
    'as' => 'api.services.search'
]);
