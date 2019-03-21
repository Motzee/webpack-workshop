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
    "revision": "538eebf82951e6e23b3e7f08dfe301c2"
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
    "url": "assets/js/10.cf797b67.js",
    "revision": "825a03d45a6aa7167bf781f61ab3bc70"
  },
  {
    "url": "assets/js/11.06eb2892.js",
    "revision": "b301f90d75f6ec0e56d44b7617be5b34"
  },
  {
    "url": "assets/js/12.e59ef6a6.js",
    "revision": "74c3e7dd008462994e087d0e51bbbffb"
  },
  {
    "url": "assets/js/13.6dbcf559.js",
    "revision": "f73b32a066332ac1dbc96819ea990ba5"
  },
  {
    "url": "assets/js/14.6f891645.js",
    "revision": "99abe6af1a202dc95784a5e2a9a34994"
  },
  {
    "url": "assets/js/15.14f6a0e0.js",
    "revision": "738bf8655c424972f4d568999633cce5"
  },
  {
    "url": "assets/js/16.b0f35e53.js",
    "revision": "82263ad165e91ba15076eefa76894bf3"
  },
  {
    "url": "assets/js/17.cb5518b4.js",
    "revision": "a34275cc70a0639de802b3c7dfff4275"
  },
  {
    "url": "assets/js/18.418b4c5a.js",
    "revision": "bb19dfc131af2393b955321d4235031e"
  },
  {
    "url": "assets/js/19.2e64b2c8.js",
    "revision": "052046a41cd96b3350a0c6d517e90a83"
  },
  {
    "url": "assets/js/20.25e2c517.js",
    "revision": "1548515b6f16d9c66811a84b666f8ae9"
  },
  {
    "url": "assets/js/21.59bf48ac.js",
    "revision": "b4ac944a8947a76d2ec136dda9fa90d8"
  },
  {
    "url": "assets/js/22.12d50d14.js",
    "revision": "1d37f7aed381811e8b6458212bc1daf1"
  },
  {
    "url": "assets/js/23.679cc1d1.js",
    "revision": "29c77df8d38ec23e4c2ec2c0bf831f60"
  },
  {
    "url": "assets/js/24.d1754e70.js",
    "revision": "b5b42a4847c3761da004bdb1a88d01c2"
  },
  {
    "url": "assets/js/25.11fa377e.js",
    "revision": "e475be7e95411f8aa627deefd3b01b17"
  },
  {
    "url": "assets/js/26.6aa3f1e1.js",
    "revision": "a3e48afe02b3039a83f95d249633b48e"
  },
  {
    "url": "assets/js/27.10ebabff.js",
    "revision": "b005b7b1b97dcce3886a079d06a8e7f9"
  },
  {
    "url": "assets/js/28.27a1688c.js",
    "revision": "089133f2e837df8117ff6a212844a583"
  },
  {
    "url": "assets/js/29.9b3aa202.js",
    "revision": "a147c6addc9dcb00682558560a9b2e42"
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
    "url": "assets/js/7.7bca22bc.js",
    "revision": "52c172f12759e21bcd7575d6562c4c45"
  },
  {
    "url": "assets/js/8.b45e66d0.js",
    "revision": "16fa3559f0b9f38d6f693d6a3823bfde"
  },
  {
    "url": "assets/js/9.59b97a18.js",
    "revision": "d2d470c65ffefb3e6706be663d2b96a7"
  },
  {
    "url": "assets/js/app.1e00b25c.js",
    "revision": "383900a2cc37aa58d7d461136622861d"
  },
  {
    "url": "assets/js/vendors~docsearch.00f64713.js",
    "revision": "3ebbff0dad030626810d83cc4bf09f16"
  },
  {
    "url": "fr/index.html",
    "revision": "2fb046b6524942ba176c37a2c3ccbdb1"
  },
  {
    "url": "fr/workshops/index.html",
    "revision": "0ce24f90424fd0d5a34c5a8e36385e1a"
  },
  {
    "url": "fr/workshops/novice/basics.html",
    "revision": "fe49a06e4f0d29f8463600e3d8ba1aa7"
  },
  {
    "url": "fr/workshops/novice/index.html",
    "revision": "357a31b0d65dd07896514149c4ca0d7a"
  },
  {
    "url": "index.html",
    "revision": "0019eb2ecfacfe052ed8cc663159ff8d"
  },
  {
    "url": "webpack.png",
    "revision": "afd4bdae0a6e044c13265facddc23e4f"
  },
  {
    "url": "workshops/advanced/index.html",
    "revision": "6fe0e4c80d31067e9f4532565ef7f8e3"
  },
  {
    "url": "workshops/advanced/plugins.html",
    "revision": "29406eb0741e169ea29a85b470d9fe92"
  },
  {
    "url": "workshops/index.html",
    "revision": "9ea8403bbeb761d79051830c076ca82e"
  },
  {
    "url": "workshops/intermediate/babel.html",
    "revision": "dc0126178dbe8c5768d603e33ba0f317"
  },
  {
    "url": "workshops/intermediate/compression.html",
    "revision": "4cb05f901c9b2623fd549bf0ec4e19e9"
  },
  {
    "url": "workshops/intermediate/dev.html",
    "revision": "dca44597ea4838e14f9f23db83ba17cd"
  },
  {
    "url": "workshops/intermediate/index.html",
    "revision": "2994e97fab0d6ab2b130ef64934b2be6"
  },
  {
    "url": "workshops/intermediate/intermediate-koans.html",
    "revision": "849bca70ddb521df3a70d6396e641d30"
  },
  {
    "url": "workshops/intermediate/modern-build.html",
    "revision": "0c0bbe7a663d7dffe826cf535eca1360"
  },
  {
    "url": "workshops/intermediate/reduce-bundle-size.html",
    "revision": "cd317b77fc8c09ae366d83d9f10a76b7"
  },
  {
    "url": "workshops/intermediate/style.html",
    "revision": "c0b8bb92477efce80553ffbdadb578b8"
  },
  {
    "url": "workshops/novice/basics.html",
    "revision": "fae0963055994442972b182ee3e2ef91"
  },
  {
    "url": "workshops/novice/code-assets.html",
    "revision": "2226f233c5401b67d963c726690b5ec9"
  },
  {
    "url": "workshops/novice/index.html",
    "revision": "09de1b87e7581bd9706d35365fca5ee8"
  },
  {
    "url": "workshops/novice/novice-koans.html",
    "revision": "3c7224c05026689b92b5a3fb7056a3d4"
  },
  {
    "url": "workshops/novice/outputs.html",
    "revision": "c957e82678c20dc750ea3a1faa6ca5ef"
  },
  {
    "url": "workshops/novice/static-assets.html",
    "revision": "d7af7bdaf98b14c7f272f5df4ec97d2b"
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
