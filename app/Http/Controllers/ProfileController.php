<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ProfileUpdateRequest;
use App\Models\NormalUser;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class ProfileController extends Controller
{
    
    /**
     * Display the user's profile form.
     */
    

    public function editUser(Request $request)
    {
        // Retrieve the authenticated user
        $user = NormalUser::where('email', $request->email)->first();

        // Validate the incoming request
        $request->validate([
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Check if a new image file was uploaded
        if ($request->hasFile('image')) {
            // Get the new image file
            $image = $request->file('image');

            // Generate a unique filename for the new image
            $filename = uniqid() . '.' . $image->getClientOriginalExtension();

            // Move the new image file to the public/storage directory
            $image->storeAs('public/storage', $filename);

            // Update the user's image field with the new filename
            $user->image = $filename;
        }

        // Save the updated user to the database
        $user->save();

        // Return a response indicating success
        return response()->json([
            'status' => true,
            'message' => 'User updated successfully.',
        ]);
    }

    // /**
    //  * Update the user's profile information.
    //  */
    // public function update(ProfileUpdateRequest $request): RedirectResponse
    // {
    //     $request->user()->fill($request->validated());

    //     if ($request->user()->isDirty('email')) {
    //         $request->user()->email_verified_at = null;
    //     }

    //     $request->user()->save();

    //     return Redirect::route('profile.edit');
    // }

    public function edit(Request $request) {
        $user = User::where('email',$request->email)->first();
        $incomingFields = $request->about;
        $user->about = $incomingFields;
        $user->save();
    }
    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    public function read(Request $request){
        $user = NormalUser::where('email',$request->email)->get()->first();
        $array = $user['read_articles'];
        $array[0] = '';
        $input = $request->input;
        // var_dump($input);
        array_push($array,$input);
        $user->read_articles = $array; 
        $user->save();
    }
}
