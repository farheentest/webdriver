
var assert = require("assert")
describe("$$ find elements",function(){
    it("multiple elements",async function(){
        await browser.url('https://opensource-demo.orangehrmlive.com/');
        const all = await $$("//*[@id='social-icons']//img");
        await browser.pause(3000);
        console.log("count of links are", + all.length);
        assert.strictEqual(all.length,4,'count mismatch');
    })
    it("click on twiter",async function(){
        await browser.url('https://opensource-demo.orangehrmlive.com/');
        const all = await $$("//*[@id='social-icons']//img");
        for(let i=0;i<all.length;i++)
        {
            console.log('social icon ' + await all[i].getAttribute("alt"))
            
            if( await all[i].getAttribute("alt") ==='OrangeHRM on twitter')
            {
              await all[i].click()
              await browser.pause(3000);
              break
            }
        }
    })
})