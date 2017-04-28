import { DesparkAppPage } from './app.po';

describe('despark-app App', function() {
  let page: DesparkAppPage;

  beforeEach(() => {
    page = new DesparkAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
