import {createHTMLElement} from "../../utils/createHTMLElement";
import {createImageElement} from "../../utils/createImageElement";
import dataGoods from "../controller/bd";
import Goods from "../goods/Goods";
import Search from "../search/Search";
import Sort from "../sort/Sort";
import BrandFilters from '../filters/BrandFilters';
import CategoryFilters from "../filters/CategoryFilters";

class Main {
    public search;
    public sort;
    public brandFilters;
    public categoryFilters;
    public goods;

    constructor() {
        this.search = new Search();
        this.sort = new Sort();
        this.brandFilters = new BrandFilters();
        this.categoryFilters = new CategoryFilters();
        this.goods = new Goods();
    }

    draw() {
        const main = createHTMLElement('main', 'main');
        const mainContaner = createHTMLElement('main__container');
        const mainFilters = createHTMLElement(['main__filters', 'filters']);
        const mainGoods = createHTMLElement('main__goods');
        const goodsSort = createHTMLElement('goods-sort');

        const filtersButtons = createHTMLElement('filters__buttons');
        const filtersResetButton = createHTMLElement('filters__reset-btn', 'button', 'Reset filters');
        const filtersCopyLinksButton = createHTMLElement('filters__copy-links-btn', 'button', 'Copy links');
        filtersButtons.append(filtersResetButton, filtersCopyLinksButton);
        const brandFilter = this.brandFilters.draw();
        const categoryFilter = this.categoryFilters.draw();

        const viewContainer = createHTMLElement('view');
        const veiwButtonSmall = createHTMLElement('view__button');
        const veiwImageSmall = createImageElement('view__img-small', './assets/icons/view-small.svg', 'view small icon');
        const veiwButtonLarge = createHTMLElement('view__button');
        const veiwImageLarge = createImageElement('view__img-large', './assets/icons/view-large.svg', 'view large icon');
        veiwButtonSmall.append(veiwImageSmall);
        veiwButtonLarge.append(veiwImageLarge);
        viewContainer.append(veiwButtonSmall, veiwButtonLarge);

        goodsSort.append(this.search.draw(), this.sort.draw(), viewContainer)
        mainGoods.append(goodsSort, this.goods.draw(dataGoods));
        mainFilters.append(filtersButtons, brandFilter, categoryFilter)
        mainContaner.append(mainFilters, mainGoods);
        main.append(mainContaner);

        return main;
    }
}

export default Main;