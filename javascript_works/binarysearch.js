var arr=[10,11,13,14,12]
// push()
// pop()
// sort()
// =>asc

arr.sort((num1,num2)=>num1-num2)
// console.log(arr);

// // 
// function sort(obj1,ob2){
//     if(obj1< obj2){
//         return -1(obj1)
//     }
//     else{
//         return 1(obj2)
//     }
//     obj1<obj2?-1
// }
var element=13;
var low=0,upp=arr.length-1;

while(low<upp){
    mid=Math.floor((low+upp)/2); 
    if(element<arr[mid]){
        upp=mid-1;
    }
    else if(element>arr[mid]){
        low=mid+1
    }
    else if(element==arr[mid])
    {
        flag=1;
        break;
    }
}
console.log(flag==0?"element not found":"element found")