class InventoryPage {
    constructor(page) {
        this.page = page;
        this.header = page.locator('xpath=//div[@class="app_logo"]');
        this.hamburgerMenu = page.locator('xpath=//div[@class="bm-burger-button');
        this.navigationMenu = {
            allItems: page.locator('xpath=//a[@data-test="inventory-sidebar-link"]'),
            about: page.locator('xpath=//a[@data-test="about-sidebar-link"]'),
            logout: page.locator('xpath=//a[@data-test="logout-sidebar-link"]'),
            resetAppState: page.locator('xpath=//a[@data-test="reset-sidebar-link"]')
        };
    }

    async clickMenu() {
        await this.hamburgerMenu.click();
    }

    async selectItemFromMenu(choice) {
        this.clickMenu()
        await this.navigationMenu.
    }
}

module.exports = InventoryPage;
