import page from './Page';
class element extends page{
    open(){
        super.open("https://www.redbus.in/")
    }
    get source(){return $("#src")}
    get destination(){return $("#dest")}

}
export default new element();

