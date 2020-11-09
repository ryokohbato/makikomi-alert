import { browser } from 'webextension-polyfill-ts';
import { IRuntimeInformation } from './RuntimeInformationInterface';

export const sendInfoToBackside = function (message: IRuntimeInformation)
{
  const sending = browser.runtime.sendMessage(message);
  sending.catch((err) =>
    null
  )
}
