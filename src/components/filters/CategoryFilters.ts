
import { createHTMLElement } from '../../utils/createHTMLElement';
import dataGoods, { categoryArray } from '../../data/data';
import { Igoods } from '../../data/types';

class CategoryFilters {

  constructor() {
  }
  draw() {
    const categoriesFilterContainer = createHTMLElement(['filters__category', 'category-filter']);
    const brandFilterTitle = createHTMLElement('category-filter__title', 'div', 'Category');
    const brandFilterItems = createHTMLElement('category-filter__items');

    
    brandFilterItems.innerHTML = categoryArray.map((category) => {
      return (`
      
        <label class="category-filter__wrapper">
          <div class="category-filter__item">
          <input type="checkbox" class="category-filter__checkbox" name="category">
          <span class=category-filter__custom-checkbox""></span>
          <span class="category-filter__name">${category}</span>
          <div class="category-filter__count">10</div>
          </div>
        </label>
      
      `)
    }).join('');

    categoriesFilterContainer.append(brandFilterTitle, brandFilterItems);

    return categoriesFilterContainer;
  }
}

export default CategoryFilters;