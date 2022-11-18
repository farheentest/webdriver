describe("Verify tittle",function(){
    it("page tittle", async function(){
       await  browser.url("http://the-internet.herokuapp.com")
       console.log("tittle of the page is:  ",await browser.getTitle()); 
       await expect(browser).toHaveTitle("The Internet")
    })
    it("Page url",async function(){
       console.log("url of the paget is:  ", await browser.getUrl());  
       await expect(browser).toHaveUrl("http://the-internet.herokuapp.com/")        
    })
    it("url containing", async function(){
        await expect(browser).toHaveUrlContaining('internet')
    })
    it("title containing", async function(){
        await expect(browser).toHaveTitleContaining('The')
    })

})