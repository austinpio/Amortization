import { AmortizationPage } from './app.po';

describe('amortization App', () => {
  let page: AmortizationPage;

  beforeEach(() => {
    page = new AmortizationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
