import { browser } from 'webextension-polyfill-ts';
import { RuntimeInformation } from './RuntimeInformationInterface';

export const sendInfoToPopup = function (message: Array<RuntimeInformation>)
{
  return browser.runtime.sendMessage(message);
}
