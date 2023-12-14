const { $ } = require('@wdio/globals');
const Page = require('./page.js');
const { expect } = require('@wdio/globals');

class clearCart extends Page {
    //$$('[data-testid="cart-line-item-remove"]') one item remove item generic tag
    get removeItem (){
        return $('[data-testid="cart-line-item-remove"]')
    }
    //$$('[data-testid="empty-cart-headline"]') empty cart
    get emptyCart (){
        return $('[data-testid="empty-cart-headline"]')
    }

    async removeAll () {
         while (await this.removeItem.isClickable()) {
            await this.removeItem.click()
             if (await this.emptyCart.toBeExisting()) {
                break;
      }
    }}

    async removal(){
        await this.removeItem.click;
        await expect(this.emptyCart).toBeExisting;
    }
}

module.exports = new clearCart();