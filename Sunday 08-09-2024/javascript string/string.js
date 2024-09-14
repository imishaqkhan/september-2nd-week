const name = "ishaq"
const lastname = "khan"

//console.log(name + '' + lastname);

console.log(`Hello my name is ${name} and my last name is ${lastname}`);

const gamename = new String('ishaq')

// console.log(gamename[4]);
// console.log(gamename.__proto__);

// console.log(gamename.length);
// console.log(gamename.toUpperCase());

const newString = gamename.substring(0, 3)
console.log(newString);
 
const anotherString = gamename.slice(-8, 4)
console.log(anotherString);

const newname = 'ishaqkhan'
console.log(newname.trim());
const url = "https://ishaq@gmail.com/ishaq%20khan"
console.log(url.replace('%20','-'));
