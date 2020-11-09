import { browser } from 'webextension-polyfill-ts';
import { IRuntimeInformation } from './RuntimeInformationInterface';

export const sendInfoListToBackside = function (message: Array<IRuntimeInformation>)
{
  return browser.runtime.sendMessage(message);
}
