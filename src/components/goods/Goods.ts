import { createHTMLElement } from '../../utils/createHTMLElement';
import { createImageElement } from '../../utils/createImageElement';
import dataGoods from '../../data/data';
import { Igoods } from '../../data/types';

class Goods {
  brand;
  category; 
  price; 
  name; 
  photo;
  inStock;
  constructor(goods: Igoods) {
    this.brand = goods.brand;
    this.category = goods.category;
    this.name = goods.name;
    this.photo = goods.photo;
    this.inStock = goods.inStock;
    this.price = goods.price;
}

  draw() {
    const goodsContainer = createHTMLElement('goods__item');

    goodsContainer.innerHTML = `
        <div class="goods__image">
          <img src=${this.photo[0]} alt=${this.brand}>
        </div>
        <div class="goods__title">${this.name}</div>
        <ul class="goods__content">
          <li>Brand: ${this.brand}</li>
          <li>Category: ${this.category}</li>
          <li>Stock: ${this.inStock}20</li>
        </ul>
        <div class="goods__price">$${this.price}</div>
        <a href="" class="goods__btn">Add to card</a>
      `;

    return goodsContainer;
  }
}

export default Goods;
