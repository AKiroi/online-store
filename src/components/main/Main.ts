import { createHTMLElement } from "../../utils/createHTMLElement";
import Search from "../search/Search";
import Sort from "../sort/Sort";

class Main {
  public search;
  public sort;

  constructor() {
    this.search = new Search();
    this.sort = new Sort();
  }

  draw() {
    const main = createHTMLElement('main', 'main');
    const mainContaner = createHTMLElement('main__container');
    const mainFilters = createHTMLElement(['main__filters', 'filters']);
    const mainGoods = createHTMLElement('main__goods');
    const goodsSort = createHTMLElement('goods-sort');
    const goods = createHTMLElement('goods');

    

    const view = createHTMLElement('view');
    const veiwButtonSmall = createHTMLElement('view__button');
    const imgLogoSmall = document.createElement('img') as HTMLImageElement;
    imgLogoSmall.src = './assets/icons/view-small.svg';
    imgLogoSmall.alt = 'view small icon';
    const veiwButtonLarge = createHTMLElement('view__button');
    const imgLogoLarge = document.createElement('img') as HTMLImageElement;
    imgLogoLarge.src = './assets/icons/view-large.svg';
    imgLogoLarge.alt = 'view small icon';
    veiwButtonSmall.append(imgLogoSmall);
    veiwButtonLarge.append(imgLogoLarge);
    view.append(veiwButtonSmall, veiwButtonLarge);

    goodsSort.append(this.search.draw(), this.sort.draw(), view)
    mainGoods.append(goodsSort, goods);
    mainContaner.append(mainFilters, mainGoods);
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