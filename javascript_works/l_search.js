var arr=[10,11,12,13,40,15]
var element=11,flag=0,count=0;

for(let num of arr){
    if(num==element){
        flag+=1;
        break;
    }
    count++;
}

if(flag==0){
    console.log("element not found");

}
else{
    console.log("element found");
}
console.log(count);