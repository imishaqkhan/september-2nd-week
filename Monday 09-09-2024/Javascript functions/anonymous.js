let number = [2,3,4,5,6,7,78,9]

let square = number.map(function(num){
    return num * num
})

// console.log(square);


// Arrow function

let value = num => num * num

let result = value(500)
// console.log(result);

// pass obje in function

let numbers = {
  username : 'ishaq khan',
  age : 23
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and their age is ${anyobject.age}`);
    
}
handleobject(numbers)

function newarray(getvalue){
     return getvalue[7]
}
console.log(newarray(number));
