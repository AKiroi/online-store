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
  filters: Filters  = initialFilters;
  goods: Array<Igoods> = dataGoods;
  search: string = '';
  sort: string = 'sort-by-price-down';

  filtredState() {
    const filtredGoods = this.goods.filter((item: Igoods) => this.filters.brand.includes(item.brand));
    return filtredGoods
  }
}

export const state = new State();