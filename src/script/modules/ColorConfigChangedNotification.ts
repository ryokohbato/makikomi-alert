import { browser } from "webextension-polyfill-ts"
import { tabsInformation } from "./RuntimeInformationInterface";

export const colorConfigChangedNotification = function(): void
{
  browser.tabs.query({
    url: "https://twitter.com/*",
  })
  .then((allInfo) =>
  {
    allInfo.forEach((info) =>
    {
      if (typeof info.id !== 'undefined')
        browser.tabs.sendMessage(info.id, tabsInformation.colorConfigChanged);
    })
  })
}