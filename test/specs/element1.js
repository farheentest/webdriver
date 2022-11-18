
describe("async mode",function(){
        it("open url",async function(){
            browser.url("https://www.redbus.in/");
        })
        
        it("enter source",async function(){
            const ele = await $("input[id='src']");
            await ele.setValue("Hyderbad");
            await browser.pause(3000);
            const ele1 = await $("input[id='dest']");
            await ele1.setValue("bangalore");
            await browser.pause(3000);

        })
  })
