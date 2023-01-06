import { createHTMLElement } from '../../utils/createHTMLElement';
import { createImageElement } from '../../utils/createImageElement';
import dataGoods from '../../data/data';
import { Igoods } from '../../data/types';
import { state } from '../../state/State';

class ModalSubmit {
  constructor() {
    
  }



  draw(): HTMLElement {
    const modalSubmit = createHTMLElement('modal-submit');
    const modalSubmitContainer = createHTMLElement('modal-submit_container');



    modalSubmit.innerHTML=`TEST`

    return modalSubmit;
  }
}

export default ModalSubmit;
