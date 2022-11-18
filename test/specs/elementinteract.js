

describe("element interact", function(){
    it("Orange hrm",async function(){
       await  browser.url("https://opensource-demo.orangehrmlive.com/");
    
        await browser.maximizeWindow();
       
       const ele = await $('#txtUsername');
       await ele.setValue('admin');
       await browser.pause(3000);
       await ele.clearValue();
       await browser.pause(3000);
       await ele.setValue('admin');
       await browser.pause(3000);
      const value =  await ele.getValue();
      console.log('value added is ',value);
      const button = await $('#btnLogin');
      const click = await button.isClickable();
      const enable= await button.isEnabled();
      const Display= await button.isDisplayed();
      console.log(click);
      console.log(enable);
      console.log(Display);
      await expect(button).toBeClickable();
      await expect(button).toBeEnabled();
      await expect(button).toBeDisplayed();
      const text = await $('//*[@id="forgotPasswordLink"]/a');
      await expect(text).toHaveTextContaining('Forgot');




      


    })
})