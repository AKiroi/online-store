import { createHTMLElement } from '../../utils/createHTMLElement';
import { state } from '../../state/State';

class Search {
  callBack: () => void;
  constructor(filterCallBack: () => void) {
    this.callBack = filterCallBack;
  }

  handlerSearch = (e: Event): void => {
    const input = e.target as HTMLInputElement;
    const searchRequest: string = input.value;
    state.search = searchRequest;
    this.callBack();
  };

  draw() {
    const search = createHTMLElement('search');
    const inputText = document.createElement('input') as HTMLInputElement;
    inputText.className = 'search__input';
    inputText.type = 'search';
    inputText.id = 'search-input';
    inputText.placeholder = 'Find....';
    search.append(inputText);
    inputText?.addEventListener('input', this.handlerSearch);
    return search;
  }
}

export default Search;