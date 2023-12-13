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
        return $('[datat-testid="button-atc-popup-checkout-link"]')
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

    open () {
        return super.open();
    }

}

module.exports = new addItem();
