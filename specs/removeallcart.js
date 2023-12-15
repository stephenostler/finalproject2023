const addItem = require('../pageobjects/addtocart.js')
const clearCart = require('../pageobjects/removecart.js')

//*WARNING* test will run forever in current state *WARNING*
describe('My Shopping application', () => {
    it('should let a user add items to cart and then remove', async () => {
        await addItem.open();
        await addItem.multiCart();
        await clearCart.removeAll();
        await clearCart.cartCheck();
        await browser.pause(4000);
    })
})