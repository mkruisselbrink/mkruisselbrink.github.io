
self.version = 1;

//importScripts("service.js");
//self.update();

var connectableUrls;

self.addEventListener('fetch', function(event) {
  console.log(event.request);
  // for now assume all urls are connectable
  event.respondWith(
    new Response("<!DOCTYPE html><html><script>window.onmessage = function(e) { console.log(e); navigator.serviceWorker.controller.postMessage(e.data, e.ports); };</script><body>foo</body></html>",
                 {headers: {'content-type': 'text/html'}})
  );
});

self.addEventListener('message', function(event) {
  console.log(event);
  
  if (event.data == 'connect') {
    var port = event.ports[0];
    console.log(port);
    port.onmessage = function(e) { console.log(e); };
    port.postMessage('welcome');
  }
});