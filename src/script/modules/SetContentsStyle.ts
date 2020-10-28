import { getData } from "./StorageData"

export const setContentsStyle = function(): void
{
  // sendInfoToBackground({
  //   text: {
  //     method: "get",
  //     key: [
  //       ""
  //     ]
  //   }
  // })

  getData([
    "checkmark-color",
    "alertmark-color",
    "alert-border",
  ])
  .then((response) =>
  {
    const rootElement = document.querySelector('body');

    rootElement.style.setProperty('--color-checkmark', `${response['checkmark-color']}`);
    rootElement.style.setProperty('--color-alertmark', `${response['alertmark-color']}`);
    rootElement.style.setProperty('--color-alert-border', `${response['alert-border']}`);
  })
}