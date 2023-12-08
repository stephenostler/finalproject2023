const { $ } = require('@wdio/globals')
const Page = require('./page');
const { expect } = require('@wdio/globals')

class LoginPage extends Page {
   
    get inputUsername () {
        return $('[data-testid="inputEmail"]');
    }

    get inputPassword () {
        return $('[data-testid="inputPassword"]');
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
        return $('//div/button[@id="onetrust-accept-btn-handler"]');
    }

    get wrapperEN (){
        return $('[value="en-US"]');
    }

    get closeLang (){
        return $('locale-selector-close-button');
    }
    async cookieClick(){
        await this.cookieAccept.doubleClick;
    }

    async wrapClick(){
        await this.wrapperEN.doubleClick;
    }

    get cookiePop(){
        return $('[class="ot-sdk-container"]');
    }

    get frame(){
        return $('[id="onetrust-banner-sdk"]');
    }

    async login () {
        await browser.setCookies([
            {name:'OptanonAlertBoxClosed',value: '2023-11-07T19:18:17.692Z',},
            {name:'gw-locale',value:'en-US'},
            // {name:'_hjAbsoluteSessionInProgress',value:'0'},
            // {name: '_hjIncludedInSessionSample_2455086', value: '1'},
            // {name: '_hjSessionUser_2455086', value: 'eyJpZCI6IjBhYzgxNzM4LTc2ZTEtNWI4MC04NjZmLTNmYWI5NTllYzZhNyIsImNyZWF0ZWQiOjE2OTkzODQ2OTc5NzAsImV4aXN0aW5nIjp0cnVlfQ=='},

        ]);
        // await browser.pause(2000);
        // await browser.switchToFrame(this.frame);
        // await browser.switchToParentFrame();
        // await this.cookiePop.waitForExist({setTimeout:2000});
        // await expect(this.cookiePop).toBeExisting;
        // await this.cookieAccept.waitForClickable({setTimeout: 20000});
        // await this.cookieClick();
        // await expect(this.wrapperEN).toBeExisting;
        // await this.wrapperEN.waitForClickable({setTimeout: 20000});
        // await this.wrapClick();
        // await browser.pause(3000);
        // await this.closeLang.waitForClickable({timeout:5000});
        // await this.closeLang.click;
        await this.accountLoginBtn.waitForClickable({setTimeout:500});
        await this.accountLoginBtn.click();
        await expect(this.accountCheck).toBeExisting;
        await this.inputUsername.setValue('stephen.ostler0120@stu.mtec.edu');
        await this.inputPassword.setValue('K@pp@tun@3');
        await this.btnSignin.click();
        
        
    }
// 'stephen.ostler0120@stu.mtec.edu' 'K@pp@tun@3'
   
    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
