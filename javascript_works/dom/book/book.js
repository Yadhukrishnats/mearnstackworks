class BookLibrary{
    addToDb(){
        let name=bk_name.value;
        let author=bk_author.value;
        let price=bk_price.value;
        let copies=bk_copies.value;
        let newbook={
            name,
            author,
            price,
            copies
        }
        // console.log(newbook);
        localStorage.setItem(name,JSON.stringify(newbook))
        alert("Book has been added")
    }
    findBook(){
        
    }
}
var book=new BookLibrary()