const cacheName = 'v1';

const cacheAssets = [
    'index.html',
    'css/style.css',
    'js/script.js',
    'images/logo/logo.png',
    'images/carbonara.jpeg',
    'images/gelato.jpeg',
    'images/fettuccine-alfredo.jpeg'
];



self.addEventListener('install', function(e) {
    console.log('Service Worker: Installed');
    e.waitUntil(
        caches
        .open(cacheName)
        .then(function(cache) {
            return cache.addAll(cacheAssets);
        })
    )
});


self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches
        .match(e.request)
        .then(function(res) {
            return res || fetch(e.request);
        })
    );
});