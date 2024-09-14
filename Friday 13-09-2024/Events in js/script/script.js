let btn1 =document.querySelector("#btn1")

btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 200
    a++
    console.log(a);
    
    
}
let btn2 = document.querySelector("#btn2")
btn2.onclick = () => {
    alert('hello 2x')
}