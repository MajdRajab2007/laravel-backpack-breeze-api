<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\RoadmapController;
use App\Http\Controllers\CodingLanguageController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VolunteerController;
use App\Models\User;
use Illuminate\Auth\Events\Registered;

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
Route::put('/users/image/{email}',[ProfileController::class,'editUser']);
Route::put('/users/info/{email}',[ProfileController::class,'edit']);
Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('users/{email}',[RegisteredUserController::class,'get']);

Route::post('/users/read/{email}',[ProfileController::class,'read']);
Route::post('/register', [RegisteredUserController::class, 'store'])
                ->name('register');
                // ->middleware('cors')

Route::post('/login', [AuthenticatedSessionController::class, 'store'])
                ->middleware('guest')
                ->name('login');

Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
                ->middleware('guest')
                ->name('password.email');

Route::post('/reset-password', [NewPasswordController::class, 'store'])
                ->middleware('guest')
                ->name('password.store');

Route::get('/verify-email/{id}/{hash}', VerifyEmailController::class)
                ->middleware(['auth', 'signed', 'throttle:6,1'])
                ->name('verification.verify');

Route::post('/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
                ->middleware(['auth', 'throttle:6,1'])
                ->name('verification.send');

Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
                ->middleware('auth')
                ->name('logout');

Route::put('/users/image/{email}',[ProfileController::class,'editUser']);
Route::put('/users/info/{email}',[ProfileController::class,'edit']);

//Content Routes::
//find by tag name(video / graphic...)
Route::get('posts/tag/{tag_name}',[PostsController::class,'showByTag']);
Route::get('posts/tag/{tag_name}/{id}',[PostsController::class,'showByTagId']);


//get post by tag and coding language
Route::get('posts/tag_lang/{tag_name}/{coding_language_name}',[PostsController::class,'showByTagAndLanguage']);
Route::get('posts/tag_lang/{tag_name}/{coding_language_name}/{id}',[PostsController::class,'showByTagAndLanguageAndId']);

//get post by id
Route::get('posts/{id}',[PostsController::class,'showById']);
//search api
Route::get('posts/search/{search}',[PostsController::class,'search']);

Route::get('languages/',[CodingLanguageController::class,'showCodingLanguages']);

Route::get('posts/tag_design/{tag_name}/{design_type}',[PostsController::class,'showByTagAndDesignType']);
Route::get('posts/tag_design/{tag_name}/{design_type}/{id}',[PostsController::class,'showByTagAndDesignAndId']);

//self roadmap routes
Route::get('self-roadmap/',[RoadmapController::class,'show']);
Route::get('self-roadmap/{id}',[RoadmapController::class,'showById']);
Route::get('self-roadmap/search/{search}',[RoadmapController::class,'search']);
Route::get('self-roadmap/tag/{tag_name}',[RoadmapController::class,'showByTag']);
Route::get('self-roadmap/tag/{tag}/{id}',[RoadmapController::class,'showByTagId']);

//Volunteer of the month routes
Route::get('vof/',[VolunteerController::class,'male']);
Route::get('fom/',[VolunteerController::class,'female']);
