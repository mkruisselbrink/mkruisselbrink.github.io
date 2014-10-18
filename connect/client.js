
navigator.connect = function(url) {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', url);
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
  var p = new Promise(function(resolve, reject) {
    reject('foo');
  });
  return p;
};
