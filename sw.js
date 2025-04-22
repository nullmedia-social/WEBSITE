self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
    self.skipWaiting();
  });
  
  self.addEventListener('activate', (event) => {
    console.log('Service Worker activated');
  });
  
  self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    if (url.protocol === 'chrome-extension:') {
      event.respondWith(new Response('Blocked Chrome Extension request', {
        status: 403,
        statusText: 'Forbidden',
      }));
      return;
    }
    event.respondWith(fetch(event.request));
  });  