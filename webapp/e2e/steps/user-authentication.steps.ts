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
      await page.waitForSelector('#btHome')
      await expect(page).toMatch('Welcome to DeDe')
      await expect(page).toClick('#btProfile')
    });

    when('The user is authenticated', async () => {
      await page.waitForNavigation()
      await page.waitForSelector('#btHome')
      await expect(page).toMatch('SOLID Login')
      await expect(page).toFill('input', "Inrupt")
      await expect(page).toClick('button', { text: 'CONNECT' })
      await expect(page).toClick('button', { text: 'CONNECT' })
      await page.waitForNavigation()
      await page.waitForSelector('#login')
      await expect(page).toMatch('Login')
      await expect(page).toFillForm('form', {
        username: 'UO263595',
        password: 'UO263595_pod',
      })
      await expect(page).toClick('#login')
    });

    then('User information is displayed', async () => {
      await page.waitForNavigation()
      await page.waitForSelector('#logoutButton')
      await expect(page).toMatch('María Fernández Rojo')
    });
  })

  afterAll(async () => {
    browser.close()
  })

});

