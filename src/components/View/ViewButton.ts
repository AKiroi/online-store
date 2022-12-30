import { createHTMLElement } from '../../utils/createHTMLElement';
import { createImageElement } from '../../utils/createImageElement';

class ViewButton {

  changedViewIcon = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    const dataView = target.getAttribute('data-view') as string;
    const goodsItemElem = document.querySelector('.goods')!;
    const viewImgWindow = document.querySelector('.view__img-window')! as HTMLImageElement;
    const viewImgList= document.querySelector('.view__img-list')! as HTMLImageElement;

    if(dataView === 'list') {
      goodsItemElem.classList.add('goods_list');
      viewImgWindow.src = './assets/icons/view-small.svg';
      viewImgList.src = './assets/icons/view-large_grey.svg';
    } else {
      goodsItemElem.classList.remove('goods_list');
      viewImgWindow.src = './assets/icons/view-small_grey.svg';
      viewImgList.src = './assets/icons/view-large.svg';
    }
  }
  
  draw(): HTMLElement {
    const viewContainer = createHTMLElement('view');

    const inputDateBtnContent = [
      {class: 'view__img-window', src: './assets/icons/view-small_grey.svg', alt: 'view window icon', dataset: 'window'},
      {class: 'view__img-list', src: './assets/icons/view-large.svg', alt: 'view list icon', dataset: 'list'},
    ]
    
    inputDateBtnContent.forEach((btn, i) => {
      const viewLabel = createHTMLElement('view__label', 'label');
      

      const viewInputRadio = document.createElement('input') as HTMLInputElement;
      viewInputRadio.className = 'view__input-radio';
      viewInputRadio.type = 'radio';
      viewInputRadio.name = 'view-button';
      viewInputRadio.dataset.view = btn.dataset;
      if (i === 0) {
        viewInputRadio.checked = true;
      }

      viewInputRadio.addEventListener('change', this.changedViewIcon);

      const viewButton = createHTMLElement('view__button');
      const viewImage = createImageElement(btn.class, btn.src, btn.alt);
      viewButton.append(viewImage);
      viewLabel.append(viewInputRadio, viewButton);
      viewContainer.append(viewLabel);
    })

    return viewContainer;
  }
}

export default ViewButton;

