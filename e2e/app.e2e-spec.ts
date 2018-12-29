import { TiendaFBPage } from './app.po';

describe('tienda-fb App', function() {
  let page: TiendaFBPage;

  beforeEach(() => {
    page = new TiendaFBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
