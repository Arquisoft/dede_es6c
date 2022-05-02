import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./e2e/features/unauthenticated-history.feature');

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

  test('The unauthenticated user tries to view his history', ({given,when,then}) => {

    given('An unauthenticated user goes to the home view', async () => {
      await page.waitForSelector('#btHome', { timeout: 20000 })
      await page.waitForSelector('#titleWelcome', { timeout: 20000 })
    });

    when('I try to go to history view', async () => {
        await expect(page).toClick('#btHistory', { timeout: 20000 })
    });

    then('I find the history list empty', async () => {
      await page.waitForNavigation()
      await page.waitForSelector('#btHome', { timeout: 20000 })
      await page.waitForSelector('#titleHistory', { timeout: 20000 })
      await expect(page).toMatch('No rows', { timeout: 20000 })
    });
  })

  afterAll(async () => {
    browser.close()
  })

});

