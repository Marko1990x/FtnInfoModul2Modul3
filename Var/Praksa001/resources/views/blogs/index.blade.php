@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-2">
            <div class="card text-white bg-dark">
                <div class="card-header">Admin Meni:</div>

                <div class="card-body ">
                    <ul class="nav flex-column ">
                        <li class="nav-item">
                            <a class="nav-link text-light" href="home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="blogs">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="posts">Posts</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-10">
            <div class="card">
                <div class="card-header"><span class="float-left btn">Index - Blogovi</span> <a href="blogs/create" class="btn btn-warning float-right">Dodaj Novi Blog Post</a></div>

                <div class="card-body">


                    <table class="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Body</th>
                                <th>Image</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($blogs as $blog)
                            <tr>
                                <td>{{$blog->id}}</td>
                                <td>{{$blog->title}}</td>
                                <td>{{ str_limit($blog->body, 50)}}</td>
                                <td><img src='/img/{{$blog->photos ? $blog->photos->photo : ''}}'></td>
                                <td><a href="{{ action('BlogController@edit', [$blog->id]) }}" class="btn btn-outline-warning">Izmeni</a></td>
                                <td>
                                    {!! Form::open(['method' => 'DELETE', 'action' => ['BlogController@destroy', $blog->id]]) !!}
                                    <div class="form-group">
                                        {!! Form::submit('Obrisi', ['class'=>'btn btn-danger']) !!}
                                    </div>
                                    {!! Form::close() !!}
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>


                </div>
            </div>
        </div>
    </div>
</div>
@endsection