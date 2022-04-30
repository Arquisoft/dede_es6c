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
      : await puppeteer.launch({ headless: false });
    page = await browser.newPage();

    await page
      .goto("http://localhost:3000", {
        waitUntil: "networkidle0",
      })
      .catch(() => {});
  });

  test('The unauthenticated user tries to view his history', ({given,when,then}) => {

    given('An unauthenticated user goes to the home view', async () => {
      await page.waitForSelector('#btHome')
      await page.waitForSelector('#titleWelcome')
    });

    when('I try to go to history view', async () => {
        await expect(page).toClick('#btHistory')
    });

    then('I find the history list empty', async () => {
      await page.waitForNavigation()
      await page.waitForSelector('#btHome')
      await page.waitForSelector('#titleHistory')
      await expect(page).toMatch('No rows')
    });
  })

  afterAll(async () => {
    browser.close()
  })

});

