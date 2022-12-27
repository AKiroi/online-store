import { createHTMLElement } from '../../utils/createHTMLElement';
import { state } from './../../state/State';

class Search {
  //callBack: () => void;
  //constructor (filterCallBack: () => void){
  //  this.callBack = filterCallBack;
  //}

  //handlerSearch = (e: Event) => {
  //  const input = e.target as HTMLInputElement;
  //  const value = input.value;
  //  state.search = value;

  //  state.filtredSearchState();
  //  this.callBack(); 
  //}this.callBack();

  draw() {
    const search = createHTMLElement('search');
    const inputText = document.createElement('input') as HTMLInputElement;
    inputText.className = 'search__input';
    inputText.type = 'search';
    inputText.id = 'search-input';
    inputText.placeholder = 'Find....';
    search.append(inputText);
    
    //inputText?.addEventListener('input', (e: Event) => {
    //  const input = e.target as HTMLInputElement;
    //  console.log(input.value)
    //});

    return search
  }
  //draw() {
  //  const search = createHTMLElement('search');
  //  const searchForm = document.createElement('form')
  //  const searchInput = document.createElement('input') as HTMLInputElement;
  //  searchInput.type = 'search';
  //  searchInput.className = 'search__input';

  //  searchForm.append(searchInput)
  //  search.append(searchForm);

    //search.innerHTML = `
    //  <form>
    //    <input type="search" class="search__input" id="search-input" placeholder="Find...." autofocus/>
    //  </form>
    //  `;

    //  const input = document.querySelector('search__input');
  //    searchInput?.addEventListener('input', this.handlerSearch);
  //  return search;
  //}
}

export default Search;