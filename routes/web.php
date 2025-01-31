<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    try {
        return inertia('Home');
    } catch (\Exception $e) {
        dd($e->getMessage());  // This will dump the error message
    }
});