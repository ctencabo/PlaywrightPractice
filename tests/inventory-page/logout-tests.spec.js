// @ts-check
const { test, expect } = require('@playwright/test');
const SigninPage = require('../../page_objects/sign_in_page/signinPage');
const SigninTestData = require('../../test_data/sign_in_page/signinTestData');
const InventoryPage = require('../../page_objects/inventory_page/inventoryPage');

test.beforeEach('Navigate to Landing Page', async ({ page }) => {
    const signinPage = new SigninPage(page);
    const userCredentials = SigninTestData.getLoginCredentials().validUser;
    
    await page.goto('https://www.saucedemo.com/');
  
    signinPage.login(userCredentials.username, userCredentials.password);
  });

test('Log out Test Case - Happy Flow', ({ page }) => {
    // ARRANGE
    const inventoryPage = new InventoryPage(page);

    // ACT

    // ASSERT

})
