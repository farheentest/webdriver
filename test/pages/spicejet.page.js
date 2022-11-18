// import page from './Page'
class spicejet {
    // open(){
    //     super.open(path)
    // }
    get loginLink(){return $('#ctl00_HyperLinkLogin')}
    //for link text we can use the locator with '=' and text
    get child1(){return $('=SpiceClub Members')} 
    get child2(){return $('=Member Login')}
    moveToElement(element){
        element.moveTo()
    }
    clickOnElement(element){
        element.click()
    }
    // keys (entering keys through keyboard)
    get searchBox(){return $('#target')}
    get result(){return $('#result')}
    searchEnter(text){
        this.searchBox.setValue(text)
    }
    resultText(){
        return this.result.getText()
    }
}
export default new spicejet();