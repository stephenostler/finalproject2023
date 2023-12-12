const addItem = require('./pageobjects/addtocart.js')
const LoginPage = require('./pageobjects/login.page.js')

describe('My Shopping application', () => {
    it('should let a user add Knight Tyrant item to cart', async () => {
        await LoginPage.open();
        await addItem.tyrant();
    })
})