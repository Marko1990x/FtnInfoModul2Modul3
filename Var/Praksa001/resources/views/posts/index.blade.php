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
                <div class="card-header"><span class="float-left btn">Index - Postovi</span><span class="float-right btn">  <a href="posts/create" class="btn btn-warning float-right">Dodaj Novi Post</a></div>

                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Body</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($posts as $post)
                            <tr>
                                <td>{{$post->id}}</td>
                                <td>{{$post->title}}</td>
                                <td>{{ str_limit($post->body,80)}}</td>
                                <td><a href="{{ action('PostController@edit', [$post->id]) }}" class="btn btn-outline-warning">Izmeni</a></td>
                                <td>
                                    {!! Form::open(['method'=>'DELETE', 'action'=>['PostController@destroy', $post->id]]) !!}
                                    <div class="form-group">
                                    {!! Form::submit('Obrisi', ['class' => 'btn btn-danger']) !!}
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