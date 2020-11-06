export const toggleActive = function(): void
{
  /*
    toggle the is-active class of the corresponding element.
    is-trigger, trigger-for, trigger-tag attributes are required for the selector/switcher.
    trigger-target-tag attribute is required for the element of the main content.
    `${trigger-tag}__${trigger-for}` should be the same to `${trigger-target-tag}`.
  */
  const triggerElements = document.querySelectorAll('[is-trigger]');

  triggerElements.forEach(x =>
    {
      x.addEventListener('click', () =>
      {
        toggleActive__exec(x);
      })

      x.addEventListener('keydown', (event: KeyboardEvent) =>
      {
        if (event.isComposing || event.key === 'Enter')
          toggleActive__exec(x);
      })
    })
}

const toggleActive__exec = (x: Element): void =>
{
  if (!x.classList.contains('is-active'))
  {
    const triggerTag = x.getAttribute('trigger-tag') as string;
    const sameTag: NodeListOf<Element>|null = document.querySelectorAll(triggerTag);

    document.querySelector(`.is-active[is-trigger][trigger-tag="${x.getAttribute('trigger-tag')}"]`)?.setAttribute('aria-selected', 'false');
    document.querySelector(`.is-active[is-trigger][trigger-tag="${x.getAttribute('trigger-tag')}"]`)?.classList.remove('is-active');
    sameTag.forEach(y =>
      {
        if (y.classList.contains('is-active'))
          y.classList.remove('is-active');

        if (y.hasAttribute('aria-hidden'))
          y.setAttribute('aria-hidden', 'true');
      })

    x.classList.add('is-active');
    x.setAttribute('aria-selected', 'true');
    console.log(x)
    document.querySelector(`[trigger-target-tag="${x.getAttribute('trigger-tag')}__${x.getAttribute('trigger-for')}"]`)?.setAttribute('aria-hidden', 'false');
    document.querySelector(`[trigger-target-tag="${x.getAttribute('trigger-tag')}__${x.getAttribute('trigger-for')}"]`)?.classList.add('is-active');
  }
}