
import { createHTMLElement } from '../../utils/createHTMLElement';
import dataGoods from '../controller/bd';
import { Igoods } from '../controller/bd';

class BrandFilters {

  constructor() {
  }
  
  draw() {
    const brandFilterContainer = createHTMLElement(['filters__brand', 'brand-filter']);
    const brandFilterTitle = createHTMLElement('brand-filter__title', 'div', 'Brand');
    const brandFilterItems = createHTMLElement('brand-filter__items');

    this.getBrands(dataGoods).forEach((brandItem) => {
      const brandFilterItem = createHTMLElement('brand-filter__item');
      const brandFilterWrapper = createHTMLElement('brand-filter__wrapper', 'label');
      const inputFilterCheckbox = document.createElement('input') as HTMLInputElement;
      inputFilterCheckbox.className = 'brand-filter__checkbox';
      inputFilterCheckbox.type = 'checkbox';
      inputFilterCheckbox.name = 'brand';
      const brandFilterCustomCheckbox = createHTMLElement('brand-filter__custom-checkbox', 'span');
      const brandFilterName = createHTMLElement('brand-filter__name', 'span', brandItem);
      const brandFilterCount = createHTMLElement('brand-filter__count', 'span', '10');

      brandFilterWrapper.append(inputFilterCheckbox, brandFilterCustomCheckbox, brandFilterName, brandFilterCount)
      brandFilterItem.append(brandFilterWrapper);
      brandFilterItems.append(brandFilterItem);
    })

    brandFilterContainer.append(brandFilterTitle, brandFilterItems);

    return brandFilterContainer;
  }

  getBrands(dataGoods: Array<Igoods>): string[] {
    const brands = dataGoods.map(item => item.brand);
    return [...new Set(brands)];
  }
}

export default BrandFilters;