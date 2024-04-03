<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\RoadmapController;
use App\Http\Controllers\CodingLanguageController;

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

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

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
Route::get('self-roadmap/search/{search}',[RoadmapController::class,'search']);

Route::get('self-roadmap/tag/{tag_name}',[RoadmapController::class,'showByTag']);
Route::get('self-roadmap/tag/{tag}/{id}',[RoadmapController::class,'showByTagId']);
