import { handleInfo } from './modules/HandleInfo';
import { sendInfoListToBackside } from "./modules/SendInfoListToBackside";
import { RuntimeLog } from "./modules/RuntimeLog";
import { setInitial } from "./modules/StorageData";

const backgroundLog = new RuntimeLog();

handleInfo((message) =>
{
  switch (message.type) {
    case "log":
      sendInfoListToBackside(backgroundLog.Add(message))
        .catch(() =>
        {
          backgroundLog.Add({
            text: 'popup not found.',
            from: 'background',
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