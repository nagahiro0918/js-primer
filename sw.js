// workbox init setting
importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js"
);
importScripts(
    "https://unpkg.com/service-worker-updatefound-refresh-dialog@1.1.0/dist/service-worker-updatefound-refresh-dialog.umd.js"
);

workbox.core.setCacheNameDetails({ prefix: "js-primer-v1" });
workbox.googleAnalytics.initialize();
// precache
workbox.precaching.precacheAndRoute([
  {
    "url": "basic/array/index.html",
    "revision": "b86242f03739de773bbd34d574ebfa0b"
  },
  {
    "url": "basic/async/img/promise-chain.png",
    "revision": "e26f9e8ec157282aeb60810f23a52a6b"
  },
  {
    "url": "basic/async/img/then-rejected-promise.png",
    "revision": "c45405c987bb1a739850f71be6d010f0"
  },
  {
    "url": "basic/async/index.html",
    "revision": "d73873e914ec6ea20416db415d997a39"
  },
  {
    "url": "basic/class/index.html",
    "revision": "aaa033bb5e76fbb7bb396602e20e6c60"
  },
  {
    "url": "basic/comments/index.html",
    "revision": "de74f477484a990f07cd5acee7578ac1"
  },
  {
    "url": "basic/condition/index.html",
    "revision": "f0b0d265299fa3729a4001a524d59dcb"
  },
  {
    "url": "basic/data-type/index.html",
    "revision": "0cdecc38ded080230103cbc237cab7f4"
  },
  {
    "url": "basic/date/index.html",
    "revision": "cf2b0bf98a73715ef73ec40a26a0ff5a"
  },
  {
    "url": "basic/ecmascript/index.html",
    "revision": "78d1a0bdd2698689b1db863320401296"
  },
  {
    "url": "basic/error-try-catch/images/error.png",
    "revision": "dff0e4322cb06d42d699119b6f89428f"
  },
  {
    "url": "basic/error-try-catch/index.html",
    "revision": "4525b68908422725e28fa9731110ab9f"
  },
  {
    "url": "basic/error-try-catch/src/error.html",
    "revision": "359cbe7900932fac79eb321c76e104b4"
  },
  {
    "url": "basic/function-declaration/index.html",
    "revision": "51082255bdeb0d40fc0daed7a771b6dc"
  },
  {
    "url": "basic/function-scope/index.html",
    "revision": "766ce9d56abe59092c57849b806866b4"
  },
  {
    "url": "basic/function-this/index.html",
    "revision": "20bb762e9d7729a479c58b397e21399c"
  },
  {
    "url": "basic/implicit-coercion/img/JavaScript-Equality-Table.png",
    "revision": "249e75cfe1f22458bfa9fe71480a6c0d"
  },
  {
    "url": "basic/implicit-coercion/index.html",
    "revision": "60475f53b959446c9252bd5c85149e4d"
  },
  {
    "url": "basic/index.html",
    "revision": "4fee81f36f6e6daecbf8199a84362b36"
  },
  {
    "url": "basic/introduction/index.html",
    "revision": "11376c3b40f0ae550d8ed0e4dc2012a3"
  },
  {
    "url": "basic/json/index.html",
    "revision": "bcc80b7f34d0444ad8aa9cdcbb8bcfcf"
  },
  {
    "url": "basic/loop/index.html",
    "revision": "2449153d12aa73ebde8d95d8b62af601"
  },
  {
    "url": "basic/map-and-set/index.html",
    "revision": "338ab2d807e21fd6943e49dc43239a03"
  },
  {
    "url": "basic/math/index.html",
    "revision": "4ce72ccc7a67e1899edb3c4e1dc559dd"
  },
  {
    "url": "basic/object/index.html",
    "revision": "2712a31b2f1ca9dc739a72e039dd98b6"
  },
  {
    "url": "basic/operator/index.html",
    "revision": "f5210b3ebb3b79b5f7e757bf5973f890"
  },
  {
    "url": "basic/other-parts/index.html",
    "revision": "3fa8586858e2bf182412fbe51cbe3ef9"
  },
  {
    "url": "basic/prototype-object/img/object-prototype.png",
    "revision": "6bbe9c151a73ec89ed45606a0b42975f"
  },
  {
    "url": "basic/prototype-object/index.html",
    "revision": "58fbf22449a701c742ada3857399c9e4"
  },
  {
    "url": "basic/read-eval-print/img/syntax-error.png",
    "revision": "889dfb7dec547bc8bde6fed9566d204f"
  },
  {
    "url": "basic/read-eval-print/index.html",
    "revision": "0a0bc31d9181909b79e2c18fb055aaa1"
  },
  {
    "url": "basic/read-eval-print/src/example/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error-typo/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/runtime-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/statement-expression/index.html",
    "revision": "36aa5f045fb6fae14877e18841e86321"
  },
  {
    "url": "basic/string-unicode/img/codeunit-codepoint-table.png",
    "revision": "7d065a8e65d944b1898b9de5e8d1e07e"
  },
  {
    "url": "basic/string-unicode/img/emoji-codeunit-codepoint-table.png",
    "revision": "6665ae16a9f3b2bfee3d28930988f382"
  },
  {
    "url": "basic/string-unicode/img/extenal-code-and-internal-code.png",
    "revision": "81bdae3abbfa82c8a14ce1d961bab2e5"
  },
  {
    "url": "basic/string-unicode/index.html",
    "revision": "332bbd0bccd5b476db83a4c88b525ecc"
  },
  {
    "url": "basic/string/index.html",
    "revision": "a74301c32c9c3e73fb3998f8a8b663d4"
  },
  {
    "url": "basic/variables/index.html",
    "revision": "222012be03763f5c0810feecceed9bc0"
  },
  {
    "url": "basic/wrapper-object/index.html",
    "revision": "8b5ab03207d6ee3b1e8784375049ad10"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.eot",
    "revision": "25a32416abee198dd821b0b17a198a8f"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.svg",
    "revision": "d7c639084f684d66a1bc66855d193ed8"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.ttf",
    "revision": "1dc35d25e61d819a9c357074014867ab"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff",
    "revision": "c8ddf1e5e5bf3682bc7bebf30f394148"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff2",
    "revision": "e6cf7c6ec7c2d6f670ae9d762604cb0b"
  },
  {
    "url": "gitbook/fonts/fontawesome/FontAwesome.otf",
    "revision": "5dc41d8fe329a22fa1ee9225571c843e"
  },
  {
    "url": "gitbook/gitbook-plugin-anchors/plugin.css",
    "revision": "45deda85e7ceaacadb6a51c17248ad1c"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/fontsettings.js",
    "revision": "fab8f6412ce18bb367635b1bcae503ca"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/website.css",
    "revision": "056a6db3eef3553a78f3b7e02356b2e7"
  },
  {
    "url": "gitbook/gitbook-plugin-ga/plugin.js",
    "revision": "8b0d0bfffa07cfd2675fffb1b7b6e6f4"
  },
  {
    "url": "gitbook/gitbook-plugin-github-issue-feedback/plugin.js",
    "revision": "096a3a5838459d91e482dff2e1230c84"
  },
  {
    "url": "gitbook/gitbook-plugin-highlight/ebook.css",
    "revision": "fa203ae16ad9f01f4d20061fb9e7a6cc"
  },
  {
    "url": "gitbook/gitbook-plugin-highlight/website.css",
    "revision": "acce01e3e11cbd4b3882e7732d81f954"
  },
  {
    "url": "gitbook/gitbook-plugin-js-console/console-ui.js",
    "revision": "a6dec84857f27171c034a05c23911055"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.css",
    "revision": "4e7efddf5df2ea927a186116ba2aee2b"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.js",
    "revision": "834dad580dcb5926f3b090502550f60d"
  },
  {
    "url": "gitbook/gitbook-plugin-sharing/buttons.js",
    "revision": "e7c1c051d685b9e7530c1a6675e6b119"
  },
  {
    "url": "gitbook/gitbook.js",
    "revision": "e53bf9037b1d1c9810486ef4c5493624"
  },
  {
    "url": "gitbook/icons/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/icons/icon-128x128.png",
    "revision": "b91df37069569bafccc6936d1b2e1352"
  },
  {
    "url": "gitbook/icons/icon-144x144.png",
    "revision": "e744cdec12fa24a28b40fde9b52d7695"
  },
  {
    "url": "gitbook/icons/icon-152x152.png",
    "revision": "77dac1368e193743d56106145e1c04a9"
  },
  {
    "url": "gitbook/icons/icon-192x192.png",
    "revision": "e3682439a02773056ce1bd46e6085555"
  },
  {
    "url": "gitbook/icons/icon-384x384.png",
    "revision": "2814afaf288c99d08c584b39234d3e39"
  },
  {
    "url": "gitbook/icons/icon-512x512.png",
    "revision": "fd7a37b059ccac4d7256226883672bce"
  },
  {
    "url": "gitbook/icons/icon-72x72.png",
    "revision": "406eb5ae0057f1f40b2abf9b17cd12a4"
  },
  {
    "url": "gitbook/icons/icon-96x96.png",
    "revision": "7529c23361ebe1eaba84a6cd042a9565"
  },
  {
    "url": "gitbook/images/apple-touch-icon-precomposed-152.png",
    "revision": "77dac1368e193743d56106145e1c04a9"
  },
  {
    "url": "gitbook/images/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/style.css",
    "revision": "88a3a50e3559bc577c1be0de4fcc6c6d"
  },
  {
    "url": "gitbook/theme.js",
    "revision": "176e71ac3bf185b7f08e0f6cb919f1e8"
  },
  {
    "url": "index.html",
    "revision": "089e88b164c27ee93ffe15f8d9b0d808"
  },
  {
    "url": "intro/feedback/index.html",
    "revision": "22a033f5cd5ca5c00aa74922fc923402"
  },
  {
    "url": "intro/goal/index.html",
    "revision": "d618cb3cb7faa502de5f79b1e6b9d471"
  },
  {
    "url": "intro/preparation/index.html",
    "revision": "81ff8cdfb3f92754f4a9bf7e5212598a"
  },
  {
    "url": "landing/css/style.css",
    "revision": "026290c57783f482c4226e004e2279e5"
  },
  {
    "url": "landing/img/cover.png",
    "revision": "fec746cff0a8b4a9fb4193d4af3d534f"
  },
  {
    "url": "landing/img/js-primer.png",
    "revision": "19d98be248101b2685bb2a74d510890f"
  },
  {
    "url": "landing/img/repo-actions-watch.png",
    "revision": "4b4cd63c1bad3861502d3127c2a2d0a2"
  },
  {
    "url": "landing/index.html",
    "revision": "5b4dbb28c5d5b6cf2a29f573c651c908"
  },
  {
    "url": "use-case/ajaxapp/display/img/fig-1.png",
    "revision": "15072f06aa7fd4d5fbce148bc2db975f"
  },
  {
    "url": "use-case/ajaxapp/display/index.html",
    "revision": "91be9f47f535c8c2b02f4c75552025fc"
  },
  {
    "url": "use-case/ajaxapp/display/src/index.html",
    "revision": "e1df96c10be2693de3909e98d272fd31"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/img/fig-1.png",
    "revision": "529c6091a9875e4151bbd301a9eeaeee"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/index.html",
    "revision": "d5c6e1b3220de43066a2822660cadfe4"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/src/index.html",
    "revision": "937f44b83967231567c263b6c874461e"
  },
  {
    "url": "use-case/ajaxapp/index.html",
    "revision": "2f45c10fb576793c444b473cc8c84c7d"
  },
  {
    "url": "use-case/ajaxapp/promise/img/fig-1.png",
    "revision": "97b1897743ee44e2fd8a9315a7af15eb"
  },
  {
    "url": "use-case/ajaxapp/promise/index.html",
    "revision": "12bf06c367efb001a791c9a207c6e4be"
  },
  {
    "url": "use-case/ajaxapp/promise/src/index.html",
    "revision": "4e2eb4689531394ba40b6dc8932f2809"
  },
  {
    "url": "use-case/ajaxapp/src/index.html",
    "revision": "4e2eb4689531394ba40b6dc8932f2809"
  },
  {
    "url": "use-case/ajaxapp/xhr/img/fig-1.png",
    "revision": "30ae672fc36c3cf614eea13ea84dca42"
  },
  {
    "url": "use-case/ajaxapp/xhr/img/fig-2.png",
    "revision": "37814c55beb033fe5d7d40c0b45afe91"
  },
  {
    "url": "use-case/ajaxapp/xhr/index.html",
    "revision": "0476b15c890a8c394530c0a2139bfe78"
  },
  {
    "url": "use-case/ajaxapp/xhr/src/index.html",
    "revision": "d86dd5f8bd529e577d5ed6708204e386"
  },
  {
    "url": "use-case/index.html",
    "revision": "fc29005b5091d58a1119a982cebd535e"
  },
  {
    "url": "use-case/module/index.html",
    "revision": "beec3fc4839bd32d79981c41c4bcfe22"
  },
  {
    "url": "use-case/nodecli/argument-parse/index.html",
    "revision": "ad2cb55c436621b0ae33b6c571015964"
  },
  {
    "url": "use-case/nodecli/helloworld/index.html",
    "revision": "8f75cffcc332fca7bbefe6562444f16f"
  },
  {
    "url": "use-case/nodecli/index.html",
    "revision": "a07e303da578b406e9d1f2f0714c03db"
  },
  {
    "url": "use-case/nodecli/md-to-html/index.html",
    "revision": "23ac48eae58fb035daf4eab1d1b2f384"
  },
  {
    "url": "use-case/nodecli/read-file/index.html",
    "revision": "48ed0ca96e5662a9d5923fc8477f193d"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/index.html",
    "revision": "682123c33643e840fe39ef07899b9bd5"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/src/test/fixtures/expected.html",
    "revision": "ec52b9890d8354b4021e271bc7db4cf8"
  },
  {
    "url": "use-case/setup-local-env/index.html",
    "revision": "1c4a4656b0f2e65c8d5ea0ba08535aa5"
  },
  {
    "url": "use-case/todoapp/app-structure/img/todo-html.png",
    "revision": "2ff1c70fe934bef3d24ff96b72af6987"
  },
  {
    "url": "use-case/todoapp/app-structure/index.html",
    "revision": "e69d33492155a02a168a6020d017b05f"
  },
  {
    "url": "use-case/todoapp/app-structure/todo-html/index.html",
    "revision": "05d2df3f89ce04ee02638e4910988282"
  },
  {
    "url": "use-case/todoapp/entrypoint/first-entry/index.html",
    "revision": "83221ab72b7b2483f8aff1b9df157a42"
  },
  {
    "url": "use-case/todoapp/entrypoint/img/first-entry.png",
    "revision": "d3d61ffa5bef6fbdc7ba616f01ec6520"
  },
  {
    "url": "use-case/todoapp/entrypoint/index.html",
    "revision": "d167b2da5ed9eafb719d911c2cbdd662"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-entry/index.html",
    "revision": "83221ab72b7b2483f8aff1b9df157a42"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-scope/index.html",
    "revision": "d5c00c9e922d01a9b80f83b1411c0e0e"
  },
  {
    "url": "use-case/todoapp/event-model/event-emitter/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/event-model/index.html",
    "revision": "d2bd2b65eab1297c4862231cc4346a80"
  },
  {
    "url": "use-case/todoapp/final/create-view/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/final/final/index.html",
    "revision": "09db0bd1e92afc16ee0cd27da971e44a"
  },
  {
    "url": "use-case/todoapp/final/index.html",
    "revision": "33ab8ff0af91034134be90dce74034a2"
  },
  {
    "url": "use-case/todoapp/final/more/index.html",
    "revision": "09db0bd1e92afc16ee0cd27da971e44a"
  },
  {
    "url": "use-case/todoapp/form-event/add-todo-item/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/form-event/img/add-todo-item.png",
    "revision": "044faab6418bb0d5c4a50d43be55a0ac"
  },
  {
    "url": "use-case/todoapp/form-event/img/form-event.png",
    "revision": "a193d8abc60dcc1f78c117af7a23a946"
  },
  {
    "url": "use-case/todoapp/form-event/index.html",
    "revision": "7c01024d7bac50217c9ea10527c0d3a8"
  },
  {
    "url": "use-case/todoapp/form-event/prevent-event/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/index.html",
    "revision": "f07f73375084312d6ab1a7689a869b22"
  },
  {
    "url": "use-case/todoapp/update-delete/add-checkbox/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/update-delete/delete-feature/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/update-delete/img/input-checkbox.png",
    "revision": "44920eba3f5737a49e9cc4c0893c44dd"
  },
  {
    "url": "use-case/todoapp/update-delete/index.html",
    "revision": "12ff14c619be6d168c7e0eed0c0cd8c9"
  },
  {
    "url": "use-case/todoapp/update-delete/input-checkbox/index.html",
    "revision": "9528b6b1e9c5c6c029843537ea4121f5"
  },
  {
    "url": "use-case/todoapp/update-delete/update-feature/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  }
]);