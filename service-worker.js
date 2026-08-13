const CACHE='japan-2026-v1';
const FILES=["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./pages/page-01.jpg", "./pages/page-02.jpg", "./pages/page-03.jpg", "./pages/page-04.jpg", "./pages/page-05.jpg", "./pages/page-06.jpg", "./pages/page-07.jpg", "./pages/page-08.jpg", "./pages/page-09.jpg", "./pages/page-10.jpg", "./pages/page-11.jpg", "./pages/page-12.jpg", "./pages/page-13.jpg", "./pages/page-14.jpg", "./pages/page-15.jpg", "./pages/page-16.jpg", "./pages/page-17.jpg", "./pages/page-18.jpg", "./pages/page-19.jpg", "./pages/page-20.jpg"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
