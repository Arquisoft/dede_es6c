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
      : await puppeteer.launch({ headless: false });
    page = await browser.newPage();

    await page
      .goto("http://localhost:3000", {
        waitUntil: "networkidle0",
      })
      .catch(() => {});
  });

  test('The user is not authenticated and tries to make a purchase', ({given,when,then}) => {

    given('An unauthenticated user goes to the product list', async () => {
      await page.waitForSelector('#btHome')
      await page.waitForSelector('#titleWelcome')
      await expect(page).toClick('#btProducts')
    });

    when('I try to make a purchase', async () => {
      await page.waitForNavigation()
      await page.waitForSelector('#btHome')
      await page.waitForSelector('#titleProductos')
      await expect(page).toClick('//*[@id="root"]/div[2]/div[2]/div/div[1]/div/div[3]/button')
      await expect(page).toClick('#btShoppingCart')
      await expect(page).toClick('button', { text: 'Pay' })
    });

    then('I am redirected to the profile page', async () => {
      await page.waitForNavigation()
      await page.waitForSelector('#btHome')
      await page.waitForSelector('#solidLogin')
    });
  })

  afterAll(async () => {
    browser.close()
  })

});

