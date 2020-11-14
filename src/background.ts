import { browser } from 'webextension-polyfill-ts'

// 結局polyfill に失敗しているじゃないか……
(browser.commands.onCommand as any).addListener(function(command:string, tab:{id: number}) {
  console.log('Command:', command);

  console.log(`typeof cmd: ${typeof(command)}, tab: ${tab} ${tab.id}, ${typeof(tab)},${typeof(tab.id)}`)
  const tabId: number = tab.id

  // コマンドはそのまま content scriptsに送信する。
  browser.tabs.sendMessage(tabId, command)
});