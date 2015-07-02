document.addEventListener('DOMContentLoaded', function() {
  var flvuIndicator = document.getElementById('flvu-indicator');
  flvuIndicator.style.display = 'inline';
  chrome.tabs.getSelected(null, function(tab) {
      var request = new XMLHttpRequest();
    request.open('POST', 'http://fl.vu/links?fullUrl='+tab.url+'&customAlias=', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.onreadystatechange = function() {
      var flvuUrl;
      if (request.readyState == 4) {
          // Success!
          var data = JSON.parse(request.responseText);
          shortUrl = "http://fl.vu/"+data.shortenedUrl;
          flvuIndicator.innerHTML = '<input id="flvu-url" type="text" onmouseup="return false;" value="'+shortUrl+'" />';
          flvuUrl = document.getElementById('flvu-url');
          flvuUrl.focus();
          flvuUrl.select();
        }
        else
          flvuIndicator.innerHTML = request.statusText;

    };
    request.send();
  });
});
