import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/unauthenticated-purchase.feature');

let page: puppeteer.Page;
let browser: puppeteer.Browser;

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

  test('The user is not authenticated in the site', ({given,when,then}) => {

    given('An unauthenticated user goes to the product list', async () => {
      await expect(page).toClick('button', { text: 'PRODUCTS' })
    });

    when('I try to make a purchase', async () => {
      await expect(page).toClick('button', { text: 'ADD TO CART' })
      await expect(page).toClick('button', { text: 'PAY' })
    });

    then('I am redirected to the login page', async () => {
      await expect(page).toMatch('SOLID Login')
    });
  })

  afterAll(async () => {
    browser.close()
  })

});