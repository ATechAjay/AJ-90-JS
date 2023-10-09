# Type Conversion

Type conversion means `converting a data type into another data type`. But there are two kinds of type conversion in JavaScript.

1. [Explicit Type Conversion](#explicit-type-conversion)
2. [Implicit Type Conversion](#implicit-type-conversion)

---

# Explicit Type Conversion

In this type conversion, the type of data will be changed `manually` by a developer which is known as explicit type conversion.

There are 3 types of conversion methods in JS:

1. `String()`
2. `Number()`
3. `Boolean()`

```JavaScript
// Number to String Conversion
let numToStr = 46;
console.log(typeof numToStr, numToStr); //number 46

numToStr = String(numToStr);
console.log(typeof numToStr, numToStr); //string 46

// String to Boolean Conversion
let strToBool = "";
console.log(typeof strToBool, strToBool); //string

strToBool = Boolean(strToBool);
console.log(typeof strToBool, strToBool); //boolean false

strToBool = "false";
console.log(typeof strToBool, strToBool); //string false

strToBool = Boolean(strToBool);
console.log(typeof strToBool, strToBool); //boolean true

// Null to Number Conversion
let nullToNum = null;
console.log(typeof nullToNum, nullToNum); //object null

nullToNum = Number(nullToNum);
console.log(typeof nullToNum, nullToNum); //number 0

// String to Number Conversion
let strToNum = "";
console.log(typeof strToNum, strToNum); //string

strToNum = Number(strToNum);
console.log(typeof strToNum, strToNum); //number 0

strToNum = "Ajay";
console.log(typeof strToNum, strToNum); //string Ajay

strToNum = Number(strToNum);
console.log(typeof strToNum, strToNum); //number NaN

```

# Implicit Type Conversion

In this type conversion, the JavaScript engine `automatically` converts data from one type to another type which is known as implicit type conversion.

> Implicit type conversion is also known as `type coercion `in JavaScript.

```JavaScript
// Type Coercion
console.log(564 + "Ajay"); //"564Ajay"
console.log(543 + "55"); //"54355"
console.log(50 - "55"); //-5
console.log(50 / "10"); //5
console.log("50" / "10"); //5
```
