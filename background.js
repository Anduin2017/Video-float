'use strict';
chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {
        code: 'var videoE=document.getElementsByTagName("video")[0];if(videoE!==document.pictureInPictureElement){videoE.requestPictureInPicture()}else{document.exitPictureInPicture()}'
      });
  });
});

chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        css: ["video"]
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
