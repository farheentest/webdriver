const assert = require('assert')
const loginData = require('../Testdata/Login.data')
import Login from '../pages/Login.page'

describe("login page",function(){
    it("enter user name", async function(){
        await Login.open()
        await Login.username.setValue(loginData.username)
        assert.equal(loginData.username, await Login.username.getValue())
    
    })

    it("enter password", async function(){
        await Login.password.setValue(loginData.password)
        assert.equal(loginData.password,await Login.password.getValue())
    })

    it.skip("login button", async function(){
        await Login.login_button.click()
    })

    it.skip("clear user name", async function(){
        await Login.open()
        await Login.username.setValue('tomsmith')
        await Login.username.click()
        await Login.username.clearValue()
        assert.equal('',await Login.username.getValue())
    })
})