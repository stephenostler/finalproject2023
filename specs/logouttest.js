const LoginPage = require('../pageobjects/login.page.js')
const logoutAccount = require('../pageobjects/logout.js')

describe('My Logout application', () => {
    it('should logout user after being logged in', async () => {
        await LoginPage.open();
        await LoginPage.login();
        await logoutAccount.logoutUser();
     })
})
