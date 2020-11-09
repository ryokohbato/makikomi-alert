import { browser } from 'webextension-polyfill-ts';
import { detectReply } from './modules/DetectReply';
import { ITabsInformation } from './modules/RuntimeInformationInterface';
import { setContentsStyle } from "./modules/SetContentsStyle";

window.addEventListener('load', () =>
{
  setContentsStyle();
  detectReply();

  browser.runtime.onMessage.addListener((message: number) =>
  {
    switch (message) {
      case ITabsInformation.colorConfigChanged:
        setContentsStyle();
        break;
    
      default:
        break;
    }
  })
})
