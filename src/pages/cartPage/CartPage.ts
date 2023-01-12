import { createHTMLElement } from '../../utils/createHTMLElement';
import { createImageElement } from '../../utils/createImageElement';
import { createInputElement } from '../../utils/createInputElement';
import { Igoods } from '../../data/types';
import { state } from '../../state/State';
import ModalSubmit from '../../components/modal/ModalSubmit';
import { localStorageUtil } from './../../utils/localStorageUtil';
import dataGoods from './../../data/data';
import { getQueryParams } from './../../utils/getQueryParams';

class CartPage {
  private modal;
  private cartItems;
  private cartPages: Igoods[][];
  private currentPage: number;
  private pagesItems: string;

  constructor() {
    this.modal = new ModalSubmit();
    this.cartItems = localStorageUtil.getCartItems();
    this.cartPages = [];
    this.currentPage = Number(getQueryParams.get('page')) || 1;
    this.pagesItems = getQueryParams.get('limit') || '4';
  }

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

  private setDiscount = (e: Event): void => {
    const input = e.target as HTMLInputElement;
    const inputRequest: string = input.value;
    const discountPercent: [string[], string[], number[]] = [
      ['RSS', 'EPAM'],
      ['RS School', 'EPAM Systems'],
      [10, 15],
    ];

    const clickedElement = e.target as HTMLElement;
    const cartPromoButton = document.querySelector('.cart__promo-button') as HTMLElement;
    const cartPromoActive = document.querySelector('.cart__promo-text') as HTMLElement;
    const cartTotal = document.querySelector('.cart__total') as HTMLElement;
    const cartPromoHint = document.querySelector('.cart__promo-hint') as HTMLElement;
    const cartOldPrice = document.querySelector('.cart__promo-old-price') as HTMLElement;
    let promo: {
      active: number;
      percent: number;
      activeDiscount: string;
      hover: number;
    }[];
    const sessionStorageItem: string | null = sessionStorage.getItem('promo');
    if (sessionStorageItem !== null) {
      promo = JSON.parse(sessionStorageItem as string);
    } else {
      promo = [
        {
          active: -1,
          percent: 0,
          activeDiscount: '',
          hover: 0,
        },
      ];
    }

    if (e.type === 'input') {
      if (discountPercent[0].indexOf(inputRequest.toUpperCase()) !== -1) {
        const index = discountPercent[0].indexOf(inputRequest.toUpperCase());
        cartPromoHint.innerHTML = `${[discountPercent[1][index]]} - ${discountPercent[2][index]} %`;
        if (index !== promo[0].active && promo[0].active !== 2) {
          cartPromoButton.classList.remove('hidden');
        }
        promo[0].hover = index;
        sessionStorage.setItem('promo', JSON.stringify(promo));
      } else {
        cartPromoHint.innerHTML = '';
        cartPromoButton.classList.add('hidden');
      }
    }
    let activatedDiscount = '';
    let percent = 0;

    if (e.type === 'click' && clickedElement.classList.contains('cart__promo-button')) {
      const sessionStorageItem: string | null = sessionStorage.getItem('promo');
      if (sessionStorageItem !== null && cartPromoActive.textContent?.length === 0) {
        const index = Number(JSON.parse(sessionStorageItem)[0].hover);
        activatedDiscount = `<div class="button-delete-discount">Delete discount</div><br>Discount: <br>${[discountPercent[1][index]]} - ${discountPercent[2][index]} %`
        cartPromoActive.innerHTML = activatedDiscount;
        percent = discountPercent[2][index];
      } else if (sessionStorageItem !== null && cartPromoActive.textContent?.length !== 0) {
        activatedDiscount = `<div class="button-delete-discount">Delete discount</div><br>Discount: <br>${[discountPercent[1][0]]} - ${discountPercent[2][0]} % <br>${[discountPercent[1][1]]} - ${discountPercent[2][1]} %`
        cartPromoActive.innerHTML = activatedDiscount;
        percent = discountPercent[2][0] + discountPercent[2][1];
        promo[0].hover = 2;
      }
      if (sessionStorageItem) {
        promo[0].percent = percent;
        promo[0].active = promo[0].hover;
        promo[0].activeDiscount = activatedDiscount;
        sessionStorage.setItem('promo', JSON.stringify(promo));
      }
      cartTotal.innerHTML = this.getSumTotal('discount');
      cartOldPrice.innerHTML = this.getSumTotal('noDiscount');
      cartPromoButton.classList.add('hidden');
    }

    if (e.type === 'click' && clickedElement.classList.contains('button-delete-discount')) {
      promo = [
        {
          active: -1,
          percent: 0,
          activeDiscount: '',
          hover: 0,
        },
      ];
      sessionStorage.setItem('promo', JSON.stringify(promo));
      cartPromoActive.innerHTML = '';
      cartTotal.innerHTML = this.getSumTotal('discount');
      cartOldPrice.innerHTML = '';
    }
  };

