class SigninPage {
    constructor(page) {
        this.page = page;
        this.usernameField = page.locator('xpath=//input[@id="user-name"]');
        this.passwordField = page.locator('xpath=//input[@id="password"]');
        this.loginButton = page.locator('xpath=//input[@id="login-button"]');
        this.errorMessage = page.locator('xpath=//h3[@data-test="error"]');
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async login(username, password) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.clickLoginButton();
    }
}

module.exports = SigninPage;
