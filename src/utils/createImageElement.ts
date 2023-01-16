export const createImageElement = (
  elementClass: string | string[],
  elementSrc: string,
  elementAlt = ''
): HTMLImageElement => {
  const element = document.createElement('img');

  if (Array.isArray(elementClass)) {
    element.className = elementClass.join(' ');
  } else {
    element.className = elementClass;
  }
  if (elementAlt) {
    element.alt = elementAlt;
  }
  element.src = elementSrc;

  return element;
};
