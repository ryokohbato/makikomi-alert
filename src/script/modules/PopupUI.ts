import { getData } from './StorageData';
import { toggleActive } from "./ToggleActive";
import { popupColorConfig } from "./PopupColorConfig";
import { rippleEffect } from './RippleEffect';

export const popupUI = function(): void
{
  window.addEventListener('load', () =>
  {
    getData(["checkmark-color", "alertmark-color", "alert-border",])
      .then((response) =>
      {
        document.querySelectorAll('input.color-selector__color-preview[data-tag]')
        .forEach((x: HTMLInputElement) =>
          {
            x.value = response[x.getAttribute('data-tag')];
          })
      })
      .catch(err =>
      {
        alert(`Error!: \n${err}`);
      })

    toggleActive();
    popupColorConfig();

    document.querySelectorAll('.selector__item--section').forEach(x =>
      {
        rippleEffect(x);
      })
  })
}
