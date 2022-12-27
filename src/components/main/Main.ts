import {createHTMLElement} from "../../utils/createHTMLElement";
import {createImageElement} from "../../utils/createImageElement";
import dataGoods, { brandsArray, categoryArray, countBrandObj } from "../../data/data";
import Goods from "../goods/Goods";
import Search from "../search/Search";
import Sort from "../sort/Sort";
import BrandFilters from '../filters/BrandFilters';
import CategoryFilters from "../filters/CategoryFilters";
import { Igoods } from "../../data/types";
import { state } from "../../state/State";
import { countCategoryObj } from './../../data/data';
import PriceFilters from "../filters/PriceFilters";
import StockFilters from './../filters/StockFilters';

class Main {
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
        this.search = new Search(this.callbackFiltredBrandAndCategory);
        this.sort = new Sort(this.callbackFiltredBrandAndCategory);
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
      state.allFilters();

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

    draws() {
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

        goodsSort.append(this.search.draw(), this.sort.draw(), viewContainer)
        this.mainGoods.append(goodsSort, this.messageSearchResult, this.goodsCreate());
        mainFilters.append(filtersButtons, brandFilter, categoryFilter, priceFilter, stockFilter)
        mainContaner.append(mainFilters, this.mainGoods);
        main.append(mainContaner);

        return main;
    }
}

export default Main;