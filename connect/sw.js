
self.version = 1;

//importScripts("service.js");
//self.update();

var connectableUrls;

self.addEventListener('fetch', function(event) {
  console.log(event.request);
  // for now assume all urls are connectable
  event.respondWith(
    new Response("<!DOCTYPE html><html><script>window.onmessage = function(e) { console.log(e); };</script><body>foo</body></html>",
                 {headers: {'content-type': 'text/html'}})
  );
});