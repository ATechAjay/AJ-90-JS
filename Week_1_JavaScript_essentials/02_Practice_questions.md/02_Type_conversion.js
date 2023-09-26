// Type Conversion
console.log(5 * "10");
console.log(5 + "10");
console.log(5 - "10");
console.log(5 / "10");

console.log(Number(null));
console.log(Number(undefined));
console.log(Number(""));
console.log(Number(false));
console.log(Number(true));

// Number to String Conversion
let numToStr = 46;
console.log(typeof numToStr, numToStr);
numToStr = String(numToStr);
console.log(typeof numToStr, numToStr);

// String to Boolean Conversion
let strToBool = "";
console.log(typeof strToBool, strToBool);
strToBool = Boolean(strToBool);
console.log(typeof strToBool, strToBool);

// String to Boolean Conversion
strToBool = "false";
console.log(typeof strToBool, strToBool);
strToBool = Boolean(strToBool);
console.log(typeof strToBool, strToBool);

// Null to Number Conversion
let nullToNum = null;
console.log(typeof nullToNum, nullToNum);
nullToNum = Number(nullToNum);
console.log(typeof nullToNum, nullToNum);

// String to Number Conversion
let strToNum = "";
console.log(typeof strToNum, strToNum);
strToNum = Number(strToNum);
console.log(typeof strToNum, strToNum);

// String to Number Conversion
strToNum = "Ajay";
console.log(typeof strToNum, strToNum);
strToNum = Number(strToNum);
console.log(typeof strToNum, strToNum);

// Type Coercion
console.log(564 + "Ajay");
console.log(543 + "55");
console.log(50 - "55");
console.log(50 / "10");
console.log("50" / "10");
