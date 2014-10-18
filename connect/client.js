
navigator.connect = function(url) {
  var iframe = document.createElement('iframe');
  //iframe.style.display = 'none';
  var p = new Promise(function(resolve, reject) {
    iframe.onload = function(event) {
      console.log("loaded");
      reject('foo');
    };
  });
  iframe.setAttribute('src', url);
  document.body.appendChild(iframe);
  return p;
};
