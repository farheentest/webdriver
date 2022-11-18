
describe("autosuggestion",function(){
    it("search box in google", async function(){
        await browser.url("https://www.google.com/")
        const searchbox = await $("//input[@name='q']")
        await searchbox.setValue("webdriver io")
        await browser.pause(2000)
        const suggestionlist = await $$("//ul[@role='listbox']//li//div[@role='option']")
        for (let i=0;i<suggestionlist.length;i++){
         console.log("suggestion values are   ", await suggestionlist[i].getText()); 
            const value = await suggestionlist[i].getText()
            if(value.includes("varsion")){
                await suggestionlist[i].click()
                await browser.pause(5000)
                break
            }
        }
        
    })
})



