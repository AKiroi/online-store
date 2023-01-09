import { createHTMLElement } from '../../utils/createHTMLElement';
import { createInputElement } from '../../utils/createInputElement';

class ModalSubmit {
  constructor() {
    
  }

  private handlerInput = (e: Event): void => {
    const input = e.target as HTMLInputElement;
    const inputRequest: string = input.value;

    if (input.classList.contains('name')) {
      if (e.type === 'input') {
        input.value = inputRequest.replace(/[^A-Za-zА-Яа-я-'\s]+/g, '');
      }
      if (e.type === 'change') {
        input.value = input.value.trim();
      }
    }

    if (input.classList.contains('number-phone')) {
      if (e.type === 'click') {
        if (inputRequest.length === 0) {
          input.value = '+';
        }
      }
      if (e.type === 'input') {
        if (inputRequest.length === 0) {
          input.value = '+';
        } else {
          input.value = '+' + inputRequest.substring(1).replace(/[^.0-9]/, '');
        }
      }
    }

    if (input.classList.contains('card__number')) {
      let numberCard: string;
      if (e.type === 'input') {
        numberCard = inputRequest.replace(/[^.0-9]/, '');
        input.value = numberCard;
        const cardLogo = document.querySelector('.logo-card') as HTMLElement;
        if (numberCard[0] === '3') {
        cardLogo.innerHTML = '<img src="./assets/icons/american_express.png" alt="american express">';
        } else if (numberCard[0] === '4') {
          cardLogo.innerHTML = '<img src="./assets/icons/visa.png" alt="visa">';
        } else if (numberCard[0] === '5') {
          switch (numberCard[1]) {
            case '0':
              cardLogo.innerHTML = '<img src="./assets/icons/maestro.png" alt="maestro">';
              break;
            case '6':
              cardLogo.innerHTML = '<img src="./assets/icons/maestro.png" alt="maestro">';
              break;
            case '7':
              cardLogo.innerHTML = '<img src="./assets/icons/maestro.png" alt="maestro">';
              break;
            case '8':
              cardLogo.innerHTML = '<img src="./assets/icons/maestro.png" alt="maestro">';
              break;
            default:
              cardLogo.innerHTML = '<img src="./assets/icons/mastercard.png" alt="master card">';
              break;
          }
        } else if (numberCard[0] === '6') {
          cardLogo.innerHTML = '<img src="./assets/icons/unionpay.png" alt="unionpay">';
        } else {
          cardLogo.innerHTML = '<img src="./assets/icons/all_card.png" alt="cards">';
        }
      }
    }

    if (input.classList.contains('card__date')) {
      input.value = inputRequest.replace(/[^.0-9]/, '');
      if (input.value.length > 2) {
        input.value = input.value.slice(0, 2) + '/' + input.value.slice(2, 4);
      }
    }

    if (input.classList.contains('card__cvv')) {
      let cvvCard: string = inputRequest.replace(/[^.0-9]/, '');
      if (e.type === 'input') {
        if (cvvCard.length > 3) {
          cvvCard = cvvCard.slice(0, 3);
        }
      }
      input.value = cvvCard;
    }



    const button = e.target as HTMLButtonElement;
    if (button.classList.contains('close-btn')) {
      const overlay = document.querySelector('.container__modal_overlay') as HTMLElement;
      overlay.classList.remove('overlay');
      const containerModal = document.querySelector('.modal-container') as HTMLElement;
      containerModal.classList.remove('overlay-modal-container');
      containerModal.innerHTML = ``;
    }

    if (button.classList.contains('submit-btn')) {
      const formElement = document.querySelector('.form') as HTMLInputElement;
      console.log(formElement);

      console.log(formElement.checkValidity())


      if (formElement.checkValidity()) {
        const popup = document.querySelector('.modal-popup') as HTMLElement;
        popup.classList.remove('hidden');
        localStorage.removeItem('cart');
      
      setTimeout(() => {
        window.location.hash = `#/`;
      }, 3000);
    }
    }






  };

  draw(): HTMLElement {
    const modalSubmit = createHTMLElement('modal-submit');
    const modalSubmitContainer = createHTMLElement('modal-submit_container');
    modalSubmitContainer?.addEventListener('change', this.handlerInput);
    modalSubmitContainer?.addEventListener('input', this.handlerInput);
    modalSubmitContainer?.addEventListener('click', this.handlerInput);
    const form = document.createElement('form') as HTMLFormElement;
    form.method = '';
    // form.action = '/';
    const inputName = createInputElement(['input-submit', 'name', 'text'], 'text', 'Name and Surname');
    inputName.setAttribute('required', '');
    inputName.setAttribute('pattern', "[A-Za-zА-Яа-я\\-']{3,}\\b.+?[A-Za-zА-Яа-я\\-']{3,}");
    inputName.setAttribute('title', 'At least 2 words with at least 3 letters each.');
    const inputPhoneNumber = createInputElement(['input-submit', 'number-phone', 'number'], 'text', 'Phone number');
    inputPhoneNumber.setAttribute('required', '');
    inputPhoneNumber.setAttribute('pattern', '[+][0-9]{8,}[0-9]');
    inputPhoneNumber.setAttribute('title', 'Minimum 9 digits are required');
    const inputDelivery = createInputElement(['input-submit', 'address', 'text'], 'text', 'Delivery address');
    inputDelivery.setAttribute('required', '');
    inputDelivery.setAttribute(
      'pattern',
      "[A-Za-zА-Яа-я0-9\\-+.\\/']{5,}\\b.[A-Za-zА-Яа-я0-9\\-+.\\/']{5,}\\b.+?[A-Za-zА-Яа-я0-9\\-+.\\/']{5,}"
    );
    inputDelivery.setAttribute('title', 'At least 3 words with at least 5 letters each.');
    const inputEmail = createInputElement(['input-submit', 'email', 'text'], 'email', 'Email');
    inputEmail.setAttribute('required', '');
    const placeCard = createHTMLElement('modal-submit_container__place-card');
    const inputCardNumber = createInputElement(['input-submit', 'card__number', 'text'], 'text', 'XXXX XXXX XXXX XXXX');
    inputCardNumber.setAttribute('required', '');
    inputCardNumber.setAttribute('pattern', '\\d{16}');
    inputCardNumber.setAttribute('title', 'Must be 16 digits');
    inputCardNumber.setAttribute('maxlength', '16');
    const logoCard = createHTMLElement('logo-card');
    logoCard.innerHTML = '<img src="./assets/icons/all_card.png" alt="cards">';
    const inputCardDate = createInputElement(['input-submit', 'card__date', 'small'], 'text', 'MM/YY');
    inputCardDate.setAttribute('id', 'card-date');
    inputCardDate.setAttribute('pattern', '(0[1-9]|1[012])/[0-9]{2}');
    inputCardDate.setAttribute('maxlength', '5');
    inputCardDate.setAttribute('title', 'There should be a date, month and year (MM/YY)');
    inputCardDate.setAttribute('required', '');
    const inputCardCvv = createInputElement(['input-submit', 'card__cvv', 'small'], 'text', 'CVV');
    inputCardCvv.setAttribute('id', 'card-cvv');
    inputCardCvv.setAttribute('required', '');
    inputCardCvv.setAttribute('pattern', '[0-9]{3,3}');
    inputCardCvv.setAttribute('maxlength', '3');
    inputCardCvv.setAttribute('title', 'Must be 3 digits');
    const inputCardDateLabel = document.createElement('label') as HTMLLabelElement;
    const textForCardDateLabel = document.createTextNode('MM/YY');
    inputCardDateLabel.setAttribute('for', 'card-date');
    inputCardDateLabel.append(textForCardDateLabel);
    const inputCardCvvLabel = document.createElement('label') as HTMLLabelElement;
    const textForinputCardCvvLabel = document.createTextNode('CVV');
    inputCardCvvLabel.setAttribute('for', 'card-cvv');
    inputCardCvvLabel.append(textForinputCardCvvLabel);
    const btnSubmit = document.createElement('button') as HTMLButtonElement;
    btnSubmit.type = 'submit';
    btnSubmit.innerHTML = 'Submit';
    btnSubmit.className += 'modal-btn submit-btn';
    const btnClose = document.createElement('button') as HTMLButtonElement;
    btnClose.innerHTML = 'Close';
    btnClose.className += 'modal-btn close-btn';
    const modalPopup = createHTMLElement('modal-popup hidden');
    modalPopup.innerHTML = `<span class="popup-text" id="myPopup">Your order has been placed!</span>`;

    placeCard.append(inputCardNumber, logoCard, inputCardDateLabel, inputCardDate, inputCardCvvLabel, inputCardCvv);
    form.append(inputName, inputPhoneNumber, inputDelivery, inputEmail, placeCard, btnSubmit, btnClose);
    modalSubmitContainer.append(form, modalPopup);
    modalSubmit.append(modalSubmitContainer);

    return modalSubmit;
  }
}

export default ModalSubmit;
