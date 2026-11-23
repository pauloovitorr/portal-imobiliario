<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Support\Facades\Route;

Route::controller(RegisteredUserController::class)
    ->prefix('register')
    ->group(function () {
        Route::post('/', 'store');
    });