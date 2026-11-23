<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


include __DIR__ . '/api/auth.php';
include __DIR__ . '/api/register.php';
