<!DOCTYPE html>
<html lang="">
<head>
  <meta charset="utf-8" />
  <link href="/favicon.svg" rel="icon" />
  <meta content="width=device-width, initial-scale=1" name="viewport" />
  <meta content="#102693" name="theme-color" />
  <link href="/favicon.svg" rel="apple-touch-icon" />
  <title>{{$title}}</title>
  <meta name="description" content="AkoCuteHotMe" />
  <meta name="copyright" content="AikoPanel Technology Co.,Ltd." />
  <meta name="repository" content="github.com/github-aiko/aikopanel-user" />
  <meta name="robots" content="index,follow" />
  <meta name="author" content="AikoCute, admin@aikopanel.com">
  <script type="module" crossorigin src="/theme/aikocute/assets/index-33033ac6.js"></script>
  <link rel="modulepreload" crossorigin href="/theme/aikocute/assets/vendor-894d6afa.js">
  <link rel="stylesheet" href="/theme/aikocute/assets/index-a7f18825.css">
  <script type="module">try{import.meta.url;import("_").catch(()=>1);}catch(e){}window.__vite_is_modern_browser=true;</script>
  <script type="module">!function(){if(window.__vite_is_modern_browser)return;console.warn("vite: loading legacy build because dynamic import or import.meta.url is unsupported, syntax error above should be ignored");var e=document.getElementById("vite-legacy-polyfill"),n=document.createElement("script");n.src=e.src,n.onload=function(){System.import(document.getElementById('vite-legacy-entry').getAttribute('data-src'))},document.body.appendChild(n)}();</script>
</head>
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
  
  <script>
    window.global = window;

    window.settings = {
      defaultPath: "/",
      fontFamily: `'Public Sans', sans-serif`,
      miniDrawer: false,
      container: true,
      themeDirection: "ltr",
      title: '{{$title}}' ?? "AikoPanel",
      title_split: " - ",
      background_url: "https://unsplash.com/random",
      description: '{{ $description }}' ?? "AikoPanel is a modern and beautiful close-source dashboard for your projects.",
      logo: "",
      languages: ["vi-VN", "en-US", "zh-CN"],
      emojiEndpoint: "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/{{code}}.png",
      startYear: 2021
    };
  </script>
  <script nomodule>!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",(function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()}),!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();</script>
  <script nomodule crossorigin id="vite-legacy-polyfill" src="/theme/aikocute/assets/polyfills-legacy-7515eafe.js"></script>
  <script nomodule crossorigin id="vite-legacy-entry" data-src="/theme/aikocute/assets/index-legacy-3a6f8cc6.js">System.import(document.getElementById('vite-legacy-entry').getAttribute('data-src'))</script>
</body>
</html>
