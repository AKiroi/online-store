import Footer from '../../components/footer/Footer';
import Main from '../../components/main/Main';
import { createHTMLElement } from '../../utils/createHTMLElement';
import Header from './../../components/header/Header';

class MainPage {
  public header ;
  public main;
  public footer;

  constructor() {
      this.header = new Header();
      this.main = new Main();
      this.footer = new Footer();
  }
  draw() {
      const root = createHTMLElement('root');
      const header = this.header.draw();
      const main = this.main.draw();
      const footer = this.footer.draw();

      root.append(header, main, footer);

      return root;
  }

}

export default MainPage;