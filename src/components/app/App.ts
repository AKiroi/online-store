import Header from '../header/Header';
import MainPage from '../../pages/mainPage/MainPage';
import CartPage from '../../pages/cartPage/CartPage';
import ModalPage from '../../components/modal/ModalSubmit';
import Footer from '../footer/Footer';
import { createHTMLElement } from '../../utils/createHTMLElement';
import GoodsItemPage from '../../pages/goodsItemPage/GoodsItemPage';
import dataGoods from '../../data/data';
import { Igoods } from '../../data/types';
import ErrorPage from './../../pages/errorPage/ErrorPage';

const LocationPath: Record<string, string> = {
  MainPage: '/',
  CartPage: '/cart',
  GoodsItemPage: `/goodsItem`,
};

class App {
  private root: HTMLElement = document.body;
  private wrapper = createHTMLElement('wrapper');
  private header: Header;
  private footer: Footer;

  prevPathPage = '';

  constructor() {
    this.header = new Header();
    this.footer = new Footer();
  }

  drawNewPage(location: string, id = ''): void {
    this.wrapper.innerHTML = '';

    let changePage;

    const goodsItem = dataGoods.find((item) => item.id === +id);

    if (location === LocationPath.MainPage) {
      changePage = new MainPage();
    } else if (location === LocationPath.CartPage) {
      changePage = new CartPage();
    } else if (location === LocationPath.GoodsItemPage) {
      changePage = new GoodsItemPage(goodsItem as Igoods);
    } else if (location === LocationPath.ModalPage) {
      changePage = new ModalPage();
    } else {
      changePage = new ErrorPage();
    }

    if (changePage) {
      this.prevPathPage = window.location.hash.slice(1);
      this.wrapper.append(changePage.draw());
    }
  }

  handleHashChange(): void {
    window.addEventListener('hashchange', this.loadHashPage);
    window.addEventListener('load', this.loadHashPage);
  }

  loadHashPage = () => {
    const hash = window.location.hash.slice(1);
    const hashArr = hash.split('/');
    const pathPage = hash.slice(0, hash.indexOf('?'));

    if (!hash) {
      window.location.hash = `/`;
    }
    if (hash.includes('?')) {
      if (this.prevPathPage.slice(0, hash.indexOf('?')) !== pathPage) {
        this.drawNewPage(`/`);
      }
    } else {
      if (hashArr.length > 2) {
        const id = hashArr.pop();
        const hashItem = hashArr.join('/');
        this.drawNewPage(hashItem, id);
      } else {
        this.drawNewPage(hash);
      }
    }
  }

  start(): void {
    this.handleHashChange();
    this.root.append(this.header.draw(), this.wrapper, this.footer.draw());
  }
}

export default App;