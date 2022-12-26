import { createHTMLElement } from "../../utils/createHTMLElement";
import { Igoods } from "../../data/types";

class GoodsItemPage {

  brand;
  category;
  price;
  name;
  photo;
  inStock;
  goodsItem;
  id

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

  draw() {
    const goodsItem = createHTMLElement('goods-item');

    goodsItem.innerHTML = `
        <div class="goods-item__container">
          <div class="goods-item__content">${this.name}</div>
        </div>
      `;

    return goodsItem;
  }
}

export default GoodsItemPage;