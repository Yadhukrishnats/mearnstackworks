var arr=[10,11,10,12,20,21,21]
var duplicates={}
for(let num of arr){
    if (num in duplicates){
        duplicates[num]+=1
    }
    else{
        duplicates[num]=1
    }
}
console.log(duplicates);