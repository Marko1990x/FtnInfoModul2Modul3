<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('onama', function () {
    return view('onama');
});
Route::get('portfolio', function () {
    return view('portfolio');
});
Route::get('kontakt', function () {
    return view('kontakt');
});

Route::resource('/', 'ListController');

Auth::routes();



Route::group(['middleware' => ['auth']], function(){
    Route::get('home', 'HomeController@index');
    Route::resource('blogs', 'BlogController');
    Route::resource('posts', 'PostController');
});