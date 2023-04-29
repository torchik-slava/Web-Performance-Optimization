// Here make implementation of service worker

const staticUrls = ["/dist/index.html", "/dist/index.js", "/dist/service-worker.js", "/dist/style.css"];
const staticCache = "static-v1";
const fetchCache = "fetch-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(staticCache).then((cache) => cache.addAll(staticUrls))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
        Promise.all(cacheNames
            .filter((cacheName) => ![staticCache, fetchCache].includes(cacheName))
            .map((cacheName) => caches.delete(cacheName))
        )
      )
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.url.startsWith(self.location.origin)) return;
  event.respondWith(
    caches.open(fetchCache).then((cache) =>
      cache.match(event.request).then(
        (response) =>
          response ||
          fetch(event.request).then((response) => {
            cache.put(event.request, response.clone());
            return response;
          })
      )
    )
  );
});
