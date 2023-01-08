import { createHTMLElement } from "../../utils/createHTMLElement";
import { Igoods } from "../../data/types";
import { state } from "../../state/State";

class GoodsItemPage {
  private brand;
  private category;
  private price;
  private name;
  private photo;
  private inStock;
  private goodsItem;
  private id;

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

  private handlerCartButtonClick = (target: Element): void => {
    const buttonCart = document.querySelector('.drop__btn') as HTMLElement;
    const headerCartCount = document.querySelector('.header__count') as HTMLElement;
    if (target.classList.contains('btn_remove')) {
      buttonCart.classList.remove('btn_remove');
      buttonCart.textContent = 'Drop on cart';
      const index = this.id;
      state.cart.splice(this.findElementToLocalStorage(index.toString()), 1);
    } else {
      buttonCart.classList.add('btn_remove');
      buttonCart.textContent = 'Drop from cart';
      state.cart.push(this.goodsItem);
    }
    headerCartCount.textContent = String(state.cart.length);
    localStorage.setItem('cart', JSON.stringify(state.cart));
  };

  public findElementToLocalStorage(n: string): number {
    const dateLocalStorage = JSON.parse(localStorage.getItem('cart') as string);
    return dateLocalStorage.findIndex((el: Element) => el.id.toString() === n);
  }

  private handlerGoodsButtons = (e: Event): void => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('drop__btn')) {
      console.log(target);
      this.handlerCartButtonClick(target);
    }
  };

  private handlerChangeImage = (e: Event): void => {
    const target = e.target as HTMLElement;
    if (target.id === '') return;
    const activeOld = document.querySelector('.active') as HTMLElement;
    const mainImage = document.querySelector('.goods-item-container-images-block__image') as HTMLElement;
    activeOld.classList.remove('active');
    target.classList.add('active');
    mainImage.innerHTML = `<img src=${this.photo[Number(target.id)]} alt=${this.brand}>`;
  };

  draw(): HTMLElement {
    const goodsItem = createHTMLElement('goods-item');
    const goodsItemContainer = createHTMLElement('goods-item-container');
    const goodsItemImagesBlok = createHTMLElement('goods-item-container-images-block');
    const goodsItemImage = createHTMLElement('goods-item-container-images-block__image');
    const goodsItemImages = createHTMLElement('goods-item-container-images-block__images');
    const goodsItemContentBlock = createHTMLElement('goods-item-container-content-block');
    const goodsItemContent = createHTMLElement('goods-item-container-content-block__content');
    const goodsItemBreadCrumps = createHTMLElement('goods-item-container-content-block__content__bread-crumps');
    const goodsItemTitle = createHTMLElement('goods-item-container-content-block__content__title');
    const goodsItemDescription = createHTMLElement('goods-item-container-content-block__content__description');
    const goodsItemButtonContainer = createHTMLElement('goods-item-container-button-block');
    const goodsItemPrice = createHTMLElement('goods-item-container-button-block__price');
    const goodsItemButtons = createHTMLElement('goods-item-container-button-block__buttons');
    const btnBuyNow = document.createElement('button') as HTMLButtonElement;
    const btnDropOnCart = document.createElement('button') as HTMLButtonElement;
    btnBuyNow.innerHTML = 'Buy now';
    btnDropOnCart.innerHTML = 'Drop on cart';
    btnBuyNow.className += 'item-btn bye-btn btn_add';
    btnDropOnCart.className += 'item-btn drop__btn btn_add';
    goodsItemButtons.addEventListener('click', this.handlerGoodsButtons);
    goodsItemBreadCrumps.innerHTML = `STORE >> ${this.category.toUpperCase()} >> ${this.brand.toUpperCase()} >> ${this.name.toUpperCase()}`;
    goodsItemImages.addEventListener('click', this.handlerChangeImage);
    goodsItemImage.innerHTML = `<img class="main-image" src=${this.photo[0]} alt=${this.brand}>`;
    goodsItemImages.innerHTML = `<img class="active" id="0" src=${this.photo[0]} alt=${this.brand}>
                                <img class="no-active" id="1" src=${this.photo[1]} alt=${this.brand}>
                                <img class="no-active" id="2" src=${this.photo[2]} alt=${this.brand}>
                                <img class="no-active" id="3" src=${this.photo[3]} alt=${this.brand}>`;

    goodsItemTitle.textContent = this.name;
    goodsItemDescription.innerHTML = `<ul>
                                      <li>Brand: ${this.brand}</li>
                                      <li>Category: ${this.category}</li>
                                      <li>Stock: ${this.inStock}</li>
                                      </ul>`;
    goodsItemPrice.innerHTML = `${this.price} $`;
    goodsItem.append(goodsItemContainer);
    goodsItemContainer.append(goodsItemImagesBlok, goodsItemContentBlock);
    goodsItemImagesBlok.append(goodsItemImage, goodsItemImages);
    goodsItemContentBlock.append(goodsItemContent, goodsItemButtonContainer);
    goodsItemContent.append(goodsItemBreadCrumps, goodsItemTitle, goodsItemDescription);
    if (localStorage.getItem('cart')) {
      if (this.findElementToLocalStorage(this.id.toString()) !== -1) {
        btnDropOnCart.classList.add('btn_remove');
      }
    }
    goodsItemButtons.append(btnBuyNow, btnDropOnCart);
    goodsItemButtonContainer.append(goodsItemPrice, goodsItemButtons);
    return goodsItem;
  }
}

export default GoodsItemPage;
