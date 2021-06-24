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


/**************** NOTIFICACIONES *************/
Route::get('notifications', [
    'uses' => 'api\\NotificationsController@notifications',
    'as' => 'api.notifications',
    'middleware' => ['auth:sanctum']
]);

Route::put('notifications-read', [
    'uses' => 'api\\NotificationsController@markAsRead',
    'as' => 'api.notifications.read',
    'middleware' => ['auth:sanctum']
]);

Route::put('notifications-allread', [
    'uses' => 'api\\NotificationsController@markAllAsRead',
    'as' => 'api.notifications.allread',
    'middleware' => ['auth:sanctum']
]);

Broadcast::routes();

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

/** Trae el listado de todas las Ordenes de Trabajo **/
Route::get('orders', [
    'uses' => 'api\\OrderssController@getAllOrders',
    'as' => 'api.orders',
    'middleware' => ['auth:sanctum']
]);


/** Genera y guarda en DB Orden de Trabajos al Houser **/
Route::post('orders', [
    'uses' => 'api\\OrdersController@requestOrder',
    'as' => 'api.orders.request',
    'middleware' => ['auth:sanctum']
]);

/** Trae listado de Ordenes de Trabajo Pendientes **/
Route::get('orders/pending', [
    'uses' => 'api\\OrdersController@showPendingOrder',
    'as' => 'api.orders.pending',
    'middleware' => ['auth:sanctum']
]);
