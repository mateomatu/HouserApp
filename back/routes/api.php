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


/**************** NOTIFICATIONS *************/
Route::get('notifications', [
    'uses' => 'api\\NotificationsController@notifications',
    'as' => 'api.notifications',
//    'middleware' => ['auth:sanctum']
]);

Route::put('notifications-read', [
    'uses' => 'api\\NotificationsController@markAsRead',
    'as' => 'api.notifications.read',
//    'middleware' => ['auth:sanctum']
]);

Route::put('notifications-allread', [
    'uses' => 'api\\NotificationsController@markAllAsRead',
    'as' => 'api.notifications.allread',
//    'middleware' => ['auth:sanctum']
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

Route::get('services/{id}', [
    'uses' => 'api\\ServicesController@bringServiceById',
    'as' => 'api.service',
//    'middleware' => ['auth:sanctum']
]);

/** Retorna los Housers por Servicios **/
Route::get('services/houser/{id}', [
    'uses' => 'api\\ServicesController@showHousersByService',
    'as' => 'api.services.id',
//    'middleware' => ['auth:sanctum']
]);


/*************** ORDERS **************/

/** Trae el listado de todas las Ordenes de Trabajo **/
Route::get('orders', [
    'uses' => 'api\\OrdersController@getAllOrders',
    'as' => 'api.orders',
//    'middleware' => ['auth:sanctum']
]);

/** Genera y guarda en DB Orden de Trabajos al Houser **/
Route::post('orders', [
    'uses' => 'api\\OrdersController@requestOrder',
    'as' => 'api.orders.request',
//    'middleware' => ['auth:sanctum']
]);

/** Trae listado de Ordenes de Trabajo Pendientes **/
Route::get('orders/pending', [
    'uses' => 'api\\OrdersController@showPendingOrder',
    'as' => 'api.orders.pending',
//    'middleware' => ['auth:sanctum']
]);

/** Trae listado de Ordenes de Trabajo Completadas **/
Route::get('orders/completed', [
    'uses' => 'api\\OrdersController@showCompletedOrder',
    'as' => 'api.orders.completed',
//    'middleware' => ['auth:sanctum']
]);

