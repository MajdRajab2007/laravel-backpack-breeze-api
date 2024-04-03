<?php

namespace App\Http\Controllers;

use App\Models\CodingLanguage;
use Illuminate\Http\Request;

class CodingLanguageController extends Controller
{
    public function showCodingLanguages(Request $request){
        $languages = CodingLanguage::all();

        return response()->json($languages);
    }
}
