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
        do{this.removeItem.click();
        expect(this.removeItem).toBeExisting;}
        while ((await this.removeItem).isEnabled());
    
    }

    async cartCheck(){
        await expect(this.emptyCart).toBeEnabled;
    }
    // {
        //         // await this.removeItem.click()
        //         //  if ((await this.emptyCart).isEnabled) {
        //         //     break;
        //   }
    async removal(){
        await this.removeItem.click;
        await expect(this.emptyCart).toBeExisting;
    }
}

module.exports = new clearCart();