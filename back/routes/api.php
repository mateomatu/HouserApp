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



/**************** LOGIN *****************/
Route::prefix('auth')
    ->group(function() {
        /** Loguea Usuario **/
        Route::post('login', 'api\\AuthController@login')
            ->name('auth.login');
        /** Registrar Nuevo Usuario **/
        Route::post('signup', 'api\\AuthController@signUp')
            ->name('auth.signup');
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
//    'middleware' => ['auth:sanctum']
]);

/** Edita el Perfil del Usuario **/
Route::post('users/{id}/profile', [
    'uses' => 'api\\UsersController@editProfile',
    'as' => 'api.users.profile-edit',
//    'middleware' => ['auth:sanctum']
]);

/*************** SERVICES **************/

/** Trae el listado de Servicios **/
Route::get('services', [
    'uses' => 'api\\ServicesController@getAllServices',
    'as' => 'api.service',
//    'middleware' => ['auth:sanctum']
]);

Route::get('service/{id}', [
    'uses' => 'api\\ServicesController@bringServiceById',
    'as' => 'api.service',
//    'middleware' => ['auth:sanctum']
]);

/** Retorna los Housers por Servicios **/
Route::get('services/housers/{id}', [
    'uses' => 'api\\ServicesController@showHousersByService',
    'as' => 'api.services.housers.id',
//    'middleware' => ['auth:sanctum']
]);


/*************** ORDERS **************/
/** Retorna los Orders por Usuario **/
Route::get('orders/users/{id}', [
    'uses' => 'api\\OrdersController@OrdersByUser',
    'as' => 'api.orders.users.id',
//    'middleware' => ['auth:sanctum']
]);

/**
 * MATU, ACORDATE DE PROBAR ESTA TURA, SI INSERTA EN DB CON ID_USER LOGUEADO.
 *  Genera y guarda en DB Orden de Trabajos al Houser **/
Route::post('orders/request', [
    'uses' => 'api\\OrdersController@requestOrder',
    'as' => 'api.orders.request',
//    'middleware' => ['auth:sanctum']
]);

/** 
 * MATU, ACORDATE DE PROBAR ESTA TURA, SI INSERTA EN DB CON ID_USER LOGUEADO.
 * Genera y guarda en DB Orden de Trabajos al Houser **/
Route::post('orders/save', [
    'uses' => 'api\\OrdersController@saveOrder',
    'as' => 'api.orders.save',
//    'middleware' => ['auth:sanctum']
]);

/** Cambia Estado de la Orden de Pedido */
Route::patch('orders/{idorder}/{status}', [
    'uses' => 'api\\OrdersController@updateStatus',
    'as' => 'api.orders.idorder.status',
//    'middleware' => ['auth:sanctum']
]);

/** Cambia a Leído (Fecha) la Orden de Pedido */
Route::patch('notification/read/{id_order}', [
    'uses' => 'api\\OrdersController@updateReadMsg',
    'as' => 'api.notification.read.id_order',
//    'middleware' => ['auth:sanctum']
]);
