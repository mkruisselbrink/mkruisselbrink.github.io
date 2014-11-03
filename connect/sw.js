importScripts('service-polyfill.js');

var exposed_service = "https://mkruisselbrink.github.io/connect/services/test";

self.addEventListener('foreignconnect', function(event) {
  console.log(event);
  event.acceptConnection(event.targetUrl == exposed_service);
});

self.addEventListener('foreignmessage', function(event) {
  console.log(event);
  event.source.postMessage("Response from SW");
});

