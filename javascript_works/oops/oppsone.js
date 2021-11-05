class person{
    setperson(name,gender,age){
        this.name=name,
        this.gender=gender,
        this.age=age
    }
    printperson(){
        console.log(this.name,this.age,this.gender);
    }
}

var obj1=new person();
obj1.setperson("ram","male",22)
obj1.printperson()
console.log(obj1.name);

var obj2=new person();
obj2.setperson("raj","male",21)
obj2.printperson()
console.log(obj2.name);

class person{
    setperson(name,gender,age){
        this.name=name,
        this.gender=gender,
        this.age=age
    }
    printperson(){
        console.log(this.name,this.age,this.gender);
    }
}
var obj1=new person("ram","male",22);
obj1.printperson()


