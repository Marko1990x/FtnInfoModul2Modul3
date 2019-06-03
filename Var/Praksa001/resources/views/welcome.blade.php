@extends('layouts.app')

@section('content')
<div class="wrapperHead">

    <div class="container p-0">
        <div class="head"></div>
    </div>
</div>

<div class="wrapperBody">
    <div class="body container p-1">
            @foreach ($lists as $item)
            <div class="contentItem">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="{{ asset('img/01.jpg') }}" class="img-thumbnail">
                        </div>
                        <div class="col-md-8">
                        <h3>{{$item->title}}</h3>
                        <p>{{$item->body}}</p>
                        </div>
                    </div>
                </div>   
            @endforeach
            {{ $lists->links() }}
        {{-- <div class="contentItem">
            <div class="row">
                <div class="col-md-4">
                    <img src="{{ asset('img/01.jpg') }}" class="img-thumbnail">
                </div>
                <div class="col-md-8">
                    <h3>Prvi naslov</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae obcaecati perferendis veritatis
                        perspiciatis quia voluptatem deleniti cupiditate iure, dignissimos, odit enim exercitationem
                        reiciendis saepe facilis id sequi animi asperiores voluptatibus.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae obcaecati perferendis veritatis
                        perspiciatis quia voluptatem deleniti cupiditate iure, dignissimos, odit enim exercitationem
                        reiciendis saepe facilis id sequi animi asperiores voluptatibus.</p>
                </div>
            </div>
        </div>
        <div class="contentItem">
            <div class="row">
                <div class="col-md-4">
                    <img src="{{ asset('img/02.jpg') }}" class="img-thumbnail">
                </div>
                <div class="col-md-8">
                    <h3>Prvi naslov</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae obcaecati perferendis veritatis
                        perspiciatis quia voluptatem deleniti cupiditate iure, dignissimos, odit enim exercitationem
                        reiciendis saepe facilis id sequi animi asperiores voluptatibus.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae obcaecati perferendis veritatis
                        perspiciatis quia voluptatem deleniti cupiditate iure, dignissimos, odit enim exercitationem
                        reiciendis saepe facilis id sequi animi asperiores voluptatibus.</p>
                </div>
            </div>
        </div>
        <div class="contentItem">
            <div class="row">
                <div class="col-md-4">
                    <img src="{{ asset('img/03.jpg') }}" class="img-thumbnail">
                </div>
                <div class="col-md-8">
                    <h3>Prvi naslov</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae obcaecati perferendis veritatis
                        perspiciatis quia voluptatem deleniti cupiditate iure, dignissimos, odit enim exercitationem
                        reiciendis saepe facilis id sequi animi asperiores voluptatibus.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae obcaecati perferendis veritatis
                        perspiciatis quia voluptatem deleniti cupiditate iure, dignissimos, odit enim exercitationem
                        reiciendis saepe facilis id sequi animi asperiores voluptatibus.</p>
                </div>
            </div>
        </div>
        <div class="contentItem">
            <div class="row">
                <div class="col-md-4">
                    <img src="{{ asset('img/04.jpg') }}" class="img-thumbnail">
                </div>
                <div class="col-md-8">
                    <h3>Prvi naslov</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae obcaecati perferendis veritatis
                        perspiciatis quia voluptatem deleniti cupiditate iure, dignissimos, odit enim exercitationem
                        reiciendis saepe facilis id sequi animi asperiores voluptatibus.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae obcaecati perferendis veritatis
                        perspiciatis quia voluptatem deleniti cupiditate iure, dignissimos, odit enim exercitationem
                        reiciendis saepe facilis id sequi animi asperiores voluptatibus.</p>
                </div>
            </div>
        </div>
        <div class="contentItem">
            <div class="row">
                <div class="col-md-4">
                    <img src="{{ asset('img/05.jpg') }}" class="img-thumbnail">
                </div>
                <div class="col-md-8">
                    <h3>Prvi naslov</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae obcaecati perferendis veritatis
                        perspiciatis quia voluptatem deleniti cupiditate iure, dignissimos, odit enim exercitationem
                        reiciendis saepe facilis id sequi animi asperiores voluptatibus.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae obcaecati perferendis veritatis
                        perspiciatis quia voluptatem deleniti cupiditate iure, dignissimos, odit enim exercitationem
                        reiciendis saepe facilis id sequi animi asperiores voluptatibus.</p>
                </div>
            </div>
        </div>
        <div class="contentItem">
            <div class="row">
                <div class="col-md-4">
                    <img src="{{ asset('img/06.jpg') }}" class="img-thumbnail">
                </div>
                <div class="col-md-8">
                    <h3>Prvi naslov</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae obcaecati perferendis veritatis
                        perspiciatis quia voluptatem deleniti cupiditate iure, dignissimos, odit enim exercitationem
                        reiciendis saepe facilis id sequi animi asperiores voluptatibus.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae obcaecati perferendis veritatis
                        perspiciatis quia voluptatem deleniti cupiditate iure, dignissimos, odit enim exercitationem
                        reiciendis saepe facilis id sequi animi asperiores voluptatibus.</p>
                </div>
            </div>
        </div> --}}
    </div>
</div>



@endsection