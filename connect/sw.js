
self.addEventListener('fetch', function(event) {
  console.log(event.request);
  // for now assume all urls are connectable
  event.respondWith(
    new Response("<!DOCTYPE html><html><script>" + 
      "window.onmessage = function(e) { " + 
      "console.log(e);" +
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
  if ('foreignMessage' in event.data) {
    var foreignMessageEvent = {
      data: event.data['foreignMessage'],
      ports: event.ports,
      source: {
        postMessage: function(msg, transfer) {
          event.source.postMessage(msg, transfer);
        }
      }
    };
    onForeignMessage(foreignMessageEvent);
  }
});

function onForeignMessage(event) {
  console.log(event);
  event.source.postMessage("Response from SW");
}
