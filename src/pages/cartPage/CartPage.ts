import { createHTMLElement } from '../../utils/createHTMLElement';
import { createImageElement } from '../../utils/createImageElement';
import { createInputElement } from '../../utils/createInputElement';
import { Igoods } from '../../data/types';
import { state } from '../../state/State';
import ModalSubmit from '../../components/modal/ModalSubmit';
import { localStorageUtil } from './../../utils/localStorageUtil';

class CartPage {
  private modal;
  cartItems;
  //cartHeaderItem: HTMLInputElement;
  //cartHeaderItem = document.createElement('input') as HTMLInputElement;
  //cardItemValue: string;
  //countCartPages;
  cartPages: Igoods[][];

  constructor() {
    this.modal = new ModalSubmit();
    this.cartItems = localStorageUtil.getCartItems();
    this.cartPages = [];
    //this.cardItemValue = this.getCountCartHeaderValue();
    //this.countCartPages = this.getCountCartPages();
  }

  //generateCardCurrent(countCartItems: string, countPages: number) {
  //  const cartsData = [...this.cartItems];
  //  const pagesArr = [];
  //  for (let i = 0; i < countPages; i++) {
  //    let arrCard = cartsData.splice(0, +countCartItems);
  //    pagesArr.push(arrCard)
  //  }
  //  return pagesArr;
  //}

  //getCountCartHeaderValue(): string {
  //  return this.cartHeaderItem.value;
  //}

  //getCountCartPages() {
  //  return Math.ceil(this.cartItems.length / +this.cardItemValue);
  //}

  handlerCart = (e: Event) => {
    const cartHeaderItem = document.querySelector('.cart__header-item') as HTMLInputElement;
    const cartPagesArrowLeft = document.querySelector('.cart__pages-arrow-left');
    const cartPagesArrowRight = document.querySelector('.cart__pages-arrow-right');
    const cartPagesCount = document.querySelector('.cart__pages-count');
    const cartItems = document.querySelector('.cart__items');
    const cartItem = document.querySelectorAll('.cart__item');
    const plusIcon = document.querySelector('.plus-icon');
    const minusIcon = document.querySelector('.minus-icon');
    const cartAddCount = document.querySelector('.cart__add-count');

    //const target = e.target!;
    //console.log(target.closest('.cards__item'));

    //console.log();
    //cartItems?.addEventListener('click', (e: Event) => {

    //})

    //cartItem.forEach((item) => {
    //  item.addEventListener('click', (e) => {
    //    console.log(plusIcon);

    //  })
    //})

    const countCartItems = cartHeaderItem.value;
    const countPages = Math.ceil(this.cartItems.length / +countCartItems);

    cartHeaderItem.addEventListener('input', () => {
      const carts = [...this.cartItems];
      let arrCarts = [];
      for (let i = 0; i < countPages; i++) {
        let arrCard = carts.splice(0, +countCartItems);
        arrCarts.push(arrCard);
      }
      this.cartPages = arrCarts;
    });

    let currentPage = 1;
  };

  private handlerFooter = (e: Event): void => {
    const button = e.target as HTMLButtonElement;
    if (button.classList.contains('cart__btn-byu')) {
      this.drawModal();
    }
  };

  private drawModal(): void {
    const overlay = document.querySelector('.container__modal_overlay') as HTMLElement;
    overlay.classList.add('overlay');
    const containerModal = document.querySelector('.modal-container') as HTMLElement;
    containerModal.classList.add('overlay-modal-container');
    containerModal.append(this.modal.draw());
  }

