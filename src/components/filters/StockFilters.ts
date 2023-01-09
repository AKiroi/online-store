import { createHTMLElement } from '../../utils/createHTMLElement';
import { state } from './../../state/State';
import { getQueryParams } from './../../utils/getQueryParams';


class StockFilters {
  callBack: () => void;

  constructor(filterCallBack: () => void) {
    this.callBack = filterCallBack;
  }

  handlerStockFiltred = (e: Event): void => {
    const filterStockRange = document.querySelectorAll('.stock-filter__range') as NodeListOf<Element>;
    const filterStockInputCustom = document.querySelector('.stock-filter__input-custom') as HTMLElement;
    const filterStockInputMin = <HTMLInputElement>document.querySelector('.stock-filter__input-min');
    const filterStockInputMax = <HTMLInputElement>document.querySelector('.stock-filter__input-max');
    const filterStockNumberMin = <HTMLInputElement>document.querySelector('.stock-filter__number-min')!;
    const filterStockNumberMax = <HTMLInputElement>document.querySelector('.stock-filter__number-max')!;
    let gap = 10;

    filterStockRange.forEach((item) => {
      item.addEventListener('input', (e) => {
        let target = e.target as HTMLElement;
        let minVal = parseInt(filterStockInputMin.value);
        let maxVal = parseInt(filterStockInputMax.value);
        state.stockValMin = minVal;
        state.stockValMax = maxVal;

        getQueryParams.delete('stockMin');
        getQueryParams.delete('stockMax');
        getQueryParams.append('stockMin', state.stockValMin.toString());
        getQueryParams.append('stockMax', state.stockValMax.toString());

        if (maxVal - minVal < gap) {
          if (target.classList.contains('stock-filter__input-min')) {
            filterStockInputMin.value = String(maxVal - gap);
          } else {
            filterStockInputMax.value = String(minVal + gap);
          }
        } else {
          filterStockInputCustom.style.left = (minVal / +filterStockInputMin.max) * 100 + '%';
          filterStockInputCustom.style.right = 100 - (maxVal / +filterStockInputMax.max) * 100 + '%';
          filterStockNumberMin.value = minVal.toString();
          filterStockNumberMax.value = maxVal.toString();
        }
        this.callBack();
      });
    });
  };

  draw(): HTMLElement {
    const stockFilter = createHTMLElement(['filters__stock', 'stock-filter']);

    stockFilter.addEventListener('click', this.handlerStockFiltred);

    stockFilter.innerHTML = `
        <div class="stock-filter__title">Stock</div>
        <div class="stock-filter__numbers-wrapper">
          <div class="stock-filter__min">
            <input class="stock-filter__number-min" min=${state.filters.stock[0]} max=${state.filters.stock[1]} value=${state.stockValMin} disabled>
          </div>
          <div class="stock-filter__max">
            <input type="number" class="stock-filter__number-max" min=${state.filters.stock[0]} max=${state.filters.stock[1]} value=${state.stockValMax} disabled>
          </div>
        </div>
        <div class="stock-filter__wrapper">
          <div class="stock-filter__input-custom"></div>
          <input type="range" class="stock-filter__input-min stock-filter__range" min=${state.filters.stock[0]} max=${state.filters.stock[1]} value=${state.stockValMin}>
          <input type="range" class="stock-filter__input-max stock-filter__range" min=${state.filters.stock[0]} max=${state.filters.stock[1]} value=${state.stockValMax}>
        </div>
        `;

    return stockFilter;
  }
}

export default StockFilters;

//draw(): HTMLElement {
//  const priceFilter = createHTMLElement(['filters__stock', 'stock-filter']);

//  priceFilter.innerHTML = `
//        <div class="stock-filter__title">Stock</div>
//        <div class="stock-filter__numbers-wrapper">
//          <div class="stock-filter__min">
//            <input class="stock-filter__number-min" type="number" min="0" max="30" value="0" disabled>
//          </div>
//          <div class="stock-filter__max">
//            <input type="number" class="stock-filter__number-max" min="0" max="30" value="30" disabled>
//          </div>
//        </div>
//        <div class="stock-filter__wrapper">
//          <div class="stock-filter__input-custom"></div>
//          <input type="range" class="stock-filter__input-min stock-filter__range" min="0" max="30" value="0">
//          <input type="range" class="stock-filter__input-max stock-filter__range" min="0" max="30" value="30">
//        </div>
//    `;

//  return priceFilter;
//}
//}

//export default StockFilters;
