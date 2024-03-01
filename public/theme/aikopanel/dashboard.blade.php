<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="/theme/{{$theme}}/assets/components.chunk.css?v={{$version}}">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="/theme/{{$theme}}/assets/umi.css?v={{$version}}">
    @if (file_exists(public_path("/theme/{{$theme}}/assets/custom.css")))
        <link rel="stylesheet" href="/theme/{{$theme}}/assets/custom.css?v={{$version}}">
    @endif
    <meta charset="utf-8">
    <meta property="og:type" content="website">
    <meta property="og:image" content="{{$logo}}">
    <link rel="icon" href='{{$logo}}'>
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no">
    @php ($colors = [
        'darkblue' => '#3b5998',
        'black' => '#343a40',
        'default' => '#0665d0',
        'green' => '#319795'
    ])
    <meta name="theme-color" content="{{$colors[$theme_config['theme_color']]}}">

    <title>{{$title}}</title>
    <!-- <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,400i,600,700"> -->
    <script>window.routerBase = "/";</script>
    <script>
        window.settings = {
            title: '{{$title}}',
            assets_path: '/theme/{{$theme}}/assets',
            theme: {
                sidebar: '{{$theme_config['theme_sidebar']}}',
                header: '{{$theme_config['theme_header']}}',
                color: '{{$theme_config['theme_color']}}',
            },
            version: '{{$version}}',
            background_url: '{{$background_url}}',
            description: '{{$description}}',
            i18n: [
                'vi-VN',
                'en-US',
                'zh-CN',
                'ja-JP',
                'ko-KR',
                'zh-TW',
                'fa-IR'
            ],
            logo: '{{$logo}}'
        }
    </script>
    <script src="/theme/{{$theme}}/assets/i18n/zh-CN.js?v={{$version}}"></script>
    <script src="/theme/{{$theme}}/assets/i18n/zh-TW.js?v={{$version}}"></script>
    <script src="/theme/{{$theme}}/assets/i18n/en-US.js?v={{$version}}"></script>
    <script src="/theme/{{$theme}}/assets/i18n/ja-JP.js?v={{$version}}"></script>
    <script src="/theme/{{$theme}}/assets/i18n/vi-VN.js?v={{$version}}"></script>
    <script src="/theme/{{$theme}}/assets/i18n/ko-KR.js?v={{$version}}"></script>
    <script src="/theme/{{$theme}}/assets/i18n/fa-IR.js?v={{$version}}"></script>
</head>

<body>
<div id="root"></div>
{!! $custom_html !!}
<script src="/theme/{{$theme}}/assets/vendors.async.js?v={{$version}}"></script>
<script src="/theme/{{$theme}}/assets/components.async.js?v={{$version}}"></script>
<script src="/theme/{{$theme}}/assets/umi.js?v={{$version}}"></script>
@if (file_exists(public_path("/theme/{$theme}/assets/custom.js")))
    <script src="/theme/{{$theme}}/assets/custom.js?v={{$version}}"></script>
@endif
</body>

</html>
