/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "be5c52498be1feb2fc58c1bfe2b6a41f"
  },
  {
    "url": "assets/css/0.styles.0fc81441.css",
    "revision": "3f24108f5a0d6cbfba7705e5ae09915c"
  },
  {
    "url": "assets/img/build.9b8923a2.png",
    "revision": "9b8923a23e67b9af37a210ec8c885de8"
  },
  {
    "url": "assets/img/elias-arnar-1309173-unsplash.9f515127.jpg",
    "revision": "9f515127f88325714cbe59740f5b99bc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.56b9ab52.js",
    "revision": "d91704a95fe113daa5c77e8edf80da62"
  },
  {
    "url": "assets/js/11.8263d13e.js",
    "revision": "886ef66113d5f4cfb40f1b88a9b0d410"
  },
  {
    "url": "assets/js/12.cb5e20a8.js",
    "revision": "564d0a23b72d0f52b101b9665efd3235"
  },
  {
    "url": "assets/js/13.b8537385.js",
    "revision": "997feed72e4a2862b69cdd6b54364879"
  },
  {
    "url": "assets/js/14.201dd57b.js",
    "revision": "12d9ef6f7ac3cd6b6f682aeb8a7efda8"
  },
  {
    "url": "assets/js/15.0dd97514.js",
    "revision": "332cbd09c5408123b88bfd85486d8edd"
  },
  {
    "url": "assets/js/16.22f0fd66.js",
    "revision": "e6e447b7b5775c64d23c69e4a18c6030"
  },
  {
    "url": "assets/js/17.7cbf421d.js",
    "revision": "90e3d1b78b1edc7b822c80ecbf69faa2"
  },
  {
    "url": "assets/js/18.07875d8d.js",
    "revision": "01e510e0eae422e309dde2c8768d9962"
  },
  {
    "url": "assets/js/19.cce49612.js",
    "revision": "6f73b9fb691058c076c84215fc7c4595"
  },
  {
    "url": "assets/js/20.52d75d80.js",
    "revision": "9208fe36b24e6b0a3961e2fd22792b0e"
  },
  {
    "url": "assets/js/21.33884c81.js",
    "revision": "04f59fda410a6b2c43dd9322282839f5"
  },
  {
    "url": "assets/js/22.236e6bf9.js",
    "revision": "6dc718e95864a88ea5562db5f1b742d8"
  },
  {
    "url": "assets/js/23.46a7c872.js",
    "revision": "82db5f588ceff2252f94511a41a2a394"
  },
  {
    "url": "assets/js/24.11a26834.js",
    "revision": "9859316aa26cc2c184ace747b1f0c0e8"
  },
  {
    "url": "assets/js/25.e4a93a7c.js",
    "revision": "e9d79e02d90b53a7129ddc54a6cddaea"
  },
  {
    "url": "assets/js/3.9555c53d.js",
    "revision": "2c90d612da5bc88baca27e398f7872d2"
  },
  {
    "url": "assets/js/4.25aafd6c.js",
    "revision": "e33f14853bba29fd5622d931d34a6d94"
  },
  {
    "url": "assets/js/5.56c40b37.js",
    "revision": "d4fd25080c0ce759c6cf7b272db570f4"
  },
  {
    "url": "assets/js/6.9a25c8bd.js",
    "revision": "5aea5b933c6dd88c7dd055db1141c56b"
  },
  {
    "url": "assets/js/7.165fc34d.js",
    "revision": "14d74209d35374391e100b19a2b7d6f8"
  },
  {
    "url": "assets/js/8.a3975a89.js",
    "revision": "a468c74e85a0b72d16dc1ea8cb61e711"
  },
  {
    "url": "assets/js/9.59b97a18.js",
    "revision": "d2d470c65ffefb3e6706be663d2b96a7"
  },
  {
    "url": "assets/js/app.c0658843.js",
    "revision": "79bd10e6e942318e4b52ac8c4e5a67ae"
  },
  {
    "url": "assets/js/vendors~docsearch.00f64713.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "index.html",
    "revision": "de6b1fc77ca9d1c126b0aae41ea810d3"
  },
  {
    "url": "webpack.png",
    "revision": "afd4bdae0a6e044c13265facddc23e4f"
  },
  {
    "url": "workshops/advanced/index.html",
    "revision": "60fb2a68278a8f5126f5026ac52ff8b5"
  },
  {
    "url": "workshops/advanced/plugins.html",
    "revision": "ede07938a9b03ed39beb161540be796e"
  },
  {
    "url": "workshops/index.html",
    "revision": "3f353f0137fb0d352bd90c2d6d53984c"
  },
  {
    "url": "workshops/intermediate/babel.html",
    "revision": "806389bb8ae311f5119dba3d9bc5b7d7"
  },
  {
    "url": "workshops/intermediate/compression.html",
    "revision": "b3ba541180ff699e5090570f97b26d7e"
  },
  {
    "url": "workshops/intermediate/dev.html",
    "revision": "33f79fa23559d8ace1fc7ffe6a06ec83"
  },
  {
    "url": "workshops/intermediate/index.html",
    "revision": "2a977303772b83fb059e53af29f602b3"
  },
  {
    "url": "workshops/intermediate/intermediate-koans.html",
    "revision": "9608b7198af115dabdc6219c8e7107d2"
  },
  {
    "url": "workshops/intermediate/modern-build.html",
    "revision": "ff1039d9a6669470bb1fe01fcffcb890"
  },
  {
    "url": "workshops/intermediate/reduce-bundle-size.html",
    "revision": "222a0ff0de06b44f29e0336c6172d100"
  },
  {
    "url": "workshops/intermediate/style.html",
    "revision": "78d56c9f3c4fdb1c99bd2d1e07d4edf4"
  },
  {
    "url": "workshops/novice/basics.html",
    "revision": "a08921b59cf5b6b87647dbc846067a12"
  },
  {
    "url": "workshops/novice/code-assets.html",
    "revision": "c933a5f092506863167debe737fb5ec0"
  },
  {
    "url": "workshops/novice/index.html",
    "revision": "93379a697bcbc52d741b7178503069c8"
  },
  {
    "url": "workshops/novice/novice-koans.html",
    "revision": "501787b74098da4df534936ffe33bf3d"
  },
  {
    "url": "workshops/novice/outputs.html",
    "revision": "de05184b3127dd2cf0a9a691df417652"
  },
  {
    "url": "workshops/novice/static-assets.html",
    "revision": "586c598faa303a7d3a1e8d09d8c1af73"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
