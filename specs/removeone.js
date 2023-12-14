const addItem = require('../pageobjects/addtocart.js')
const clearCart = require('../pageobjects/removecart.js')

describe('My Shopping application', () => {
    it('should let a user add Knight Tyrant item to cart and then remove', async () => {
        await addItem.open();
        await addItem.tyrantCart();
        await clearCart.removal();
    })
})