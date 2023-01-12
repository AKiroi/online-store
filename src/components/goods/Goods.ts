import { createHTMLElement } from '../../utils/createHTMLElement';
import { IGoods } from '../../data/types';
import { state } from './../../state/State';

class Goods {
  private brand;
  private category;
  private price;
  private name;
  private photo;
  private inStock;
  private goodsItem;
  private rating;
  private id;
  private count;
  
  constructor(goods: IGoods) {
    this.id = goods.id;
    this.brand = goods.brand;
    this.category = goods.category;
    this.name = goods.name;
    this.rating = goods.rating;
    this.photo = goods.photo;
    this.inStock = goods.inStock;
    this.price = goods.price;
    this.goodsItem = goods;
    this.count = goods;
  }

  private handlerCartButtonClick = (target: Element): void => {
    const buttonCart = target.closest('.goods__btn')! as HTMLElement;
    const headerCartCount = document.querySelector('.header__count') as HTMLElement;
    const headerTotal= document.querySelector('.header__item-total') as HTMLElement;
    
    if (target.classList.contains('goods__btn_add')) {
      buttonCart.classList.remove('goods__btn_add');
      buttonCart.textContent = 'Add to cart';
      this.goodsItem.count = 0;
      const index = state.cart.findIndex((item) => item.id === this.id);
      state.cart.splice(index, 1);
    } else {
      buttonCart.classList.add('goods__btn_add');
      buttonCart.textContent = 'Drop from cart';
      this.goodsItem.count = 1;
      state.cart.push(this.goodsItem);
    }

    headerCartCount.textContent = String(state.getTotalCount());
    headerTotal.textContent = state.getTotalPrice().toString() + " $";
    localStorage.setItem('cart', JSON.stringify(state.cart));
  };

  private handlerGoodsItem = (e: Event): void => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('goods__btn')) {
      this.handlerCartButtonClick(target);
    } else {
      state.choseGoodsItem = this.goodsItem;
      window.location.hash = `#/goodsItem/${this.goodsItem.id}`;
    }
  };

  private createButtonAdd = (): string => {
    if (state.cart.some((item) => item.id === this.id)) {
      return `<button class="goods__btn goods__btn_add">Drop from cart</button>`;
    } else {
      return `<button class="goods__btn">Add to cart</button>`;
    }
  }

  draw(): HTMLElement {
    const goodsContainer = createHTMLElement('goods__item');

    goodsContainer.addEventListener('click', this.handlerGoodsItem);

    goodsContainer.innerHTML = `
      <div class="goods__content-wrapper">
        <div class="goods__image">
          <img src=${this.photo[0]} alt=${this.brand}>
        </div>
        <div class="goods__content">
          <div class="goods__title">${this.name}</div>
          <ul class="goods__description">
            <li>Brand: ${this.brand}</li>
            <li>Category: ${this.category}</li>
            <li>Stock: ${this.inStock}</li>
            <li>Rating: ${this.rating}</li>
          </ul>
        </div>
      </div>
      <div class="goods__price-block">
        <div class="goods__price">$${this.price}</div>
        ${this.createButtonAdd()}
      </div>
  `;

    return goodsContainer;
  }
}

export default Goods;
