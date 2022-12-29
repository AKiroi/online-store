import { createHTMLElement } from '../../utils/createHTMLElement';
import { createImageElement } from '../../utils/createImageElement';

class ViewButton {
  
  draw(): HTMLElement {
    const viewContainer = createHTMLElement('view');
    const veiwButtonSmall = createHTMLElement('view__button');
    const veiwImageSmall = createImageElement('view__img-small', './assets/icons/view-small.svg', 'view small icon');
    const veiwButtonLarge = createHTMLElement('view__button');
    const veiwImageLarge = createImageElement('view__img-large', './assets/icons/view-large.svg', 'view large icon');
    veiwButtonSmall.append(veiwImageSmall);
    veiwButtonLarge.append(veiwImageLarge);
    viewContainer.append(veiwButtonSmall, veiwButtonLarge);

    return viewContainer;
  }
}

export default ViewButton;

