class SigninTestData {
    static getLoginCredentials() {
        return {
            validUser: {
                username: 'standard_user',
                password: 'secret_sauce'
            },
            invalidUser: {
                username: 'invalid_test',
                password: 'invalid_pass'
            }
        };
    }

    static getErrorMessage() {
        return {
            blankFields: {
                error: 'Epic sadface: Username is required'
            },
            blankPassword: {
                error: 'Epic sadface: Password is required'
            },
            blankUsername: {
                error: 'Epic sadface: Username is required'
            },
            invalidCredentials:{
                error: 'Epic sadface: Username and password do not match any user in this service'
            }
        };
    }
}

module.exports = SigninTestData;
