// Use a cacheName for cache versioning
var cacheName = 'v3:static';

// During the installation phase, you'll usually want to cache static assets.
self.addEventListener('install', function(e) {
    // Once the service worker is installed, go ahead and fetch the resources to make this work offline.
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll([
                './',
                './assets/logo.png',
                './assets/note.png',
                './assets/playlist1.jpg',
                './assets/playlist2.jpg',
                './assets/playlist3.jpg',
                './assets/playlist4.jpg',
                './assets/playlist5.jpg',
                './assets/playlist6.jpg',
                './assets/playlist7.jpg',
                './assets/playlist8.jpg',
                './assets/playlist9.jpg',
                './assets/track1.webp',
                './assets/track2.webp',
                './assets/track3.webp',
                './assets/track4.webp',
                './assets/track5.webp'
            ]).then(function() {
                self.skipWaiting();
            });
        })
    );
});

// when the browser fetches a URL…
self.addEventListener('fetch', function(event) {
    // … either respond with the cached object or go ahead and fetch the actual URL
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                // retrieve from cache
                return response;
            }
            // fetch as normal
            return fetch(event.request);
        })
    );
});