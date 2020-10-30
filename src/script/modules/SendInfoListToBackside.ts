import { browser } from 'webextension-polyfill-ts';
import { RuntimeInformation } from './RuntimeInformationInterface';

export const sendInfoListToBackside = function (message: Array<RuntimeInformation>)
{
  return browser.runtime.sendMessage(message);
}
