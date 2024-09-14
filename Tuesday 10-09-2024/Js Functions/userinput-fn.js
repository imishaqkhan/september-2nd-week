let n = prompt('Enter a number :')
let row =[]
for(let i=1; i<=n; i++){
    row[i-1] = i
}
console.log(row);

let newrow = row.reduce((pre,cur) =>{
    return pre + cur
})
console.log("sum =",newrow);

let product = row.reduce((result,currunt) =>{
    return result * currunt
})
console.log('factorial =',product);
