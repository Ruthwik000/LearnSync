const CACHE_NAME = 'learnsync-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/favicon.svg',
  '/manifest.json'
];

// Install event - cache essential files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - network first, fallback to cache for GET requests only
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const { method, url } = request;

  // Skip caching for:
  // 1. Non-GET requests (POST, PUT, DELETE, etc.)
  // 2. Firebase/Firestore API requests
  // 3. Chrome extensions
  // 4. External APIs
  if (
    method !== 'GET' ||
    url.includes('firestore.googleapis.com') ||
    url.includes('firebase') ||
    url.includes('googleapis.com') ||
    url.includes('chrome-extension') ||
    url.startsWith('chrome-extension:')
  ) {
    // Just fetch without caching
    event.respondWith(fetch(request));
    return;
  }

  // For GET requests of app resources, use network-first strategy
  event.respondWith(
    fetch(request)
      .then((response) => {
        // Only cache successful responses
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }

        // Clone the response
        const responseToCache = response.clone();
        
        // Cache in background (don't await)
        caches.open(CACHE_NAME)
          .then((cache) => {
            cache.put(request, responseToCache);
          })
          .catch((err) => {
            // Silently fail cache operations
            console.log('Cache put failed:', err.message);
          });
        
        return response;
      })
      .catch(() => {
        // Network failed, try cache
        return caches.match(request);
      })
  );
});
