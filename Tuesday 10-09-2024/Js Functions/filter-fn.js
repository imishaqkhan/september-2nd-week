let arreven =[1,2,3,4,5,6,10,12,16,32,7,8,9,36,453,34534,435,435,436,256565,35,5,75,34,23]

let newarr = arr.filter((even) => {
    return even >3
})
console.log(newarr);

// reduce function

const output = arreven.reduce((res,curr) =>{
    return res + curr
})
console.log(output);



const result = arreven.reduce((pre,curr) =>{
    return pre > curr ? pre : curr
})
console.log(result);


let marks=[97,87,34,49,99,86]

let newmark= marks.filter((val) => {
    return val >90
})
console.log(newmark);
