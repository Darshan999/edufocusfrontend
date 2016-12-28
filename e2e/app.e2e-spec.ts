import { EduFocusPage } from './app.po';

describe('edu-focus App', function() {
  let page: EduFocusPage;

  beforeEach(() => {
    page = new EduFocusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
