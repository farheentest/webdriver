import page from './Page'
class Login extends page{
    open(){
        super.open('https://the-internet.herokuapp.com/login')
    }
    get username(){ return $('#username')}
    get password(){ return $('#password')}
    get login_button(){return $('//*[@id="login"]/button/i')}
    // userName(text){
    //     this.username.waitForDisplayed()
    //     this.username.setValue(text)
        
    // }
    // passWord(text){
    //     this.password.waitForDisplayed()
    //     this.password.setValue(text)
    // }
    // loginButton(){
    //     this.login_button.waitForDisplayed()
    //     this.login_button.click()
    // }



}
export default new Login();