describe("wait for enable",function(){
    it("wait untill the text box is enable", async function(){
        await browser.url("http://seleniumpractise.blogspot.com/2016/09/how-to-work-with-disable-textbox-or.html")
        await browser.maximizeWindow()
        const showbutton =await $("//input[@value='Show me']")
        await showbutton.click()
        const text = await $("#passnew")
        await text.waitForEnabled({timeout:16000})
        await text.setValue("selenium")
    })
})