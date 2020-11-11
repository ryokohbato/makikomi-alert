import { handleInfo } from './modules/HandleInfo';
import { sendInfoListToBackside } from "./modules/SendInfoListToBackside";
import { RuntimeLog } from "./modules/RuntimeLog";
import { setInitial } from "./modules/StorageData";

handleInfo((message) =>
{
  switch (message.type) {
    case "log":
      sendInfoListToBackside(RuntimeLog.Add(message))
        .catch(() =>
        {
          RuntimeLog.Add({
            text: 'popup not found.',
            from: 'background',
            time: Date.now(),
            type: 'log',
          })
        })
      break;

    case "logCount":
      sendInfoListToBackside([{
        text: RuntimeLog.GetLogCount() as unknown as string,
        type: "logCount",
      }])
        .catch(() =>
        {
          RuntimeLog.Add({
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