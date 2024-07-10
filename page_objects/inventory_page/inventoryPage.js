class InventoryPage {
    constructor(page) {
        this.page = page;
        this.header = page.locator('xpath=//div[@class="app_logo"]');
    }
}

module.exports = InventoryPage;
