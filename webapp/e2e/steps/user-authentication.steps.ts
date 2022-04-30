import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./e2e/features/user-authentication.feature');

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

  test('The user is not authenticated and tries to authenticate', ({given,when,then}) => {

    given('An unauthenticated user goes to the profile view', async () => {
      await page.waitForSelector('#btHome', { timeout: 20000 })
      await expect(page).toMatch('Welcome to DeDe', { timeout: 20000 })
      await expect(page).toClick('#btProfile', { timeout: 20000 })
    });

    when('The user is authenticated', async () => {
      await page.waitForNavigation()
      await page.waitForSelector('#btHome', { timeout: 20000 })
      await page.waitForSelector('#solidLogin', { timeout: 20000 })
      await expect(page).toFill('input', "Inrupt", { timeout: 20000 })
      await expect(page).toClick('#loginButton', { timeout: 20000 })
      await expect(page).toClick('#loginButton', { timeout: 20000 })
      await page.waitForNavigation()
      await page.waitForSelector('#login', { timeout: 20000 })
      await expect(page).toMatch('Login', { timeout: 20000 })
      await expect(page).toFillForm('form', {
        username: 'UO263595',
        password: 'UO263595_pod',
      })
      await expect(page).toClick('#login', { timeout: 20000 })
    });

    then('User information is displayed', async () => {
      await page.waitForNavigation()
      await page.waitForSelector('#logoutButton', { timeout: 20000 })
      await page.waitForSelector('#userName', { timeout: 20000 })
    });
  })

  afterAll(async () => {
    browser.close()
  })

});

