<?php

namespace App\Http\Controllers;

use App\Models\Fom;
use App\Models\Vom;
use Illuminate\Http\Request;

class VolunteerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function male()
    {
    $volunteer = Vom::all();
    return response()->json($volunteer[sizeof($volunteer) -1]);
    }

    public function female(){
        $volunteer = Fom::all();
        return response()->json($volunteer[sizeof($volunteer) -1]);
    }

}
