<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class EncryptCookies
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Perform any logic before sending the response

        // Continue processing the request
        $response = $next($request);

        // Set cookies on the response
        $response->cookie('adham-cookie', 'cookie_adham');

        // Return the response with cookies set
        return $response;
    }
}
