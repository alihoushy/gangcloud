
chrome.runtime.onMessage.addListener(function(request) {
     chrome.tabs.query({}, function(tabs) {
          for (let tab of tabs) {
               if(!tab.url || !tab.url.startsWith('https://soundcloud.com/'))
                    return;

               // code here
          }
     });
});
