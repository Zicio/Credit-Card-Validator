import puppeteer from 'puppeteer-core';

jest.setTimeout(30000);
describe('Credit card validator', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 100,
      devtools: true,
      channel: 'chrome',
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });

  describe('Credit card validator', () => {
    test('should add .success-active class for valid number', async () => {
      await page.goto(baseUrl);
      const form = await page.$('.check');
      const input = await form.$('.check__field');
      await input.type('4532656374904488');
      const submit = await form.$('.check__button');
      submit.click();
      await page.waitForSelector('.success-active');
    });
  });
});
