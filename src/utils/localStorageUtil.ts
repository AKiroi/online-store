
import { Igoods } from '../data/types';
class LocalStorageUtil {
  key: string;

  constructor() {
    this.key = 'cart';
  }

  getCartItems(): Igoods[]  {
    const cartItemsLocalStorage:string | null = localStorage.getItem(this.key);
    if (cartItemsLocalStorage !== null) {
      return JSON.parse(cartItemsLocalStorage);
    }
    return [];
  }

  setCartItems(cartItem: string) {
    localStorage.setItem(this.key, JSON.stringify(cartItem));
  }
}

export const localStorageUtil = new LocalStorageUtil();