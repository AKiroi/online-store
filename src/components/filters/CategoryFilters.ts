
import { createHTMLElement } from '../../utils/createHTMLElement';
import dataGoods, { categoryArray, countCategoryObj } from '../../data/data';
import { Igoods } from '../../data/types';
import { state } from '../../state/State';

class CategoryFilters {
  callBack: (arg: Igoods[]) => void;
  constructor (filterCallBack: (arg: Igoods[]) => void){
    this.callBack = filterCallBack;
  }
  
  filterCategory = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    const dataCategory = target.getAttribute('data-brand') as string;
    if (target.checked === true) {
      state.filters.category.push(dataCategory);
    } else {
      const index = state.filters.category.findIndex((item) => item === dataCategory)
      state.filters.category.splice(index, 1);
    }
    this.callBack(state.filtredState()); 
  }

  draw() {
    const categoryFilterContainer = createHTMLElement(['filters__category', 'category-filter']);
    const categoryFilterTitle = createHTMLElement('category-filter__title', 'div', 'Category');
    const categoryFilterItems = createHTMLElement('category-filter__items');

    categoryArray.forEach((categoryItem) => {
      const categoryFilterItem = createHTMLElement('category-filter__item');
      const categoryFilterWrapper = createHTMLElement('category-filter__wrapper', 'label');

      const inputFilterCheckbox = document.createElement('input') as HTMLInputElement;
      inputFilterCheckbox.className = 'category-filter__checkbox';
      inputFilterCheckbox.type = 'checkbox';
      inputFilterCheckbox.name = 'brand';
      inputFilterCheckbox.dataset.brand = categoryItem;
      inputFilterCheckbox.addEventListener('change', this.filterCategory);
      const categoryFilterCustomCheckbox = createHTMLElement('brand-filter__custom-checkbox', 'span');
      const categoryFilterName = createHTMLElement('brand-filter__name', 'span', categoryItem);
      const countBrand: string = String(countCategoryObj[categoryItem]);
      const categoryFilterCount = createHTMLElement('brand-filter__count', 'span', countBrand);

      categoryFilterWrapper.append(inputFilterCheckbox, categoryFilterCustomCheckbox, categoryFilterName, categoryFilterCount);
      categoryFilterItem.append(categoryFilterWrapper);
      categoryFilterItems.append(categoryFilterItem);
    });

    categoryFilterContainer.append(categoryFilterTitle, categoryFilterItems);

    return categoryFilterContainer;
  }
}

export default CategoryFilters;


//draw() {
//  const categoriesFilterContainer = createHTMLElement(['filters__category', 'category-filter']);
//  const brandFilterTitle = createHTMLElement('category-filter__title', 'div', 'Category');
//  const brandFilterItems = createHTMLElement('category-filter__items');

  
//  brandFilterItems.innerHTML = categoryArray.map((category) => {
//    return (`
//    <div class="category-filter__item">
//      <label class="category-filter__wrapper">
//        <input type="checkbox" class="category-filter__checkbox" name="category">
//        <span class=category-filter__custom-checkbox""></span>
//        <span class="category-filter__name">${category}</span>
//        <div class="category-filter__count">10</div>
//      </label>
//    </div>
    
//    `)
//  }).join('');

//  categoriesFilterContainer.append(brandFilterTitle, brandFilterItems);

//  return categoriesFilterContainer;
//}