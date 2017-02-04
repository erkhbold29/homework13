import { MyThirdAppPage } from './app.po';

describe('my-third-app App', function() {
  let page: MyThirdAppPage;

  beforeEach(() => {
    page = new MyThirdAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
