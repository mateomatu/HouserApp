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
        /** Loguea Usuario **/
        Route::post('login', 'api\\AuthController@login')
            ->name('auth.login');
        /** Registrar Nuevo Usuario **/
        Route::post('signup', 'api\\AuthController@signUp')
            ->name('auth.signup')
            ->middleware(['auth:sanctum']);
        /** Desloguea Usuario **/
        Route::post('logout', 'api\\AuthController@logout')
            ->name('auth.logout')
            ->middleware(['auth:sanctum']);
    });

/**************** USERS PROFILE *****************/

/** Trae el Perfil del Usuario **/
Route::get('users/{id}', [
    'uses' => 'api\\UsersController@showProfile',
    'as' => 'api.users.profile',
    'middleware' => ['auth:sanctum']
]);

/** Edita el Perfil del Usuario **/
Route::post('users/{id}/profile', [
    'uses' => 'api\\UsersController@editProfile',
    'as' => 'api.users.profile-edit',
    'middleware' => ['auth:sanctum']
]);

/*************** SERVICES **************/

/** Trae el listado de Servicios **/
Route::get('services', [
    'uses' => 'api\\ServicesController@getAllServices',
    'as' => 'api.service'
]);

/** Trae servicio específico **/
Route::get('service/{id}', [
    'uses' => 'api\\ServicesController@bringServiceById',
    'as' => 'api.service'
]);

/** Retorna los Housers por Servicios **/
Route::get('services/housers/{id}', [
    'uses' => 'api\\ServicesController@showHousersByService',
    'as' => 'api.services.id'
]);

// Servicio Buscador dado de baja desde Back, se muestra/implementa desde Front.
//Route::get('service/search', [
//    'uses' => 'api\\ServicesController@searchService',
//    'as' => 'api.services.search'
//]);


/*************** WORKS **************/

/** Trae el listado de todas las Contrataciones  **/
Route::get('works', [
    'uses' => 'api\\WorksController@getAllWorks',
    'as' => 'api.works',
    'middleware' => ['auth:sanctum']
]);

/** Trae listado de Contrataciones Pendientes **/
Route::get('workspending', [
    'uses' => 'api\\WorksController@showPendingWork',
    'as' => 'api.works.pending',
    'middleware' => ['auth:sanctum']
]);

/** Genera y guarda en DB Contratación al Houser **/
Route::post('works', [
    'uses' => 'api\\WorksController@requestWork',
    'as' => 'api.works.request',
    'middleware' => ['auth:sanctum']
]);
