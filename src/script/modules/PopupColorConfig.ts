import { getData, setData } from "./StorageData";
import { colorConfigChangedNotification } from "./ColorConfigChangedNotification";

export const popupColorConfig = function(): void
{
  document.querySelectorAll('input.color-selector__color-preview[data-tag]')
  .forEach((x: HTMLInputElement) =>
    {
      x.addEventListener('change', () =>
      {
        setData([{
          "key": x.getAttribute('data-tag'),
          "value": x.value,
        }], "popup")

        colorConfigChangedNotification();
      })
    })

  document.querySelectorAll('[reset-data-tag]')
  .forEach(x =>
    {
      x.addEventListener('click', () =>
      {
        const targetTag = x.getAttribute('reset-data-tag');
        const targetTag__default = `${targetTag}--default`;

        getData([targetTag__default])
        .then((response) =>
        {
          const targetData: HTMLInputElement = document.querySelector(`[data-tag="${targetTag}"]`);
          targetData.value = response[targetTag__default];

          setData([{
            "key": targetTag,
            "value": response[targetTag__default],
          }], "popup")

          colorConfigChangedNotification();
        })
      })
    })
}