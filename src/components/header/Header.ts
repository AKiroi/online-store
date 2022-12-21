import { createHTMLElement } from '../../utils/createHTMLElement';
import { createImageElement } from '../../utils/createImageElement';

class Header {
  constructor() {}
  
  draw() {
    const header = createHTMLElement('header', 'header');
    const headerContaner = createHTMLElement('header__container');

    const headerLogo = createHTMLElement('header__logo', 'div', 'Music store');
    const headerCart = createHTMLElement('header__cart');

    const headerCartImg = createImageElement('header__cart-img', './assets/icons/cart-icon.svg', 'art icon')
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
