// console.log(NaN + 1);
// console.log(NaN - 1);
// console.log(NaN * 1);
// console.log(NaN ** 0);
// console.log(NaN ** 1);

// const firstName; // Error - 'const' declarations must be initialized.

// Variable declaration
// let firstName; // firstName has "undefined" value

// Variable Initilization
// let lastName = "Yadav";

// Number data type
let integerNumber = 534;
let decimalNumber = 432.434;
let exponentialNumber = 12.5e9;
let hexNuber = 0x242424;
let binaryNumber = 0b1010;

console.log(integerNumber * "Ajay"); // NaN
console.log(integerNumber / 0); // Infinity
console.log(integerNumber / -0); // -Infinity

// String Type

let firstName = "Ajay";
let lastName = "Yadav";
let fullName = `My Full Name is ${firstName} ${lastName}`;
console.log(fullName); // My Full Name is Ajay Yadav

// Symbol Type
let symbol1 = Symbol("Ajay");
let symbol2 = Symbol("Ajay");
console.log("Both are same? :", symbol1 === symbol2);
//Both are same? : false

// But, String Type
let str1 = "Ajay";
let str2 = "Ajay";
console.log("Both are same? :", str1 === str2);
// Both are same? : true

// BigInt Type
let bigNumber1 = 534654651324541325456n;
let bigNumber2 = 1n;

console.log(bigNumber1 + bigNumber2);
//534654651324541325457n

console.log(bigNumber1 + 25); // ERROR
//Cannot mix BigInt and other types, use explicit conversions
