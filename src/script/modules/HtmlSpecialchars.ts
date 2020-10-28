export const htmlSpecialchars = function (element: string): string
{
  element = element.replace(/&/g, '&amp;');
  element = element.replace(/>/g, '&gt;');
  element = element.replace(/</g, '&lt;');
  element = element.replace(/"/g, '&quot;');
  element = element.replace(/'/g, '&#x27;');
  element = element.replace(/`/g, '&#x60;');

  return element;
};