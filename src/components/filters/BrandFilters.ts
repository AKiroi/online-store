import { createHTMLElement } from '../../utils/createHTMLElement';
import dataGoods from '../../data/data';
import { Igoods } from '../../data/types';
import { brandsArray } from './../../data/data';
import { state } from '../../state/State';
import Goods from '../goods/Goods';
import { getCountBrandObj } from './../../utils/getCountBrandObject';

class BrandFilters{
  callBack: () => void;
  
  constructor (filterCallBack: () => void){
    this.callBack = filterCallBack;
  }  

  private filterBrand = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    const dataBrand = target.getAttribute('data-brand') as string;
    if (target.checked === true) {
      state.filters.brand.push(dataBrand);
    } else {
      const index = state.filters.brand.findIndex((item) => item === dataBrand);
      state.filters.brand.splice(index, 1);
     
    }
    state.filtredBrandState();
    this.callBack(); 
  }

  draw(): HTMLElement {
    const brandFilterContainer = createHTMLElement(['filters__brand', 'brand-filter']);
    const brandFilterTitle = createHTMLElement('brand-filter__title', 'div', 'Brand');
    const brandFilterItems = createHTMLElement('brand-filter__items');

    brandsArray.forEach((brandItem) => {
      const brandFilterItem = createHTMLElement('brand-filter__item');
      const brandFilterWrapper = createHTMLElement('brand-filter__wrapper', 'label');

      const inputFilterCheckbox = document.createElement('input') as HTMLInputElement;
      inputFilterCheckbox.className = 'brand-filter__checkbox';
      inputFilterCheckbox.type = 'checkbox';
      inputFilterCheckbox.name = 'brand';
      inputFilterCheckbox.dataset.brand = brandItem;

      inputFilterCheckbox.addEventListener('change', this.filterBrand);
      const brandFilterCustomCheckbox = createHTMLElement('brand-filter__custom-checkbox', 'span');
      const brandFilterName = createHTMLElement('brand-filter__name', 'span', brandItem);

      const countBrand: string = String(getCountBrandObj(state.goods)[brandItem]);

      const brandFilterCountContainer = createHTMLElement('brand-filter__count-container');
      const brandFilterCount = createHTMLElement('brand-filter__count', 'span', `/${countBrand}`);
      const brandFilterCountFiltred = createHTMLElement('brand-filter__count-filtred', 'span', countBrand);


      if (state.filters.brand.includes(brandItem)) {
        inputFilterCheckbox.checked = true;
      } else {
        brandFilterCountFiltred.textContent = countBrand;
        inputFilterCheckbox.checked = false;
      }

      brandFilterCountContainer.append(brandFilterCountFiltred, brandFilterCount);
      brandFilterWrapper.append(inputFilterCheckbox, brandFilterCustomCheckbox, brandFilterName);
      brandFilterItem.append(brandFilterWrapper, brandFilterCountContainer);
      brandFilterItems.append(brandFilterItem);
    });

    brandFilterContainer.append(brandFilterTitle, brandFilterItems);

    return brandFilterContainer;
  }
}

export default BrandFilters;
