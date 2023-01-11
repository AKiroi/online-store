export type Count = Record<string, number>;

export interface Igoods {
  id: number,
  category: string,
  name: string,
  brand: string,
  photo: string[],
  price: number,
  inStock: number,
  rating: number,
  count: number
};
