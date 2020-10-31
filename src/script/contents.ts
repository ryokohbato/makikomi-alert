import { browser } from 'webextension-polyfill-ts';
import { detectReply } from './modules/DetectReply';
import { tabsInformation } from './modules/RuntimeInformationInterface';
import { setContentsStyle } from "./modules/SetContentsStyle";

window.addEventListener('load', () =>
{
  setContentsStyle();
  detectReply();

  browser.runtime.onMessage.addListener((message: number) =>
  {
    switch (message) {
      case tabsInformation.colorConfigChanged:
        setContentsStyle();
        break;
    
      default:
        break;
    }
  })
})
