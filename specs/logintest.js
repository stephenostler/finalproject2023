const LoginPage = require('../pageobjects/login.page.js')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login();
     })
})

