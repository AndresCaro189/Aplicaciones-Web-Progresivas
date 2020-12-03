
const VERSION = 'v1'

self.addEventListener('install', event => {
  event.waitUntil(precache());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  // get
  if (request.method !== 'GET') {
    return;
  }

  // buscar en cache
    event.respondWith(cachedResponse(request));

  // actualizar el cache
    event.waitUntil(updateCache(request));
});

async function precache() {
    const cache = await caches.open(VERSION);
    return cache.addAll([
    './',
    './index.html',
    './js/app.js',
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg',
    './img/10.jpg',
    './img/11.jpg',
    './img/12.jpg',
    './img/hero.jpg',
    './img/logo.jpg',
    './css/estilos.css',
    './css/normalize.css',
    ]);
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}