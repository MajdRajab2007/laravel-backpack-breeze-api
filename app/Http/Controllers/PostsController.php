<?php

namespace App\Http\Controllers;

use App\Models\Posts;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    public function showByTag(Request $request){

        $posts = Posts::where('tag_name',$request->tag_name)->get();


        if ($posts) {

            return response()->json([
                'status' => true,
                'message' => 'Post found successfully.',
                'data' => $posts
            ]);

        } else {

            return response()->json([

                'status' => false,
                'message' => 'Post not found.',

            ]);
    }
}
public function showByTagId(Request $request){
    $posts = Posts::
    where('tag_name',$request->tag_name)
    ->where('id',$request->id)
    ->get();




    if ($posts) {

        return response()->json([
            'status' => true,
            'message' => 'Post found successfully.',
            'data' => $posts
        ]);

    } else {

        return response()->json([

            'status' => false,
            'message' => 'Post not found.',

        ]);
}
}

public function showByTagAndLanguage(Request $request){

    $posts = Posts::
    where('tag_name',$request->tag_name)
    ->where('coding_language_name',$request->coding_language_name)
    ->get();




    if ($posts) {

        return response()->json([
            'status' => true,
            'message' => 'Post found successfully.',
            'data' => $posts
        ]);

    } else {

        return response()->json([

            'status' => false,
            'message' => 'Post not found.',

        ]);
}
}
public function showByTagAndLanguageAndId(Request $request){

    $posts = Posts::
    where('tag_name',$request->tag_name)
    ->where('coding_language_name',$request->coding_language_name)
    ->where('id',$request->id)
    ->get();




    if ($posts) {

        return response()->json([
            'status' => true,
            'message' => 'Post found successfully.',
            'data' => $posts
        ]);

    } else {

        return response()->json([
            
            'status' => false,
            'message' => 'Post not found.',

        ]);
}
}
public function showById(Request $request){
    $posts = Posts::where('id',$request->id)->first();

    return response()->json($posts);
}

public function search(Request $request){
    $posts = Posts::where('title','LIKE','%'.$request->search.'%')->get();

    return response()->json($posts);
}



public function showByTagAndDesignType(Request $request){

    $posts = Posts::
    where('tag_name',$request->tag_name)
    ->where('design_type_name',$request->design_type)
    ->get();




    if ($posts) {

        return response()->json([
            'status' => true,
            'message' => 'Post found successfully.',
            'data' => $posts
        ]);

    } else {

        return response()->json([

            'status' => false,
            'message' => 'Post not found.',

        ]);
}
}
public function showByTagAndDesignAndId(Request $request){

    $posts = Posts::
    where('tag_name',$request->tag_name)
    ->where('design_type_name',$request->design_type)
    ->where('id',$request->id)
    ->get();




    if ($posts) {

        return response()->json([
            'status' => true,
            'message' => 'Post found successfully.',
            'data' => $posts
        ]);

    } else {

        return response()->json([

            'status' => false,
            'message' => 'Post not found.',

        ]);
}
}
}
