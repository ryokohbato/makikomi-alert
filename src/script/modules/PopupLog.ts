import { handleInfoList } from './HandleInfo';
import { sendInfoToBackground } from './SendInfoToBackground';

export const popupLog = function(): void
{
  sendInfoToBackground({
    text: 'Popup was opened!',
    from: 'popup',
    to: 'background',
    time: Date.now(),
    type: 'log',
  })

  handleInfoList((message) =>
  {
    message.forEach(x =>
    {
      if (x.type === 'log')
      {
        document.querySelector('.log__table--body').insertAdjacentHTML("afterbegin" ,
          `<tr>
            <td>${x.text}</td>
            <td>${x.time}</td>
            <td>${x.from}</td>
            <td>${x.to}</td>
          </tr>`);
      }
    })
  })
}