let arr =[1,2,3,4,5,6,7,8,9]

arr.forEach(function passval(val){
    // console.log(val);
    
})

arr.forEach((vals) => {
    // console.log(vals);
    
})
let str = ['swabi','mardan','peshawar']

str.forEach(function string(value,idx){
    // console.log(value.toUpperCase(),idx)
    
})
str.forEach((values,idx,str) =>{
    // console.log(values ,idx,str);
    
})

arr.forEach((square) => {
    // console.log(square**10);
    
})
let calcsquare = (nums) => {
    // console.log(nums**6);
    
}
arr.forEach(calcsquare)


