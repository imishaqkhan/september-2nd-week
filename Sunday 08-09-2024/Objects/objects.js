//literal object
const person = {
    name : 'ishaq',
    age : '24',
    height : '65',
    weight : '75',
    getperson : function(){
        return this.name + ' age:' + this.age 
    }
}
// console.log(person.age);
// console.log(`hello users, $ {this.name}`);

// console.log(person['name']);
// console.log(person.getperson());


// constructor object

const myinfo = new Object()

myinfo.firstname  ='ishaq'
myinfo.lastname = 'khan'
myinfo.email = 'ishaq@gmail.com'
myinfo.getfulname = function (){
    return this.firstname + ' ' + this.lastname
}
// for (var prop in myinfo){
//     alert(prop)
//     alert(myinfo[prop])
// }
// console.log(myinfo.email);
// console.log(myinfo.getfulname());

var country = new Object()
country.name= 'pakistan'
// country.address ={ id:'233', name:'swabi'}
// console.log(country.address.name);
// console.log(country.name);

function changename(per){
    per.name = 'ishaq khan'
}
var myname = { name:'hussain'}
console.log(myname.name);
changename(myname)
console.log(myname.name);


