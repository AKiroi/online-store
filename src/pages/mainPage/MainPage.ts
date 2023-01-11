
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
import { getQueryParams } from "../../utils/getQueryParams";
import { deleteQuerryParams } from './../../utils/getQueryParams';

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
  goodsSortFoundCount = createHTMLElement('goods-sort__found-count', 'span', `${state.filtredGoods.length}`);

  constructor() {
    this.search = new Search(this.drawFiltredGoods);
    this.sort = new Sort(this.drawFiltredGoods);
    this.brandFilters = new BrandFilters(this.drawFiltredGoods);
    this.categoryFilters = new CategoryFilters(this.drawFiltredGoods);
    this.priceFilters = new PriceFilters(this.drawFiltredGoods);
    this.stockFilters = new StockFilters(this.drawFiltredGoods);
    this.viewButtons = new ViewButton();
  }

  private drawFiltredGoods = (): void => {
    this.goodsContainer.innerHTML = '';
    state.allFilters();
    this.setParamsToUrl();

    Object.values(getCountBrandObj(state.filtredGoods)).forEach((count, i) => {
      const filtredCountElem = document.querySelectorAll('.brand-filter__count-filtred')!;
      filtredCountElem[i].textContent = String(count);
    });
    Object.values(getCountCategoryObj(state.filtredGoods)).forEach((count, i) => {
      const filtredCountElem = document.querySelectorAll('.category-filter__count-filtred')!;
      filtredCountElem[i].textContent = String(count);
    });
    this.goodsSortFoundCount.textContent = `${state.filtredGoods.length}`;

    this.goodsFiltredCreate();
  }

  private setParamsToUrl(): void {
    getQueryParams.delete('brand');
    getQueryParams.delete('category');
    getQueryParams.delete('sort');
    getQueryParams.delete('search');
    getQueryParams.delete('view');

    if (state.view) {
      getQueryParams.append('view', state.view);
    }
    if (state.search) {
      getQueryParams.append('search', state.search);
    }
    if (state.filters.brand.length !== 0) { 
      state.filters.brand.forEach((brand) => getQueryParams.append('brand', brand));
    }

    if (state.filters.category.length !== 0) { 
      state.filters.category.forEach((category) => getQueryParams.append('category', category));
    }
    if (state.sort) {
      getQueryParams.append('sort', state.sort);
    }
    window.location.hash = !!getQueryParams.toString() ? `/?${getQueryParams.toString()}` : `/`;
  }

  private goodsFiltredCreate(): void {
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
    if (state.view) this.goodsContainer.classList.add('goods_list');
    if (getQueryParams.toString()) {
      state.allFilters();
      this.goodsFiltredCreate();
    } else {
      dataGoods.forEach((item) => {
        const goodsItem = new Goods(item);
        this.goodsContainer.append(goodsItem.draw());
        this.goodsSortFoundCount.textContent = `${dataGoods.length}`;
      });
    }
    return this.goodsContainer;
  }

  private handlerResetBtn(): void {
    deleteQuerryParams();
    state.resetState();
    window.location.hash = `/`;
  }

  private handlerCopyLinksButton(): void {
    navigator.clipboard.writeText(document.location.href);
    const button = document.querySelector('.filters__copy-links-btn') as HTMLElement;
    button.style.backgroundColor = 'green';
    button.innerHTML = 'Link copied';
    setTimeout(() => {
      button.style.backgroundColor = '#FFCA94';
      button.innerHTML = 'Copy links';
    }, 2000);
  }

  public draw(): HTMLElement {
    const main = createHTMLElement('main', 'main');
    const mainContaner = createHTMLElement('main__container');
    const mainFilters = createHTMLElement(['main__filters', 'filters']);
    const goodsSort = createHTMLElement('goods-sort');
    const goodsSortFound = createHTMLElement('goods-sort__found', 'div', 'Found: ');
    //const goodsSortFoundCount = createHTMLElement('goods-sort__found-count', 'span', `${state.filtredGoods.length}`);
    

    const filtersButtons = createHTMLElement('filters__buttons');

    const filtersResetButton = createHTMLElement('filters__reset-btn', 'button', 'Reset filters');
    filtersResetButton.addEventListener('click', this.handlerResetBtn);

    const filtersCopyLinksButton = createHTMLElement('filters__copy-links-btn', 'button', 'Copy links');
    filtersCopyLinksButton.addEventListener('click', this.handlerCopyLinksButton);

    filtersButtons.append(filtersResetButton, filtersCopyLinksButton);
    const brandFilter = this.brandFilters.draw();
    const categoryFilter = this.categoryFilters.draw();
    const priceFilter = this.priceFilters.draw();
    const stockFilter = this.stockFilters.draw();
    const viewButtons = this.viewButtons.draw();

    goodsSortFound.append(this.goodsSortFoundCount);
    goodsSort.append(this.search.draw(), goodsSortFound, this.sort.draw(), viewButtons);
    this.mainGoods.append(goodsSort, this.messageSearchResult, this.goodsCreate());
    mainFilters.append(filtersButtons, brandFilter, categoryFilter, priceFilter, stockFilter);
    mainContaner.append(mainFilters, this.mainGoods);
    main.append(mainContaner);
    setTimeout(() => {
      this.drawFiltredGoods();
    }, 100);
    return main;
  }
}

export default MainPage;