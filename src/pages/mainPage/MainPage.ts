
import { createHTMLElement } from "../../utils/createHTMLElement";
import Search from "../../components/search/Search";
import Sort from "../../components/sort/Sort";
import BrandFilters from "../../components/filters/BrandFilters";
import CategoryFilters from "../../components/filters/CategoryFilters";
import PriceFilters from "../../components/filters/PriceFilters";
import StockFilters from "../../components/filters/StockFilters";
import { state } from "../../state/State";
import dataGoods from "../../data/data";
import Goods from "../../components/goods/Goods";
import ViewButton from "../../components/View/ViewButton";
import { getCountBrandObj } from "../../utils/getCountBrandObject";
import { getCountCategoryObj } from "../../utils/getCountCategoryObj";

class MainPage {
  private search;
  private sort;
  private brandFilters;
  private categoryFilters;
  private priceFilters;
  private stockFilters;
  private viewButtons;

  mainGoods = createHTMLElement('main__goods');
  goodsContainer = createHTMLElement('goods');
  messageSearchResult = createHTMLElement('goods__message', 'div', 'The goods is empty!');

  constructor() {
    this.search = new Search(this.drawFiltredGoods);
    this.sort = new Sort(this.drawFiltredGoods);
    this.brandFilters = new BrandFilters(this.drawFiltredGoods);
    this.categoryFilters = new CategoryFilters(this.drawFiltredGoods);
    this.priceFilters = new PriceFilters();
    this.stockFilters = new StockFilters();
    this.viewButtons = new ViewButton();
  }

  private drawFiltredGoods = (): void => {
    this.goodsContainer.innerHTML = '';
    state.allFilters();

    Object.values(getCountBrandObj(state.filtredGoods)).forEach((count, i) => {
      const filtredCountElem = document.querySelectorAll('.brand-filter__count-filtred')!;
      filtredCountElem[i].textContent = String(count);
    });
    Object.values(getCountCategoryObj(state.filtredGoods)).forEach((count, i) => {
      const filtredCountElem = document.querySelectorAll('.category-filter__count-filtred')!;
      filtredCountElem[i].textContent = String(count);
    });

    if (state.filtredGoods.length === 0) {
      this.messageSearchResult.style.display = 'block';
    } else {
      state.filtredGoods.forEach((item) => {
        const goodsItem = new Goods(item);
        this.goodsContainer.append(goodsItem.draw());
      });
      this.messageSearchResult.style.display = 'none';
    }
  }

  private goodsCreate(): HTMLElement {
    dataGoods.forEach((item) => {
      const goodsItem = new Goods(item);
      this.goodsContainer.append(goodsItem.draw());
    });

    return this.goodsContainer;
  }

  public draw(): HTMLElement {
    const main = createHTMLElement('main', 'main');
    const mainContaner = createHTMLElement('main__container');
    const mainFilters = createHTMLElement(['main__filters', 'filters']);
    //const mainGoods = createHTMLElement('main__goods');
    const goodsSort = createHTMLElement('goods-sort');

    const filtersButtons = createHTMLElement('filters__buttons');
    const filtersResetButton = createHTMLElement('filters__reset-btn', 'button', 'Reset filters');
    const filtersCopyLinksButton = createHTMLElement('filters__copy-links-btn', 'button', 'Copy links');
    filtersButtons.append(filtersResetButton, filtersCopyLinksButton);
    const brandFilter = this.brandFilters.draw();
    const categoryFilter = this.categoryFilters.draw();
    const priceFilter = this.priceFilters.draw();
    const stockFilter = this.stockFilters.draw();
    const viewButtons = this.viewButtons.draw();

    goodsSort.append(this.search.draw(), this.sort.draw(), viewButtons);
    this.mainGoods.append(goodsSort, this.messageSearchResult, this.goodsCreate());
    mainFilters.append(filtersButtons, brandFilter, categoryFilter, priceFilter, stockFilter);
    mainContaner.append(mainFilters, this.mainGoods);
    main.append(mainContaner);

    return main;
  }
}

export default MainPage;