  private getSumTotal = (d: string): string => {
    const total = () =>
      this.cartItems.reduce((acc, curr) => {
        return acc + curr.price * curr.count;
      }, 0);
    const noDiscount = `<span class="cart__total-count-old">${total()}$</span>`;
    const sessionStorageItem: string | null = sessionStorage.getItem('promo');
    let promo;
    let discount = ``;
    if (sessionStorageItem) {
      promo = JSON.parse(sessionStorageItem as string);
      discount = `Total: <span class="cart__total-count">${Math.round(
        total() - (total() * promo[0].percent) / 100
      )}$</span>`;
    }

    if (d === 'noDiscount') {
      if (!promo || promo[0].active === -1)  {
        return '';
      }
    }

    if (promo) {
      if (promo[0].active !== -1 || promo[0].active !== undefined) {
        if (d === 'discount') {
          return discount;
        } else if (d === 'noDiscount') {
          return noDiscount;
        } else if (d === 'activeDiscount') {
          return promo[0].activeDiscount;
        }
      }
    } else {
      if (d === 'discount') {
        return `Total: <span class="cart__total-count">${total()}$</span>`;
      } else if (d === 'activeDiscount') {
        return '';
      }
    }
    return '';
  };

  draw(): HTMLElement {
    const cartContainer = createHTMLElement('cart');
    if (!this.cartItems || this.cartItems.length === 0) {
      cartContainer.innerHTML =
        '<div class="cart__container"><div class="cart__header"><div class="cart_no-items"><p>Shopping cart is empty</p></div></div></div>';
    } else {
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
      cartHeaderItem.min = '1';
      cartHeaderItem.value = this.pagesItems.toString();
      const cartHeaderPages = createHTMLElement('cart__pages');
      cartHeaderPages.innerHTML = `Page:
                <img src="./assets/icons/arrow-left-icon.svg" alt="arrow-left icon" class="cart__pages-arrow cart__pages-arrow-left">
                <span class="cart__pages-count">${this.currentPage}</span>
                <img src="./assets/icons/arrow-right-icon.svg" alt="arrow-left icon" class="cart__pages-arrow cart__pages-arrow-right">`;

      const generateCardCurrent = () => {
        const countPages = Math.ceil(this.cartItems.length / +this.pagesItems);

        

        const carts = [...this.cartItems];
        let arrCarts = [];
        for (let i = 0; i < countPages; i++) {
          let arrCard = carts.splice(0, +this.pagesItems);
          arrCarts.push(arrCard);
        }
        this.cartPages = arrCarts;
      };

      generateCardCurrent();

      const paginationPages = (e: Event) => {
        const cartPagesArrowLeft = document.querySelector('.cart__pages-arrow-left');
        const cartPagesArrowRight = document.querySelector('.cart__pages-arrow-right');
        const cartPageCount = document.querySelector('.cart__pages-count')!;
        
        if (e.target === cartPagesArrowLeft) {
          if (this.currentPage <= 1) {
          } else {
            this.currentPage--;
          }
        }
        
        if (e.target === cartPagesArrowRight) {
          if (this.currentPage !== this.cartPages.length) this.currentPage++;
        }
        
        getQueryParams.delete('page');
        getQueryParams.append('page', this.currentPage.toString());
        window.location.hash = !!getQueryParams.toString() ? `/cart?${getQueryParams.toString()}` : `/cart`;

        cartPageCount.textContent = this.currentPage.toString();
        
        drawCartItem();
      }

      cartHeaderPages?.addEventListener('click', paginationPages);
    
      cartHeaderItems.append(cartHeaderItemsText, cartHeaderItem);
      cartHeaderBox.append(cartHeaderItems, cartHeaderPages);
      cartHeader.append(cartHeaderTitle, cartHeaderBox);

      const createCartItems = (item: Igoods) => {
        const cartItem = createHTMLElement('cart__item');
        cartItem.dataset.id = item.id.toString();

        cartItem.innerHTML = `
            <div class="cart__right">
              <div class="cart__item-number">${item.id}</div>
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
              <div class="cart__price">${item.count * item.price}$</div>
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
          const headerCount = document.querySelector('.header__count')!;

          if (target.closest('.cart__right')) {
            window.location.hash = `#/goodsItem/${dataId}`;
          }
          
          this.cartPages[this.currentPage - 1].forEach((item, i) => {
            if (item.id === +dataId) {
              if (target.classList.contains('cart__plus-item')) {
                if (item.count < item.inStock) {
                  item.count++;
                }  
              }
              if (target.classList.contains('cart__minus-item')) {
                item.count--;
                if (item.count === 0) {
                  cartItem.remove(); 
                }
              }
              cartAddCount[i].textContent = item.count.toString();
              cartPrice[i].textContent = item.count.toString();
              cartPrice[i].textContent = (item.count * item.price).toString() + '$';
            }
          });

          
          if (this.cartPages[this.currentPage - 1].length === 1 && this.cartPages[this.currentPage - 1] !== this.cartPages[0]) {
            this.cartPages.pop();
            this.currentPage--;
          };

          this.cartItems = this.cartItems.filter((item) => item.count !== 0);
          if (this.cartItems.length === 0) {
            localStorage.removeItem('cart');
            state.cart = [];
          } else {
            localStorage.setItem('cart', JSON.stringify(this.cartItems));
          }



          generateCardCurrent();
          drawCartItem();

          cartProductCount.textContent = getCartItemsCount().toString();
          headerCount.textContent = getCartItemsCount().toString();
          cartTotalCount.textContent = getCartTotalPrice().toString() + '$';
          headerItemText.textContent = getCartTotalPrice().toString() + '$';
        });

