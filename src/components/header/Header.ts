import { createHTMLElement } from '../../utils/createHTMLElement';
import { createImageElement } from '../../utils/createImageElement';
import { state } from './../../state/State';

class Header {
  
  draw(): HTMLElement {
    const header = createHTMLElement('header', 'header');
    const headerContaner = createHTMLElement('header__container');

    const headerLogo = document.createElement('a');
    headerLogo.className = 'header__logo';
    headerLogo.textContent = 'Music store';
    headerLogo.href = `#/`;

    const headerItem = createHTMLElement('header__item');
    const headerItemText = createHTMLElement('header__item-text', 'span', 'Total: ' );
    const headerItemTotal = createHTMLElement('header__item-total', 'span', `${state.getTotalPrice().toString()}`);

    headerItem.append(headerItemText, headerItemTotal);


    const headerCart = document.createElement('a');
    headerCart.className = 'header__cart';
    headerCart.href = `#/cart`;
    const headerCartImg = createImageElement('header__cart-img', './assets/icons/cart-icon.svg', 'art icon');
    const headerCount = createHTMLElement('header__count', 'span');
    headerCount.textContent = `${state.getTotalCount().toString()}`;

    headerCart.append(headerCartImg, headerCount)
    headerContaner.append(headerLogo, headerItem, headerCart);
    header.append(headerContaner)

    //header.innerHTML = `
    //  <div class="header__container">
    //    <h1 class="header__logo">Music store</h1>
    //    <div class="header__cart">
    //      <img src="./assets/icons/cart-icon.svg" alt="cart-icon">
    //      <span class="header__count">0</span>
    //    </div>
    //  </div>
    //  `;
    return header;
  }
}

export default Header;
