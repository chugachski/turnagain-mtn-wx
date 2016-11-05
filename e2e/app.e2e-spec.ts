import { WxLinksPage } from './app.po';

describe('wx-links App', function() {
  let page: WxLinksPage;

  beforeEach(() => {
    page = new WxLinksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
