import { createHTMLElement } from '../../utils/createHTMLElement';

class Sort {
  constructor() {

  }
  draw() {
    const sort = createHTMLElement('sort');

    sort.innerHTML = `
      <select class="sort__select">
        <option class="sort__option" value="sort-by-name-down">Sort by price &#8595;</option>
        <option class="sort__option" value="sort-by-name-up">Sort by price &#8593;</option>
        <option class="sort__option" value="sort-by-year-up">Sort by ratting &#8593;</option>
        <option class="sort__option" value="sort-by-year-down">Sort by ratting &#8595;</option>
      </select>
      `;
    return sort;
  }
}

export default Sort;