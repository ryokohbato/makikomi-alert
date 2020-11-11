import { handleInfoList } from './HandleInfo';
import { sendInfoToBackside } from './SendInfoToBackside';

export const popupLog = function(): void
{
  sendInfoToBackside({
    text: 'Popup was opened!',
    from: 'popup',
    time: Date.now(),
    type: 'log',
  })

  handleInfoList((message) =>
  {
    message.forEach(x =>
    {
      switch(x.type)
      {
        case "log":
          document.querySelector('.log__table--body')?.insertAdjacentHTML("afterbegin" ,
            `<tr>
              <td>${x.text}</td>
              <td>${x.time}</td>
              <td>${x.from}</td>
            </tr>`);
        break;

        case "logCount":
          document.querySelector(`.log__log-count`)?.insertAdjacentHTML('afterbegin', `${x.text}`);
          break;
      }
    })
  })

  sendInfoToBackside({
    type: "logCount",
  })
}