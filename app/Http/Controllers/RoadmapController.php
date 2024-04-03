<?php

namespace App\Http\Controllers;

use App\Models\Roadmaps;
use Illuminate\Http\Request;

class RoadmapController extends Controller
{
    public function show(){
        $roadmaps = Roadmaps::all();
        return response()->json($roadmaps);
    }


    public function search(Request $request){
        
        $roadmaps = Roadmaps::where('title','LIKE','%'.$request->search.'%')->get();


        return response()->json($roadmaps);
    }
    public function showByTag(Request $request){

        $posts = Roadmaps::where('roadmap_tag_name',$request->tag_name)->get();


        if ($posts) {

            return response()->json([
                'status' => true,
                'message' => 'Roadmap found successfully.',
                'data' => $posts
            ]);

        } else {

            return response()->json([

                'status' => false,
                'message' => 'Roadmap not found.',

            ]);
    }
}

public function showById(Request $request){
    $posts = Roadmaps::where('id',$request->id)->first();

    return response()->json($posts);
}
}
