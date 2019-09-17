
const SCRIPT_CONTENT = `
(function() {
  chrome.send('clearHostResolverCache');
  chrome.send('flushSocketPools');
  window.close();
})()
`;
(function(){
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.text = SCRIPT_CONTENT;
  document.body.appendChild(script);
})()