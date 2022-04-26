import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";
import { shallow } from 'enzyme';

const feature = loadFeature('./e2e/features/unauthenticated-purchase.feature');

let page: puppeteer.Page;
let browser: puppeteer.Browser;
jest.setTimeout(50000)

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

      const mockCallBack = jest.fn();

      const button = shallow((Products));
      button.find('button').simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(1);


      




      wrapper.find('Button').prop('onClick')() 
      await expect(page).toMatch('About Us')
      await expect(page).toMatch('Products')
      await expect(page).toClick('btProductos', { text: 'Products' })
    });

    when('I try to make a purchase', async () => {
      await expect(page).toClick('Button', { text: 'ADD TO CART' })
      await expect(page).toClick('Button', { text: 'PAY' })
    });

    then('I am redirected to the login page', async () => {
      await expect(page).toMatch('SOLID Login')
    });
  })

  afterAll(async () => {
    browser.close()
  })

});

