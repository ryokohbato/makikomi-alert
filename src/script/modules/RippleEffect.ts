export const rippleEffect = function(element: Element): void
{
  element.addEventListener('click', (event) =>
  {
    const targetElement = event.currentTarget as Element;
    element.insertAdjacentHTML('afterbegin',
      `<span class="ripple-effect"
        style="left:${(event as MouseEvent).pageX - targetElement.getBoundingClientRect().x}px;
                top:${(event as MouseEvent).pageY - targetElement.getBoundingClientRect().y}px;"
        ></span>`);
  })
}