const LoginPage = require('../pageobjects/login.page.js')
const logoutAccount = require('../pageobjects/logout.js')
const addItem = require('../pageobjects/addtocart.js')
const clearCart = require('../pageobjects/removecart.js')

describe('Everything All at Once except Error Logins', () => {
    it('should simulate a user logging in, adding items to cart, removing items, and then logging out', 
    async () => {
        await LoginPage.open();
        await LoginPage.login();
        await addItem.tyrantOverall();
        await clearCart.removalOverall();
        await logoutAccount.logoutOverall();
    })
})