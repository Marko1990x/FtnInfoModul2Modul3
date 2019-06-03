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
                            <a class="nav-link text-light" href="{{ asset ('/home')}}">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="{{ asset ('/blogs')}}">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="{{ asset ('/posts')}}">Posts</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">Strana - Edit Blog:</button></div>

                <div class="card-body">
                    <div class="col-md-6">
                        {!! Form::model($blog, ['method' => 'PATCH', 'action' => ['BlogController@update', $blog->id]]) !!}
                        <div class="form-group">
                            {!! Form::label('title', 'Title') !!}
                            {!! Form::text('title', null, ['class' => 'form-control']) !!}
                        </div>
                        <div class="form-group">
                            {!! Form::label('body', 'Body') !!}
                            {!! Form::textarea('body', null, ['class' => 'form-control']) !!}
                        </div>
                        <div class="form-group">
                            {!! Form::submit('Izmeni', ['class' => 'btn btn-danger']) !!}
                        </div>
                        {!! Form::close() !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection