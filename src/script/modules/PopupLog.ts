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
        document.getElementById('console').insertAdjacentHTML("afterbegin" ,
        `<p>text: ${x.text}, from: ${x.from}, to: ${x.to}, time: ${x.time}</p>`)
      }
    })
  })
}