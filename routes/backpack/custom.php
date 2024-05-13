<?php

use Illuminate\Support\Facades\Route;

// --------------------------
// Custom Backpack Routes
// --------------------------
// This route file is loaded automatically by Backpack\Base.
// Routes you generate using Backpack\Generators will be placed here.

Route::group([
    'prefix' => config('backpack.base.route_prefix', 'admin'),
    'middleware' => array_merge(
        (array) config('backpack.base.web_middleware', 'web'),
        (array) config('backpack.base.middleware_key', 'admin')
    ),
    'namespace' => 'App\Http\Controllers\Admin',
], function () { // custom admin routes
    Route::crud('coding-language', 'CodingLanguageCrudController');
    Route::crud('design-type', 'DesignTypeCrudController');
    Route::crud('normal-user', 'NormalUserCrudController');
    Route::crud('posts', 'PostsCrudController');
    Route::crud('roadmap-tag', 'RoadmapTagCrudController');
    Route::crud('roadmaps', 'RoadmapsCrudController');
    Route::crud('tag', 'TagCrudController');
    Route::crud('team', 'TeamCrudController');
    Route::crud('user', 'UserCrudController');
    Route::crud('scheduled-posts', 'ScheduledPostsCrudController');
    Route::crud('vom', 'VomCrudController');
    Route::crud('fom', 'FomCrudController');
}); // this should be the absolute last line of this file