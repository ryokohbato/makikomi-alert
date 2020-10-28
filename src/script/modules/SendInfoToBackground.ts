import { browser } from 'webextension-polyfill-ts';
import { RuntimeInformation } from './RuntimeInformationInterface';

export const sendInfoToBackground = function (message: RuntimeInformation)
{
  const sending = browser.runtime.sendMessage(message);
  sending.catch((err) =>
    console.log(err)
  )
}
