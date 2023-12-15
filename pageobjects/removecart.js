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

    get cartContainer(){
        return $('[data-testid="cart-summary-container"]')
    }

    async removeAll () {
        do{await this.cartContainer.click();
            await this.removeItem.waitForClickable({settimeout:2000});
            await this.removeItem.click(); 

        }
        while ((await this.removeItem).isClickable());
        await expect(this.emptyCart).toBeDisplayed;
    }

    async removeAll () {
        await this.removeItem.click();
        await browser.pause(1000);
        await this.removeItem.click();
        await browser.pause(1000);
        await this.removeItem.click();
        // while ((await this.removeItem).isClickable()){
        //     (await this.removeItem).click();
        // }
        await expect(this.emptyCart).toBeDisplayed;
    }

    // async cartCheck(){
    //     await expect(this.emptyCart).toBeEnabled;
    // }
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