var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1000,"ram",15000,"hr",1990,2000],
    [1000,"ram",15000,"hr",1990,2000],
    [1000,"ram",15000,"hr",1990,2000],
    [1000,"ram",15000,"hr",1990,2000],
    [1000,"ram",15000,"hr",1990,2000],

]

// var developer_count=0;
// for(let employee of employees){
//     if(employee[3]=="developer"){
//         developer_count++;

//     }
// }
// console.log("developers=",developer_count);

var employee_names=employees.map((emp)=>emp[1])
console.log(employee_names);