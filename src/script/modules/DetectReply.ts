import { clearAlert, toggleAlert } from './ToggleAlert';
import { sendInfoToBackside } from "./SendInfoToBackside";

export const detectReply = function(): void
{
  const replyBox__parent__query: string = '.r-1d2f490.r-u8s1d.r-zchlnj.r-ipm5af.r-184en5c';

  let replyBox__parent = document.querySelector(replyBox__parent__query) as HTMLElement|null;
  let replayBoxState: boolean = false;

  const hook = document.createElement('div');
  hook.classList.add('css-1dbjc4n');
  hook.classList.add('r-12vffkv');

  const observer = new MutationObserver((records) =>
  {
    records.forEach(x =>
    {
      if (x.target.isEqualNode(hook))
      {
        sendInfoToBackside({
          text: 'restart observer.',
          from: 'contents',
          time: Date.now(),
          type: 'log',
        })
        startObservation();
      }
    })

    switch (replyBox__parent?.childElementCount)
    {
      case 2:
        switch ((document.querySelector(replyBox__query)?.firstChild as HTMLElement)?.childElementCount)
        {
          // The screen to select the user to send a reply to
          case 2:
            if (!replayBoxState) return;
            clearAlert();
            startObservation();
            replayBoxState = false;
            sendInfoToBackside({
              text: 'window opened to change reply-to.',
              from: 'contents',
              time: Date.now(),
              type: 'log',
            })
            break;

          // The screen to make a reply.
          case 3:
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
            break;
        }
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
    replyBox__parent = document.querySelector(replyBox__parent__query);
    if (replyBox__parent)
    {
      observer.observe(replyBox__parent, {subtree: true, childList: true});
    }
    else
    {
      setTimeout(() => {
        startObservation();
      }, 100);
    }
  }

  startObservation();
}
