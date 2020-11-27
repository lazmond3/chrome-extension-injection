import { browser as chrome } from "webextension-polyfill-ts";

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { cancel: true };
  },
  { urls: ["*://lazmond3.github.io/clear/*.js"] },
  ["blocking"]
);
