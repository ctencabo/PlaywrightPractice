const { expect } = require('@playwright/test');

class SigninPage {
    constructor(page) {
        this.page = page;
        this.usernameField = page.locator('xpath=//input[@id="user-name"]');
        this.passwordField = page.locator('xpath=//input[@id="password"]');
        this.loginButton = page.locator('xpath=//input[@id="login-button"]');
        this.errorMessage = page.locator('xpath=//h3[@data-test="error"]');
    }

    async clickLoginButton() {
        console.log('Attempting to click login button');
        await this.loginButton.waitFor({ state: 'visible' });
        await this.loginButton.click();
    }

    async login(username, password) {
        console.log(`Filling username: ${username}`);
        await this.usernameField.waitFor({ state: 'visible', timeout: 1000 });
        await this.usernameField.fill(username);

        console.log(`Filling password: ${password}`);
        await this.passwordField.waitFor({ state: 'visible', timeout: 1000 });
        await this.passwordField.fill(password);

        await this.clickLoginButton();
    }

    async verifySignInPage() {
        console.log('Verifying sign-in page is visible');
        await expect(this.usernameField).toBeVisible();
        await expect(this.passwordField).toBeVisible();
    }
}

module.exports = SigninPage;
