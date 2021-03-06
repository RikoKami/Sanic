chrome.runtime.onInstalled.addListener(function() {
  document.getElementById("input")?.addEventListener("change", () => {
    chrome.storage.sync.set({playbackRate: document.getElementById("input")?.value}, () => {});
  })

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'www.youtube.com',  schemes: ['https']},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});