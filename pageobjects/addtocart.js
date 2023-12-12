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
    async tyrant (){
        await expect(this.homeCheck).toBeExisting;
    }

}

module.exports = new addItem();
