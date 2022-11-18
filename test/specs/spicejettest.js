import spicejet from '../pages/spicejet.page'
describe("mouse movement",function(){
    it("move to element", async function(){
     await browser.url('https://corporate.spicejet.com/Default.aspx')
     await  spicejet.moveToElement(await spicejet.loginLink)
     await spicejet.moveToElement(await spicejet.child1)
     await spicejet.clickOnElement(await spicejet.child2)
     await  browser.pause(3000)
    })

    it("keys entering through keyboard", async function(){
        await browser.url('https://the-internet.herokuapp.com/key_presses')
        await spicejet.searchEnter('Tab')
        const text = await spicejet.resultText()
        console.log('the text is :      ' ,text);
    })
})