import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./e2e/features/authenticated-purchase.feature');

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

  test('The authenticated user makes a purchase', ({given,when,then}) => {
    let username: string;
    let contrasena: string;

    given('A user is authenticated', async () => {
        await page.waitForSelector('#btHome', { timeout: 20000 })
        await expect(page).toMatch('Welcome to DeDe', { timeout: 20000 })
        await expect(page).toClick('#btProfile', { timeout: 20000 })
        await page.waitForNavigation()
        await expect(page).toMatch('SOLID Login', { timeout: 20000 })
        await page.waitForSelector('#solidLogin', { timeout: 20000 })
        await expect(page).toFill('input', "Inrupt", { timeout: 20000 })
        await expect(page).toClick('#loginButton', { timeout: 20000 })
        await expect(page).toClick('#loginButton', { timeout: 20000 })
        await page.waitForNavigation()
        await page.waitForSelector('#login', { timeout: 20000 })
        await expect(page).toMatch('Login', { timeout: 20000 })
        username = "UO263595"
        contrasena = "UO263595_pod"

        await expect(page).toFillForm('form', {
            username: username,
            password: contrasena,
        })
        await expect(page).toClick('#login', { timeout: 20000 })
        await page.waitForNavigation()
        await page.waitForSelector('#logoutButton', { timeout: 20000 })
        await page.waitForSelector('#userName', { timeout: 20000 })
        await expect(page).toMatch('María Fernández Rojo', { timeout: 20000 })
    });

    when('I try to make a purchase', async () => {
        await expect(page).toClick('#btProducts', { timeout: 20000 })
        await page.waitForNavigation()
        await page.waitForSelector('#titleProductos', { timeout: 20000 })
        await expect(page).toClick('#addToCart', { timeout: 20000 })
        await expect(page).toClick('#btShoppingCart', { timeout: 20000 })
        await expect(page).toClick('#Pagar', { timeout: 20000 })
        await page.waitForNavigation()
        await page.waitForSelector('#titleCheckout', { timeout: 20000 })
        await expect(page).toClick('#btOrder', { timeout: 20000 })
    });

    then('The purchase is shown in the history', async () => {
        await page.waitForNavigation()
        await page.waitForSelector('#titleHistory', { timeout: 20000 })
        await expect(page).toMatch('Scenic', { timeout: 20000 })
    });
  })

  afterAll(async () => {
    browser.close()
  })

});

