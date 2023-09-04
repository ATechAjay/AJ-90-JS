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

// console.log(integerNumber * "Ajay"); // NaN
// console.log(integerNumber / 0); // Infinity
// console.log(integerNumber / -0); // -Infinity

// String Type

let firstName = "Ajay";
let lastName = "Yadav";
let fullName = `My Full Name is ${firstName} ${lastName}`;
// console.log(fullName); // My Full Name is Ajay Yadav

// Symbol Type
let symbol1 = Symbol("Ajay");
let symbol2 = Symbol("Ajay");
// console.log("Both are same? :", symbol1 === symbol2);
//Both are same? : false

// But, String Type
let str1 = "Ajay";
let str2 = "Ajay";
// console.log("Both are same? :", str1 === str2);
// Both are same? : true

// BigInt Type
let bigNumber1 = 534654651324541325456n;
let bigNumber2 = 1n;

// console.log(bigNumber1 + bigNumber2);
//534654651324541325457n

// console.log(bigNumber1 + 25); // ERROR\

//Cannot mix BigInt and other types, use explicit conversions

// Converting data type
// console.log(5 * "10");
// console.log(5 + "10");
// console.log(5 - "10");
// console.log(5 / "10");

// console.log(Number(null));
// console.log(Number(undefined));
// console.log(Number(""));
// console.log(Number(false));
// console.log(Number(true));

// // Number to String Conversion
// let numToStr = 46;
// console.log(typeof numToStr, numToStr); //number 46

// numToStr = String(numToStr);
// console.log(typeof numToStr, numToStr); //string 46

// // String to Boolean Conversion
// let strToBool = "";
// console.log(typeof strToBool, strToBool); //string

// strToBool = Boolean(strToBool);
// console.log(typeof strToBool, strToBool); //boolean false

// strToBool = "false";
// console.log(typeof strToBool, strToBool); //string false

// strToBool = Boolean(strToBool);
// console.log(typeof strToBool, strToBool); //boolean true

// // Null to Number Conversion
// let nullToNum = null;
// console.log(typeof nullToNum, nullToNum); //object null

// nullToNum = Number(nullToNum);
// console.log(typeof nullToNum, nullToNum); //number 0

// // String to Number Conversion
// let strToNum = "";
// console.log(typeof strToNum, strToNum); //string

// strToNum = Number(strToNum);
// console.log(typeof strToNum, strToNum); //number 0

// strToNum = "Ajay";
// console.log(typeof strToNum, strToNum); //string Ajay

// strToNum = Number(strToNum);
// console.log(typeof strToNum, strToNum); //number NaN

// console.log("=======================================");

// Type Coercion
// console.log(564 + "Ajay"); //"564Ajay"
// console.log(543 + "55"); //"54355"
// console.log(50 - "55"); //-5
// console.log(50 / "10"); //5
// console.log("50" / "10"); //5

// Operators in JS

// 1. Arithmetic operatos
// let num1 = 34,
//   num2 = 30;

// console.log(num1 + num2); //64

// let st1 = "Ajay ",
//   st2 = "Yadav";
// console.log(st1 + st2); //Ajay Yadav

// console.log(num1 - st2); //NaN
// console.log(num1 - num2); //4
// console.log(num1 * num2); //1020
// console.log(num1 * st1); //NaN
// console.log(num1 / num2); //1.133
// console.log(num1 / st1); //NaN
// console.log(num1 % num2); //4 - Remainder
// console.log(2 ** 3); //2x2x2 = 8
// console.log(2 ** st1); //NaN

// // 2. Unary Operator
// let num = 6;
// console.log(num++); // 6
// // Now it will be 7
// console.log(num); // 7

// let favNum = 303;
// console.log(++favNum); // 304
// console.log(++favNum); // 305
// console.log(favNum++); // 305
// // Not it will be 306
// console.log(favNum); //306

// // Similarly
// let myNub = 404;
// console.log(--myNub); //403
// console.log(myNub--); //403
// // Now it will be 402
// console.log(myNub); //402

// // Assignment Operators
// let a = 30;
// console.log(a); //30
// a += 5; //(a = a+5)
// console.log(a); //35

// let b = 5;
// console.log(b); //5
// b -= 3; //(b = b-3)
// console.log(b); //2

// let c = 8;
// console.log(c); //8
// c *= 3; // c = c*3
// console.log(c); //24

// let d = 9;
// console.log(d); //9
// d /= 3; // d = d/3
// console.log(d); //3

// let e = 3;
// console.log(e); //3
// e **= 4; // (e = e**4), e to the power 4
// console.log(e); // 3x3x3x3 => 81

// let f = 13;
// console.log(f); //13
// f %= 4; // f = f%4
// console.log(f); // 1 (Remainder)

// // Comparison Operators
// // Loose equality
// console.log(5 == "5"); //true
// console.log(5 == 6); //false

