<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Users;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    /**
     * log-in user to the site.
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = $request->only(['email', 'password']);

        if(!auth()->attempt($credentials)){
            return response()->json([
               'success' => false,
            ]);
        }


        /** @var Users $user */
        $users = auth()->user();
        $users->tokens()->delete();
        $token = $users->createToken($users->email);
        return response()->json([
            'success' => true,
            'data' => array(
                'id_user' => $users->id_user,
                'email' => $users->email,
                'token' => $token->plainTextToken
            )
        ]);
    }

    /**
     * Do Logout User session and delete his token.
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'success' => true
        ]);
    }


}
