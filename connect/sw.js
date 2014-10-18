self.addEventListener('fetch', function(event) {
  console.log(event.request);
  // for now assume all urls are connectable
  event.respondWith(
    new Response("<!DOCTYPE html><html><script>" + 
      "window.onmessage = function(e) { " + 
        "var port = e.ports[0]; " +
        "port.onmessage = function(ep) { " +
          "navigator.serviceWorker.controller.postMessage({foreignMessage: ep.data}, ep.ports); " +
        "}; " +
      "};</script></html>",
                 {headers: {'content-type': 'text/html'}})
  );
});

self.addEventListener('message', function(event) {
  console.log(event);
});