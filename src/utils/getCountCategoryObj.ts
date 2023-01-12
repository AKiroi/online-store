import { brandsArray, categoryArray } from "../data/data";
import { Count, IGoods } from "../data/types";

export const getCountCategoryObj = (data: IGoods[]) => {
  return categoryArray.reduce((acc, category) => {
    let count = 0;
    data.forEach((item) => {
      if (category.toLocaleLowerCase() === item.category.toLocaleLowerCase()) count++;
    });
    acc[category] = count;
    return acc;
  }, {} as Count);
};




