class parent{
    phone(){
        console.log("10 pro max");

    }
}
class child extends Parent{
    phone(){
        super.phone()
        console.log("i phone12");

    }

}
var child=new child()
child.phone()


// class parent{
//     m1(){
//         console.log("inside parent");
//     }
// }
// class child extends parent{
//     m2(){
//         console.log("inside m2");
//     }
// }
// class subchild extends child{
//     m3(){
//         console.log("inside m3");
//     }
// }

// var sb=new subchild()
// sb.m1()
// sb.m2()
// sb.m3()

// var ch=new child();
// ch.m1()
// ch.m2()
