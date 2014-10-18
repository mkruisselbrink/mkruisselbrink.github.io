
self.version = 1;

//importScripts("service.js");
//self.update();

var connectableUrls;

self.addEventListener('fetch', function(event) {
  console.log(event.request);
  // for now assume all urls are connectable
  event.respondWith(
    new Response("<!DOCTYPE html><html><script>" + 
      "window.onmessage = function(e) { " + 
        "console.log(e); " + 
        "var port = e.ports[0]; " +
        "port.onmessage = function(ep) { " +
          "console.log(ep); " +
          "navigator.serviceWorker.controller.postMessage({cors: ep.data}, ep.ports); " +
        "}; " +
        "/*navigator.serviceWorker.controller.postMessage(e.data, e.ports);*/ };</script><body>foo</body></html>",
                 {headers: {'content-type': 'text/html'}})
  );
});

self.addEventListener('message', function(event) {
  console.log(event);
});