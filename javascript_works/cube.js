var num=123;
var res="";
while(num!=0){
    let digit=num%10;
    res=res+(digit**3);
    console.log(digit);
    num=Math.floor(num/10)
}
console.log(res);