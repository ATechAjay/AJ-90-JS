# NOTES: JavaScript-JumpStart by Ajay Yadav(ATechAjay)

<details>

<summary>1. Importance of JavaScript?</summary>

- JavaScript is a powerful programming language that can add interactivity to a website. It was invented by Brendan Eich in 1995.

<!-- ---

***
<hr>
<hr/> -->

- In web browsers, JavaScript consists of three main parts:

          1. Core JS: ECMAScript provides the core functionality.

          2. DOM: The Document Object Model (DOM) provides interfaces for interacting with elements on web pages.

          3. BOM: The Browser Object Model (BOM) provides the browser API for interacting with the web browser.

- We use JavaScript with HTML and CSS to enhance a web page’s functionality, such as validating forms , creating interactive features, and displaying animated charts, etc.

- When a web page is loaded, i.e. after HTML and CSS have been downloaded, the JavaScript engine in the web browser executes the JavaScript code.

- The JavaScript code then modifies the HTML and CSS to update the user interface dynamically.

- The JavaScript engine is a program that executes JavaScript code.

</details>

<hr>
<details>

<summary>2. Difference between Client-side and Server-side JavaScript?</summary>

- When JavaScript is used on a web page, it is executed in web browsers. In this case, JavaScript works as a client-side language.

- JavaScript can run on both web browsers and servers. A popular JavaScript server-side environment is Node.js.

- Unlike client-side JavaScript, server-side JavaScript executes on the server that allows us to access databases, file systems, etc.
</details>

<hr>
<details>

<summary>3. What is variable?</summary>

- Variable is the essential building block of JavaScript.

- We need operators (we will discuss it later) to modify our variables.

- Without variable, a piece of code would do the exact same thing every time.

- But with variable, a piece of code do something different every time.

#### Variable declaration

- When we first time create a Variable, we declare it. This process is known as variable declaration.

- To declare a variable, we use the let, var and const keyword followed by the variable name.

```JavaScript
let firstName;

// firstName - Variable, that is not initialized yet. So it's default value will be "undefined"
```

> Variable has a special value "undefined" if you have not assigned a value to it.

- But we can also assign a value to a variable known as initialization of a variable.

- Once we have declared a variable, we can initialize it with a value. To initialize a variable, we specify the variable name, followed by an equals sign ( = ) and a value.

- JavaScript allows us to declare two or more variables using a single statement. To separate two variable declarations, we use a comma ( , ) operator.

```JavaScript
// Variable definition

let firstName = "Ajay";

// firstName - Variable Name/Identifier
// "Ajay" - Value
```

> Now, we can use the above defined Variable in our entire program whenever we want.

- JavaScript is a dynamically typed language. This means that we don’t need to specify the variable’s type in the declaration.

- Since JavaScript is a dynamically typed language, we can re-assign a value of a varible of different data type. Although, it is not recommended.

- Once we initialize a variable, we can change its value by re-assigning(=) a different value.

```JavaScript
// Variable definition
let firstName = "Ajay";

// firstName - Variable Name/Identifier
// "Ajay" - Value

// re-assign
firstName = "Alex";

// firstName - Variable Name/Identifier
// "Alex" - New value
```

> A variable has no any data type but a value has.

#### Undefined VS undeclared variables

- An undefined variable is a variable that has been declared but has not been initialized with a value.

- An undeclared variable is a variable that has not been declared or defined yet.
  If we want to accesss undeclared variable then JavaScript engine will throw an error.

#### let, var, & const

- A variable definition consists of three parts:

             1. Varible definition keyword (let, var, & const)

             2. A variable name (eg: firstName)

             3. A value (eg: "Ajay")

- let, var and, const are used for variables that might have new value assigned somewhere in the program.

- The var keyword is almost the same as let. It also declares a variable, but in a slightly different way. It is recommended to always use the let keyword.

- Variables declared using const are called _constants_. They cannot be reassigned. An attempt to do so would cause an error.

- These 3 keywords introduce a new concept known as _scope_, which will be discussed later in the week.

> 'const' declarations must be initialized.

Notes:👇

| Keyword | Scope  |
| ------- | ------ |
| var     | Global |
| let     | Block  |
| const   | Block  |

   </details>

   <hr>

  <details>
<summary>4. What is data type?</summary>

- A value in JavaScript is always of a certain type.

- We can put any type in a variable.

- JavaScript is a dynamic language with dynamic types.

- Variables in JavaScript are not directly associated with any particular data type. In other words, a variable can hold a value of different types.

- To get the current type of the value that the variable stores, you use the **typeof** operator.

#### JavaScript has the 7 primitive data types:

<hr>
<details>
<summary>1. Null</summary>

- It forms a separate type of its own which contains only the null value.

- It's a special value that represents “nothing”, “empty” or “value unknown”.

- The typeof null returns object is a known bug in JavaScript. A proposal to fix this was proposed but rejected. The reason was the that fix would break a lot of existing sites.

```JavaScript
let firstName = null;
```

</details>
<hr>

<details>
<summary>2. Undefined</summary>

- If a variable is declared, but not assigned, then its value is undefined.

- The meaning of undefined is “value is not assigned” yet.

```JavaScript
let firstName;  //undefined
let firstName = undefined; // Not recommended
```

</details>
<hr>

<details>
<summary>3. Boolean</summary>

- The boolean type has only two values: true and false.

- This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

```JavaScript
let isUserLoggedIn = true;  // true
let isUserLoggedOut = false;  //false
```

</details>
<hr>

<details>
<summary>4. Number</summary>

- The number type represents both integer and floating point numbers.

- Besides regular numbers, there are special numeric values which also belong to this data type: +Infinity , -Infinity and NaN.

- Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.

- NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation.

```JavaScript
let num = 985656;  // 985656
let floatingNum = 9856.5445;  // 9856.5445
```

</details>
<hr>

<details>
<summary>5. String</summary>

- The string type In JavaScript, is a sequence of zero or more characters.

- A string in JavaScript must be surrounded by quotes.

- In JavaScript, there are 3 types of quotes.

  1. Double quotes: "Hello"
  2. Single quotes: 'Hello'
  3. Backticks: `Hello`

```JavaScript
let firstName = 'Ajay';  // Ajay
let lastName = "Yadav";  // Yadav
let fullName = `${firstName} ${lastName}`; // Ajay Yadav
```

- Double and single quotes are simple quotes. There’s practically no difference between them in JavaScript.

- Backticks are extended functionality quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}.

- JavaScript strings are immutable. This means that it cannot be modified once created. However, you can create a new string from an existing string using methods.

</details>
<hr>

<details>
<summary>6. Symbol - ES2015</summary>

- It is a unique and immutable primitive value and may be used as the key of an Object property.

- The Symbol function creates a new unique value every time you call it.

- To create a symbol, you call the Symbol function

```JavaScript
let s1 = Symbol();
```

</details>
<hr>

<details>
<summary>7. BigInt - ES2020</summary>

- The bigint type represents the whole numbers that are larger than 2^53 – 1.

- A BigInt value is created by appending **n** to the end of an integer.

```JavaScript
let bigint = 5345345463246243563154324214234235n;
```

</details>
<hr>

</details>

<hr/>

<details>
<summary>5. Type conversion in JavaScript</summary>

### Type Conversion

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

</details>
<hr/>
<details>
<summary>5. Operator and its type?</summary>

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

</details>
