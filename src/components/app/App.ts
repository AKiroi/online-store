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

    body.innerHTML = ''
    
    const mainPage = this.MainPage.draw();
    console.log(mainPage);
    body.append(mainPage)
    //body.draw()
    //document
    //  .querySelector<HTMLElement>('.sources')
    //  ?.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
    //this.controller.getSources((data) => this.view.drawCapitalLetters(data));
    //this.controller.getNewsDefault((data) => this.view.drawNews(data));
  }
}

export default App;