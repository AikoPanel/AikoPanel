
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta property="og:type" content="website">
    <meta property="og:image" content="{{$logo}}">
    <link rel="icon" href='{{$logo}}'>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <title>{{$title}}</title>
    <script type="module" crossorigin src="/theme/aikocute/assets/index-33033ac6.js"></script>
  <link rel="modulepreload" crossorigin href="/theme/aikocute/assets/vendor-894d6afa.js">
  <link rel="stylesheet" href="/theme/aikocute/assets/index-a7f18825.css">
  <script type="module">try{import.meta.url;import("_").catch(()=>1);}catch(e){}window.__vite_is_modern_browser=true;</script>
  <script type="module">!function(){if(window.__vite_is_modern_browser)return;console.warn("vite: loading legacy build because dynamic import or import.meta.url is unsupported, syntax error above should be ignored");var e=document.getElementById("vite-legacy-polyfill"),n=document.createElement("script");n.src=e.src,n.onload=function(){System.import(document.getElementById('vite-legacy-entry').getAttribute('data-src'))},document.body.appendChild(n)}();</script>
    <script>
      window.settings = {
        googleAnalyticsMeasurementId: '{{ $theme_config['google_analytics_measurement_id'] }}',
        defaultPath: "/",
        fontFamily: '{{ $theme_config['font_family'] }}',
        miniDrawer: '{{ $theme_config['mini_drawer'] }}' === "true",
        container: '{{ $theme_config['container'] }}' === "true",
        themeDirection: '{{ $theme_config['theme_direction'] }}' === "ltr" ? "ltr" : "rtl",
        title: '{{ $title }}',
        title_split: " - ",
        background_url: '{{ $background_url }}',
        description: '{{ $description }}',
        logo: '{{ $logo }}',
        languages: '{{ $theme_config['languages'] }}'.split(","),
        emojiEndpoint: '{{ $theme_config['emoji_endpoint'] }}',
        startYear: Number('{{ $theme_config['start_year'] }}')
      };
    </script>
      <script nomodule>!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",(function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()}),!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();</script>
  <script nomodule crossorigin id="vite-legacy-polyfill" src="/theme/aikocute/assets/polyfills-legacy-7515eafe.js"></script>
  <script nomodule crossorigin id="vite-legacy-entry" data-src="/theme/aikocute/assets/index-legacy-3a6f8cc6.js">System.import(document.getElementById('vite-legacy-entry').getAttribute('data-src'))</script>
</head>

<body>
<div id="root"></div>
<script>
  window.global = window;
</script>
</body>

</html>