// // Not Equal
// console.log(5 != 6); // true - its not equal
// console.log(5 != 5); // false - its equal

// // Strict equality
// console.log(5 === "5"); //false bcz, both are different data type number and string type
// console.log(5 === 6); //false
// console.log(6 === 6); //true

// console.log(45 !== "45"); //true bcz, both are differnt data type
// console.log(45 !== 45); //false bcz, both are same value with data type.

// console.log(10 > 55); // false
// console.log(10 < 55); // true

// console.log(10 >= 11); // false, 10 is not greater than 11 or(|) equal to 11.
// console.log(9 >= 10); // false, 9 is not greater than 10 or equal to 10.
// console.log(10 >= 10); // true, 10 is not greater than 10 but equal to 10.
// console.log(11 >= 10); // true, 11 is greater than 10 but not equal to 10.
// console.log(12 >= 10); // true, 12 is greater than 10 but not equal to 10.
// console.log(13 >= 10); // true, 13 is greater than 10 but not equal to 10.

// Logical Operators

// console.log(5 > 5 && 64 > 6); //false, 1st condition is false.

// console.log("=========================");
// console.log("A" > "B");
// console.log("A" < "B");
// console.log(!0);
// console.log(!!0);

// console.log(5 + "3" + 8);
//5 + "3" + 8
// '53'+8
// 538
// console.log(-4 + 3 + "8");
// -4 + 3 + "8"
// -1 + '8'
// 7 (Wrong!!!!), but it will concatenate as well, so -18
// console.log(5 + 2 + "3");
// 5 + 2 + "3"
// 7 + '3'
//73
// console.log("4" + 3 + 8);
// "4" + 3 + 8
// '43' + 8
// '438'
// console.log("=========================");
// console.log("4" - 3 + "8");
// "4" - 3 + "8"
//1 + "8"
// 18
// console.log(2 - "6" - 3);
// 2 - "6" - 3
// -4 - 3
// -7
// console.log("1" - "3" + 3);
// "1" - "3" + 3
// -2 + 3
// 1
// console.log(-20 - "3" + "3");
// -20 - "3" + "3"
// -23 + "3"
// -233
// console.log(-"20" - 5 + "3");
// -"20" - 5 + "3"
// -25 + "3"
// -253
// console.log(-"15" + 5 - 3);
// -"15" + 5 - 3
// -155 - 3
// -158 (Wrong!!!)

// CORRECT ONE
// -"15" + 5 - 3
// -10 - 3
// -13

// console.log("4" * 2 - "2");
// "4" * 2 - "2"
// 8 - "2"
// 6
// console.log(("4" * 4) / "2");
// ("4" * 4) / "2"
// 16 / 2
// 8
// console.log(-"4" / 2 - "5");
// -"4" / 2 - "5"
// -2 - 5
// -7
// console.log(-"" + 5);
// -"" + 5
// -5 (Wrong!!!), +5
// console.log(+"" - "");
// +"" - ""
// 0
// console.log(+"" - "" - 1);
// +"" - "" - 1
// 0 - 1
// -1
// console.log(true - 1);
// true - 1
// 1-1 => 0
// console.log(-false + 5);
// -false + 5
// -0 + 5 => 5
// console.log(true + 5 - false);
// true + 5 - false
// 1 + 5 - 0
// 6

// Remainder operator.
// console.log(13 % 3);
// // 1
// console.log("17" % 3);
// // 2
// console.log(5 % -2);
// // -1 (Wrong!!!), 1
// console.log(0 % -2);
// // 0
// console.log(-7 % -3);
// // -1
// console.log(-11 % 5);
// // -1
// console.log(Infinity % 5);
// // NaN
// console.log(25 & Infinity);
// // NaN, (Wrong!!!), 0
// console.log(-Infinity % -5);
// // NaN
// console.log(15 % -0);
// // NaN
// console.log(Infinity % Infinity);
// // 0, (Wrong!!!), NaN
// console.log(Infinity % -Infinity);
// // 0, (Wrong!!!), NaN
// console.log(-Infinity % -Infinity);
// // 0, (Wrong!!!), NaN

// Assignment operators
// const a = 20;
// const d = a + 5;
// const c = d + 2;
// const b = c + 1;

// console.log(a, b, c, d);
// // a = 20
// // b = 28
// // c = 27
// // d = 25

// // Assignment operators
// const w = true;
// const x = w + 5;
// const y = x + 2;
// const z = y + 1;

// console.log(w, x, y, z);
// // a = true
// // b = 9
// // c = 8
// // d = 6

