describe("screen shot",function(){
    it("take screen shot",async function(){
        await browser.url("https://webdriver.io/docs/api/browser/saveScreenshot/")
        await browser.saveScreenshot("./wdio.png")
    })
})