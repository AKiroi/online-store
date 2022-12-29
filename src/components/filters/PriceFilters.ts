import { createHTMLElement } from "../../utils/createHTMLElement";


class PriceFilters {

  draw(): HTMLElement {
    const priceFilter = createHTMLElement(['filters__price', 'price-filter']);

    priceFilter.innerHTML = `
      <div class="price-filter__title">Price</div>
      <div class="price-filter__numbers-wrapper">
        <div class="price-filter__min">
          <input class="price-filter__number-min" type="number" min="0" max="2000" value="0" disabled>
        </div>
        <div class="price-filter__max">
          <input type="number" class="price-filter__number-max" min="0" max="2000" value="2000" disabled>
        </div>
      </div>
      <div class="price-filter__wrapper">
        <div class="price-filter__input-custom"></div>
        <input type="range" class="price-filter__input-min price-filter__range" min="0" max="2000" value="0">
        <input type="range" class="price-filter__input-max price-filter__range" min="0" max="2000" value="2000">
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
