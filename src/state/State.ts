import dataGoods from "../data/data";
import { Idb, Igoods } from "../data/types";

export type Filters = {
  brand: Array<string>;
  category: Array<string>;
};


export const initialFilters: Filters = {
  brand: [],
  category: []
}


class State {
  choseGoodsItem: Igoods | null = null;
  filtredGoods: Igoods[] = []
  filters: Filters  = initialFilters;
  goods: Igoods[] = dataGoods;
  search: string = '';
  sort: string = '';

  filtredSearchState(): void {
    const searchPhrase = state.search.toLowerCase();
    if (searchPhrase.length !== 0) {
      this.filtredGoods = [];
      for (let i = 0; i < dataGoods.length; i++) {
        if (dataGoods[i].category.toLowerCase().indexOf(searchPhrase) !== -1) {
          this.filtredGoods.push(dataGoods[i]);
        } else if (dataGoods[i].name.toLowerCase().indexOf(searchPhrase) !== -1) {
          this.filtredGoods.push(dataGoods[i]);
        } else if (dataGoods[i].brand.toLowerCase().indexOf(searchPhrase) !== -1) {
          this.filtredGoods.push(dataGoods[i]);
        } else if (dataGoods[i].price.toString().toLowerCase().indexOf(searchPhrase) !== -1) {
          this.filtredGoods.push(dataGoods[i]);
        } else if (dataGoods[i].inStock.toString().toLowerCase().indexOf(searchPhrase) !== -1) {
          this.filtredGoods.push(dataGoods[i]);
        } else if (dataGoods[i].rating.toString().toLowerCase().indexOf(searchPhrase) !== -1) {
          this.filtredGoods.push(dataGoods[i]);
        }
      }
    } else {
      this.filtredGoods = this.goods;
    }
  }

  filtredSortState() {
    if (state.sort.length !== 0) {
      if (state.sort === 'sort-by-price-down') {
        this.filtredGoods.sort((a, b) => a.price - b.price);
      } else if (state.sort === 'sort-by-price-up') {
        this.filtredGoods.sort((a, b) => b.price - a.price);
      } else if (state.sort === 'sort-by-ratting-up') {
        this.filtredGoods.sort((a, b) => b.rating - a.rating);
      } else {
        this.filtredGoods.sort((a, b) => a.rating - b.rating);
      }
    }
  }

  filtredBrandState(): void {
    if (this.filters.brand.length !== 0) {
      this.filtredGoods = this.filtredGoods.filter((item: Igoods) => this.filters.brand.includes(item.brand));
    } else {
      this.filtredGoods;
    }
  }

  filtredCategoryState(): void {
    if (this.filters.category.length !== 0) {
      this.filtredGoods = this.filtredGoods.filter((item: Igoods) => this.filters.category.includes(item.category));
    } else {
      this.filtredGoods
    }
  }

  allFilters(): Igoods[] {
    this.filtredSearchState();
    this.filtredBrandState();
    this.filtredCategoryState();
    this.filtredSortState();
    return this.filtredGoods;
  }
}

export const state = new State();
