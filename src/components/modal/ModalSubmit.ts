import { createHTMLElement } from '../../utils/createHTMLElement';
import { createInputElement } from '../../utils/createInputElement';

class ModalSubmit {
  constructor() {
    
  }



  draw(): HTMLElement {
    const modalSubmit = createHTMLElement('modal-submit');
    const modalSubmitContainer = createHTMLElement('modal-submit_container');
    const inputName = createInputElement('modal-submit_container__name', 'text');

    modalSubmitContainer.append(inputName);

    modalSubmit.append(modalSubmitContainer);

    return modalSubmit;
  }
}

export default ModalSubmit;
