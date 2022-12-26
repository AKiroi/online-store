import { createHTMLElement } from "../../utils/createHTMLElement";

class CartPage {


  draw() {
    const cartContainer = createHTMLElement('cart');

    cartContainer.innerHTML = `
        <div class="cart__container">
          <div class="cart__content">Cart</div>
        </div>
      `;

    return cartContainer;
  }
}

export default CartPage;