// JavaScript Comparison Operators
// It compares ASCII values
// console.log(45 > 66);
// // false
// console.log("5" < 8);
// // true
// console.log("51" < "8");
// // true
// console.log("ajay" < "Ajay");
// // false
// console.log("aj" < "aj");
// // false
// console.log("aj" === "aj");
// // true
// console.log(19 === "19");
// // false
// console.log(44 == "44");
// // true
// console.log(true > false);
// // true
// console.log(false > 1);
// // false
// console.log(false === 0);
// // false
// console.log(true == 1);
// // true
// console.log(false == 0);
// // true
// console.log(true === 1);
// // false
// console.log(false <= 5);
// // true
// console.log(false >= true);
// // false
// console.log(null === undefined);
// // false
// console.log(null == undefined);
// // true
// console.log(NaN === NaN);
// // true, Wrong => false
// console.log(NaN == NaN);
// // true, Wrong => false
// console.log(NaN === 0);
// // false
// console.log(NaN == 0);
// // false
// console.log(NaN === 1);
// // false
// console.log(NaN !== NaN);
// // true
// console.log("" == 0);
// // true
// console.log("" === 0);
// // false
// console.log("" === "");
// // true
// console.log("18" == 18);
// // true
// console.log("20" === 20);
// // false

// Logical Operators
// console.log(!NaN - undefined);
// // true, Wrong (NaN)
// console.log(!null + NaN);
// // NaN
// console.log(!undefined + 5);
// // 6
// console.log("" + undefined + true);
// // 1, Wrong (undefinedtrue)
// console.log(!20 + true);
// // 1
// console.log(!"" + !0 - 1);
// // 1
// console.log(!false + true - false);
// // 1, Wrong (2) => 1 + 1 - 0
// console.log(!!true + true - false);
// // 1, Wrong (2) => 1 + 1 - 0
// console.log(!!0 + 10);
// // false10, Wrong (10) => 0 + 10

// console.log(false && 10);
// // false
// console.log(true && null);
// // null
// console.log(NaN && 18);
// // NaN
// console.log(10 && undefined);
// // undefined
// console.log(10 && 34 && 45 && 18 && 69);
// // 69
// console.log(10 && null && 45 && NaN && 69);
// // null
// console.log(10 && NaN && null && 66 && 69);
// // NaN

// console.log(6 || 54 || null || 56);
// // 6
// console.log("" || null || undefined);
// // undefined
// console.log(NaN || null || 0 || false);
// // false
// console.log(45 || 55 || 99);
// // 45
// console.log("" || 0 || false || NaN || null || undefined);
// // undefined
// console.log("" || 0 || undefined || NaN || null || false);
// // false

// console.log(null || (45 && undefined) || !0);
// // null || undefined || !0 => true
// console.log(0 || (true && undefined && !""));
// // 0 || undefined && true => undefined
// console.log(16 || (50 && undefined) || !6);
// // 16 || undefined || false => 16
// console.log((!100 && 45) || 0);
// // false || 0 => 0

// Logical OR assignment operator
// let a = null,
//   b = 5;

// // console.log((a &&= b));
// // a ||(a = b)
// // null || (5) => null

// let c = 7,
//   d = undefined;
// console.log((d ||= c));
// // d || (d = c)
// // undefined || 7 => 7

// let e = "JavaScript",
//   f = "";

// console.log((e ||= f));
// // e || e = f => JavaScript

// let g = 5,
//   h = 6;
// console.log((h ||= g));
// // h || h = g
// // 6 || 5 => 6 (Short-circuit)

// Logical AND assignment operator

// let c = 7,
//   d = undefined;
// console.log((d &&= c));
// // d && d = c
// // undefined

// let e = "JavaScript",
//   f = "";
// console.log((e &&= f));
// // e && e = f
// // JavaScript && "" => ""

// let g = 5,
//   h = 6;
// console.log((h &&= g));
// // h && h = g
// // 6 && 5 => 5

// Nullish coalescing assignment operator

let a = null,
  b = 50;
// console.log((a ??= b));

// The nullish coalescing assignment operator only assigns y to x if x is null or undefined: x ??= y;
// x ?? (x = y);

// a ?? (a = b)
// null ?? 56 => null

// Nullish Coalescing Operator

// console.log("Aj" ?? undefined);
// Aj
// console.log("" ?? "Aj");
// ""
// console.log(undefined ?? "Aj");
// undefinde, Wrong - Aj
// console.log(null ?? "Aj");
// null, Wrong - Aj
// console.log(0 ?? undefined);
// 0
// console.log("Aj" ?? null);
// Aj
// console.log((55 && 0) ?? undefined);
// 0
// console.log((undefined || 0) ?? 56);
// undefined, Wrong 56, Wrong 0
// undefined || 0 => 0, last falsy value

// Exponential operators
// console.log(6 ** 2);
// 36
// console.log(4n ** 2n);
// 16n

// NEW ADDIIION
// Converts non-numbers
alert(+true); // 1
alert(+""); // 0
