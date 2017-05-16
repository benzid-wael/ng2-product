import { Ng2ProductPage } from './app.po';

describe('ng2-product App', () => {
  let page: Ng2ProductPage;

  beforeEach(() => {
    page = new Ng2ProductPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
