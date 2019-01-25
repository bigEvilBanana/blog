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
    "revision": "f114dabac9a8b27ccaec63635c0e3a3d"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "9e992285ca2882e9951282fd5390ebac"
  },
  {
    "url": "assets/css/0.styles.acf13bf3.css",
    "revision": "07dbfbd05617d18c3b5e55798bec63b1"
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
    "url": "assets/js/11.d481ae79.js",
    "revision": "baa8de00a33fe29cf8405d228e04687d"
  },
  {
    "url": "assets/js/12.a7e0babd.js",
    "revision": "a5cab0a0522cebeb02042cca1e9e8c26"
  },
  {
    "url": "assets/js/13.088b632b.js",
    "revision": "94e01f5214907b0ff8d1de05f66c00e5"
  },
  {
    "url": "assets/js/14.d835b9aa.js",
    "revision": "d7576983ac69a0ddfefc1bfecb939330"
  },
  {
    "url": "assets/js/15.e9a03bfb.js",
    "revision": "a39f694c7dbc3023fbdcbfa0d44b9747"
  },
  {
    "url": "assets/js/16.71b9df72.js",
    "revision": "fb5301ae6b2ea7673a963595517a72c5"
  },
  {
    "url": "assets/js/17.09b51682.js",
    "revision": "a75188616827c606e246f3d321097aea"
  },
  {
    "url": "assets/js/18.b8f5947d.js",
    "revision": "fd7c3268a9791d8283921bf0c3e9552e"
  },
  {
    "url": "assets/js/19.0176bee7.js",
    "revision": "017d37a108cb23ddd469ecb55a20a263"
  },
  {
    "url": "assets/js/2.51ee2acf.js",
    "revision": "5ec23235b98feb3ac0a694a1ac2e032d"
  },
  {
    "url": "assets/js/20.29422eba.js",
    "revision": "b75e4bcc03c6039615b91d6bfb7f2986"
  },
  {
    "url": "assets/js/21.76985191.js",
    "revision": "86ffadc2393325d5c700489a9752112f"
  },
  {
    "url": "assets/js/22.e1da304a.js",
    "revision": "0128859a24aefd9695dd67c839606a84"
  },
  {
    "url": "assets/js/23.f00dd64c.js",
    "revision": "bdfac7e64563bcc24f85d2858519de06"
  },
  {
    "url": "assets/js/24.f52de1dd.js",
    "revision": "600844f3b06bc3422199aa5e89822106"
  },
  {
    "url": "assets/js/25.e66b187f.js",
    "revision": "3a074d1d6d5dc44b121539b4488cd14f"
  },
  {
    "url": "assets/js/26.3fb35569.js",
    "revision": "329f12f7715ccdd3c167d714fad61338"
  },
  {
    "url": "assets/js/27.3f6c2cb3.js",
    "revision": "19dd0a3f41bba07fae1d653574277ff9"
  },
  {
    "url": "assets/js/28.823e78e7.js",
    "revision": "471524f3f7f62912574947a1e134eff8"
  },
  {
    "url": "assets/js/29.f36babf2.js",
    "revision": "9740c66b4ee48522e3fe1893129c1ea1"
  },
  {
    "url": "assets/js/3.af6a48a7.js",
    "revision": "3730c86614b0c5c60f1de9435ef391ec"
  },
  {
    "url": "assets/js/30.124c9eb3.js",
    "revision": "a562bcac399476d173ec3dd9becb791f"
  },
  {
    "url": "assets/js/31.1542850d.js",
    "revision": "661e917b8dad3cf933fca819866f8506"
  },
  {
    "url": "assets/js/32.452ef321.js",
    "revision": "0bd210919fe6aacbf3d51489bb4a7493"
  },
  {
    "url": "assets/js/33.77943b59.js",
    "revision": "b4aef47b6027308205a38a3e516b5e0c"
  },
  {
    "url": "assets/js/34.9757fa94.js",
    "revision": "b84d9740afcae72b62da8b400246fc1d"
  },
  {
    "url": "assets/js/35.2405822a.js",
    "revision": "5a556788f215e5cf54bea3961522226e"
  },
  {
    "url": "assets/js/36.17a34eff.js",
    "revision": "14369fd34f802ebf656adc504763e384"
  },
  {
    "url": "assets/js/37.0210ca27.js",
    "revision": "94bf596ad13d500f84754626bc8ca28b"
  },
  {
    "url": "assets/js/38.751ae4cd.js",
    "revision": "df149f7618bc06a712dd2d9925ecb631"
  },
  {
    "url": "assets/js/39.307d24e1.js",
    "revision": "b8306c26c63c19063b610b25da5b035d"
  },
  {
    "url": "assets/js/4.1b5a4da7.js",
    "revision": "6d77e7127df9aa1be43f665de6aa2c28"
  },
  {
    "url": "assets/js/40.ff80107e.js",
    "revision": "e43d5f0dcbe0509a2b356794835c4dc0"
  },
  {
    "url": "assets/js/41.29364d16.js",
    "revision": "eff81ad7bd800834d42a392ac0ee993d"
  },
  {
    "url": "assets/js/42.de37f473.js",
    "revision": "2075edb834e5961be7962ee98710397e"
  },
  {
    "url": "assets/js/43.bbf0da37.js",
    "revision": "54246c60841e43896d23faad1fa8eaa3"
  },
  {
    "url": "assets/js/44.cc3b34db.js",
    "revision": "7e2a976beb80ef86b5de4d86df32f097"
  },
  {
    "url": "assets/js/45.6d584bcf.js",
    "revision": "0225c783f11de842597c78f3e4ecbdc7"
  },
  {
    "url": "assets/js/46.7408b8fb.js",
    "revision": "d2d83cd2f431d1b47e41085570498df2"
  },
  {
    "url": "assets/js/47.e6f3b923.js",
    "revision": "f2556c95bd56e89adac910b6da81ee9f"
  },
  {
    "url": "assets/js/48.ed7eb596.js",
    "revision": "ba91241af25d92050c8b2370d91e9a40"
  },
  {
    "url": "assets/js/49.05e983ab.js",
    "revision": "d1d3393a9ca38071b2719f17d3962c16"
  },
  {
    "url": "assets/js/5.b4d8eede.js",
    "revision": "13227383ab692e12f2c2e7753c923b05"
  },
  {
    "url": "assets/js/50.2fd5b8ba.js",
    "revision": "f3b459991614f55c06ba90e8cbeb3dbe"
  },
  {
    "url": "assets/js/51.fa7c92ad.js",
    "revision": "84d2ddd14d67fa5c2b96a2a0d9e5dc0c"
  },
  {
    "url": "assets/js/52.03cd1820.js",
    "revision": "9bd98ff9f3bfc84e0dfabca64b607267"
  },
  {
    "url": "assets/js/53.47f74633.js",
    "revision": "2e45f3ed897ecd815ee2068c44f57ab0"
  },
  {
    "url": "assets/js/6.09a96a3b.js",
    "revision": "178b536106d0e0e8d2cde29d951a1cf3"
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
    "url": "assets/js/app.02530a98.js",
    "revision": "e2a4c323bb352b53286c1c5fa204706f"
  },
  {
    "url": "authors/index.html",
    "revision": "f7b5cb8f96b5bc8508267d1ccc754278"
  },
  {
    "url": "authors/ktquez.html",
    "revision": "3e6edcd8535d63e731f6d8600c17a8ef"
  },
  {
    "url": "autores/ktquez.png",
    "revision": "4988ac8116c5ccf8bccfad31fd996fea"
  },
  {
    "url": "categories/index.html",
    "revision": "de96214cff311b44b9ba3bde0e8f463f"
  },
  {
    "url": "categories/vuejs.html",
    "revision": "8f4a4d92ccb8d98fef8825df52ad1f99"
  },
  {
    "url": "contact/index.html",
    "revision": "9540ac0707cf27677f7d536f4e81e378"
  },
  {
    "url": "es/autores/index.html",
    "revision": "a0cfaf068964beb010101bb372e48758"
  },
  {
    "url": "es/autores/ktquez.html",
    "revision": "ed77fc665ad611b6cbd7fa6c9bb4fc4d"
  },
  {
    "url": "es/categorias/index.html",
    "revision": "2e550dc6693371b521544230597b1e73"
  },
  {
    "url": "es/categorias/vuejs.html",
    "revision": "57328785aa9aa71ddf1b043db93b47bd"
  },
  {
    "url": "es/contacto/index.html",
    "revision": "82d438a5cdd2a371045f87bffd80bf91"
  },
  {
    "url": "es/index.html",
    "revision": "c951bb0d9e5c6155027fa61192c525ec"
  },
  {
    "url": "es/posts/index.html",
    "revision": "f8d820d8a89b9fc82d336e1ea5fb95c0"
  },
  {
    "url": "es/posts/mi-primir-post.html",
    "revision": "e64da139be50a910629d8a65049ee116"
  },
  {
    "url": "es/sobre/index.html",
    "revision": "7ee290311b1595581694b5083777901b"
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
    "revision": "621abab8ef22f17f404e0e645ef3bb5f"
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
    "revision": "3ac28e736144519537c568e3247409f3"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "3a24355dde34f7ee333f4d877d299c15"
  },
  {
    "url": "pt/autores/index.html",
    "revision": "26c6e0e2078fe87c3e2217e80a9267b0"
  },
  {
    "url": "pt/autores/ktquez.html",
    "revision": "4f7492ec54a1e9b366a727f122bbcdcb"
  },
  {
    "url": "pt/categorias/index.html",
    "revision": "86804d5979493aa3fff4f66543b1bbd6"
  },
  {
    "url": "pt/categorias/vuejs.html",
    "revision": "7b03ab5e94d4af5ec0400eddda7d82d3"
  },
  {
    "url": "pt/contato/index.html",
    "revision": "71cab7f80a4e25029b6104595e91fa52"
  },
  {
    "url": "pt/index.html",
    "revision": "8d716d90fb69311933ed7899cb5caae0"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "215a6154af559d328d7cf1f236080378"
  },
  {
    "url": "pt/posts/meu-primeiro-post.html",
    "revision": "3bb283c49123a265d5257a65e2310c45"
  },
  {
    "url": "pt/sobre/index.html",
    "revision": "3a5a431b7b730f339dd504152719432a"
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
