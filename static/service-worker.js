const cacheVersion = 'cache-v3';
const precacheResources = [
  '/css/style.css',
  '/img/mountain1.png',
  '/fonts/Ailerons-Typeface.woff',
  '/fonts/DINCondensed-Bold.woff',
  '/offline'
];

self.addEventListener('install', event => {
  console.log('Service worker install event!');
  event.waitUntil(
    caches.open(cacheVersion)
    .then(cache => {
      return cache.addAll(precacheResources)
        .then(() =>
          self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim())
});

self.addEventListener('fetch', event => {
  // Cache only strategy
  if (isCoreGetRequest(event.request)) {
    event.respondWith(
        caches.open(cacheVersion)
        .then(cache => cache.match(event.request.url))
      )
      // Fallback
  } else if (isHtmlGetRequest(event.request)) {
    event.respondWith(
      // Save :id-pages in Cache  
      // If the :id page is in the cache, open it. Otherwise, catch.
      fetch(event.request)
      .catch(event => {
        return caches.open(cacheVersion)
          .then(cache => cache.match('/offline'))
      })
    )
  }
});

// // Save :id-pages in Cache 
// function fetchAndCache(request, cacheName) {
//   return fetch(request)
//     .then(response => {
//       if (!response.ok) {
//         throw new TypeError('Bad response status');
//       }
//       // Use clone if response is already used
//       const clone = response.clone()
//       caches.open(cacheName).then((cache) => cache.put(request, clone))
//       return response
//     })
// }

/**
 * Checks if a request is a GET and HTML request
 *
 * @param {Object} request        The request object
 * @returns {Boolean}            Boolean value indicating whether the request is a GET and HTML request
 */
function isHtmlGetRequest(request) {
  return request.method === 'GET' && (request.headers.get('accept') !== null && request.headers.get('accept').indexOf('text/html') > -1);
}

/**
 * Checks if a request is a core GET request
 *
 * @param {Object} request        The request object
 * @returns {Boolean}            Boolean value indicating whether the request is in the core mapping
 */
function isCoreGetRequest(request) {
  return request.method === 'GET' && precacheResources.includes(getPathName(request.url));
}

/**
 * Get a pathname from a full URL by stripping off domain
 *
 * @param {Object} requestUrl        The request object, e.g. https://www.mydomain.com/index.css
 * @returns {String}                Relative url to the domain, e.g. index.css
 */
function getPathName(requestUrl) {
  const url = new URL(requestUrl);
  return url.pathname;
}