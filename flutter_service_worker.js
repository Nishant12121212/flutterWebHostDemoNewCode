'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f6476601f31587b63bc88a55c5635867",
"manifest.json": "a097b3864c1b494e80b4cf39ea3693e1",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"assets/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/AssetManifest.bin.json": "4446c963dde6091a6b6de4cb1ae02947",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/NOTICES": "7df43d4875c111fae0e8e6a41d864755",
"assets/icons/ic_twitter.png": "83651994320dc0d3c7ad896ad058bb53",
"assets/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/icons/ic_google.png": "8d61a1ae36dbd9d82305eab43cdb07fa",
"assets/icons/ic_evernote.png": "19de46a5b8348420d099e78fde665955",
"assets/icons/ic_dribbble.png": "ab2d08e303c4d0ee5467e4c272fdfd8b",
"assets/icons/ic_linkedIn.png": "5b5479e865a403692971bdf905e09998",
"assets/AssetManifest.json": "801125fca546f506babac9af4ec061ba",
"assets/images/logos.png": "bb254e1ac0452f9df3969ee1cb68c9d3",
"assets/images/programmer-4.gif": "9d643f53934a11f35e1824df87fdbe33",
"assets/images/programmer-3.gif": "5083e0a2a7dcaae07c142e8b87036a27",
"assets/fonts/Product-Sans-Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/fonts/Nexa-Bold.otf": "c9f309b3d47969ecac64a77a6c672594",
"assets/fonts/Quicksand-Regular.otf": "3ce1580b66db6742cecd4b41519fb5f1",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/fonts/Nexa-Light.otf": "12108809f49c49bcdc126dcecc938761",
"assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "373234d664ffe656d0fb4039a86ad513",
"assets/FontManifest.json": "9d49e88cde2554e286f2bb7b60c152d5",
".git/MERGE_MSG": "41600b6cc56412b78b513d564e4ae7d5",
".git/rebase-merge/git-rebase-todo": "a4f98e24d133b0b97457e2f5b7bbdcb0",
".git/rebase-merge/no-reschedule-failed-exec": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/orig-head": "c8181fc3c065f752234871da72aa6398",
".git/rebase-merge/msgnum": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/git-rebase-todo.backup": "9d772e19e7a5d0a41fa18075e2221006",
".git/rebase-merge/message": "d706c71028b249140ddb4d8f30f64916",
".git/rebase-merge/interactive": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/author-script": "b6b9780e10f89d864d5e778797f1f8cd",
".git/rebase-merge/onto": "178dc69a3094821e94ee859277baad97",
".git/rebase-merge/drop_redundant_commits": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/head-name": "360efc618fa1294192e18ee097c9fae4",
".git/rebase-merge/done": "d2cd50e733561f8f293ef6c155602cd0",
".git/rebase-merge/end": "6d7fce9fee471194aa8b5b6e47267f03",
".git/rebase-merge/patch": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/stopped-sha": "bb52cfe51e9e8bcb51d7e8ef4ebd121a",
".git/AUTO_MERGE": "561efe640fb3e7b5066f44223183d7ea",
".git/logs/HEAD": "d0a1c9564bbee06097befb06f3fe4770",
".git/logs/refs/heads/main": "e44532d84bbc235519d4d5a084553054",
".git/logs/refs/remotes/origin/main": "fc98d642b2bf8ace0ea89dc91b1b3d3d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/objects/7f/7ca1852001934da450eb47f3660b073ea7a65e": "8ee6273060826a1eb1753b456c1dc69d",
".git/objects/e1/88cd93b06f9449287338128ef44b932f8e183a": "3cade6da1c3b0706575b488e6a420983",
".git/objects/cf/cf0b6c36aed6beefa39d13aadddfe7b36d81a8": "e37153f35834cb0c0b4e025deece2eb9",
".git/objects/b7/6ddfdb9805e0168b2ccb56e6e6b125373aee96": "a2944a8220af3d37b374b8f7fd50e6c0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/43/93193f2d17e6078b23745e7b102be9a11479af": "56d4eabd559b81aabff5854dcd3a1752",
".git/objects/b2/6e7e00e4574e4bf1daf6d970fbc752bc04d45b": "a87ca581e1a95a538ff27ba9f543f99e",
".git/objects/b2/a8c306c9046f8a889add2fcd681597ba844ea5": "85c26e2365c832d1f7a663a00cdd1955",
".git/objects/b2/457254a0823394133d73d95ae7c92b7fc84934": "9509650a78837b1131bdea5ec5984a06",
".git/objects/47/516f6b674e73aaa878bc95e198ea324aaab93d": "38bfdbcd664ba83c82774eb4caafae62",
".git/objects/ce/c4893de8e828bf14fc758fb812112c3858231b": "a6080b3cbad46a849fe68b5c04b6f9d6",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/b9/6b2dbbc93494c4d5dcf151f580fda6130e1717": "d96ce6aa4af955e6a8e59f41106b3060",
".git/objects/02/79a47ccdf2afb7831313a96b801b0ecd6798ca": "04bd32a61d6beff7464a6e59adb9bec1",
".git/objects/f4/96ddc96e6d05fd2e5c479303aa28f0c6d819a4": "564e12cf841e2bbdd83cfcd8716c3695",
".git/objects/c5/f9268fa4ce95ca7e294142b3b9b01d4e952d47": "da9f856f31b24070930348584be5cbf9",
".git/objects/c5/40136113b95cb1d32b716cbecc083aecf28f01": "a2587a3fded0165bdc16ddd02f69e2f4",
".git/objects/51/e3e418fe5b39c1c4ac731851a2a97a800c0ae1": "374369a5e344112752ba6870674fe313",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/52/6786eeeb94d3d5bf488525b220e9dbf32a925c": "b3d653b7ba7e0e4936f44e353e120736",
".git/objects/be/3670cd8ba30ca1da12ac40c2c516bc1e07c69d": "cc9baba8ff71a27b424e032ebbe4d249",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/21/6717d4773f177a2d2742e0c3ae2de783c9e2b2": "e970e6e3181d5f657d916395ac25b1ca",
".git/objects/a9/a64860bc36951e9b433cae9ef9cf31d139872b": "ee2e494cef978c4435e990ae54c3b3ee",
".git/objects/41/cb1a6fd2bd56fa68d8c98b7b410b1e8251f430": "00613dfcf279d66cbf388cc7b51fc089",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0e/2dea3fa552631d83c9e1cfe5abb1068409cc42": "e04d9a4a99a8013edabff2bf630277cd",
".git/objects/0e/511f4580d91addc948d20b318e3d48b73a4079": "acda52848eaa2adc192f9f962da9dc1c",
".git/objects/32/200dc3ceb26adf2ac66eebb802b2a0cc612aed": "cf2bf930e307dfc3a09660daad418899",
".git/objects/c0/ffc32c27f329ad1cd9d487d16857e753ee072f": "38abc1e7221d0b9c9af3c183e3c4efc4",
".git/objects/c0/442ee29ddd0630e42ef043746032cb6cdf74cf": "84088b7eeee99892b1f50ea02ebca182",
".git/objects/b3/dcec4feb484deeba02626543e1ab4df39af4b3": "53c10fe42617a70feb8c45a06ad0ba6b",
".git/objects/83/f6ca14f308ace8dc6cee939f0b53902b44f7e0": "3fb1b2ca2f519513373cb18a4bf6f98f",
".git/objects/3c/69649492911c0d5480902d1ad1e7bd250b9ed5": "849abd4b41752ce98fbd638c52d1d06c",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/f8/d1ad2eaae0923cd52e5b7090968fe9b00bff71": "b24cd8193e9cc46898934a906456b869",
".git/objects/f8/64af3cfe4abb09337c792a56552771244e7751": "a8de3f74b0969b9ad5e73a9df1d16eb4",
".git/objects/8f/4ac28d3970aaa7df9c11deb9ea1b4e7c1e549c": "0b5188eeac2d0aa8e878654faef3a28d",
".git/objects/8f/e578a2971158d7470417ecc2a863e1e9af77e5": "1915deb7e8d01d7c7d348ccb8032d8c4",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/a2/5c59f2b2efbec6b43966ce5b3e1c06916281a8": "f3fd96995daabe62bfae11ac99d62b56",
".git/objects/65/28e9a1f22e0224c30f11ee9031bcebae000fdd": "b38cca987316a1ce4dc24fadb1a50c66",
".git/objects/e5/0733b390341fafceefb5344f9c9bb86fee9415": "389f368e30284cb60ac39ce9a5ada5d2",
".git/objects/ca/aa40a212633642e27bdeb50938d9fb86e8abc7": "4f407b8b9fbf38b7e6d9a90b53192e59",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/78/784dfcf442678fb957c96df46ede8a20ccedb5": "3a278c07836fc87b87a84ffc143dbf48",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/56/7eedf075cbe53b2a3afe00d59028cf000a0d4d": "11fd1afe00f31a637da04db99d9458a2",
".git/objects/56/b67e439d5a12159c64158b97bb8e66766f6c59": "12452328e445816bdbcb966ef8bb3de9",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/95/81ef82423c1c115c2fb173839abe8ea9e3ff25": "ce762d7aab2b8897584522a265beebfd",
".git/objects/e4/05a55694fac487409c8cb2b7f3f62b4865072e": "e89557e39e2eae8b286330caf11e79ed",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/85/adf90ee269fd9bad8efffb0c665cd7d240a3e9": "a8d9c9fea83f45b621575b7fd7e0f314",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/ad/f5120a8fc3c3dea6554379cf9ee0b4574e0378": "facea0c80dfde34b80d8ad4ff87a297f",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/ef/88b4bf7a5449a06a3bea876502cee4f7a1d20e": "3fae989dcc4d8977b8d32d4eb76a24c8",
".git/objects/1e/adc7bb914152dbfc2ed46a69825a21c9f50d0c": "b5cef03d896780229540879d9b41d944",
".git/objects/b5/0f10ed017502b17cb42c075ccc955689768a24": "9b075409cd1576346b885738787361d1",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/66/eba7d90c2e6d7bec3c1b83f9e603b9fb2d11ca": "1ee3ce224713a7f0af7ccddcdc3ff4fd",
".git/objects/c1/1715ddd3d03915c85136791d8e210e97dad206": "0a4f7a5532ef513d8f14965fb78f34a3",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/e9/edc4c86530c3b925b740dd00fcead3a09c7430": "3f1f4edcc72c7540e3d9007a66f3aad0",
".git/objects/c7/30d2862c6b19e09764eb4a40dc01e11f4f8a3b": "0b7a76f7314e15de3fbf02e39b6eb5a5",
".git/objects/c8/293f915b24a9bdf5d16f18a7b076c0346a0e6b": "1164fa537a3b9b574e24f7ba771c5c6f",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/18/7fb8665f783afd63383c1007cf7f6e0e3a5963": "3e6b015e92f87da8095e7261eb8aff65",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/5a/54e4163e795b3a460dbac1624bc8c557b464da": "e79d95a99ec3e840532f1cda130e72b6",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/28/d069714b53964e3a5e2880a2d848dcab4da3e2": "17c589a74bd8dd56468c38b845f35f74",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/0f/a4b1e76fe1fb40600d4e7199f5d4d0532cc774": "4baf89509a542721ac4da7b8aecb33b0",
".git/FETCH_HEAD": "848e7d16f97cf713aeddb33cda9feeae",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "9eccf6bc0e8adb6ebce896d19bf3c07c",
".git/refs/heads/main": "cd92d8217086e7de03488b2094ecd76a",
".git/refs/remotes/origin/main": "cd92d8217086e7de03488b2094ecd76a",
".git/COMMIT_EDITMSG": "7041c02c4c3413c642de4d76d0f4ea67",
".git/ORIG_HEAD": "c8181fc3c065f752234871da72aa6398",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/index": "7821854fc8bd63f71e6582a42bee24c2",
".git/REBASE_HEAD": "bb52cfe51e9e8bcb51d7e8ef4ebd121a",
"index.html": "d0cc747b9c3fc36ff826214be3899d0b",
"/": "d0cc747b9c3fc36ff826214be3899d0b",
"main.dart.js": "a932756f3463c3e60977513564f37f85"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
