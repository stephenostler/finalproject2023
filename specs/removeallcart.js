const addItem = require('../pageobjects/addtocart.js')
const clearCart = require('../pageobjects/removecart.js')

describe('My Shopping application', () => {
    it('should let a user add items to cart and then remove', async () => {
        await addItem.open();
        await addItem.multiCart();
        await clearCart.removeAll();
    })
})