

describe("Drag and drop", function(){
    it("drag and drop", async function(){
        await browser.url("https://jqueryui.com/resources/demos/droppable/default.html")
        const source =await $('#draggable')
        const target = await $('#droppable')
        await source.dragAndDrop(target)
        
    })
})