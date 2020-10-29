import { handleInfo } from './modules/HandleInfo';
import { sendInfoToPopup } from "./modules/SendInfoToPopup";
import { RuntimeLog } from "./modules/RuntimeLog";
import { setInitial } from "./modules/StorageData";

const backgroundLog = new RuntimeLog();

handleInfo((message) =>
{
  switch (message.type) {
    case "log":
      sendInfoToPopup(backgroundLog.Add(message))
        .catch(() =>
        {
          backgroundLog.Add({
            text: 'popup not found.',
            from: 'background',
            to: 'popup',
            time: Date.now(),
            type: 'log',
          })
        })
      break;
    
    default:
      break;
  }
});

setInitial();