describe("wait untill element is visible",function(){
    it("wait untill",async function(){
        await browser.url("http://seleniumpractise.blogspot.com/2016/08/how-to-use-explicit-wait-in-selenium.html")
        await browser.maximizeWindow()
        const timerbutton = await $("//button[text()='Click me to start timer']")
        await timerbutton.click()
        const element= await $("//*[@id='demo']")
        await element.waitUntil(
            async function(){
                return(await this.getText()==='WebDriver')
            },
            {
                timeout:20000,
                timeoutMsg:"element not found"
            }
        )
       
        })
    })
