let newbtn = document.createElement("Button");
newbtn.innerText = "click me";
console.log(newbtn);
newbtn.style.color = "white";
newbtn.style.backgroundColor = "green";


 let div =document.querySelector("body").prepend(newbtn);

 let heading =document.createElement("h1") 
 heading.innerHTML= "<i> Hi I am new! </i>"

 document.querySelector("body").prepend(heading)

 let para = document.createElement("p")
 para.innerHTML = "Click on buttton and show you the different colors"
 document.querySelector("body").append(para);

 let btn = document.createElement("button")
 btn.innerHTML = "Save me"
let el = document.createElement("div")
 document.querySelector("div").after(btn)