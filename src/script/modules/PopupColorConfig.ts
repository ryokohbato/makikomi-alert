import { getData, setData } from "./StorageData";
import { colorConfigChangedNotification } from "./ColorConfigChangedNotification";

export const popupColorConfig = function(): void
{
  document.querySelectorAll('input.color-selector__color-preview[data-tag]')
  .forEach((x: HTMLInputElement) =>
    {
      x.addEventListener('change', () =>
      {
        // sendInfoToBackground({
        //   text: {method: "set", values: [
        //     {
        //       "key": x.getAttribute('data-tag'),
        //       "value": x.value,
        //     }
        //   ]},
        //   from: "popup",
        //   to: "background",
        //   type: "storage",
        //   time: Date.now(),
        // })

        setData([{
          "key": x.getAttribute('data-tag'),
          "value": x.value,
        }])

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
          console.log(targetData, response[targetTag__default]);
          targetData.value = response[targetTag__default];

          // sendInfoToBackground({
          //   text: {method: "set", values: [
          //     {
          //       "key": targetTag,
          //       "value": response[targetTag__default],
          //     }
          //   ]},
          //   from: "popup",
          //   to: "background",
          //   type: "storage",
          //   time: Date.now(),
          // })

          setData([{
            "key": targetTag,
            "value": response[targetTag__default],
          }])

          colorConfigChangedNotification();
        })
      })
    })
}