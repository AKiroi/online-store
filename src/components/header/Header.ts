import { createHTMLElement } from '../../utils/createHTMLElement';
import { createImageElement } from '../../utils/createImageElement';

class Header {
  
  draw(): HTMLElement {
    const header = createHTMLElement('header', 'header');
    const headerContaner = createHTMLElement('header__container');

    const headerLogo = document.createElement('a');
    headerLogo.className = 'header__logo';
    headerLogo.textContent = 'Music store';
    headerLogo.href = `#/`;

    const headerCart = document.createElement('a');
    headerCart.className = 'header__cart';
    headerCart.href = `#/cart`;
    const headerCartImg = createImageElement('header__cart-img', './assets/icons/cart-icon.svg', 'art icon');
    const headerCount = createHTMLElement('header__count', 'span');
    headerCount.textContent = '0';

    headerCart.append(headerCartImg, headerCount)
    headerContaner.append(headerLogo, headerCart);
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
