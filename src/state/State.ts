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
  sort: string = 'sort-by-price-down';

  //filtredSearchState() {
  //  this.filtredGoods =  this.goods.filter((item) => item.name.toLowerCase().includes(state.search.toLowerCase()));
  //}

  //filtredSortState() {
  //  this.filtredGoods.sort() ///
  //}

  filtredBrandState(): void {
    if (this.filters.brand.length !== 0) {
      this.filtredGoods = this.goods.filter((item: Igoods) => this.filters.brand.includes(item.brand));
    } else {
      this.filtredGoods = this.goods;
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
    //this.filtredSearchState()
    this.filtredBrandState();
    this.filtredCategoryState();

    //filtredSortState()
    return this.filtredGoods;
  }
}

export const state = new State();
