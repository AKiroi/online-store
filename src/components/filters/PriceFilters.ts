import { createHTMLElement } from '../../utils/createHTMLElement';
import { state } from './../../state/State';

class PriceFilters {
  //filterPriceRange = document.querySelectorAll('.price-filter__range') as NodeListOf<Element>;
  //filterPriceInputCustom = document.querySelector('.price-filter__input-custom') as HTMLElement;
  //filterPriceinputMin = <HTMLInputElement>document.querySelector('.price-filter__input-min');
  //filterPriceinputMax = <HTMLInputElement>document.querySelector('.price-filter__input-max');
  //filterPriceNumberMin = <HTMLInputElement>document.querySelector('.price-filter__number-min')!;
  //filterPriceNumberMax = <HTMLInputElement>document.querySelector('.price-filter__number-max')!;
  //gap = 100

  callBack: () => void;
  
  constructor (filterCallBack: () => void){
    this.callBack = filterCallBack;
  } 

  handlerPriceFiltred = (e: Event): void => {
    const target = e.target as HTMLElement;
    //const priceFilterInputMin = target.closest('.price-filter__input-min');
    //const priceFilterInputMax = target.closest('.price-filter__input-max');
    //const filterPriceNumberMin = <HTMLInputElement>document.querySelector('.price-filter__number-min')!;
    //const filterPriceNumberMax = <HTMLInputElement>document.querySelector('.price-filter__number-max')!;

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
        state.priceUp = maxVal;
        state.priceDown = minVal;

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
          <input class="price-filter__number-min" min=${state.filters.price[0]} max=${state.filters.price[1]} value=${state.filters.price[0]} disabled>
        </div>
        <div class="price-filter__max">
          <input type="number" class="price-filter__number-max" min=${state.filters.price[0]} max=${state.filters.price[1]} value=${state.filters.price[1]} disabled>
        </div>
      </div>
      <div class="price-filter__wrapper">
        <div class="price-filter__input-custom"></div>
        <input type="range" class="price-filter__input-min price-filter__range" min=${state.filters.price[0]} max=${state.filters.price[1]} value=${state.filters.price[0]}>
        <input type="range" class="price-filter__input-max price-filter__range" min=${state.filters.price[0]} max=${state.filters.price[1]} value=${state.filters.price[1]}>
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
