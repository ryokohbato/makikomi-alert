import { alertMessageElement, testAlertMessageElement } from './AlertMessageElement';
import { sendInfoToBackground } from './SendInfoToBackground';

export const toggleAlert = function(isOpen: boolean): void
{
  const addAlert = function(): void
  {
    const replyButton__container__query
      = '.css-1dbjc4n.r-1wbh5a2.r-rsyp9y.r-1pjcn9w.r-htvplk.r-1udh08x.r-1potc6q .css-1dbjc4n.r-1awozwy.r-18u37iz:nth-child(2)';

    let replyButton__container = document.querySelector(replyButton__container__query) as HTMLElement;

    if (replyButton__container)
    {
      if (document.querySelector(`${replyButton__container__query} ._makikomi-alert__icon`))
      {
        sendInfoToBackground({
          text: `skip - alert message already exists.`,
          from: 'contents',
          to: 'background',
          time: Date.now(),
          type: 'log',
        })
        return;
      }

      if (!testAlertMessageElement())
      {
        sendInfoToBackground({
          text: `skip - this is not a reply for others.`,
          from: 'contents',
          to: 'background',
          time: Date.now(),
          type: 'log',
        })
        return;
      }

      const alertElement = alertMessageElement();
      replyButton__container.insertAdjacentHTML('beforeend',
        `<div class="_makikomi-alert">${alertElement}</div>`);
    }
    else
    {
      setTimeout(() =>
      {
        replyButton__container = document.querySelector(replyButton__container__query) as HTMLElement;
        addAlert();
      }, 100)
    }
  }

  if (isOpen)
  {
    addAlert();
  }
}