
var connectableUrls;

self.addEventListener('fetch', function(event) {
  console.log(event.request);
  // for now assume all urls are connectable
  return new Response("<!DOCTYPE html><html><body>foo</body></html>");
});