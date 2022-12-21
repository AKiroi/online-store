import MainPage from "../../pages/mainPage/MainPage";

class App {
  public MainPage;
  //private controller: AppController;
  //private view: AppView;
  //root: a

  //routing

  constructor() {
    this.MainPage = new MainPage()
  }

  start(): void {
    const body: HTMLElement = document.body;
    body.classList.add('body');

    body.innerHTML = '';

    console.log(body);
    
    
    const mainPage = this.MainPage.draw();
    body.append(mainPage);
  }
}

export default App;