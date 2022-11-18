import Scrollpage from '../pages/Scroll.page'
describe("scrolling page", function(){
    //it.skip>> will skipp the particular method
    it.skip("scroll in to view and click on element", async function(){
        await browser.url("https://classic.crmpro.com/index.html")
        console.log("Element is not in port view:   ", await Scrollpage.password.isDisplayedInViewport());  
        await Scrollpage.password.scrollIntoView()
        console.log("Element is in port view:  ", await Scrollpage.password.isDisplayedInViewport()); 
        //await  Scrollpage.moveToElement(await Scrollpage.password)
        await Scrollpage.clickOnElement(await Scrollpage.password)

    })

    it("scroll in to view move on element and click on element", async function(){
        console.log("Element is not in port view:   ", await Scrollpage.password.isDisplayedInViewport());  
        await Scrollpage.password.scrollIntoView()
        console.log("Element is in port view:  ", await Scrollpage.password.isDisplayedInViewport()); 
        await  Scrollpage.moveToElement(await Scrollpage.password)
        await Scrollpage.clickOnElement(await Scrollpage.password)

    })
})