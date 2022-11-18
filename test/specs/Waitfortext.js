describe("wait for text",function(){
    it("wait for text", async function(){
        await browser.url("https://the-internet.herokuapp.com/dynamic_loading/1")
        await browser.maximizeWindow();
        const start = await $("//button[text()='Start']")
        await start.click()
        //after clicking we have to check the text to display
        const text = await $("//h4[text()='Hello World!']")
        //wait untill text is displayed
        await text.waitForDisplayed({timeout:10000})
        console.log(await text.isDisplayed()); 
    })
})
