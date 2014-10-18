
navigator.connect = function(url) {
  var slashIdx = url.indexOf('/', 10);
  var origin = url.substr(0, slashIdx);
  var iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  var p = new Promise(function(resolve, reject) {
    iframe.onload = function(event) {
      console.log("loaded");
      var channel = new MessageChannel();
      iframe.contentWindow.postMessage('connect', origin, [channel.port2]);
      resolve(channel.port1);
    };
  });
  iframe.setAttribute('src', url);
  document.body.appendChild(iframe);
  return p;
};
