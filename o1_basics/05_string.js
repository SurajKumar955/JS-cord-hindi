//string declare
 const name = " Suraj"
 const repoCount = 50

// // console.log(name + repoCount + " Value");

console.log(`Hello my name is Suraj. ${name} and my repo count is ${repoCount}`);

const gameName = new String('Suraj-Ku-com')

// console.log(gameName[0]);
// console.log(gameName.___proto___);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 2) 
console.log(newString);

const anotherString = gameName.slice(-4, 2)
console.log(anotherString);


//trim
const newStringOne = " Suraj " // "  input form  "
console.log(newStringOne.trim());

const url = "https://suraj.com/suraj%20kumar"
console.log(url.replace('%20', '_'));

console.log(url.includes('sunder'));

console.log(gameName.split('_'));