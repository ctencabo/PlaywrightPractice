const { expect } = require("@playwright/test");

class InventoryPage {
    constructor(page) {
        this.page = page;
        this.header = page.locator('xpath=//div[@class="app_logo"]');
        this.hamburgerMenu = page.locator('xpath=//div[@class="bm-burger-button"]');
        this.navigationMenu = {
            allItems: page.locator('xpath=//a[@data-test="inventory-sidebar-link"]'),
            about: page.locator('xpath=//a[@data-test="about-sidebar-link"]'),
            logout: page.locator('xpath=//a[@data-test="logout-sidebar-link"]'),
            resetAppState: page.locator('xpath=//a[@data-test="reset-sidebar-link"]')
        };
    }

    async clickMenu() {
        console.log('Attempting to click menu');
        await this.hamburgerMenu.waitFor({ state: 'visible', timeout: 5000 });
        await this.hamburgerMenu.click();
        console.log('Successfully clicked menu button');
    }

    async selectItemFromMenu(choice) {
        await this.clickMenu();

        let element = this.navigationMenu[choice];
        console.log('Attempting to click logout choice');
        await element.click();
        console.log('Successfully clicked menu button');
    }
}

module.exports = InventoryPage;
