// ++++++++++ number ++++++++
const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.4898

console.log(otherNumber.toPrecision(3));

const hundreds = 100000
// console.log(hundreds.toLocaleString('en_IN')); // indian value

// +++++++++++++ maths ++++++++++++++

// console.log(math);
// console.log(math.abs(-4));
// console.log(math.round(4.6));
// console.log(math.ceil(4.2));
// console.log(math.floor(4.9));
// console.log(math.min(4, 3, 6, 8));
// console.log(math.random(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min ));

