import { createHTMLElement } from '../../utils/createHTMLElement';
import { createImageElement } from '../../utils/createImageElement';
import dataGoods from '../../data/data';
import { Igoods } from '../../data/types';

class Goods {
  constructor() {}
  
  draw(dataGoods: Array<Igoods>) {
    const goodsContainer = createHTMLElement('goods');
    
    goodsContainer.innerHTML = dataGoods.map(({brand, category, name, photo, inStock, price }) => {
      return (`
      <div class="goods__item">
        <div class="goods__image">
          <img src=${photo[0]} alt=${brand}>
        </div>
        <div class="goods__title">${name}</div>
        <ul class="goods__content">
          <li>Brand: ${brand}</li>
          <li>Category: ${category}</li>
          <li>Stock: ${inStock}20</li>
        </ul>
        <div class="goods__price">$${price}</div>
        <a href="" class="goods__btn">Add to card</a>
      </div>
      `)
    }).join('');;

    return goodsContainer;
  }
}

export default Goods;
