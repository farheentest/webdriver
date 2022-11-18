

class Scrollpage{
    get password(){return $('=Forgot Password?')}
    moveToElement(element){
        element.moveTo()
    }
    clickOnElement(element){
        element.click()

    }
}
export default new Scrollpage();