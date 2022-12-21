export const  createHTMLElement = (elementClass: string | string[], elementName: string = 'div'): HTMLElement => {
  const element = document.createElement(elementName);

  if (Array.isArray(elementClass)) {
    element.className = elementClass.join(' ');
  } else {
    element.className = elementClass;
  }
  
  return element;
}