  draw(): HTMLElement {
    const cartContainer = createHTMLElement('cart');
    if (!this.cartItems || this.cartItems.length === 0) {
      cartContainer.innerHTML =
        '<div class="cart__container"><div class="cart__header"><div class="cart_no-items"><p>Shopping cart is empty</p></div></div></div>';
    } else {
      cartContainer.addEventListener('click', this.handlerCart);
      const cartMainContainer = createHTMLElement('cart__container');
      const cartModalOverlay = createHTMLElement('container__modal_overlay');
      const cartModalContainer = createHTMLElement('modal-container');
      const cartHeader = createHTMLElement('cart__header');
      const cartHeaderTitle = createHTMLElement('cart__header-title');
      cartHeaderTitle.textContent = 'Product in Cart';
      const cartHeaderBox = createHTMLElement('cart__header-box');
      const cartHeaderItems = createHTMLElement('cart__header-items');
      const cartHeaderItemsText = createHTMLElement('cart__header-items-text', 'span', 'Items: ');
      const cartHeaderItem = document.createElement('input') as HTMLInputElement;
      cartHeaderItem.className = 'cart__header-item';
      cartHeaderItem.type = 'number';
      cartHeaderItem.value = '4';
      const cartHeaderPages = createHTMLElement('cart__pages');
      cartHeaderPages.innerHTML = `Page:
                <img src="./assets/icons/arrow-left-icon.svg" alt="arrow-left icon" class="cart__pages-arrow-left">
                <span class="cart__pages-count">1</span>
                <img src="./assets/icons/arrow-right-icon.svg" alt="arrow-left icon" class="cart__pages-arrow-left">`;

      //const cartHeaderItem = document.querySelector('.cart__header-item') as HTMLInputElement;
      //const countCartItemsVal = cartHeaderItem.value;

      const cartPagesArrowLeft = document.querySelector('.cart__pages-arrow-left');
      const cartPagesArrowRight = document.querySelector('.cart__pages-arrow-right');
      const countPages = Math.ceil(this.cartItems.length / +cartHeaderItem.value);

      const generateCardCurrent = () => {
        const carts = [...this.cartItems];
        let arrCarts = [];
        for (let i = 0; i < countPages; i++) {
          let arrCard = carts.splice(0, +cartHeaderItem.value);
          arrCarts.push(arrCard);
        }
        this.cartPages = arrCarts;

        console.log();
      };

      cartHeaderItem.addEventListener('input', () => {
        generateCardCurrent();
      });

      generateCardCurrent();

      cartHeaderItems.append(cartHeaderItemsText, cartHeaderItem);
      cartHeaderBox.append(cartHeaderItems, cartHeaderPages);
      cartHeader.append(cartHeaderTitle, cartHeaderBox);

      let currentPage = 1;
      let index = 1;

      const createCartItems = (item: Igoods) => {
        const cartItem = createHTMLElement('cart__item');
        cartItem.dataset.id = item.id.toString();

        cartItem.innerHTML = `
            <div class="cart__right">
              <div class="cart__item-number">${++index - 1}</div>
              <div class="cart__img-box">
                <img class="cart__img" src=${item.photo[0]} alt=${item.brand}>
              </div>
              <div class="cart__content">
                <div class="cart__title">${item.name}</div>
                <div class="cart__description">
                  Brand: ${item.brand}; Categoty: ${item.category}; 
                  Discont: 10.8; Rating: ${item.rating}; InStock: ${item.inStock};
                </div>
              </div>
            </div>
            <div class="cart__left">
              <div class="cart__add-item">
                <div class="cart__plus">
                  <img class="cart__plus-item" src="./assets/icons/plus-icon.svg" alt="plus-icon">
                </div>
                <div class="cart__add-count">${item.count}</div>
                <div class="cart__minus">
                  <img class="cart__minus-item" src="./assets/icons/mines-icon.svg" alt="minus-icon">
                </div>
              </div>
              <div class="cart__price">${item.price}$</div>
            </div>
        `;

        cartItem.addEventListener('click', (e: Event) => {
          const target = e.target as HTMLElement;
          const dataId = cartItem.getAttribute('data-id') as string;

          const cartAddCount = document.querySelectorAll('.cart__add-count')!;
          const cartPrice = document.querySelectorAll('.cart__price')!;
          const cartTotalCount = document.querySelector('.cart__total-count')!;
          const cartProductCount = document.querySelector('.cart__product-count')!;
          const headerItemText = document.querySelector('.header__item-total')!;

          this.cartItems.forEach((item, i) => {
            if (item.id === +dataId) {
              if (target.classList.contains('cart__plus-item')) {
                item.count++;
              }
              if (target.classList.contains('cart__minus-item')) {
                item.count--;
                if (item.count === 0) {
                  cartItem.remove();
                }
              }
              cartAddCount[i].textContent = item.count.toString();
              cartPrice[i].textContent = (item.count * item.price).toString() + '$';
            }
          });

          this.cartItems = this.cartItems.filter((item) => item.count !== 0);

          cartProductCount.textContent = getCartItemsCount().toString();
          cartTotalCount.textContent = getCartTotalPrice().toString() + '$';
          headerItemText.textContent = getCartTotalPrice().toString() + '$';
        });

        return cartItem;
      };

      let cards = this.cartPages[currentPage - 1].map((item) => createCartItems(item));

      const getCartItemsCount = () => {
        return this.cartItems.reduce((acc, curr) => {
          return acc + curr.count;
        }, 0);
      };

      const getCartTotalPrice = () => {
        return this.cartItems.reduce((acc, curr) => {
          return acc + curr.price * curr.count;
        }, 0)
      };

      const cartFooter = createHTMLElement('cart__footer');
      const cartPromoBlock = createHTMLElement('cart__promo-block');
      const inputPromoInput = createInputElement(['cart__promo-input'], 'text', 'Enter promo code');
      const cartPromoText = createHTMLElement('cart__header');
      cartPromoText.textContent = `Promo for test: 'RS', 'EPM'`;
      const cartPromoBye = createHTMLElement('cart__promo-byu');
      const cartProducts = createHTMLElement('cart__products');
      const cartProduct = createHTMLElement('cart__product');
      cartProduct.innerHTML = `Products: <span class="cart__product-count">${getCartItemsCount()}</span>`;
      const cartTotal = createHTMLElement('cart__total');
      cartTotal.innerHTML = `Total: <span class="cart__total-count">${getCartTotalPrice()}$</span>`;
      const btnSubmit = document.createElement('button') as HTMLButtonElement;
      btnSubmit.type = 'submit';
      btnSubmit.innerHTML = 'BUY NOW';
      btnSubmit.className = 'cart__btn-byu';

      cartContainer.append(cartMainContainer);
      const cartMain = createHTMLElement('cart__main');
      const cartItems = createHTMLElement('cart__items');

      cartItems.append(...cards);
      cartMain.append(cartItems);

      cartPromoBlock.append(inputPromoInput, cartPromoText);
      cartProducts.append(cartProduct, cartTotal);
      cartPromoBye.append(cartProducts, btnSubmit);
      cartFooter.append(cartPromoBlock, cartPromoBye);
      cartMainContainer.append(cartModalOverlay, cartHeader, cartMain, cartFooter, cartModalContainer);

      if (localStorage.getItem('modal')) {
        setTimeout(() => {
          localStorage.removeItem('modal');
          this.drawModal();
        }, 500);
      }

      cartFooter?.addEventListener('click', this.handlerFooter);
    }
    return cartContainer;
  }
}

export default CartPage;
