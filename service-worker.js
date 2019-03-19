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
    "revision": "cae97bd65986b6fdec586ce421e07e6b"
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
    "url": "assets/js/20.5428fa62.js",
    "revision": "303db56a86ca502f9f69dc8583e24dc4"
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
    "url": "assets/js/app.f2d316c1.js",
    "revision": "ba9da5dc315ca1cf89926048ce917d47"
  },
  {
    "url": "assets/js/vendors~docsearch.00f64713.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "index.html",
    "revision": "0edc40f9360d40f55947f8ffd3e217e9"
  },
  {
    "url": "webpack.png",
    "revision": "afd4bdae0a6e044c13265facddc23e4f"
  },
  {
    "url": "workshops/advanced/index.html",
    "revision": "f50d92eca2b885465ad242a5ac260522"
  },
  {
    "url": "workshops/advanced/plugins.html",
    "revision": "cd4aee47d4293f85a46d4f4b965f0804"
  },
  {
    "url": "workshops/index.html",
    "revision": "d6eea20dc5f93209fac5f04b37888393"
  },
  {
    "url": "workshops/intermediate/babel.html",
    "revision": "e09a36396968a2dd0174373dad032dac"
  },
  {
    "url": "workshops/intermediate/compression.html",
    "revision": "9a621c8c6dcb0cf605ec11b87cd48dce"
  },
  {
    "url": "workshops/intermediate/dev.html",
    "revision": "2a64f06273b38db0e5e0f510b5233b41"
  },
  {
    "url": "workshops/intermediate/index.html",
    "revision": "d20c01419bbed5cc70d224095f3341e1"
  },
  {
    "url": "workshops/intermediate/intermediate-koans.html",
    "revision": "986a071db4b3fc0dece9bdc1c7203800"
  },
  {
    "url": "workshops/intermediate/modern-build.html",
    "revision": "39e7b7f96c009bb9c4f1ff8134ef29f9"
  },
  {
    "url": "workshops/intermediate/reduce-bundle-size.html",
    "revision": "6b3cea3c5a54bde01bb4ad60964ad1dd"
  },
  {
    "url": "workshops/intermediate/style.html",
    "revision": "070be39055f4a1bcbb53c4c30a384b9a"
  },
  {
    "url": "workshops/novice/basics.html",
    "revision": "f2b90863505760a372d5c7bcdadb73ad"
  },
  {
    "url": "workshops/novice/code-assets.html",
    "revision": "7bafb02c4f53322e94532d5c89f23aed"
  },
  {
    "url": "workshops/novice/index.html",
    "revision": "3c2131f4273a923414b73604e40b8f4b"
  },
  {
    "url": "workshops/novice/novice-koans.html",
    "revision": "70fbca2ad034582dd227af18c803cc01"
  },
  {
    "url": "workshops/novice/outputs.html",
    "revision": "e1029a93dc910f6eeaa757596e1ebde1"
  },
  {
    "url": "workshops/novice/static-assets.html",
    "revision": "2d1e7b50d484113fba300e139a17dfba"
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
