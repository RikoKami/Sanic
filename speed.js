let speedThree  = document.getElementById('speedThree');

chrome.storage.sync.get('playbackRate', function(data) {
  speedThree.setAttribute('value', data.playbackRate);
});


speedThree.onclick = function(element, index) {
  let playbackRate = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.querySelector("video").playbackRate = "' + playbackRate + '";'});
  });
};