import { browser } from 'webextension-polyfill-ts';
import { IRuntimeInformation } from './RuntimeInformationInterface';

export const handleInfo = function(handle: (message: IRuntimeInformation) => void): void
{
  browser.runtime.onMessage.addListener(async function(message: IRuntimeInformation, sender)
  {
    handle(message);
  });
}

export const handleInfoList = function(handle: (message: Array<IRuntimeInformation>) => void): void
{
  browser.runtime.onMessage.addListener(async function(message: Array<IRuntimeInformation>, sender)
  {
    handle(message);
  });
}