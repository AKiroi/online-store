import { createHTMLElement } from '../../utils/createHTMLElement';
import { state } from '../../state/State';

class Sort {
  callBack: () => void;
  constructor(filterCallBack: () => void) {
    this.callBack = filterCallBack;
  }

  handlerSort = (e: Event): void => {
    const input = e.target as HTMLInputElement;
    const sortRequest: string = input.value;
    state.sort = sortRequest;
    this.callBack();
  };

  draw() {
    const sort = createHTMLElement('sort');
    const arrSortOption: string[][] = [
      ['', 'Sort by...'],
      ['sort-by-price-down', 'Sort by price &#8595;'],
      ['sort-by-price-up', 'Sort by price &#8593;'],
      ['sort-by-ratting-up', 'Sort by ratting &#8593;'],
      ['sort-by-ratting-down', 'Sort by ratting &#8595;'],
    ];

    const selectList = document.createElement('select') as HTMLSelectElement;
    selectList.className = 'sort__select';

    for (let i = 0; i < arrSortOption.length; i++) {
      const option = document.createElement('option') as HTMLOptionElement;
      option.className = 'sort__option';
      if (i === 0) {
        option.disabled = true;
        option.selected = true;
        option.hidden = true;
      }
      option.value = arrSortOption[i][0];
      option.text = arrSortOption[i][1];
      selectList.appendChild(option);
    }

    sort.append(selectList);

    selectList?.addEventListener('change', this.handlerSort);

    return sort;
  }
}

export default Sort;