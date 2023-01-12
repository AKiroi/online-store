import { createHTMLElement } from "../../utils/createHTMLElement";
import { IErrorPage } from './../../data/types';

class ErrorPage implements IErrorPage {

  draw(): HTMLElement {
    const error = createHTMLElement('error');
    const errorContainer = createHTMLElement('error__container');
    const errorMessage = createHTMLElement('error__message', 'div', 'PAGE NOT FOUND');
    errorContainer.append(errorMessage);
    error.append(errorContainer);
    return error;
  }
}

export default ErrorPage;