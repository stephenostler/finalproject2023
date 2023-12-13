const loginError = require('../pageobjects/loginerror.js')

describe('My Login gone wrong', () => {
    it('should not let a user in while displaying that no input is in fields', async () => {
        await loginError.open();
        await loginError.logerrorNone();

    })
})

describe('My Login gone wrong', () => {
    it('should not let a user in while displaying that issue is with email', async () => {
        await loginError.open();
        await loginError.logerrorEmail();
        
    })
})

describe('My Login gone wrong', () => {
    it('should not let a user in while displaying that issue is with password', async () => {
        await loginError.open();
        await loginError.logerrorPassword();
        
    })
})

describe('My Login gone wrong', () => {
    it('should not let a user in while displaying that there is an issue, but not specifing what is wrong', 
    async () => {
        await loginError.open();
        await loginError.logerrorGeneral();
        
    })
})