// Service Worker for performance optimization
const CACHE_NAME = "ynyesto-portfolio-v1";
const STATIC_CACHE = "static-v1";
const DYNAMIC_CACHE = "dynamic-v1";

// Static assets to cache (relative paths)
const STATIC_ASSETS = [
  "/",
  "/favicon.ico",
  "/favicon.svg",
  "/ethereum.svg",
  "/ynyesto.jpg",
  "/bitchill.svg",
  "/ethglobal-negative.svg",
  "/ethglobal-negative-cropped.svg",
  "/ethglobal.svg",
  "/chainlink.svg",
  "/aave.svg",
  "/uniswap.svg",
  "/solidity.svg",
  "/rsk.svg",
  "/rsk_black.svg",
  "/oz-logo-whitebg.svg",
  "/trg-logo.svg",
  "/vercel.svg",
  "/next.svg",
];

// Install event - cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }),
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});

// Fetch event - serve from cache when possible
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Skip non-GET requests
  if (request.method !== "GET") return;

  // Skip non-HTTP requests
  if (!request.url.startsWith("http")) return;

  // Handle static assets
  if (STATIC_ASSETS.some((asset) => request.url.includes(asset))) {
    event.respondWith(
      caches.match(request).then((response) => {
        return (
          response ||
          fetch(request).then((fetchResponse) => {
            return caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(request, fetchResponse.clone());
              return fetchResponse;
            });
          })
        );
      }),
    );
    return;
  }

  // Handle Next.js static assets
  if (request.url.includes("/_next/static/")) {
    event.respondWith(
      caches.match(request).then((response) => {
        return (
          response ||
          fetch(request).then((fetchResponse) => {
            return caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(request, fetchResponse.clone());
              return fetchResponse;
            });
          })
        );
      }),
    );
    return;
  }

  // Handle API requests with network-first strategy
  if (request.url.includes("/api/")) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          return caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, response.clone());
            return response;
          });
        })
        .catch(() => {
          return caches.match(request);
        }),
    );
    return;
  }

  // Default: network-first for other requests
  event.respondWith(
    fetch(request)
      .then((response) => {
        return caches.open(DYNAMIC_CACHE).then((cache) => {
          cache.put(request, response.clone());
          return response;
        });
      })
      .catch(() => {
        return caches.match(request);
      }),
  );
});
