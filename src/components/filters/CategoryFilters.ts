
import { createHTMLElement } from '../../utils/createHTMLElement';
import dataGoods from '../controller/bd';
import { Igoods } from '../controller/bd';

class CategoryFilters {

  constructor() {
  }
  draw() {
    const categoriesFilterContainer = createHTMLElement(['filters__category', 'category-filter']);
    
    categoriesFilterContainer.innerHTML = this.getCategory(dataGoods).map((category) => {
      return (`
      <div class="category-filter__item">
        <label class="category-filter__wrapper">
          <input type="checkbox" class="category-filter__checkbox" name="category">
          <span class=category-filter__custom-checkbox""></span>
          <span class="category-filter__name">${category}</span>
          <div class="category-filter__count">10</div>
        </label>
      </div>
      `)
    }).join('');;

    return categoriesFilterContainer;
  }

  getCategory(data: Array<Igoods>): string[] {
    const categories = data.map(item => item.category);
    return [...new Set(categories)];
  }
}

export default CategoryFilters;