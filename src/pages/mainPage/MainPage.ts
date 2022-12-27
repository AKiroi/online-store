
import { createHTMLElement } from "../../utils/createHTMLElement";
import Search from "../../components/search/Search";
import Sort from "../../components/sort/Sort";
import BrandFilters from "../../components/filters/BrandFilters";
import CategoryFilters from "../../components/filters/CategoryFilters";
import PriceFilters from "../../components/filters/PriceFilters";
import StockFilters from "../../components/filters/StockFilters";
import { state } from "../../state/State";
import dataGoods, { countBrandObj, countCategoryObj } from "../../data/data";
import Goods from "../../components/goods/Goods";
import { createImageElement } from "../../utils/createImageElement";

class MainPage {
  public search;
  public sort;
  public brandFilters;
  public categoryFilters;
  public priceFilters;
  public stockFilters;

  mainGoods = createHTMLElement('main__goods');
  goodsContainer = createHTMLElement('goods');
  messageSearchResult = createHTMLElement('goods__message', 'div', 'The goods is empty!');

  constructor() {
    this.search = new Search();
    this.sort = new Sort();
    this.brandFilters = new BrandFilters(this.callbackFiltredBrandAndCategory);
    this.categoryFilters = new CategoryFilters(this.callbackFiltredBrandAndCategory);
    this.priceFilters = new PriceFilters();
    this.stockFilters = new StockFilters();
  }

  callbackFiltredBrandAndCategory = () => {
    this.drawFiltredGoods();
  }

  drawFiltredGoods() {
    this.goodsContainer.innerHTML = '';
    console.log(state.filtredGoods)
    state.allFilters();
    console.log(state.filtredGoods)
    Object.values(countBrandObj(state.filtredGoods)).forEach((count, i) => {
      const filtredCountElem = document.querySelectorAll('.brand-filter__count-filtred')!;
      filtredCountElem[i].textContent = String(count);
    });
    Object.values(countCategoryObj(state.filtredGoods)).forEach((count, i) => {
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

  goodsCreate() {
    dataGoods.forEach((item) => {
      const goodsItem = new Goods(item);
      this.goodsContainer.append(goodsItem.draw());
    });

    return this.goodsContainer;
  }

  draw() {
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


    const viewContainer = createHTMLElement('view');
    const veiwButtonSmall = createHTMLElement('view__button');
    const veiwImageSmall = createImageElement('view__img-small', './assets/icons/view-small.svg', 'view small icon');
    const veiwButtonLarge = createHTMLElement('view__button');
    const veiwImageLarge = createImageElement('view__img-large', './assets/icons/view-large.svg', 'view large icon');
    veiwButtonSmall.append(veiwImageSmall);
    veiwButtonLarge.append(veiwImageLarge);
    viewContainer.append(veiwButtonSmall, veiwButtonLarge);

    goodsSort.append(this.search.draw(), this.sort.draw(), viewContainer);
    this.mainGoods.append(goodsSort, this.messageSearchResult, this.goodsCreate());
    mainFilters.append(filtersButtons, brandFilter, categoryFilter, priceFilter, stockFilter);
    mainContaner.append(mainFilters, this.mainGoods);
    main.append(mainContaner);

    return main;
  }
}

export default MainPage;