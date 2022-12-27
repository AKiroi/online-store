import { createHTMLElement } from "../../utils/createHTMLElement";

class CartPage {


  draw() {
    const cartContainer = createHTMLElement('cart');

    cartContainer.innerHTML = `
      <div class="cart__container">
        <div class="cart__header">
          <div class="cart__header-title">Product in Cart</div>
          <div class="cart__header-box">
            <div class="cart__header-items">Items: <span class="cart__header-item">10</span></div>
            <div class="cart__pages">
              Page:
              <img src="./assets/icons/arrow-left-icon.svg" alt="arrow-left icon" class="cart__pages-arrow-left">
              <span class="cart__pages-count">1</span>
              <img src="./assets/icons/arrow-right-icon.svg" alt="arrow-left icon" class="cart__pages-arrow-left">
            </div>
          </div>
        </div>

        <div class="cart__main">
          <div class="cart__items">
            <div class="cart__item">
              <div class="cart__right">
                <div class="cart__item-number">1</div>
                <div class="cart__img-box">
                  <img class="cart__img" src="./assets/img/213669_1-1200x800.jpeg" alt="item picture">
                </div>
                <div class="cart__content">
                  <div class="cart__title">Blackstar ACOUSTIC</div>
                  <div class="cart__description">
                    Brand: BLACKSTAR; Categoty: GUITAR CABINETS; 
                    Discont: 10.8; Rating: 4,8; InStock: 18;
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
            </div>

            <div class="cart__item">
              <div class="cart__right">
                <div class="cart__item-number">1</div>
                <div class="cart__img-box">
                  <img class="cart__img" src="./assets/img/213669_1-1200x800.jpeg" alt="item picture">
                </div>
                <div class="cart__content">
                  <div class="cart__title">Blackstar ACOUSTIC</div>
                  <div class="cart__description">
                    Brand: BLACKSTAR; Categoty: GUITAR CABINETS; 
                    Discont: 10.8; Rating: 4,8; InStock: 18;
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
            </div>

            <div class="cart__item">
              <div class="cart__right">
                <div class="cart__item-number">1</div>
                <div class="cart__img-box">
                  <img class="cart__img" src="./assets/img/213669_1-1200x800.jpeg" alt="item picture">
                </div>
                <div class="cart__content">
                  <div class="cart__title">Blackstar ACOUSTIC</div>
                  <div class="cart__description">
                    Brand: BLACKSTAR; Categoty: GUITAR CABINETS; 
                    Discont: 10.8; Rating: 4,8; InStock: 18;
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
            </div>

            <div class="cart__item">
              <div class="cart__right">
                <div class="cart__item-number">1</div>
                <div class="cart__img-box">
                  <img class="cart__img" src="./assets/img/213669_1-1200x800.jpeg" alt="item picture">
                </div>
                <div class="cart__content">
                  <div class="cart__title">Blackstar ACOUSTIC</div>
                  <div class="cart__description">
                    Brand: BLACKSTAR; Categoty: GUITAR CABINETS; 
                    Discont: 10.8; Rating: 4,8; InStock: 18;
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
            </div>

          </div>
        </div>
        <div class="cart__footer">
          <div class="cart__promo-block">
            <input class="cart__promo-input" type="text" placeholder="Enter promo code">
            <div class="cart__promo-text">Promo for test: 'RS', 'EPM'</div>
          </div>
          <div class="cart__promo-byu">
            <div class="cart__products">
              <div class="cart__product">Products: <span class="cart__product-count">10</span></div>
              <div class="cart__total">Total: <span class="cart__total-count">400$</span></div>
            </div>
            <a href="" class="cart__btn-byu">BUY NOW</a>
          </div>
        </div>

      </div>
      `;

    return cartContainer;
  }
}

export default CartPage;
