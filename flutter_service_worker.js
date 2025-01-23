'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "56004079d74474cca8b7c19480a13367",
"assets/AssetManifest.bin.json": "9e0a7c467f6382b9c21bf21f6710f2dc",
"assets/AssetManifest.json": "437730abcf4e19493f7e8a199f5ee3d1",
"assets/assets/audio/Catch.mp3": "aebb81ea7d99860801ed7575ccb450e9",
"assets/assets/audio/Click.wav": "8f8a8b98c655870f6b0502069cc630bc",
"assets/assets/audio/Game.mp3": "c9835f028bb7b201ff941b457c95e518",
"assets/assets/audio/Menu.mp3": "3f61fc0181789b3ade697b32ea62e04b",
"assets/assets/audio/uh.mp3": "3279e799bb4884053af61ef42632c93f",
"assets/assets/images/anggur.png": "bf9ba9cf7dfcc243a3913695e414c8ae",
"assets/assets/images/apple.png": "ff4c70f32fc186785da545a918d29183",
"assets/assets/images/back.png": "1a84d4880040cda459406d035743ec37",
"assets/assets/images/background_low.png": "61f1051f12cc31893d719bfbdf337c06",
"assets/assets/images/banana.png": "5b621cdf2d5d63b8f71710fa1ddac935",
"assets/assets/images/bom.png": "d6b394101f3bfd4e53eb3b55b7932abd",
"assets/assets/images/cherry.png": "4eafa3be51e6e62a56773ae8ee693bdd",
"assets/assets/images/dev.gif": "88a784c51cd7de31b83ec2742c299966",
"assets/assets/images/download.jpeg": "9eda91c3e46a92f563269b06b2c0b3d9",
"assets/assets/images/game.gif": "5254a3d069f19e6d41be7acff41fd3d5",
"assets/assets/images/jeruk.png": "8a86862baf1fe3a5651e7917adec5518",
"assets/assets/images/kotak.png": "afc5f5ad7f3f9f64c0613e6003668b22",
"assets/assets/images/life.png": "b0a96d27d8ab4b5dffeb81b3e1d44b22",
"assets/assets/images/loading.gif": "d9f21515b1e38d83e94fdbce88f623b6",
"assets/assets/images/mangga.png": "71579f3d4dd9e5d2492984373d59c9ef",
"assets/assets/images/melon.png": "f48c959e1ee331124049bc7f94be2735",
"assets/assets/images/menu.jpg": "bd8b552e56b195b22efda0297eae7f4a",
"assets/assets/images/nanas.png": "97b779e3ed1792a31b73caad9304247c",
"assets/assets/images/pantai.jpg": "64125092b277c0eae8d07207bd289cd9",
"assets/assets/images/pear.png": "a595ee9f65d2845d9261cbc60c45fb08",
"assets/assets/images/restart.png": "c6ad1bde67a95140419a6b2401fb3ff5",
"assets/assets/images/rules.png": "9e5404d453df2107aa61dc716303128b",
"assets/assets/images/semangka.png": "5b0b9086eb3af6dfcd235f6ff70b57ac",
"assets/assets/images/start.png": "55841d34acb314533ef11acb337510e6",
"assets/assets/images/stroberi.png": "d95bde40afab3d20ef1570bc56c3bfca",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "213ead556766ccafb782b56044fcddaf",
"assets/NOTICES": "25462290a5838a11581a634d7ba8d065",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "32d4aa3eaa7bb03980e10fb9e8881927",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c8a8822411a77c19abb6c81f4cf086a0",
"/": "c8a8822411a77c19abb6c81f4cf086a0",
"main.dart.js": "66b59487fb704d584d3fec93ceb8c80e",
"manifest.json": "245e48787fb875171708d6c0624917e7",
"version.json": "5ddd8f2ea81de6078e47c425d8125e69"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
