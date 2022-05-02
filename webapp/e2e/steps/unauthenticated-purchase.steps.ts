import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./e2e/features/unauthenticated-purchase.feature');

let page: puppeteer.Page;
let browser: puppeteer.Browser;
jest.setTimeout(500000)

defineFeature(feature, test => {
  
  beforeAll(async () => {
    browser = process.env.GITHUB_ACTIONS
      ? await puppeteer.launch()
      : await puppeteer.launch({ headless: true });
    page = await browser.newPage();

    await page
      .goto("http://localhost:3000", {
        waitUntil: "networkidle0",
      })
      .catch(() => {});
  });

  test('The user is not authenticated and tries to make a purchase', ({given,when,then}) => {

    given('An unauthenticated user goes to the product list', async () => {
      await page.waitForSelector('#btHome', { timeout: 20000 })
      await page.waitForSelector('#titleWelcome', { timeout: 20000 })
      await expect(page).toClick('#btProducts', { timeout: 20000 })
    });

    when('I try to make a purchase', async () => {
      await page.waitForNavigation()
      await page.waitForSelector('#btHome', { timeout: 20000 })
      await page.waitForSelector('#titleProductos', { timeout: 20000 })
      await expect(page).toClick('#addToCart', { timeout: 20000 })
      await expect(page).toClick('#btShoppingCart', { timeout: 20000 })
      await expect(page).toClick('#Pagar', { timeout: 20000 })
    });

    then('I am redirected to the profile page', async () => {
      await page.waitForNavigation()
      await page.waitForSelector('#btHome', { timeout: 20000 })
      await page.waitForSelector('#solidLogin', { timeout: 20000 })
    });
  })

  afterAll(async () => {
    browser.close()
  })

});

