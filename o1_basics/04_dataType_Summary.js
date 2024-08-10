//primitive
// 7 type:- String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedId = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

// const bigNumber = 837246983253289n

//Reference(Non- Primitive)
// Array, Object, Function


const navi = ["Ram", "Mohan", "Rekha",]
let myObj = {
    name: "Suraj",
    age: 24,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bignumber);

// https://tc39.es/ecma262/
// https://262.ecma-international.org/5.1/#sec-11.4.3

//  ++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap (Non-Primitive)

let myInstagramname = "suraj_kumar_955"

let anothername = "myInstagramname"
anothername = "surajname"

console.log(myInstagramname);
console.log(anothername);

let userOne = {
    email: "suraj7280805994@gmail.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "suraj7280805994@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);