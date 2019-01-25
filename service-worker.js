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
    "revision": "3f712dcced5bf12fc351c06554792b23"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "4c68701884028951bcb3a2fb43a147a3"
  },
  {
    "url": "assets/css/0.styles.0d0e1864.css",
    "revision": "b511fabb83f079ed01ece1daff9c8453"
  },
  {
    "url": "assets/fonts/hack-regular.3eccb984.woff2",
    "revision": "3eccb984a54973a75212391b6d117ace"
  },
  {
    "url": "assets/fonts/hack-regular.b038bd31.woff",
    "revision": "b038bd31fef76bc622d123ae8892efa2"
  },
  {
    "url": "assets/fonts/ktquez.06665560.eot",
    "revision": "066655605108d4a0ae74dcc69bbe7547"
  },
  {
    "url": "assets/fonts/ktquez.87607358.woff",
    "revision": "876073588156b8e621394e0705ed0695"
  },
  {
    "url": "assets/fonts/ktquez.9d97d905.ttf",
    "revision": "9d97d905fd7b9fc68d637ac83de00744"
  },
  {
    "url": "assets/img/ktquez.8ef6334d.svg",
    "revision": "8ef6334db409a3a48aea2e38db558893"
  },
  {
    "url": "assets/js/1.2017a834.js",
    "revision": "fccd39c7bcbfbf931339da27db127d27"
  },
  {
    "url": "assets/js/10.bf68b77b.js",
    "revision": "28b9f707294b30f5196bdd4471535f13"
  },
  {
    "url": "assets/js/11.85dab963.js",
    "revision": "34a35732bbd3614f593749b6d168be24"
  },
  {
    "url": "assets/js/12.42bbc8bb.js",
    "revision": "cd207737a009818f992e9861a194c60c"
  },
  {
    "url": "assets/js/13.5a1c3fae.js",
    "revision": "6be41ebf7a44a675397340ae358f9f72"
  },
  {
    "url": "assets/js/14.d835b9aa.js",
    "revision": "d7576983ac69a0ddfefc1bfecb939330"
  },
  {
    "url": "assets/js/15.b5a4123a.js",
    "revision": "e5ec23810fbbdb18502c4176e1085e60"
  },
  {
    "url": "assets/js/16.a01f2c13.js",
    "revision": "6be05e8021de15a05471bf2fc402382d"
  },
  {
    "url": "assets/js/17.9d60a234.js",
    "revision": "6d7eaae015150469230b8e951ce2de76"
  },
  {
    "url": "assets/js/18.3a72d91d.js",
    "revision": "b6d2efb420000e6488a9defbd5e41ab5"
  },
  {
    "url": "assets/js/19.dc7e1984.js",
    "revision": "872b8ecaeef1f6793b0468e29d4f8465"
  },
  {
    "url": "assets/js/2.51ee2acf.js",
    "revision": "5ec23235b98feb3ac0a694a1ac2e032d"
  },
  {
    "url": "assets/js/20.d1b3b67b.js",
    "revision": "993ffeedbb5bc8e666633c3adc42795c"
  },
  {
    "url": "assets/js/21.b90105d5.js",
    "revision": "51f3c73147753e87034a21ceb31462fe"
  },
  {
    "url": "assets/js/22.21f0e277.js",
    "revision": "d3dbee45ba0971b31c6bb6012938b39d"
  },
  {
    "url": "assets/js/23.aaf01504.js",
    "revision": "4a8e6ea86dcf0b817ea7312f7147e8de"
  },
  {
    "url": "assets/js/24.1cc424b8.js",
    "revision": "694c8929dfda07326c99effa839730aa"
  },
  {
    "url": "assets/js/25.799450e8.js",
    "revision": "79332ea6e76963b7afda4cd469f6a7d2"
  },
  {
    "url": "assets/js/26.f75172a9.js",
    "revision": "66b35b56db49af88f81a20e2d8be6a22"
  },
  {
    "url": "assets/js/27.03ddeaca.js",
    "revision": "c821c77fba29e737750617689a45b57c"
  },
  {
    "url": "assets/js/28.1c897359.js",
    "revision": "56f147dcec82d2321931358d6d11b11e"
  },
  {
    "url": "assets/js/29.48b17e9e.js",
    "revision": "e1e4077bf6d381a1c8f0fa3d28efbcf0"
  },
  {
    "url": "assets/js/3.58196d68.js",
    "revision": "9136205e6d9f9942df9996ecba311611"
  },
  {
    "url": "assets/js/30.fbc9525a.js",
    "revision": "96946c712d32ce201b581e4014ab0893"
  },
  {
    "url": "assets/js/31.fc001df1.js",
    "revision": "28835060e456e535610ad522879d40ec"
  },
  {
    "url": "assets/js/32.3ae3ab5e.js",
    "revision": "a5f96fb9315a2a71beb47bbf12ad4e5a"
  },
  {
    "url": "assets/js/33.99d2c2f6.js",
    "revision": "d57428c2c128eeaa3361c6c0eb0d5a4c"
  },
  {
    "url": "assets/js/34.231a03d1.js",
    "revision": "fd86af16f8e9e3b32ec3278eed1d56bc"
  },
  {
    "url": "assets/js/35.73e04fa1.js",
    "revision": "ee49eb8d28d1bcf1760bc50ccfc7e8cd"
  },
  {
    "url": "assets/js/36.656f4c78.js",
    "revision": "2e3920750185ad410fad53303d4cdc6c"
  },
  {
    "url": "assets/js/37.0397a923.js",
    "revision": "15ab7f7047ad4c7cafd657d60f9fbee0"
  },
  {
    "url": "assets/js/38.0d77aee4.js",
    "revision": "98c3cc8ec62e0083019935ccdc824203"
  },
  {
    "url": "assets/js/39.59422de2.js",
    "revision": "224d2ff33aacde13287b3aa9f4386e4c"
  },
  {
    "url": "assets/js/4.34b436ae.js",
    "revision": "fbd8c2ecb1af64be9fd83ba7b843918e"
  },
  {
    "url": "assets/js/40.9410fa07.js",
    "revision": "2594770ed005f4f3411ffdf17b9a1161"
  },
  {
    "url": "assets/js/41.6d37d03a.js",
    "revision": "d286b8b64dea6657a33a489ae28d30b0"
  },
  {
    "url": "assets/js/42.9a116945.js",
    "revision": "047005c8a44813691e58b023f1363d02"
  },
  {
    "url": "assets/js/43.da8a4cd6.js",
    "revision": "a1c42d56b6a4ba5d24ac4ebcd09d4705"
  },
  {
    "url": "assets/js/44.372630ae.js",
    "revision": "f4eed2cb3b6971fbf35d1ec151b85444"
  },
  {
    "url": "assets/js/45.d7faaa70.js",
    "revision": "c4e5f48ff2c1eb4519455f2cdd9abf82"
  },
  {
    "url": "assets/js/46.11150138.js",
    "revision": "27c24e3a294efe3ab391a142cbd33c37"
  },
  {
    "url": "assets/js/47.339f93c0.js",
    "revision": "4f398e2de7dfe477c2c2483e2e1124b3"
  },
  {
    "url": "assets/js/48.86bf972e.js",
    "revision": "b3746c42667a7c60df158b3c4fcbda07"
  },
  {
    "url": "assets/js/49.dd1cff79.js",
    "revision": "93429c7c86606295db6dde608c8db23b"
  },
  {
    "url": "assets/js/5.2bc5fde9.js",
    "revision": "a430c3a665ecb35ba522ccad09aab3ef"
  },
  {
    "url": "assets/js/50.b7f253bf.js",
    "revision": "3b5fe3f548a84c8104544f88c3fccfe6"
  },
  {
    "url": "assets/js/51.7f135892.js",
    "revision": "7b4c28b2969e5631e7e813596dc3f44c"
  },
  {
    "url": "assets/js/52.1f32d797.js",
    "revision": "a9423beb6ad2787e5d27ea2fdeee808f"
  },
  {
    "url": "assets/js/53.b5ad3a9e.js",
    "revision": "f4737651547a0b05d2e3361bc98eab5f"
  },
  {
    "url": "assets/js/54.4065e5e9.js",
    "revision": "3484554ea47ce99ba13a18c43b09e771"
  },
  {
    "url": "assets/js/6.510da242.js",
    "revision": "8cfe6977c483c7674fad1ae414e0dfd3"
  },
  {
    "url": "assets/js/7.c566c430.js",
    "revision": "56fbc9ec595dcb4b9f8eaf411a12723b"
  },
  {
    "url": "assets/js/9.e6f4096f.js",
    "revision": "a8e0040b3c36104838e3e03eff1303bd"
  },
  {
    "url": "assets/js/app.413d203c.js",
    "revision": "b1e2944440e747b438a3c284b75c4ad5"
  },
  {
    "url": "authors/index.html",
    "revision": "50fa60243e52d0378ea486de95e089dd"
  },
  {
    "url": "authors/ktquez.html",
    "revision": "5b5d804f328fbc895bac8958927011bd"
  },
  {
    "url": "autores/ktquez.png",
    "revision": "4988ac8116c5ccf8bccfad31fd996fea"
  },
  {
    "url": "categories/index.html",
    "revision": "7cfb374029990bb1f6788d985af31972"
  },
  {
    "url": "categories/vuejs.html",
    "revision": "c47c5f8806dc17e1650e33770f87a4df"
  },
  {
    "url": "contact/index.html",
    "revision": "d0ad1f5bc0f7ecc3a3a6d62ddb11e1d2"
  },
  {
    "url": "es/autores/index.html",
    "revision": "a742fcbc2d65a204b9a8a7cf6910adfb"
  },
  {
    "url": "es/autores/ktquez.html",
    "revision": "e2344a64c663d1907be26af6044f3845"
  },
  {
    "url": "es/categorias/index.html",
    "revision": "912370150a528641777238476a2caa9a"
  },
  {
    "url": "es/categorias/vuejs.html",
    "revision": "d74d8336da73c03d6847491fce49d3eb"
  },
  {
    "url": "es/contacto/index.html",
    "revision": "3da3a47c3660587b5db18b749e97e3a3"
  },
  {
    "url": "es/index.html",
    "revision": "75e0f2cc7e84100c82a46890b3bb7358"
  },
  {
    "url": "es/posts/index.html",
    "revision": "d298bf8d13bc39d6ef2f2e0c201bf098"
  },
  {
    "url": "es/posts/mi-primir-post.html",
    "revision": "bd015a487bea6fcde3e74848dc20379f"
  },
  {
    "url": "es/sobre/index.html",
    "revision": "0b770c29d2209beb37dc70b3648459f0"
  },
  {
    "url": "fallback.png",
    "revision": "5f03fc301a31248e3859493fefe8c720"
  },
  {
    "url": "favicon/android-chrome-192x192.png",
    "revision": "7dd8a65725268f26938139b90d13ddfb"
  },
  {
    "url": "favicon/android-chrome-512x512.png",
    "revision": "93a3772555db2ce10cee2b8aa5369b0b"
  },
  {
    "url": "favicon/android-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/android-icon-192x192.png",
    "revision": "802a593052e21156374bf7b9cf02c2a7"
  },
  {
    "url": "favicon/android-icon-36x36.png",
    "revision": "9ad81760948772380acd04179c6f161a"
  },
  {
    "url": "favicon/android-icon-48x48.png",
    "revision": "5d41a42424444503de5e10809d837b33"
  },
  {
    "url": "favicon/android-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon/android-icon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon/apple-icon-114x114.png",
    "revision": "e332b1f9cf13e90f4a20aa7a5bdc8baf"
  },
  {
    "url": "favicon/apple-icon-120x120.png",
    "revision": "ce5b08dac1f9df7888bcd4b8ac55860a"
  },
  {
    "url": "favicon/apple-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/apple-icon-152x152.png",
    "revision": "9311b71dbf3d7c449fa655eba4efd7a3"
  },
  {
    "url": "favicon/apple-icon-180x180.png",
    "revision": "8cae876e1111dec29a0a92dbeb950491"
  },
  {
    "url": "favicon/apple-icon-57x57.png",
    "revision": "d349fef280057ab820fb110862449ee1"
  },
  {
    "url": "favicon/apple-icon-60x60.png",
    "revision": "2449753757cc4b29e41374ea0de62dc7"
  },
  {
    "url": "favicon/apple-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon/apple-icon-76x76.png",
    "revision": "cc92f0f6281b1b092c30d2e09488b02b"
  },
  {
    "url": "favicon/apple-icon-precomposed.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon/apple-icon.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon/apple-touch-icon-120x120.png",
    "revision": "cdbf224429a4ab5124c830824e430ec3"
  },
  {
    "url": "favicon/apple-touch-icon-152x152.png",
    "revision": "50ffcf9e956bd4fbe6d5ff4231a3bc0b"
  },
  {
    "url": "favicon/apple-touch-icon-180x180.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon/apple-touch-icon-60x60.png",
    "revision": "593d09b43e75f616c878d95b8dbf4b02"
  },
  {
    "url": "favicon/apple-touch-icon-76x76.png",
    "revision": "e26d4eeb0f82506ee9e260743bfbcd79"
  },
  {
    "url": "favicon/apple-touch-icon.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon/favicon-16x16.png",
    "revision": "718b39e95d139151a176b4048251891e"
  },
  {
    "url": "favicon/favicon-32x32.png",
    "revision": "f2d616179ad2aae07b2da243feaf340e"
  },
  {
    "url": "favicon/favicon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon/ms-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/ms-icon-150x150.png",
    "revision": "b606b9da5dfd8ab72f9ca32cfd47ce33"
  },
  {
    "url": "favicon/ms-icon-310x310.png",
    "revision": "60c4e89ec11601dc57ca6047157d1e7c"
  },
  {
    "url": "favicon/ms-icon-70x70.png",
    "revision": "eee1b9ca03d48aa7ab2f37335a16ecc7"
  },
  {
    "url": "favicon/mstile-150x150.png",
    "revision": "14bca4f522e0c925715bbdda73cc94d2"
  },
  {
    "url": "favicon/safari-pinned-tab.svg",
    "revision": "43f3881d3115aabff8941e00447784f9"
  },
  {
    "url": "general/web-development.png",
    "revision": "4f3cf0f384b155165791d62b19b099f7"
  },
  {
    "url": "image-social-share.png",
    "revision": "542712558c72d1744dc5696ee91bd9af"
  },
  {
    "url": "index.html",
    "revision": "0b200ac714beb06c0c01e107ede49395"
  },
  {
    "url": "ktquez-play-logo.png",
    "revision": "a368baa905f27e9eb73b79f47c431a8d"
  },
  {
    "url": "ktquez-play-logo@2x.png",
    "revision": "d73cc3b4641ffd39cad5455375b9db29"
  },
  {
    "url": "posts/index.html",
    "revision": "e3734480cced7475278378f99f93b877"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "91461fafe6cac754eeb5773f92305875"
  },
  {
    "url": "posts/site-ideas.html",
    "revision": "663eb381596819772fe950eaab5b7c68"
  },
  {
    "url": "pt/autores/index.html",
    "revision": "53885ddfdf933626ed44bba1cd4579f0"
  },
  {
    "url": "pt/autores/ktquez.html",
    "revision": "a1249c3f8f6f287c7dd1199f15c82a9a"
  },
  {
    "url": "pt/categorias/index.html",
    "revision": "9441a9a9f6aae75437946dadbb9bf1c7"
  },
  {
    "url": "pt/categorias/vuejs.html",
    "revision": "b9d0f1fbcfcfff0e32bdcf688af7b350"
  },
  {
    "url": "pt/contato/index.html",
    "revision": "f3f3f6302c2abed6652c73241584b6a4"
  },
  {
    "url": "pt/index.html",
    "revision": "38be16b6c9f09cc46690c9ee69f3001c"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "c9309ff8c760b84457bfef68ebace380"
  },
  {
    "url": "pt/posts/meu-primeiro-post.html",
    "revision": "9f521342c40faa4e7d349aaf4c9af826"
  },
  {
    "url": "pt/sobre/index.html",
    "revision": "0e0c912a2ebb697a35512a3b95d49083"
  },
  {
    "url": "watermark-logo.png",
    "revision": "cb69efd3c0246f905ee651b1d97697ac"
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
