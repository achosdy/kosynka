'use strict';

const CACHE_NAME = 'kosynka-static-v1.0.0';
const APP_SHELL = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.webmanifest',
  './assets/icons/icon-32.png',
  './assets/icons/icon-64.png',
  './assets/icons/icon-128.png',
  './assets/icons/icon-180.png',
  './assets/icons/icon-192.png',
  './assets/icons/icon-256.png',
  './assets/icons/icon-512.png',
  './assets/icons/icon-maskable-512.png',
  './assets/icons/apple-touch-icon.png',
  './assets/backgrounds/winx.webp',
  './assets/backgrounds/pokemon.webp',
  './assets/backgrounds/minecraft.webp',
  './assets/backgrounds/halloween.webp',
  './assets/backgrounds/christmas.webp',
  './assets/backgrounds/formula1.webp',
  './assets/backgrounds/hellokitty.webp',
  './assets/backgrounds/pirates.webp',
  './assets/backgrounds/chernobyl.webp',
  './assets/thumbs/winx.webp',
  './assets/thumbs/pokemon.webp',
  './assets/thumbs/minecraft.webp',
  './assets/thumbs/halloween.webp',
  './assets/thumbs/christmas.webp',
  './assets/thumbs/formula1.webp',
  './assets/thumbs/hellokitty.webp',
  './assets/thumbs/pirates.webp',
  './assets/thumbs/chernobyl.webp'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy));
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return response;
      });
    })
  );
});
