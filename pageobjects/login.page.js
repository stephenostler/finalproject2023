const { $ } = require('@wdio/globals');
const Page = require('./page.js');
const { expect } = require('@wdio/globals');
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
        await browser.refresh();
        await this.accountLoginBtn.click();
        await this.cookieAccept.click();
        await expect(this.accountCheck).toBeExisting;
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
