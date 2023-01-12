
import { createHTMLElement } from '../../utils/createHTMLElement';
import { categoryArray } from '../../data/data';
import { state } from '../../state/State';
import { getCountCategoryObj } from '../../utils/getCountCategoryObj';

class CategoryFilters {
  callBack: () => void;
  constructor (filterCallBack: () => void){
    this.callBack = filterCallBack;
  }
  
  private filterCategory = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    const dataCategory = target.getAttribute('data-category') as string;
    
    
    if (target.checked === true) {
      state.filters.category.push(dataCategory);
    } else {
      const index = state.filters.category.findIndex((item) => item === dataCategory)
      state.filters.category.splice(index, 1);
    }
   
    state.filtredCategoryState();
    this.callBack();

  }

  draw(): HTMLElement {
    const categoryFilterContainer = createHTMLElement(['filters__category', 'category-filter']);
    const categoryFilterTitle = createHTMLElement('category-filter__title', 'div', 'Category');
    const categoryFilterItems = createHTMLElement('category-filter__items');

    categoryArray.forEach((categoryItem) => {
      const categoryFilterItem = createHTMLElement('category-filter__item');
      const categoryFilterWrapper = createHTMLElement('category-filter__wrapper', 'label');

      const inputFilterCheckbox = document.createElement('input') as HTMLInputElement;
      inputFilterCheckbox.className = 'category-filter__checkbox';
      inputFilterCheckbox.type = 'checkbox';
      inputFilterCheckbox.name = 'category';
      inputFilterCheckbox.dataset.category = categoryItem;

      inputFilterCheckbox.addEventListener('change', this.filterCategory);
      const categoryFilterCustomCheckbox = createHTMLElement('brand-filter__custom-checkbox', 'span');
      const categoryFilterName = createHTMLElement('brand-filter__name', 'span', categoryItem);

      const countCategory: string = getCountCategoryObj(state.goods)[categoryItem].toString();      
      const categoryFilterCountContainer = createHTMLElement('category-filter__count-container');
      const categoryFilterCount = createHTMLElement('category-filter__count', 'span', `/${countCategory}`);
      const categoryFilterCountFiltred = createHTMLElement('category-filter__count-filtred', 'span', countCategory);

      if (state.filters.category.includes(categoryItem)) {
        inputFilterCheckbox.checked = true;
      } else {
        categoryFilterCountFiltred.textContent = countCategory;
        inputFilterCheckbox.checked = false;
      }
      
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