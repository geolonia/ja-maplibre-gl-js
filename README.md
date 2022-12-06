<!-- ![MapLibre Logo](https://maplibre.org/img/maplibre-logo-big.svg)

# MapLibre GL JS

**[MapLibre GL JS](https://maplibre.org/maplibre-gl-js-docs/api/)** is an open-source library for publishing maps on your websites or webview based apps. Fast displaying of maps is possible thanks to GPU-accelerated vector tile rendering. 

It originated as an open-source fork of [mapbox-gl-js](https://github.com/mapbox/mapbox-gl-js), before their switch to a non-OSS license in December 2020. The library's initial versions (1.x) were intended to be a drop-in replacement for the Mapbox’s OSS version (1.x) with additional functionality, but have evolved a lot since then.

[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg?style=flat)](LICENSE.txt)[![Version](https://img.shields.io/npm/v/maplibre-gl?style=flat)](https://www.npmjs.com/package/maplibre-gl)[![CI](https://github.com/maplibre/maplibre-gl-js/actions/workflows/ci.yml/badge.svg)](https://github.com/maplibre/maplibre-gl-js/actions/workflows/ci.yml)[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](https://opensource.org/licenses/BSD-3-Clause)

<br />

## Getting Started

Include the JavaScript and CSS files in the `<head>` of your HTML file.

``` html
<script src='https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.js'></script>
<link href='https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.css' rel='stylesheet' />
```

Include the following code in the `<body>` of your HTML file.

``` html
<div id='map' style='width: 400px; height: 300px;'></div>
<script>
var map = new maplibregl.Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9 // starting zoom
});
</script>
```

Enjoy the map!

<br />

## Documentation

Full documentation for this library [is available here](https://maplibre.org/maplibre-gl-js-docs/api/).

Check out the features through [examples](https://maplibre.org/maplibre-gl-js-docs/example/).

| Showcases |      |
| ---- | ---- |
|![Display a map](https://maplibre.org/maplibre-gl-js-docs/assets/simple-map-800-22a3f5b6410f543ab214e14f68fb42ec.png)	|![Third party vector tile source](https://maplibre.org/maplibre-gl-js-docs/assets/third-party-800-e047007bba338f6ec7d6cd47abfed279.png)	|
|![Animate a series of images](https://maplibre.org/maplibre-gl-js-docs/assets/animate-images-800-497358611dbe047f300faeb9465aad5f.png)	|![Create a heatmap layer](https://maplibre.org/maplibre-gl-js-docs/assets/heatmap-layer-800-05c0f97ddb6b1a10e84b5064564e86ff.png)	|
|![3D buildings](https://maplibre.org/maplibre-gl-js-docs/assets/3d-buildings-800-bd7885f07050dbbfee7a9bb800ff5ce8.png)	|![Visualize population density](https://maplibre.org/maplibre-gl-js-docs/assets/visualize-population-density-800-6c65712d9ea94eb6d2bd3348a82b9bdf.png)	|

<br />

## Migrating from mapbox-gl to maplibre
The libraries are very similar but diverge with newer features happening from v2 in both libraries where Mapbox turned proprietary.

The overall migration happens by uninstalling `mapbox-gl` and installing `maplibre-gl` in your node packages (or see below for CDN links), and replacing `mapboxgl` with `maplibregl` throughout your TypeScript, JavaScript and HTML/CSS.

```diff
-    var map = new mapboxgl.Map({
+    var map = new maplibregl.Map({

-    <button class="mapboxgl-ctrl">
+    <button class="maplibregl-ctrl">
```

#### Compatibility branch

Maplibre v1 is completely backward compatible with Mapbox v1. This compatibility branch (named 1.x) is tagged v1 on npm, and its current verison is 1.15.3. 

#### CDN Links

> MapLibre GL JS is distributed via [unpkg.com](https://unpkg.com). For more informations please see [MapLibre GL is on unpkg.com](./docs/README-unpkg.md#maplibre-gl-on-unpkgcom).

```diff
-    <script src="https://api.mapbox.com/mapbox-gl-js/v#.#.#/mapbox-gl.js"></script>
-    <link
-      href="https://api.mapbox.com/mapbox-gl-js/v#.#.#/mapbox-gl.css"
-      rel="stylesheet"
-    />

     
+    <script src="https://unpkg.com/maplibre-gl@#.#.#/dist/maplibre-gl.js"></script>
+    <link
+      href="https://unpkg.com/maplibre-gl@#.#.#/dist/maplibre-gl.css"
+      rel="stylesheet"
+    />

```

Want an example? Have a look at the official [MapLibre GL JS Documentation](https://maplibre.org/maplibre-gl-js-docs/example/).

Use MapLibre GL JS bindings for React (https://visgl.github.io/react-map-gl/docs/get-started/get-started#using-with-a-mapbox-gl-fork) and Angular (https://github.com/maplibre/ngx-maplibre-gl). Find more at [awesome-maplibre](https://github.com/maplibre/awesome-maplibre).

<br />

## Contribution

### Getting Involved

Join the #maplibre slack channel at OSMUS: get an invite at https://slack.openstreetmap.us/
Read the [CONTRIBUTING.md](CONTRIBUTING.md) guide in order to get familiar with how we do things around here.

### Community Leadership

You can find the official status of the backing community and steering committee in the [COMMUNITY.md](COMMUNITY.md) document.

### Avoid Fragmentation

If you depend on a free software alternative to `mapbox-gl-js`, please consider joining our effort! Anyone with a stake in a healthy community-led fork is welcome to help us figure out our next steps. We welcome contributors and leaders! MapLibre GL already represents the combined efforts of a few early fork efforts, and we all benefit from "one project" rather than "our way". If you know of other forks, please reach out to them and direct them here.
 

> **MapLibre GL** is developed following [Semantic Versioning (2.0.0)](https://semver.org/spec/v2.0.0.html).

<br />

## Sponsors

We thank everyone who supported us financially in the past and special thanks to the people and organizations who support us with recurring donations!

Read more about the MapLibre Sponsorship Program at [https://maplibre.org/sponsors/](https://maplibre.org/sponsors/).

Platinum:

<img src="https://maplibre.org/img/aws-logo.svg" alt="Logo AWS" width="25%"/>


Silver:

<img src="https://maplibre.org/img/meta-logo.svg" alt="Logo Meta" width="50%"/>

Stone:

[MIERUNE Inc.](https://www.mierune.co.jp/?lang=en)

Backers and Supporters:

<a href="https://opencollective.com/maplibre/backer/0/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/0/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/1/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/1/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/2/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/2/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/3/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/3/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/4/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/4/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/5/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/5/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/6/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/6/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/7/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/7/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/8/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/8/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/9/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/9/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/10/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/10/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/11/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/11/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/12/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/12/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/13/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/13/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/14/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/14/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/15/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/15/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/16/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/16/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/17/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/17/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/18/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/18/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/19/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/19/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/20/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/20/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/21/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/21/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/22/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/22/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/23/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/23/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/24/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/24/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/25/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/25/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/26/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/26/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/27/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/27/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/28/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/28/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/29/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/29/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/maplibre/backer/30/website?requireActive=false" target="_blank"><img src="https://opencollective.com/maplibre/backer/30/avatar.svg?requireActive=false"></a>

<br />

## Thank you Mapbox 🙏🏽

We'd like to acknowledge the amazing work Mapbox has contributed to open source. The open source community is sad to part ways with them, but we simultaneously feel grateful for everything they already contributed. `mapbox-gl-js` 1.x is an open source achievement that now lives on as `maplibre-gl`. We're proud to develop on the shoulders of giants, thank you Mapbox 🙇🏽‍♀️.

Please keep in mind: Unauthorized backports are the biggest threat to the MapLibre project. It is unacceptable to backport code from mapbox-gl-js, which is not covered by the former BSD-3 license. If you are unsure about this issue, [please ask](https://github.com/maplibre/maplibre-gl-js/discussions)!

<br />

## License

**MapLibre GL** is licensed under the [3-Clause BSD license](./LICENSE.txt). -->

## ja-maplibre-gl-js

日本語ドキュメンテーション用翻訳用のソースです。

Geolonia Javascript API ドキュメントの翻訳ソースとして使用しています。  
https://geolonia.github.io/ja-maplibre-gl-js-docs/api/


## 翻訳手順
翻訳する手順は、セクション毎に異なります。以下の手順に沿って翻訳して下さい。

### API リファレンス
https://geolonia.github.io/ja-maplibre-gl-js-docs/api/


#### 手順

1. 翻訳ファイルは、`src/` 以下にありますので、エディタで翻訳する文章を検索して下さい。  
2. 以下の様に英文を `//` でコメントアウトし、下に日本語を書きます。（`//`でコメントアウトした行は、アスタリスク`*`を削除して下さい）

```
 // @param {number} [options.maxZoom=22] The maximum zoom level of the map (0-24).
 * @param {number} [options.maxZoom=22] 地図の最大表示倍率（0〜24）。
```


### プラグイン

https://geolonia.github.io/ja-maplibre-gl-js-docs/plugins/

#### 手順

1. [ja-maplibre-gl-js-docsの pluguins.json](https://github.com/geolonia/ja-maplibre-gl-js-docs/blob/main/docs/data/plugins.json) を編集して下さい。（https://github.com/geolonia/ja-maplibre-gl-js-docs/blob/main/docs/data/plugins.json）
2. 翻訳する行はコピーして翻訳し、原文は、`_description` の様にアンダーバーを付けて残しておいて下さい。

```
"mapbox-gl-accessibility": {
  "website": "https://github.com/mapbox/mapbox-gl-accessibility/",
  "_description": "Integrates with ARIA-compatible screen readers for users with visual impairments.",
  "description": "視覚障がい者向けARIA対応スクリーンリーダーとの連携。"
},
```

### スタイル仕様
https://geolonia.github.io/ja-maplibre-gl-js-docs/style-spec/

#### 手順

1. `v8.json` (https://github.com/geolonia/ja-maplibre-gl-js/blob/main/src/style-spec/reference/v8.json) を編集して下さい。
2. 翻訳する行はコピーして翻訳し、原文は、`_doc` の様にアンダーバーを付けて残しておいて下さい。

```
"name": {
  "type": "string",
  "_doc": "A human-readable name for the style.",
  "doc": "人間にとって読みやすいスタイルの名前",
  ...
},
```
