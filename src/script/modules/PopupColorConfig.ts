import { getData, setData } from "./StorageData";
import { colorConfigChangedNotification } from "./ColorConfigChangedNotification";

export const popupColorConfig = function(): void
{
  document.querySelectorAll('input.color-selector__color-preview[data-tag]')
  .forEach((x: HTMLInputElement) =>
    {
      x.addEventListener('change', () =>
      {
        const dataTagValue = x.getAttribute('data-tag');
        if (typeof dataTagValue === 'string')
        {
          setData([{
            "key": dataTagValue,
            "value": x.value,
          }], "popup")

          colorConfigChangedNotification();
        }
      })
    })

  const allResetTagElement = document.querySelectorAll('[reset-data-tag]');
  for (let i = 0; i < allResetTagElement.length; i++)
  {
    allResetTagElement[i].addEventListener('click', () =>
    {
      const targetTag = allResetTagElement[i].getAttribute('reset-data-tag');
      const targetTag__default = `${targetTag}--default`;

      getData([targetTag__default])
      .then((response) =>
      {
        const targetData: HTMLInputElement|null = document.querySelector(`[data-tag="${targetTag}"]`);
        if (targetData !== null && targetTag !== null)
        {
          targetData.value = response[targetTag__default];

          setData([{
            "key": targetTag,
            "value": response[targetTag__default],
          }], "popup")
        }

        colorConfigChangedNotification();
      })
    })
  }
}