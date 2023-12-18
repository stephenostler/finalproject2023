const { $ } = require('@wdio/globals');
const Page = require('./page.js');
const { expect } = require('@wdio/globals');

class clearCart extends Page {
   
    get removeItem (){
        return $('[data-testid="cart-line-item-remove"]')
    }

    get emptyCart (){
        return $('[data-testid="empty-cart-headline"]')
    }

    get cartContainer(){
        return $('[data-testid="container"]')
    }

    get homeReturn(){
        return $('[data-testid="warhammer-logo"]')
    }

    async removeAll () {
        await this.removeItem.click();
        await this.removeItem.waitForClickable({settimeout:2000});
        await this.removeItem.click();
        await this.removeItem.waitForClickable({settimeout:2000});
        await this.removeItem.click();
        await expect(this.emptyCart).toBeDisplayed;
        await this.homeReturn.click();
        }

    async removal(){
        await this.removeItem.click();
        await expect(this.emptyCart).toBeExisting;
        await this.homeReturn.click();
    }

    async removalOverall(){
        await this.removeItem.click();
        await expect(this.emptyCart).toBeExisting;
        await this.homeReturn.waitForClickable()
        await this.homeReturn.click();
        
    }
}

module.exports = new clearCart();