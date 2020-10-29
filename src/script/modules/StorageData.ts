import { browser } from 'webextension-polyfill-ts';

export const setInitial = function(): void
{
  browser.runtime.onInstalled.addListener(() =>
  {
    browser.storage.local.set({
      "checkmark-color--default": "#86C166",
      "alertmark-color--default": "#FF0000",
      "alert-border--default": "#FF79C6",
      "checkmark-color": "#86C166",
      "alertmark-color": "#FF0000",
      "alert-border": "#FF79C6",
    })
  })
}

export const setData = function(data: Array<{key: string, value: string}>): void
{
  data.forEach(x =>
    {
      browser.storage.local.set({[x.key]: x.value})
        .catch(err =>
          {
            console.log(err);
          })
    })
}

export const getData = function(key: Array<string>)
{
  return browser.storage.local.get(key);
}