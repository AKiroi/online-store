import './style.scss'





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

