function cube(num){
    let res=num**3;
    return res
}
console.log(cube(3));

function add (num1,num2){
    return num1+num2
}

function mul (num1,num2){
    return num1*num2
}

function factorial(num){
    let fact=1;
    for(let i=1;i<=num;i++){
        fact*=i;
    }
    return fact
}
console.log(factorial(5));