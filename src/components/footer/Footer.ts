import { createHTMLElement } from '../../utils/createHTMLElement';

class Footer {
  constructor() {}
  draw() {
    const footer = createHTMLElement('footer', 'footer');
    //const headerContaner = createHTMLElement('header__container');

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
    //headerContaner.append(headerLogo, headerCart);
    //header.append(headerContaner)

    footer.innerHTML = `
      <div class="footer__container">
        <div class="footer__left">
            <a href="https://github.com/AKiroi" target="_blank">AKiroi</a>
            <a href="https://github.com/flash226" target="_blank">Flash226</a>
        </div>
        <div class="footer__center">2022</div>
        <div class="footer__right">
            <a href="https://rs.school/js/" target="_blank"></a>
        </div>
      </div>
      `;
    return footer;
  }
}

export default Footer;