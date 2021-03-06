chrome.storage.sync.get('playbackRate', function(data) {
  document.getElementById("input").setAttribute('value', data.playbackRate);
});

document.getElementById("input").onclick = function(element) {
  let playbackRate = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: `document.querySelector("video").playbackRate=${playbackRate};`});
  });
};