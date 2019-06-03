<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Blog;
use App\Photo;
use Carbon\Carbon;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $blogs = Blog::all();
        $blogs = Blog::latest()->get();
        // dd($blogs);
        return view('blogs.index', compact('blogs'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('blogs.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rules = [
            'title' => ['required','min:5', 'max:200'],
            'body' => ['required', 'min:20'],
            'photo_id' => ['mimes:jpeg, jpg, png', 'max:10000']
        ];

        $message = [
            'photo_id.mimes' => 'Ekstenzija ne valja',
            'photo_id.max' =>'Fotografija mora biti manja'
        ];

        
        $this->validate($request, $rules, $message);

        $input = $request->all();

        if($file = $request->file('photo_id')) {
            $name = Carbon::now().'.'.$file->getClientOriginalName();
            $file->move('img', $name);
            $photo = Photo::create(['photo'=> $name, 'title'=>$name]);
            $input['photo_id'] = $photo->id;
        };

        $blog = Blog::create($input);

        return redirect('blogs');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $blog = Blog::findOrFail($id);
        
        return view('blogs.edit', compact('blog'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
        $blog = Blog::findOrFail($id);

        $blog -> update($input);

        return redirect('blogs');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $blog = Blog::findOrFail($id);
        $blog -> delete();

        return redirect('blogs');
    }
}
