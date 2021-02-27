chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({playbackRate: 3}, function() {
    console.log('Inserting video playback to 3x');
  });

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