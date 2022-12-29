import { createHTMLElement } from "../../utils/createHTMLElement";


class StockFilters {

  draw(): HTMLElement {
    const priceFilter = createHTMLElement(['filters__stock', 'stock-filter']);

    priceFilter.innerHTML = `
          <div class="stock-filter__title">Stock</div>
          <div class="stock-filter__numbers-wrapper">
            <div class="stock-filter__min">
              <input class="stock-filter__number-min" type="number" min="0" max="30" value="0" disabled>
            </div>
            <div class="stock-filter__max">
              <input type="number" class="stock-filter__number-max" min="0" max="30" value="30" disabled>
            </div>
          </div>
          <div class="stock-filter__wrapper">
            <div class="stock-filter__input-custom"></div>
            <input type="range" class="stock-filter__input-min stock-filter__range" min="0" max="30" value="0">
            <input type="range" class="stock-filter__input-max stock-filter__range" min="0" max="30" value="30">
          </div>
      `;

    return priceFilter;
  }
}

export default StockFilters;
