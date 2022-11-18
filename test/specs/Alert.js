describe("handling alert",function(){
    it("accept alert and capture text message", async function(){
        await browser.url("https://mail.rediff.com/cgi-bin/login.cgi")
        await browser.maximizeWindow()
        const sign_button = await $("//input[@title='Sign in']")
        await sign_button.click()
        const alert_text=await browser.getAlertText()
        console.log("text is    ", alert_text);
        await browser.acceptAlert()
    })
})