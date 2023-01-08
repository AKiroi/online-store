export const createInputElement = (elementClass: string | string[], elementType: string, placeholder: string): HTMLInputElement => {
  const element = document.createElement('input');
  if (Array.isArray(elementClass)) {
    element.className = elementClass.join(' ');
  } else {
    element.className = elementClass;
  }
  if (elementType) {
    element.type = elementType;
  }
  if (placeholder) {
    element.setAttribute('placeholder', placeholder);
  }
  return element;
};
