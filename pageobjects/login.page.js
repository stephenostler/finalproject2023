const { $ } = require('@wdio/globals')
const Page = require('./page.js');
const { expect } = require('@wdio/globals')
const Credentials = require('./credentials.js');

class LoginPage extends Page {
   
    get inputUsername () {
        return $('[name="email"]');
    }

    get inputPassword () {
        return $('[name="password"]');
    }

    get btnSignin () {
        return $('[data-testid="loginButton"]');
    }

    get accountLoginBtn (){
        return $('[data-testid="account-link"]');
    }

    get accountLogoutBtn (){
        return $('[data-testid="account-button"]');
    }
    
    get accountCheck (){
        return $('[data-testid="loginBanner"]');
    }

    get cookieAccept (){
        return $('[id="onetrust-accept-btn-handler"]');
    }

    get wrapperEN (){
        return $('[value="en-US"]');
    }

    get closeLang (){
        return $('locale-selector-close-button');
    }
    async cookieClick(){
        await this.cookieAccept.click;
    }

    async wrapClick(){
        await this.wrapperEN.doubleClick;
    }

    get cookiePop(){
        return $('[class="ot-sdk-container"]');
    }

    get banner(){
        return $('[aria-label="Cookie banner"]');
    }

    async login () {
        await browser.setCookies([
            {name:'OptanonAlertBoxClosed',value: '2023-11-07T19:18:17.692Z',},
            {name:'gw-locale',value:'en-US'},
        
        ]);
        // await browser.pause(5000);
        // await browser.refresh();
        // await this.cookieAccept.moveTo;
        // await this.cookieAccept.waitForEnabled({setTimeout:3000});
        // await this.cookieAccept.click();
        // await this.closeLang.waitForEnabled({setTimeout:3000});
        // await this.closeLang.click();
        await browser.refresh();
        await this.accountLoginBtn.waitForClickable({setTimeout:500});
        await this.accountLoginBtn.click();
        await browser.pause(3000);
        // await this.banner.waitForExist();
        await this.cookieAccept.waitForEnabled({setTimeout:2000});
        await this.cookieAccept.click();
        await expect(this.accountCheck).toBeExisting;
        await browser.pause(5000);
        await this.inputUsername.click();
        await this.inputUsername.setValue(Credentials.username);
        await this.inputPassword.setValue(Credentials.password);
        await this.btnSignin.click();
        
        
    }
// username and password are from credentials file
   
    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
