import element from '../pages/Element.page'
describe("pom",function(){
    it("page object model", async function(){
       await element.open()
       await  element.source.setValue("Hyderabad")
       await element.destination.setValue("bangalore")
    })
})