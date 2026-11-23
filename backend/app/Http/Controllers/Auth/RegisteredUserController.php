<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisteredUserRequest;


class RegisteredUserController extends Controller
{
    public function store(RegisteredUserRequest $request)
    {
        return response()->json(['message' => 'caiu aqui'], 200);
    }
}
