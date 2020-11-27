import { browser as chrome } from 'webextension-polyfill-ts'

// 結局polyfill に失敗しているじゃないか……
chrome.runtime.onMessage.addListener(
  function(message, callback) {
    if (message == "runContentScript"){
      chrome.tabs.executeScript({
        file: 'inject.js'
      });
    }
 });