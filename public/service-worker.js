const cacheName = 'cache-v2';
const precacheResources = [
  '/',
  '/css/style.css'
];

self.addEventListener('install', event => {
  console.log('Service worker install event!');
  event.waitUntil(
    caches.open(cacheName)
    .then(cache => {
      return cache.addAll(precacheResources);
    })
  );
});

self.addEventListener('activate', event => {
  console.log('Service worker activate event!');
  // Delete old versions
  var cacheWhitelist = ['cache-v2'];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {


  // if (isCoreGetRequest(event.request)) {
  console.log('Core get request: ', event.request.url);
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );


  //   event.respondWith(
  //     caches.open(cacheName)
  //     .then(cache => cache.match(event.request.url))
  //   )
  // } else if (isHtmlGetRequest(event.request)) {
  //   console.log('html get request', event.request.url)
  // }



});



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