        return cartItem;
      };

      cartHeaderItem.addEventListener('change', (e: Event) => {
        const target = e.target as HTMLInputElement;
        let valueItems = +target.value;
        if(valueItems <= 1) valueItems = 1;
        this.pagesItems = valueItems.toString();

        getQueryParams.delete('limit');
        getQueryParams.append('limit', valueItems.toString());
        window.location.hash = !!getQueryParams.toString() ? `/cart?${getQueryParams.toString()}` : `/cart`;

        generateCardCurrent();
        drawCartItem();
      });

      const drawCartItem = () => {

        //if (this.cartPages[this.currentPage - 1].length === 0) {
        //  //this.cartPages.splice(this.currentPage - 1, 1);
        //  this.cartPages.pop();
        //  //console.log(this.cartPages);
          
        //  this.currentPage--;
        //};
        //if (this.cartPages[this.currentPage -1])
        if (this.cartPages.length !== 0) {
          cartItems.innerHTML = '';
          const cards = this.cartPages[this.currentPage - 1].map((item) => createCartItems(item));
          cartItems.append(...cards);
        } else {
          cartContainer.innerHTML =
        '<div class="cart__container"><div class="cart__header"><div class="cart_no-items"><p>Shopping cart is empty</p></div></div></div>';
        }
      }

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
      cartFooter.addEventListener('click', this.setDiscount);
      const cartPromoBlock = createHTMLElement('cart__promo-block');
      const inputPromoInput = createInputElement(['cart__promo-input'], 'text', 'Enter promo code');
      inputPromoInput?.addEventListener('input', this.setDiscount);
      const cartPromoText = createHTMLElement('__promo-cod');
      cartPromoText.textContent = `Promo for test: 'RSS', 'EPAM'`;
      const cartPromoHint = createHTMLElement('cart__promo-hint');
      const cartPromoButton = createHTMLElement(['cart__promo-button', 'hidden']);
      cartPromoButton.textContent = 'Add';
      const cartPromoActive = createHTMLElement('cart__promo-text');
      const cartOldPrice = createHTMLElement('cart__promo-old-price');
      const cartPromoBye = createHTMLElement('cart__promo-byu');
      const cartProducts = createHTMLElement('cart__products');
      const cartProduct = createHTMLElement('cart__product');
      cartProduct.innerHTML = `Products: <span class="cart__product-count">${getCartItemsCount()}</span>`;
      const cartTotal = createHTMLElement('cart__total');
      cartOldPrice.innerHTML = this.getSumTotal('noDiscount');
      cartTotal.innerHTML = this.getSumTotal('discount');
      cartPromoActive.innerHTML = this.getSumTotal('activeDiscount');
      const btnSubmit = document.createElement('button') as HTMLButtonElement;
      btnSubmit.type = 'submit';
      btnSubmit.innerHTML = 'BUY NOW';
      btnSubmit.className = 'cart__btn-byu';

      cartContainer.append(cartMainContainer);
      const cartMain = createHTMLElement('cart__main');
      const cartItems = createHTMLElement('cart__items');

      const cards = this.cartPages[this.currentPage - 1].map((item) => createCartItems(item));
      cartItems.append(...cards);
      cartMain.append(cartItems);

      cartPromoBlock.append(inputPromoInput, cartPromoHint, cartPromoButton, cartPromoText);
      cartProducts.append(cartProduct, cartTotal);
      cartPromoBye.append(cartProducts, btnSubmit);
      cartFooter.append(cartPromoBlock, cartPromoActive, cartOldPrice, cartPromoBye);
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
