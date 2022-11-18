
const assert = require("assert")
describe("Drop_down",function(){
    it("select dob",async function(){
        await browser.url("https://www.facebook.com/");
        await browser.maximizeWindow();
        const ele = await $("//a[text()='Create New Account']");
        await ele.click();
        await browser.pause(3000);
        const monthdd = await $("#month");
        //select by attribute
        //await monthdd.selectByAttribute("value","11");
        //select by index
        //await monthdd.selectByIndex(4)
        //select by visible text
        await monthdd.selectByVisibleText("May")
        const selectedvalue = await monthdd.getValue()
        console.log("month is ::::" + selectedvalue);
        await browser.pause(3000);
        //assert.equal(selectedvalue,11)

    })
})