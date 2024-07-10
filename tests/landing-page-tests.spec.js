// @ts-check
const { test, expect } = require('@playwright/test');
const SigninPage = require('../page_objects/sign_in_page/signinPage');
const InventoryPage = require('../page_objects/inventory_page/inventoryPage');
const SigninTestData = require('../test_data/sign_in_page/signinTestData');
const InventoryTestData = require('../test_data/inventory_page/inventoryTestData');

test.beforeEach('Navigate to Landing Page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Swag Labs');
});

test('Sign In - Happy Flow', async ({ page }) => {
  // ARRANGE
  const signinPage = new SigninPage(page);
  const inventoryPage = new InventoryPage(page);

  // TEST DATA
  const userCredentials = SigninTestData.getLoginCredentials().validUser;
  const headerTitle = InventoryTestData.getHeaderTitle();

  // ACT
  signinPage.login(userCredentials.username, userCredentials.password);

  // ASSERT
  await expect(inventoryPage.header).toHaveText(headerTitle);

})

test('Sign In - Sad Flow (blank fields)', async ({ page }) => { 
  // ARRANGE
  const signinPage = new SigninPage(page);

  // TEST DATA
  const signinTestData = SigninTestData;
  const errorMessage = signinTestData.getErrorMessage().blankFields;

  // ACT
  signinPage.clickLoginButton();

  // ASSERT
  await expect(signinPage.errorMessage).toHaveText(errorMessage.error);

})
