import { MdCasenetTablePage } from './app.po';

describe('md-casenet-table App', () => {
  let page: MdCasenetTablePage;

  beforeEach(() => {
    page = new MdCasenetTablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
