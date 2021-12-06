import puppeteer from 'puppeteer';

jest.setTimeout(30000);
describe('Credit card validator', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'https://localhost:9000';
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
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
      input.value = '4532656374904488';
      const submit = await form.$('.check__button');
      submit.click();
      await page.waitForSelector('.success-active');
    });
  });
});
