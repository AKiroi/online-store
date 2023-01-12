import { createHTMLElement } from '../../utils/createHTMLElement';
import { createImageElement } from '../../utils/createImageElement';
import { state } from './../../state/State';
import { IHeader } from './../../data/types';

class Header implements IHeader {
  
  draw(): HTMLElement {
    const header = createHTMLElement('header', 'header');
    const headerContaner = createHTMLElement('header__container');

    const headerLogo = document.createElement('a');
    headerLogo.className = 'header__logo';
    headerLogo.textContent = 'Music store';
    headerLogo.href = `#/`;

    const headerItem = createHTMLElement('header__item');
    const headerItemText = createHTMLElement('header__item-text', 'span', 'Total: ' );
    const headerItemTotal = createHTMLElement('header__item-total', 'span', `${state.getTotalPrice().toString()} $`);

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

    return header;
  }
}

export default Header;
