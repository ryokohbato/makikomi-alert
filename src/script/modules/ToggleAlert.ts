import { alertMessageElement, testAlertMessageElement } from './AlertMessageElement';
import { replyBox__query, replyButton__container__query } from './HtmlQueries';
import { sendInfoToBackside } from './SendInfoToBackside';

export const toggleAlert = function(isOpen: boolean): void
{
  const addAlert = function(): void
  {

    let replyButton__container = document.querySelector(replyButton__container__query) as HTMLElement;

    if (replyButton__container)
    {
      if (document.querySelector(`${replyButton__container__query} ._makikomi-alert__icon`))
      {
        sendInfoToBackside({
          text: `skip - alert message already exists.`,
          from: 'contents',
          time: Date.now(),
          type: 'log',
        })
        return;
      }

      if (!testAlertMessageElement())
      {
        sendInfoToBackside({
          text: `skip - this is not a reply for others.`,
          from: 'contents',
          time: Date.now(),
          type: 'log',
        })
        return;
      }

      const alertElement = alertMessageElement();
      if (typeof alertElement === 'undefined') return;
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

export const clearAlert = function(): void
{
  document.querySelector(replyBox__query)?.classList.remove('_makikomi-alert__alert-box');
}