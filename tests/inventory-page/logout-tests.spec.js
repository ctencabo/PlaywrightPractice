// @ts-check
const { test, expect } = require('@playwright/test');
const SigninPage = require('../../page_objects/sign_in_page/signinPage');
const SigninTestData = require('../../test_data/sign_in_page/signinTestData');
const InventoryPage = require('../../page_objects/inventory_page/inventoryPage');
const InventoryTestData = require('../../test_data/inventory_page/inventoryTestData');

test.beforeEach('Signing in', async ({ page }) => {
    const signinPage = new SigninPage(page);
    const inventoryPage = new InventoryPage(page);

    const userCredentials = SigninTestData.getLoginCredentials().validUser;
    const headerTitle = InventoryTestData.getHeaderTitle();
    const username = userCredentials.username;
    const password = userCredentials.password;

    await page.goto('https://www.saucedemo.com/', { waitUntil: 'domcontentloaded' });

    signinPage.login(username, password);

    await expect(inventoryPage.header).toHaveText(headerTitle);
});

test('Log out Test Case - Happy Flow', async ({ page }) => {
  // ARRANGE
  const signinPage = new SigninPage(page);
  const inventoryPage = new InventoryPage(page);

  // TEST DATA
  const choice = 'logout'

  // ACT
  await inventoryPage.selectItemFromMenu(choice);

  // ASSERT
  await signinPage.verifySignInPage();
})
