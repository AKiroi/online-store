import { createHTMLElement } from '../../utils/createHTMLElement';

class Search {
  constructor() {

  }
  draw() {
    const search = createHTMLElement('search');

    search.innerHTML = `
      <form>
        <input type="search" class="search__input" id="search-input" placeholder="Find...." autofocus/>
      </form>
      `;
    return search;
  }
}

export default Search;