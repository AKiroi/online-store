import { IFooter } from '../../data/types';
import { createHTMLElement } from '../../utils/createHTMLElement';

class Footer implements IFooter {
  draw(): HTMLElement {
    const footer = createHTMLElement('footer', 'footer');

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