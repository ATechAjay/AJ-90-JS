# NOTES: JavaScript-JumpStart by Ajay Yadav(ATechAjay)

<details>

<summary>1. Importance of JavaScript?</summary>

- JavaScript is a powerful programming language that can add interactivity to a website. It was invented by Brendan Eich in 1995.

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

- When we first time create a variale, we declare it. This process is known as variable declaration.

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

let firstName = "Ajay;

// firstName - Variable Name/Identifier
// "Ajay" - Value
```

> Now, we can use the above defined varible in our entire program whenever we want.

- JavaScript is a dynamically typed language. This means that we don’t need to specify the variable’s type in the declaration.

- Since JavaScript is a dynamically typed language, we can re-assign a value of a varible of different data type. Although, it is not recommended.

- Once we initialize a variable, we can change its value by re-assigning(=) a different value.

```JavaScript
// Variable definition
let firstName = "Ajay;

// firstName - Variable Name/Identifier
// "Ajay" - Value

// re-assign
firstName = "Alex;

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

JavaScript has the 7 primitive data types:

<hr>
<details>
<summary>1. Null</summary>

- It forms a separate type of its own which contains only the null value.

- It's a special value which represents “nothing”, “empty” or “value unknown”.

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
