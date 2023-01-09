import { createHTMLElement } from '../../utils/createHTMLElement';
import { state } from './../../state/State';
import { getQueryParams } from './../../utils/getQueryParams';

class PriceFilters {
  callBack: () => void;
  
  constructor (filterCallBack: () => void){
    this.callBack = filterCallBack;
  } 

  handlerPriceFiltred = (e: Event): void => {
    const filterPriceRange = document.querySelectorAll('.price-filter__range') as NodeListOf<Element>;
    const filterPriceInputCustom = document.querySelector('.price-filter__input-custom') as HTMLElement;
    const filterPriceinputMin = <HTMLInputElement>document.querySelector('.price-filter__input-min');
    const filterPriceinputMax = <HTMLInputElement>document.querySelector('.price-filter__input-max');
    const filterPriceNumberMin = <HTMLInputElement>document.querySelector('.price-filter__number-min')!;
    const filterPriceNumberMax = <HTMLInputElement>document.querySelector('.price-filter__number-max')!;
    let gap = 100;

    filterPriceRange.forEach((item) => {
      item.addEventListener('input', (e) => {
        let target = e.target as HTMLElement;
        let minVal = parseInt(filterPriceinputMin.value);
        let maxVal = parseInt(filterPriceinputMax.value);
        state.priceValMin = minVal;
        state.priceValMax = maxVal;

        getQueryParams.delete('priceMin');
        getQueryParams.delete('priceMax');
        getQueryParams.append('priceMin', state.priceValMin.toString());
        getQueryParams.append('priceMax', state.priceValMax.toString());


        if (maxVal - minVal < gap) {
          if (target.classList.contains('price-filter__input-min')) {
            filterPriceinputMin.value = String(maxVal - gap);
          } else {
            filterPriceinputMax.value = String(minVal + gap);
          }
        } else {
          filterPriceInputCustom.style.left = (minVal / +filterPriceinputMin.max) * 100 + '%';
          filterPriceInputCustom.style.right = 100 - (maxVal / +filterPriceinputMax.max) * 100 + '%';
          filterPriceNumberMin.value = minVal.toString();
          filterPriceNumberMax.value = maxVal.toString();
        }
        //state.filtredPriceState();
        //console.log(state.filtredGoods);
        //console.log(state.priceMaxMin[1]);
        this.callBack();
      });
    });
  };

  draw(): HTMLElement {
    const priceFilter = createHTMLElement(['filters__price', 'price-filter']);
    priceFilter.addEventListener('click', this.handlerPriceFiltred);

    priceFilter.innerHTML = `
      <div class="price-filter__title">Price</div>
      <div class="price-filter__numbers-wrapper">
        <div class="price-filter__min">
          <input class="price-filter__number-min" min=${state.filters.price[0]} max=${state.filters.price[1]} value=${state.getMaxMinPrice()[0]} disabled>
        </div>
        <div class="price-filter__max">
          <input type="number" class="price-filter__number-max" min=${state.filters.price[0]} max=${state.filters.price[1]} value=${state.getMaxMinPrice()[1]} disabled>
        </div>
      </div>
      <div class="price-filter__wrapper">
        <div class="price-filter__input-custom"></div>
        <input type="range" class="price-filter__input-min price-filter__range" min=${state.filters.price[0]} max=${state.filters.price[1]} value=${state.getMaxMinPrice()[0]}>
        <input type="range" class="price-filter__input-max price-filter__range" min=${state.filters.price[0]} max=${state.filters.price[1]} value=${state.getMaxMinPrice()[1]}>
      </div>
      `;

    return priceFilter;
  }
}

export default PriceFilters;

//dual-slider

//const filterPriceRange = document.querySelectorAll('.price-filter__range') as NodeListOf<Element>
//const filterPriceInputCustom = document.querySelector('.price-filter__input-custom') as HTMLElement;
//const filterPriceinputMin= <HTMLInputElement>document.querySelector('.price-filter__input-min');
//const filterPriceinputMax= <HTMLInputElement>document.querySelector('.price-filter__input-max');
//const filterPriceNumberMin= <HTMLInputElement>document.querySelector('.price-filter__number-min')!;
//const filterPriceNumberMax= <HTMLInputElement>document.querySelector('.price-filter__number-max')!;
//let gap = 100;

//console.log(filterPriceNumberMin.value);

//filterPriceRange.forEach(item => {
//  item.addEventListener('input', e => {
//    let target = e.target as HTMLElement;
//    let minVal = parseInt(filterPriceinputMin.value);
//    let maxVal = parseInt(filterPriceinputMax.value);
//    console.log(maxVal);

//    if (maxVal - minVal < gap) {
//      if (target.classList.contains('price-filter__input-min')){
//        filterPriceinputMin.value = String(maxVal - gap);
//      } else {
//        filterPriceinputMax.value = String(minVal + gap);
//      }
//    } else {
//      filterPriceInputCustom.style.left = (minVal / +filterPriceinputMin.max) * 100 + '%';
//      filterPriceInputCustom.style.right = 100 - (maxVal / +filterPriceinputMax.max) * 100 + '%';
//      filterPriceNumberMin.value = minVal.toString();
//      filterPriceNumberMax.value = maxVal.toString();
//    }

//  })
//})
