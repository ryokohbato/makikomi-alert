import { browser } from 'webextension-polyfill-ts';
import { detectReply } from './modules/DetectReply';
import { setContentsStyle } from "./modules/SetContentsStyle";

window.addEventListener('load', () =>
{
  setContentsStyle();
  detectReply();

  browser.runtime.onMessage.addListener((message: string) =>
  {
    switch (message) {
      case "color config changed":
        setContentsStyle();
        break;
    
      default:
        break;
    }
  })
})
