import Header from '../header/Header';
import MainPage from '../../pages/mainPage/MainPage';
import CartPage from '../../pages/cartPage/CartPage';
import Footer from '../footer/Footer';
import { createHTMLElement } from '../../utils/createHTMLElement';
import GoodsItemPage from '../../pages/goodsItemPage/GoodsItemPage';
import dataGoods from '../../data/data';

const LocationPath: Record<string, string> = {
  MainPage: '#/',
  CartPage: '#/cart',
  GoodsItemPage: `#/goodsItem`,
};

class App {
  private root: HTMLElement = document.body;
  private wrapper = createHTMLElement('wrapper');
  private header: Header;
  private footer: Footer;
  private goodsItem: any;

  constructor() {
    this.header = new Header();
    this.footer = new Footer();
  }

  drawNewPage(location: string, id = ''): void {
    this.wrapper.innerHTML = '';

    let changePage;

    if (id) {
      this.goodsItem = dataGoods.find((item) => item.id === +id);
    }


    switch (location) {
      case LocationPath.MainPage:
        changePage = new MainPage();
        break;
      case LocationPath.CartPage:
        changePage = new CartPage();
        break;
      case LocationPath.GoodsItemPage:
        changePage = new GoodsItemPage(this.goodsItem);
        break;
    }

    if (changePage) {
      this.wrapper.append(changePage.draw());
    }
  }

  handleHashChange(): void {
    window.addEventListener('hashchange', () => {
      const hashLoc = window.location.hash;
      const hashArr = hashLoc.split('/');
      let hash;
      let id;
      if (hashArr.length > 2) {
        id = hashArr.splice(-1).join('');
        hash = hashArr.join('/');
      } else {
        hash = hashLoc;
      }

      if (!hash) {
        window.location.hash = `#/`;
      }
      this.drawNewPage(hash, id);
    });
  }

  start(): void {
    this.root.append(this.header.draw(), this.wrapper, this.footer.draw());
    this.drawNewPage('#/');
    this.handleHashChange();
  }
}

export default App;
