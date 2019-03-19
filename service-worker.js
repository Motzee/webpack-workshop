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
    "revision": "f02a241d414f2e96126e9a7c6364818b"
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
    "url": "assets/js/24.4e8ecd49.js",
    "revision": "279a0eb77eb2312d8949b11e486fc276"
  },
  {
    "url": "assets/js/25.3dee2118.js",
    "revision": "abd2ddfb0ffb3b4ad7ebf80e412592f6"
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
    "url": "assets/js/app.9f4d9801.js",
    "revision": "6b21746303df732c4e13c678397e8598"
  },
  {
    "url": "assets/js/vendors~docsearch.00f64713.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "index.html",
    "revision": "b05b558da73049939ae4789524dca2cc"
  },
  {
    "url": "webpack.png",
    "revision": "afd4bdae0a6e044c13265facddc23e4f"
  },
  {
    "url": "workshops/advanced/index.html",
    "revision": "80395e5ab128ca51efce73e139cc395f"
  },
  {
    "url": "workshops/advanced/plugins.html",
    "revision": "5e849a90c4c411b7cad8ad28919a7def"
  },
  {
    "url": "workshops/index.html",
    "revision": "1004f512493d16fe84bc800f25b290b7"
  },
  {
    "url": "workshops/intermediate/babel.html",
    "revision": "cfd3e71f632a1a4b55965c84b412e7b9"
  },
  {
    "url": "workshops/intermediate/compression.html",
    "revision": "a184d680994031ecbfe2177a50011585"
  },
  {
    "url": "workshops/intermediate/dev.html",
    "revision": "edc313765e429f926ddb3d05188c3b51"
  },
  {
    "url": "workshops/intermediate/index.html",
    "revision": "bce1a8086640a03be5e5b7df7f1e208b"
  },
  {
    "url": "workshops/intermediate/intermediate-koans.html",
    "revision": "b7e79afac42c740df2d1a20eb2c6fc6d"
  },
  {
    "url": "workshops/intermediate/modern-build.html",
    "revision": "e278515184eaf42dccc962188387f05d"
  },
  {
    "url": "workshops/intermediate/reduce-bundle-size.html",
    "revision": "7ca04dbc42957a1bc1297f85249ac23e"
  },
  {
    "url": "workshops/intermediate/style.html",
    "revision": "a58cd341a063331e0819bbed92e4a14f"
  },
  {
    "url": "workshops/novice/basics.html",
    "revision": "0582a6d9e1213dd2bd008c543fd8297c"
  },
  {
    "url": "workshops/novice/code-assets.html",
    "revision": "1df7d06f7af77e90f3c8a61f0ff4d3b4"
  },
  {
    "url": "workshops/novice/index.html",
    "revision": "4d2f2b28267e7232b20e244231206aed"
  },
  {
    "url": "workshops/novice/novice-koans.html",
    "revision": "e4b3e37869c33168b898e79b9083a2df"
  },
  {
    "url": "workshops/novice/outputs.html",
    "revision": "75a3e9365e56b7074025c652ded62757"
  },
  {
    "url": "workshops/novice/static-assets.html",
    "revision": "b12001afd35ce13eaa42727a86682b47"
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
