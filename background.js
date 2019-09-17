const SOCKETS_URL = 'chrome://net-internals/#sockets';

chrome.browserAction.onClicked.addListener(function(currentTab) {
  chrome.tabs.create({ url: SOCKETS_URL, active: false} , (newTab) => {
    chrome.tabs.executeScript(newTab.id, {
      file: 'action.js',
    }, () => {
      chrome.tabs.reload(currentTab.id);
    });
  });
});