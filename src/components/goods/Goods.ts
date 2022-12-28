import { createHTMLElement } from '../../utils/createHTMLElement';
import { createImageElement } from '../../utils/createImageElement';
import dataGoods from '../../data/data';
import { Igoods } from '../../data/types';
import { state } from './../../state/State';

class Goods {
  brand;
  category;
  price;
  name;
  photo;
  inStock;
  goodsItem;
  id;
  constructor(goods: Igoods) {
    this.id = goods.id;
    this.brand = goods.brand;
    this.category = goods.category;
    this.name = goods.name;
    this.photo = goods.photo;
    this.inStock = goods.inStock;
    this.price = goods.price;
    this.goodsItem = goods;
  }

  handlerCartButtonClick = (target: Element) => {
    const buttonCart = target.closest('.goods__btn')!;
    const headerCartCount = document.querySelector('.header__count') as HTMLElement;

    if (target.classList.contains('goods__btn_add')) {
      buttonCart.classList.remove('goods__btn_add');
      buttonCart.textContent = 'Add to cart';
      const index = state.cart.findIndex((item) => item.id === this.id);
      state.cart.splice(index, 1);
    } else {
      buttonCart.classList.add('goods__btn_add');
      buttonCart.textContent = 'Drop from cart';
      state.cart.push(this.goodsItem);
    }
    headerCartCount.textContent = String(state.cart.length);
    localStorage.setItem('cart', JSON.stringify(state.cart));
  };

  handlerGoodsItem = (e: Event): void => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('goods__btn')) {
      this.handlerCartButtonClick(target);
    } else {
      state.choseGoodsItem = this.goodsItem;
      window.location.hash = `#/goodsItem/${this.goodsItem.id}`;
    }
  };

  draw() {
    const goodsContainer = createHTMLElement('goods__item');

    goodsContainer.addEventListener('click', this.handlerGoodsItem);

    goodsContainer.innerHTML = `
        <div class="goods__image">
          <img src=${this.photo[0]} alt=${this.brand}>
        </div>
        <div class="goods__title">${this.name}</div>
        <ul class="goods__content">
          <li>Brand: ${this.brand}</li>
          <li>Category: ${this.category}</li>
          <li>Stock: ${this.inStock}</li>
        </ul>
        <div class="goods__price">$${this.price}</div>
        <button class="goods__btn">Add to card</button>
      `;

    return goodsContainer;
  }
}

export default Goods;
