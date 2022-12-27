
import { createHTMLElement } from '../../utils/createHTMLElement';
import dataGoods, { categoryArray } from '../../data/data';
import { Igoods } from '../../data/types';
import { state } from '../../state/State';
import { countCategoryObj } from './../../data/data';

class CategoryFilters {
  callBack: () => void;
  constructor (filterCallBack: () => void){
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
   
    state.filtredCategoryState()
    this.callBack();

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

      const countCategory: string = String(countCategoryObj(state.goods)[categoryItem]);      
      const categoryFilterCountContainer = createHTMLElement('category-filter__count-container');
      const categoryFilterCount = createHTMLElement('category-filter__count', 'span', `/${countCategory}`);
      const categoryFilterCountFiltred = createHTMLElement('category-filter__count-filtred', 'span', countCategory);
      
      categoryFilterCountContainer.append(categoryFilterCountFiltred, categoryFilterCount);
      categoryFilterWrapper.append(inputFilterCheckbox, categoryFilterCustomCheckbox, categoryFilterName);
      categoryFilterItem.append(categoryFilterWrapper, categoryFilterCountContainer);
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