var num=123;
var res="";
while(num!=0){
    let digit=num%10;
    res+=digit
    console.log(digit);
    num=Math.floor(num/10)
}
console.log(res);

// diff b/w var and let

//var is global
//let block level scope
