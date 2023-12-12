const { $ } = require('@wdio/globals');
const Page = require('./page.js');
const { expect } = require('@wdio/globals');

class addItem extends Page {
    
    get shopBtn (){
        return $('[data-testid="navigation-button-0"]')
    }

    get wh40kShop (){
        return $('[data-testid="nav-section-button-1-0"]')
    }

    get chaosShop (){
        return $('[data-testid="nav-section-button-1-2"]')
    }

    get chaosArmy (){
        return $('[data-testid="navigation-slug-0-0"]')
    }

    get chaosTyrant (){
        return $('[data-testid="product-card-Knight Tyrant"]')
    }

    get homeCheck(){
        return $('[data-testid="video-banner"]')
        
    }

    get cookieAccept (){
        return $('[id="onetrust-accept-btn-handler"]');
    }


    async tyrant (){
        await browser.refresh();
        await browser.pause(5000);
        await this.cookieAccept.click();
        await expect(this.homeCheck).toBeExisting;
        await this.shopBtn.waitForClickable({setTimeout:2000});
        await this.shopBtn.click();
        await this.wh40kShop.waitForClickable({setTimeout:2000});
        await this.wh40kShop.click();
        await this.chaosShop.waitForClickable({setTimeout:2000});
        await this.chaosShop.click();
        await this.chaosArmy.waitForClickable({setTimeout:2000});
        await this.chaosArmy.click();
        await this.chaosTyrant.waitForClickable({setTimeout:2000});
        await this.chaosTyrant.click();

    }

    open () {
        return super.open();
    }

}

module.exports = new addItem();
