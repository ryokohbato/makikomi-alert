import { toggleAlert } from './ToggleAlert';
import { sendInfoToBackside } from "./SendInfoToBackside";

export const detectReply = function(): void
{
  const replyBox__parent__query: string = '.r-1d2f490.r-u8s1d.r-zchlnj.r-ipm5af.r-184en5c';

  let replyBox__parent = document.querySelector(replyBox__parent__query) as HTMLElement;
  let replayBoxState: boolean = false;

  const observer = new MutationObserver(() =>
  {
    switch (replyBox__parent.childElementCount)
    {
      case 2:
        if (replayBoxState) return;
        toggleAlert(true);
        replayBoxState = true;
        sendInfoToBackside({
          text: 'reply box was opened.',
          from: 'contents',
          time: Date.now(),
          type: 'log',
        })
        break;

      default:
        if (!replayBoxState) return;
        toggleAlert(false);
        replayBoxState = false;
        sendInfoToBackside({
          text: 'reply box was closed.',
          from: 'contents',
          time: Date.now(),
          type: 'log',
        })
        break;
    }

  });

  const startObservation = function(): void
  {
    if (replyBox__parent)
    {
      observer.observe(replyBox__parent, {subtree: true, childList: true});
    }
    else
    {
      setTimeout(() => {
        replyBox__parent = document.querySelector(replyBox__parent__query);
        startObservation();
      }, 100);
    }
  }

  startObservation();
}
