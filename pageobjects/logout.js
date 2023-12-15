const { $ } = require('@wdio/globals');
const Page = require('./page.js');
const { expect } = require('@wdio/globals');
const LoginPage= require('../pageobjects/login.page.js');

class logoutAccount extends Page {

    get logoutBtn (){
        return $('[data-testid="logout-button"]')
    }

    async logoutUser(){
        await LoginPage.accountLogoutBtn.waitForClickable({setTimeout:4000})
        await LoginPage.accountLogoutBtn.click();
        await expect(this.logoutBtn).toBeExisting;
        await this.logoutBtn.waitForClickable({setTimeout:2000})
        await this.logoutBtn.click();
    }
}

module.exports = new logoutAccount();