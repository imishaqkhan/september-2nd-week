let arr1 = [12,'number','string'];
// console.log(arr1[2]);

let arr2 = [10,20,30,40,50,60,70,80,100];
// arr2.forEach ( i => console.log(i));

// for (let i=0; i<=arr2.length; i++){
//     console.log(arr2[i]);
    
//  for(let i of arr2){
//     console.log(i);
    
// }
 
// for (let i in arr2){
//     console.log(arr2[i]);
    
// }
let arr3 = [34,34,35,676,88,67,56,43,66,76,67];

arr3[11] = 100;
arr3[15] = 200;
arr3.push('maths');
arr3.unshift('physics');
// console.log(arr3);

let arr4 = [34,35,676,88,67,56,43,66,76,67];
let newarr4 = arr4.shift();
// console.log(arr4);
let poparr = arr4.pop();
//console.log(arr4);

let middle = 88;
let toremove = arr4.filter(function(item){
    return item !== middle
    
})
console.log(arr4);

console.log(toremove);
