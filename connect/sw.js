
self.addEventListener('fetch', function(event) {
  console.log(event.request);
  // for now assume all urls are connectable
  event.respondWith(
    new Response("<!DOCTYPE html><html><script>" + 
      "var port;" +
      "window.onmessage = function(e) {" + 
        "console.log(e);" +
        "if (e.source instanceof Window) {" +
          "port = e.ports[0]; " +
          "port.onmessage = function(ep) { " +
            "navigator.serviceWorker.controller.postMessage({foreignMessage: ep.data}, ep.ports); " +
          "}; " +
        "} else {" +
          "port.postMessage(e.data, e.ports);" +
        "}" +
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
          // TODO: should just reply to event.source. but that doesn't exist
          //    so for now respond to the first client
          // event.source.postMessage(msg, transfer);
          self.clients.getAll()
            .then(function(clients) {
                clients[0].postMessage(msg, transfer);
              });
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
