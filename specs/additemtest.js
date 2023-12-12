const addItem = require('../pageobjects/addtocart.js')


describe('My Shopping application', () => {
    it('should let a user add Knight Tyrant item to cart', async () => {
        await addItem.open();
        await addItem.tyrant();
    })
})