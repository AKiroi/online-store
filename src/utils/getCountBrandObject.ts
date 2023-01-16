import { brandsArray } from '../data/data';
import { Count, IGoods } from '../data/types';

export const getCountBrandObj = (data: IGoods[]) => {
  return brandsArray.reduce((acc, brand) => {
    let count = 0;
    data.forEach((item) => {
      if (brand.toLocaleLowerCase() === item.brand.toLocaleLowerCase()) count++;
    });
    acc[brand] = count;
    return acc;
  }, {} as Count);
};
