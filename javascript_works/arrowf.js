var add=(num1,num2)=>num1+num2
console.log(add(10,20));

var square=(num1)=>num1**2

var cube=(num1,num2)=>num1/num2

console.log(add(10,20));

var name="arun"
var arr=[10,20,30]
function isStartWithA(name){
    return name[0]=="a"?true:false
}
var isStartWithA=(name)=>name[0]=="a"?true:false
var isEven=(num)=>num%2==0?true:false
var isOdd=(num)=>num%2==0?true:false

function sub(num1,num2){
    return num1-num2
}
console.log(sub(50,100));




var arr=[2,3,4,5,6]
var squares=(num)=>num**2
var squares=arr.map(squares)
console.log(squares);
// var squares=[]

// for(let num of arr){
//     squares.pus
// }
var squares=arr.map((num)=>num**2)
var cube=arr.map((num)=>num**3)