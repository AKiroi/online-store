import { createHTMLElement } from "../../utils/createHTMLElement";

class Main {
  constructor() {}
  
  draw() {
    const main = createHTMLElement('main', 'main');
    const mainContaner = createHTMLElement('main__container');
    const mainFilters = createHTMLElement(['main__filters', 'filters']);

    //const headerLogo = createHTMLElement('header__logo');
    //headerLogo.textContent = 'Music store';
    //const headerCart = createHTMLElement('header__cart');

    //const headerCartImg = document.createElement('img') as HTMLImageElement;
    //headerCartImg.classList.add('header__cart-img');
    //headerCartImg.src = "./assets/icons/cart-icon.svg";
    //headerCartImg.alt = 'image bike';
    //const headerCount = createHTMLElement('header__count', 'span');
    //headerCount.textContent = '0';

    //headerCart.append(headerCartImg, headerCount)
    mainContaner.append(mainFilters);
    main.append(mainContaner);

    //header.innerHTML = `
    //  <div class="header__container">
    //    <h1 class="header__logo">Music store</h1>
    //    <div class="header__cart">
    //      <img src="./assets/icons/cart-icon.svg" alt="cart-icon">
    //      <span class="header__count">0</span>
    //    </div>
    //  </div>
    //  `;
    return main;
  }
}

export default Main;