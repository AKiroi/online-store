export interface Igoods {
  id: number,
  category: string,
  name: string,
  brand: string,
  photo: string[],
  price: number,
  inStock: number,
  rating: number
};



export interface Idb extends Igoods {};
