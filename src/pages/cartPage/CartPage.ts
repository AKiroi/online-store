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

  handlerCart = () => {
    const cartHeaderItem = document.querySelector('.cart__header-item') as HTMLInputElement;
    const cartPagesArrowLeft = document.querySelector('.cart__pages-arrow-left');
    const cartPagesArrowRight = document.querySelector('.cart__pages-arrow-right');
    const cartPagesCount = document.querySelector('.cart__pages-count');
    const cartItems = document.querySelector('.cart__items');
    const cartItem = document.querySelector('.cart__item');
    const plusIcon = document.querySelector('.plus-icon');
    const minusIcon = document.querySelector('.minus-icon');
    const cartAddCount = document.querySelector('.cart__add-count');

    const countCartItems = cartHeaderItem.value;
    const countPages = Math.ceil(this.cartItems.length / +countCartItems);

    cartHeaderItem.addEventListener('input', () => {
      //this.generateCardCurrent(countCartItems, countPages)
      //let arr = []
      //for (let i = 0; i < countPages; i++) {
      //  let arrItems = []
      //  for (let i = 0; i < +countCartItems; i++) {
      //    if (cartItems.leng)
      //  }
      //}
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
      const overlay = document.querySelector('.container__modal_overlay') as HTMLElement;
      overlay.classList.add('overlay');
      const containerModal = document.querySelector('.modal-container') as HTMLElement;
      containerModal.classList.add('overlay-modal-container');
      containerModal.append(this.modal.draw());
    }
  };

  draw(): HTMLElement {
    const cartContainer = createHTMLElement('cart');

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

    cartPagesArrowLeft?.addEventListener('click', () => {
      console.log('left');
    })

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
    let index = 1

    const createCartItems = (item: Igoods) => {
      const cartItem = createHTMLElement('cart__item');

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
                <img src="./assets/icons/plus-icon.svg" alt="plus-icon">
              </div>
              <div class="cart__add-count">1</div>
              <div class="cart__minus">
                <img src="./assets/icons/mines-icon.svg" alt="minus-icon">
              </div>
            </div>
            <div class="cart__price">400$</div>
          </div>
      `;

      return cartItem;
    };

    let cards = this.cartPages[currentPage - 1].map((item) => createCartItems(item));


    const cartFooter = createHTMLElement('cart__footer');
    const cartPromoBlock = createHTMLElement('cart__promo-block');
    const inputPromoInput = createInputElement(['cart__promo-input'], 'text', 'Enter promo code');
    const cartPromoText = createHTMLElement('cart__header');
    cartPromoText.textContent = `Promo for test: 'RS', 'EPM'`;
    const cartPromoBye = createHTMLElement('cart__promo-byu');
    const cartProducts = createHTMLElement('cart__products');
    const cartProduct = createHTMLElement('cart__product');
    cartProduct.innerHTML = `Products: <span class="cart__product-count">10</span>`;
    const cartTotal = createHTMLElement('cart__total');
    cartTotal.innerHTML = `Total: <span class="cart__total-count">400$</span>`;
    const btnSubmit = document.createElement('button') as HTMLButtonElement;
    btnSubmit.type = 'submit';
    btnSubmit.innerHTML = 'BUY NOW';
    btnSubmit.className = 'cart__btn-byu';

    cartContainer.append(cartMainContainer);
    const cartMain = createHTMLElement('cart__main');
    const cartItems = createHTMLElement('cart__items');
    //cartItems.innerHTML = `<div class="cart__items">
    //        <div class="cart__item">
    //          <div class="cart__right">
    //            <div class="cart__item-number">1</div>
    //            <div class="cart__img-box">
    //              <img class="cart__img" src="./assets/img/213669_1-1200x800.jpeg" alt="item picture">
    //            </div>
    //            <div class="cart__content">
    //              <div class="cart__title">Blackstar ACOUSTIC</div>
    //              <div class="cart__description">
    //                Brand: BLACKSTAR; Categoty: GUITAR CABINETS; 
    //                Discont: 10.8; Rating: 4,8; InStock: 18;
    //              </div>
    //            </div>
    //          </div>
    //          <div class="cart__left">
    //            <div class="cart__add-item">
    //              <div class="cart__plus">
    //                <img src="./assets/icons/plus-icon.svg" alt="plus-icon">
    //              </div>
    //              <div class="cart__add-count">1</div>
    //              <div class="cart__minus">
    //                <img src="./assets/icons/mines-icon.svg" alt="minus-icon">
    //              </div>
    //            </div>
    //            <div class="cart__price">400$</div>
    //          </div>
    //        </div>

    //        <div class="cart__item">
    //          <div class="cart__right">
    //            <div class="cart__item-number">1</div>
    //            <div class="cart__img-box">
    //              <img class="cart__img" src="./assets/img/213669_1-1200x800.jpeg" alt="item picture">
    //            </div>
    //            <div class="cart__content">
    //              <div class="cart__title">Blackstar ACOUSTIC</div>
    //              <div class="cart__description">
    //                Brand: BLACKSTAR; Categoty: GUITAR CABINETS; 
    //                Discont: 10.8; Rating: 4,8; InStock: 18;
    //              </div>
    //            </div>
    //          </div>
    //          <div class="cart__left">
    //            <div class="cart__add-item">
    //              <div class="cart__plus">
    //                <img src="./assets/icons/plus-icon.svg" alt="plus-icon">
    //              </div>
    //              <div class="cart__add-count">1</div>
    //              <div class="cart__minus">
    //                <img src="./assets/icons/mines-icon.svg" alt="minus-icon">
    //              </div>
    //            </div>
    //            <div class="cart__price">400$</div>
    //          </div>
    //        </div>

    //        <div class="cart__item">
    //          <div class="cart__right">
    //            <div class="cart__item-number">1</div>
    //            <div class="cart__img-box">
    //              <img class="cart__img" src="./assets/img/213669_1-1200x800.jpeg" alt="item picture">
    //            </div>
    //            <div class="cart__content">
    //              <div class="cart__title">Blackstar ACOUSTIC</div>
    //              <div class="cart__description">
    //                Brand: BLACKSTAR; Categoty: GUITAR CABINETS; 
    //                Discont: 10.8; Rating: 4,8; InStock: 18;
    //              </div>
    //            </div>
    //          </div>
    //          <div class="cart__left">
    //            <div class="cart__add-item">
    //              <div class="cart__plus">
    //                <img src="./assets/icons/plus-icon.svg" alt="plus-icon">
    //              </div>
    //              <div class="cart__add-count">1</div>
    //              <div class="cart__minus">
    //                <img src="./assets/icons/mines-icon.svg" alt="minus-icon">
    //              </div>
    //            </div>
    //            <div class="cart__price">400$</div>
    //          </div>
    //        </div>

    //        <div class="cart__item">
    //          <div class="cart__right">
    //            <div class="cart__item-number">1</div>
    //            <div class="cart__img-box">
    //              <img class="cart__img" src="./assets/img/213669_1-1200x800.jpeg" alt="item picture">
    //            </div>
    //            <div class="cart__content">
    //              <div class="cart__title">Blackstar ACOUSTIC</div>
    //              <div class="cart__description">
    //                Brand: BLACKSTAR; Categoty: GUITAR CABINETS; 
    //                Discont: 10.8; Rating: 4,8; InStock: 18;
    //              </div>
    //            </div>
    //          </div>
    //          <div class="cart__left">
    //            <div class="cart__add-item">
    //              <div class="cart__plus">
    //                <img src="./assets/icons/plus-icon.svg" alt="plus-icon">
    //              </div>
    //              <div class="cart__add-count">1</div>
    //              <div class="cart__minus">
    //                <img src="./assets/icons/mines-icon.svg" alt="minus-icon">
    //              </div>
    //            </div>
    //            <div class="cart__price">400$</div>
    //          </div>
    //        </div>

    //      </div>`;

    cartItems.append(...cards);
    cartMain.append(cartItems);

    cartPromoBlock.append(inputPromoInput, cartPromoText);
    cartProducts.append(cartProduct, cartTotal);
    cartPromoBye.append(cartProducts, btnSubmit);
    cartFooter.append(cartPromoBlock, cartPromoBye);
    cartMainContainer.append(cartModalOverlay, cartHeader, cartMain, cartFooter, cartModalContainer);
    // cartContainer.innerHTML = `
    //   <div class="cart__container">
    //     <div class="cart__header">
    //       <div class="cart__header-title">Product in Cart</div>
    //       <div class="cart__header-box">
    //         <div class="cart__header-items">Items: <span class="cart__header-item">10</span></div>
    //         <div class="cart__pages">
    //           Page:
    //           <img src="./assets/icons/arrow-left-icon.svg" alt="arrow-left icon" class="cart__pages-arrow-left">
    //           <span class="cart__pages-count">1</span>
    //           <img src="./assets/icons/arrow-right-icon.svg" alt="arrow-left icon" class="cart__pages-arrow-left">
    //         </div>
    //       </div>
    //     </div>

    //     <div class="cart__main">
    //       <div class="cart__items">
    //         <div class="cart__item">
    //           <div class="cart__right">
    //             <div class="cart__item-number">1</div>
    //             <div class="cart__img-box">
    //               <img class="cart__img" src="./assets/img/213669_1-1200x800.jpeg" alt="item picture">
    //             </div>
    //             <div class="cart__content">
    //               <div class="cart__title">Blackstar ACOUSTIC</div>
    //               <div class="cart__description">
    //                 Brand: BLACKSTAR; Categoty: GUITAR CABINETS;
    //                 Discont: 10.8; Rating: 4,8; InStock: 18;
    //               </div>
    //             </div>
    //           </div>
    //           <div class="cart__left">
    //             <div class="cart__add-item">
    //               <div class="cart__plus">
    //                 <img src="./assets/icons/plus-icon.svg" alt="plus-icon">
    //               </div>
    //               <div class="cart__add-count">1</div>
    //               <div class="cart__minus">
    //                 <img src="./assets/icons/mines-icon.svg" alt="minus-icon">
    //               </div>
    //             </div>
    //             <div class="cart__price">400$</div>
    //           </div>
    //         </div>

    //         <div class="cart__item">
    //           <div class="cart__right">
    //             <div class="cart__item-number">1</div>
    //             <div class="cart__img-box">
    //               <img class="cart__img" src="./assets/img/213669_1-1200x800.jpeg" alt="item picture">
    //             </div>
    //             <div class="cart__content">
    //               <div class="cart__title">Blackstar ACOUSTIC</div>
    //               <div class="cart__description">
    //                 Brand: BLACKSTAR; Categoty: GUITAR CABINETS;
    //                 Discont: 10.8; Rating: 4,8; InStock: 18;
    //               </div>
    //             </div>
    //           </div>
    //           <div class="cart__left">
    //             <div class="cart__add-item">
    //               <div class="cart__plus">
    //                 <img src="./assets/icons/plus-icon.svg" alt="plus-icon">
    //               </div>
    //               <div class="cart__add-count">1</div>
    //               <div class="cart__minus">
    //                 <img src="./assets/icons/mines-icon.svg" alt="minus-icon">
    //               </div>
    //             </div>
    //             <div class="cart__price">400$</div>
    //           </div>
    //         </div>

    //         <div class="cart__item">
    //           <div class="cart__right">
    //             <div class="cart__item-number">1</div>
    //             <div class="cart__img-box">
    //               <img class="cart__img" src="./assets/img/213669_1-1200x800.jpeg" alt="item picture">
    //             </div>
    //             <div class="cart__content">
    //               <div class="cart__title">Blackstar ACOUSTIC</div>
    //               <div class="cart__description">
    //                 Brand: BLACKSTAR; Categoty: GUITAR CABINETS;
    //                 Discont: 10.8; Rating: 4,8; InStock: 18;
    //               </div>
    //             </div>
    //           </div>
    //           <div class="cart__left">
    //             <div class="cart__add-item">
    //               <div class="cart__plus">
    //                 <img src="./assets/icons/plus-icon.svg" alt="plus-icon">
    //               </div>
    //               <div class="cart__add-count">1</div>
    //               <div class="cart__minus">
    //                 <img src="./assets/icons/mines-icon.svg" alt="minus-icon">
    //               </div>
    //             </div>
    //             <div class="cart__price">400$</div>
    //           </div>
    //         </div>

    //         <div class="cart__item">
    //           <div class="cart__right">
    //             <div class="cart__item-number">1</div>
    //             <div class="cart__img-box">
    //               <img class="cart__img" src="./assets/img/213669_1-1200x800.jpeg" alt="item picture">
    //             </div>
    //             <div class="cart__content">
    //               <div class="cart__title">Blackstar ACOUSTIC</div>
    //               <div class="cart__description">
    //                 Brand: BLACKSTAR; Categoty: GUITAR CABINETS;
    //                 Discont: 10.8; Rating: 4,8; InStock: 18;
    //               </div>
    //             </div>
    //           </div>
    //           <div class="cart__left">
    //             <div class="cart__add-item">
    //               <div class="cart__plus">
    //                 <img src="./assets/icons/plus-icon.svg" alt="plus-icon">
    //               </div>
    //               <div class="cart__add-count">1</div>
    //               <div class="cart__minus">
    //                 <img src="./assets/icons/mines-icon.svg" alt="minus-icon">
    //               </div>
    //             </div>
    //             <div class="cart__price">400$</div>
    //           </div>
    //         </div>

    //       </div>
    //     </div>
    //     <div class="cart__footer">
    //       <div class="cart__promo-block">
    //         <input class="cart__promo-input" type="text" placeholder="Enter promo code">
    //         <div class="cart__promo-text">Promo for test: 'RS', 'EPM'</div>
    //       </div>
    //       <div class="cart__promo-byu">
    //         <div class="cart__products">
    //           <div class="cart__product">Products: <span class="cart__product-count">10</span></div>
    //           <div class="cart__total">Total: <span class="cart__total-count">400$</span></div>
    //         </div>
    //         <a href="" class="cart__btn-byu">BUY NOW</a>
    //       </div>
    //     </div>

    //   </div>
    //   `;

    cartFooter?.addEventListener('click', this.handlerFooter);
    return cartContainer;
  }
}

export default CartPage;
