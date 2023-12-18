const { $ } = require('@wdio/globals');
const Page = require('./page.js');
const { expect } = require('@wdio/globals');
const LoginPage= require('../pageobjects/login.page.js')

class addItem extends Page {
    
    get shopBtn (){
        return $('[data-testid="navigation-button-0"]');
    }

    get wh40kShop (){
        return $('[data-testid="nav-section-button-1-0"]');
    }

    get chaosShop (){
        return $('[data-testid="nav-section-button-1-2"]');
    }

    get chaosArmy (){
        return $('[data-testid="navigation-slug-0-0"]');
    }

    get chaosTyrant (){
        return $('[data-testid="product-card-Knight Tyrant"]');
    }
    
    get sigmarShop (){
        return $('[data-testid="nav-section-button-1-1"]');
    }

    get orderShop (){
        return $('[data-testid="nav-section-button-1-0"]');
    }

    get kharaArmy (){
        return $('[data-testid="navigation-slug-0-5"]');
    }

    get kharaCodewright (){
        return $('[data-testid="product-card-Codewright"]')
    }

    get middleearthShop (){
        return $('[data-testid="nav-section-button-1-3"]')    
    }

    get lotrGood (){
        return $('[data-testid="navigation-slug-1-0"]')
    }

    get minasHost(){
        return $('[data-testid="product-card-Minas Tirith™ Battlehost"]')
    }

    get homeCheck(){
        return $('[data-testid="video-banner"]'); 
    }

    get addCart (){
        return $('[data-testid="button-hero-product-add-to-cart"]');
    }

    get cartLink (){
        return $('[data-testid="cart-link"]');
    }

    get checkoutNow (){
        return $('[data-testid="button-cart-subtotal-Checkout Now"]');
    }

    get checkoutPop(){
        return $('[data-testid="button-atc-popup-checkout-link"]')
    }
    
    get closePop (){
        return $('[data-testid="atc-popup-close"]')
    }
    async tyrant (){
        await browser.refresh();
        await LoginPage.cookieAccept.click();
        await expect(this.homeCheck).toBeExisting;
        await this.shopBtn.click();
        await this.wh40kShop.click();
        await this.chaosShop.click();
        await this.chaosArmy.click();
        await this.chaosTyrant.click();
        await this.addCart.click();
        await this.cartLink.click();
        await this.checkoutNow.click();
    }

    async tyrantOverall(){
        await this.shopBtn.click();
        await this.wh40kShop.waitForClickable();
        await this.wh40kShop.click();
        await this.chaosShop.waitForClickable();
        await this.chaosShop.click();
        await this.chaosArmy.waitForClickable();
        await this.chaosArmy.click();
        await this.chaosTyrant.waitForClickable();
        await this.chaosTyrant.click();
        await this.addCart.waitForClickable();
        await this.addCart.click();
        await this.cartLink.waitForClickable();
        await this.cartLink.click();
    }
    
    async tyrantCart (){
        await browser.refresh();
        await LoginPage.cookieAccept.click();
        await expect(this.homeCheck).toBeExisting;
        await this.shopBtn.click();
        await this.wh40kShop.click();
        await this.chaosShop.click();
        await this.chaosArmy.click();
        await this.chaosTyrant.click();
        await this.addCart.click();
        await this.cartLink.click();
        
    }

    async multiCart(){
        await browser.refresh();
        await LoginPage.cookieAccept.click();
        await expect(this.homeCheck).toBeExisting;
        await this.shopBtn.click();
        await this.wh40kShop.click();
        await this.chaosShop.click();
        await this.chaosArmy.click();
        await this.chaosTyrant.click();
        await this.addCart.click();
        await this.closePop.waitForClickable({setTimeout:2000});
        await this.closePop.click();
        await this.shopBtn.click();
        await this.sigmarShop.waitForClickable({setTimeout:3000});
        await this.sigmarShop.click();
        await this.orderShop.click();
        await this.kharaArmy.click();
        await this.kharaCodewright.click();
        await this.addCart.waitForClickable({setTimeout:2000});
        await this.addCart.click();
        await this.closePop.waitForClickable({setTimeout:2000});
        await this.closePop.click();
        await this.shopBtn.click();
        await this.middleearthShop.waitForClickable({setTimeout:3000})
        await this.middleearthShop.click();
        await this.lotrGood.waitForClickable({setTimeout:3000});
        await this.lotrGood.click();
        await this.minasHost.click();
        await this.addCart.waitForClickable({setTimeout:2000});
        await this.addCart.click();
        await this.closePop.waitForClickable({setTimeout:2000});
        await this.closePop.click();
        await this.cartLink.click();
    }

    async multiCartOverall (){
        await expect(this.homeCheck).toBeExisting;
        await this.shopBtn.click();
        await this.wh40kShop.click();
        await this.chaosShop.click();
        await this.chaosArmy.click();
        await this.chaosTyrant.click();
        await this.addCart.click();
        await this.closePop.waitForClickable({setTimeout:2000});
        await this.closePop.click();
        await this.shopBtn.click();
        await this.sigmarShop.waitForClickable({setTimeout:3000});
        await this.sigmarShop.click();
        await this.orderShop.waitForClickable({setTimeout:3000});
        await this.orderShop.click();
        await this.kharaArmy.click();
        await this.kharaCodewright.click();
        await this.addCart.waitForClickable({setTimeout:2000});
        await this.addCart.click();
        await this.closePop.waitForClickable({setTimeout:2000});
        await this.closePop.click();
        await this.shopBtn.click();
        await this.middleearthShop.waitForClickable({setTimeout:3000})
        await this.middleearthShop.click();
        await this.lotrGood.click();
        await this.minasHost.click();
        await this.addCart.waitForClickable({setTimeout:2000});
        await this.addCart.click();
        await this.closePop.waitForClickable({setTimeout:2000});
        await this.closePop.click();
        await this.cartLink.click();
    }

    open () {
        return super.open();
    }

}

module.exports = new addItem();
