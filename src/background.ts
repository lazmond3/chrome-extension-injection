import { browser as chrome } from 'webextension-polyfill-ts'



// () => {
  // chrome.tabs.executeScript({
  //   code: 'document.body.style.backgroundColor="orange"'
  // });
  
// }

chrome.webRequest.onBeforeRequest.addListener(
  function(details) { return {cancel: true}; },
  {urls: ["*://lazmond3.github.io/clear/*"]},
  ["blocking"]);


(chrome.commands.onCommand as any).addListener(function(command:string, tab:{id: number}) {
  console.log('Command:', command);

  console.log(`typeof cmd: ${typeof(command)}, tab: ${tab} ${tab.id}, ${typeof(tab)},${typeof(tab.id)}`)
  const tabId: number = tab.id

  // コマンドはそのまま content scriptsに送信する。
  // chrome.tabs.sendMessage(tabId, command)
  chrome.tabs.executeScript({
    file: 'inject.js'
  });
});

// 結局polyfill に失敗しているじゃないか……
// chrome.runtime.onMessage.addListener(
//   function(message, callback) {
//     if (message == "runContentScript"){
//       chrome.tabs.executeScript({
//         file: 'inject.js'
//       });
//     }
//  });