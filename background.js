chrome.tabs.query({}, function(tabs) {
  for(var i in tabs) {
    // Filter by url if needed; that would require "tabs" permission
    // Note that injection will simply fail for tabs that you don't have permissions for
    chrome.tabs.executeScript(tabs[i].id, {file: "root.js"}, function() {
      // Now you can use normal messaging
    });
  }
});
