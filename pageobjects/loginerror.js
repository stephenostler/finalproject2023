const { $ } = require('@wdio/globals');
const Page = require('./page.js');
const { expect } = require('@wdio/globals');
const LoginPage= require('../pageobjects/login.page.js');

class loginError extends Page {

    get emailError (){
        return $('[data-testid="errorEmail"]')
    }

    get passwordError (){
        return $('[data-testid ="errorPassword"]')
    }

    get generalError (){
        return $('[data-testid ="generalError"]')
    }

    open () {
        return super.open();
    }

    async logerrorNone(){
        await browser.refresh();
        await LoginPage.cookieAccept.click();
        await LoginPage.accountLoginBtn.click();
        await LoginPage.cookieAccept.click();
        await expect(LoginPage.accountCheck).toBeExisting;
        await LoginPage.btnSignin.click();
        await expect(this.emailError).toBeExisting;
        await expect(this.passwordError).toBeExisting;
    }

    async logerrorEmail(){
        await browser.refresh();
        await LoginPage.accountLoginBtn.click();
        await expect(LoginPage.accountCheck).toBeExisting;
        await LoginPage.inputUsername.click();
        await LoginPage.inputUsername.setValue('tester');
        await LoginPage.inputPassword.setValue('invalidpass');
        await LoginPage.btnSignin.click();
        await expect(this.emailError).toBeExisting;
    }

    async logerrorPassword(){
        await browser.refresh();
        await LoginPage.accountLoginBtn.click();
        await expect(LoginPage.accountCheck).toBeExisting;
        await LoginPage.inputUsername.click();
        await LoginPage.inputUsername.setValue('tester@gmail.com');
        await LoginPage.inputPassword.setValue('shortpas');
        await LoginPage.btnSignin.click();
        await expect(this.passwordError).toBeExisting;
    }

    async logerrorGeneral(){
        await browser.refresh();
        await LoginPage.accountLoginBtn.click();
        await expect(LoginPage.accountCheck).toBeExisting;
        await LoginPage.inputUsername.click();
        await LoginPage.inputUsername.setValue('tester@gmail.com');
        await LoginPage.inputPassword.setValue('wrongpass');
        await LoginPage.btnSignin.click();
        await expect(this.generalError).toBeExisting;
    }
}

module.exports = new loginError();
