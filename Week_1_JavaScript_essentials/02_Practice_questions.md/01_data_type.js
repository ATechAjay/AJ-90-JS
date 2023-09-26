// Number data type
let integerNumber = 534;
let decimalNumber = 432.434;
let exponentialNumber = 12.5e9;
let hexNuber = 0x242424;
let binaryNumber = 0b1010;

console.log(integerNumber * "Ajay");
console.log(integerNumber / 0);
console.log(integerNumber / -0);

console.log(NaN + 1);
console.log(NaN - 1);
console.log(NaN * 1);
console.log(NaN ** 0);
console.log(NaN ** 1);

// String data type
let firstName = "Ajay";
let lastName = "Yadav";
let fullName = `My Full Name is ${firstName} ${lastName}`;
console.log(fullName);

let str1 = "Ajay";
let str2 = "Ajay";
console.log("Both are same? :", str1 === str2);

// Symbol data type
let symbol1 = Symbol("Ajay");
let symbol2 = Symbol("Ajay");
console.log("Both are same? :", symbol1 === symbol2);

// BigInt data type
let bigNumber1 = 534654651324541325456n;
let bigNumber2 = 1n;

console.log(bigNumber1 + bigNumber2);
console.log(bigNumber1 + 25);
