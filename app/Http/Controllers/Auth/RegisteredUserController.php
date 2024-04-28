<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Validation\Rules\Password;
class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {

        $incomingFields = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'lName' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required',Password::defaults()],
            'gender' => ['required', 'string', 'max:255'],
            'status' => ['required', 'string', 'max:255'],
            'date' => ['required', 'string', 'max:255'],
        ]);

        $user = User::create($incomingFields);

        event(new Registered($user));

        // Auth::login($user);
        return response()->json($user);

    }

    public function get(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if ($user) {
            return response()->json([
                'status' => true,
                'message' => 'User found successfully.',
                'data' => $user
            ]);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'User not found.',
            ]);
        }
    }

}
