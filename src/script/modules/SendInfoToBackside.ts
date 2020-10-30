import { browser } from 'webextension-polyfill-ts';
import { RuntimeInformation } from './RuntimeInformationInterface';

export const sendInfoToBackside = function (message: RuntimeInformation)
{
  const sending = browser.runtime.sendMessage(message);
  sending.catch((err) =>
    null
  )
}
