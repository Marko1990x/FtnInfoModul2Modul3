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
                <div class="card-header">Ulogovani ste!</div>

                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item list-group-item-primary">This is a primary list group item</li>
                        <li class="list-group-item list-group-item-secondary">This is a secondary list group item</li>
                        <li class="list-group-item list-group-item-success">This is a success list group item</li>
                        <li class="list-group-item list-group-item-danger">This is a danger list group item</li>
                        <li class="list-group-item list-group-item-warning">This is a warning list group item</li>
                        <li class="list-group-item list-group-item-info">This is a info list group item</li>
                        <li class="list-group-item list-group-item-light">This is a light list group item</li>
                        <li class="list-group-item list-group-item-dark">This is a dark list group item</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection