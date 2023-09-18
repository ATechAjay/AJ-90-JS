# Type Conversion

Type conversion means converting a data type into another data type. But there are two kinds of type conversion in JavaScript.

1. Explicit Type Conversion
2. Implicit Type Conversion

---

1. Explicit Type Conversion

In this type conversion, the type of data will be changed manually by a developer which is known as explicit type conversion.

There are 3 types of conversion methods in JS:

1. String()
2. Number()
3. Boolean()

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

4. Implicit Type Conversion

In this type conversion, the JavaScript engine automatically converts data from one type to another type which is known as implicit type conversion.

> Implicit type conversion is also known as "type coercion" in JavaScript.

```JavaScript
// Type Coercion
console.log(564 + "Ajay"); //"564Ajay"
console.log(543 + "55"); //"54355"
console.log(50 - "55"); //-5
console.log(50 / "10"); //5
console.log("50" / "10"); //5
```

5. Operator and its type?

- Operator is the next building blocks after variable. These come handly whenever we want to work with the variables, like modified them, perform some calculation, or compare with them. They are called operators because we use then to operate on our variable.

There are several operators in JavaScript some of them are given below:

1. Arithmetic Operator

- This operators can be used to perform operations with numbers.

> The addition operator is also used for cancatenating the strings.

> x + y, Where x and y are operands and + sign is an operator.

```JavaScript
// 1. Arithmetic operatos
let num1 = 34,
  num2 = 30;

console.log(num1 + num2); //64

let st1 = "Ajay ",
  st2 = "Yadav";
console.log(st1 + st2); //Ajay Yadav

console.log(num1 - st2); //NaN
console.log(num1 - num2); //4
console.log(num1 * num2); //1020
console.log(num1 * st1); //NaN
console.log(num1 / num2); //1.133
console.log(num1 / st1); //NaN
console.log(num1 % num2); //4 - Remainder
console.log(2 ** 3); //2x2x2 = 8
console.log(2 ** st1); //NaN
```

2. Unary Operators

- Unary operators need only one operand.
  > x++ is an unary operator that is same as x = x + 1. And x-- is same as x = x - 1.

```javascript
// 2. Unary Operator
let num = 6;
console.log(num++); // 6
// Now it will be 7
console.log(num); // 7

let favNum = 303;
console.log(++favNum); // 304
console.log(++favNum); // 305
console.log(favNum++); // 305
// Not it will be 306
console.log(favNum); //306

// Similarly
let myNub = 404;
console.log(--myNub); //403
console.log(myNub--); //403
// Now it will be 402
console.log(myNub); //402
```

- As you know there are two types of unary operator, they are **Postfix** (eg: a++) and **Prefix** (eg: ++a).

- **Postfix:** The postfix unary operator gets executed after sending the variable, and then after that, the postfix operation gets executed.

- **Prefix:** The prefix unary operator gets executed before sendig the variable.

3. Assigment Operators

- The assignment operator denotes by (=) signs. It is used when we want to assign values to variable.

- Every arithmetic operator has corresponding assignment operator.

```js
// Assignment Operators
let a = 30;
console.log(a); //30
a += 5; //(a = a+5)
console.log(a); //35

let b = 5;
console.log(b); //5
b -= 3; //(b = b-3)
console.log(b); //2

let c = 8;
console.log(c); //8
c *= 3; // c = c*3
console.log(c); //24

let d = 9;
console.log(d); //9
d /= 3; // d = d/3
console.log(d); //3

let e = 3;
console.log(e); //3
e **= 4; // (e = e**4), e to the power 4
console.log(e); // 3x3x3x3 => 81

let f = 13;
console.log(f); //13
f %= 4; // f = f%4
console.log(f); // 1 (Remainder)
```

4. Comparison Operators

- This operator compares the values and always returns a Boolean value, true or false.

```
There are types of Equality operators in JS:
1. Loose Equality (==)
2. Strict Equality (===)

1. The double equals operator (==), meaning it will only check for equal value and not for data type. We can also call it loose equality.

2. The triple equals operator (==), meaning it will only check for equal value and for data type as well. We can also call it strict equality.
```

```js
// Comparison Operators
// Loose equality
console.log(5 == "5"); //true
console.log(5 == 6); //false

// Not Equal
console.log(5 != 6); // true - its not equal
console.log(5 != 5); // false - its equal

// Strict equality
console.log(5 === "5"); //false bcz, both are different data type number and string type
console.log(5 === 6); //false
console.log(6 === 6); //true

console.log(45 !== "45"); //true bcz, both are differnt data type
console.log(45 !== 45); //false bcz, both are same value with data type.

console.log(10 > 55); // false
console.log(10 < 55); // true

console.log(10 >= 11); // false, 10 is not greater than 11 or(|) equal to 11.
console.log(9 >= 10); // false, 9 is not greater than 10 or equal to 10.
console.log(10 >= 10); // true, 10 is not greater than 10 but equal to 10.
console.log(11 >= 10); // true, 11 is greater than 10 but not equal to 10.
console.log(12 >= 10); // true, 12 is greater than 10 but not equal to 10.
console.log(13 >= 10); // true, 13 is greater than 10 but not equal to 10.
```

5. Logical Operators

- When we want to check two conditions at one go, or negate the condition.

- There are 3 types of logical operators:

  1. AND (&&)
  2. OR (||)
  3. NOT (!)

- **AND:** It only returns true if both expressions are true; otherwise, false returns as an output.

- **OR:** It will return true if either one or both of the expressions are true. But it will return false if both of the expressions are false.

- **NOT:** It will give a Boolean value to the opposite. Like true to false or false to true.

```
NOTE:

AND: Ajay AND Rohan -> Talking about both, not ignoring any of them. That means both should be true.

Example: Ajay AND Rohan are going to the market.
👇
(That means both are going to market, right?)

OR: Ajay OR Rohan: talking about either both or one of them, like Ajay and Rohan, or Ajay, or Rohan. Then it will return true.

Example: Ajay OR Rohan are going to the market.
👇
(That means both OR either one of them are going to market, right?)
```
