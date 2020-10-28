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
        if (!x.classList.contains('is-active'))
        {
          const sameTag = document.querySelectorAll(x.getAttribute('trigger-tag'));

          document.querySelector(`.is-active[is-trigger][trigger-tag="${x.getAttribute('trigger-tag')}"]`).classList.remove('is-active');
          sameTag.forEach(y =>
            {
              if (y.classList.contains('is-active'))
                y.classList.remove('is-active');
            })

          x.classList.add('is-active');
          document.querySelector(`[trigger-target-tag="${x.getAttribute('trigger-tag')}__${x.getAttribute('trigger-for')}"]`).classList.add('is-active');
        }
      })
    })
}