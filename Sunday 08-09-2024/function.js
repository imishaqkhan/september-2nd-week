// function greet(){
//     alert('Hellow world');
// }

// function greet(firstname, lastname){
//     alert("Hello" + firstname + "" + lastname)
// }
// greet("ishaq","khan")

// function getnumber(){
//     return 10
// }
// let result = getnumber();
// console.log(result);

// function sum(num1,num2){
//    return(num1 + num2)
// }
// var num = (45,98)
// console.log(num);

// function multiple(x){
//     function fn(y){
//         return (x*y)
//     }
//     return fn
// }
// let multi = multiple(5)
// console.log(multi(10));
function multiple(x){
    function fn(y){
        return (x*y)
    }
    return fn
}
let multi = multiple(5)
console.log(multi(5475743545));