import { browser } from 'webextension-polyfill-ts';
import { RuntimeInformation } from './RuntimeInformationInterface';

export const handleInfo = function(handle: (message: RuntimeInformation) => void): void
{
  browser.runtime.onMessage.addListener(async function(message: RuntimeInformation, sender)
  {
    handle(message);
  });
}

export const handleInfoList = function(handle: (message: Array<RuntimeInformation>) => void): void
{
  browser.runtime.onMessage.addListener(async function(message: Array<RuntimeInformation>, sender)
  {
    handle(message);
  });
}