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

```
let firstName;

// firstName - Variable, that is not initialized yet. So it's default value will be "undefined"
```

> Variable has a special value "undefined" if you have not assigned a value to it.

- But we can also assign a value to a variable known as initialization of a variable.

- Once we have declared a variable, we can initialize it with a value. To initialize a variable, we specify the variable name, followed by an equals sign ( = ) and a value.

- JavaScript allows us to declare two or more variables using a single statement. To separate two variable declarations, we use a comma ( , ) operator.

```
// Variable definition

let firstName = "Ajay;

// firstName - Variable Name/Identifier
// "Ajay" - Value
```

> Now, we can use the above defined varible in our entire program whenever we want.

- JavaScript is a dynamically typed language. This means that we don’t need to specify the variable’s type in the declaration.

- Since JavaScript is a dynamically typed language, we can re-assign a value of a varible of different data type. Although, it is not recommended.

- Once we initialize a variable, we can change its value by re-assigning(=) a different value.

```
// Variable definition
let firstName = "Ajay;

// firstName - Variable Name/Identifier
// "Ajay" - Value

// re-assign
firstName = "Alex;

// firstName - Variable Name/Identifier
// "Alex" - New value
```

#### Undefined VS undeclared variables

- An undefined variable is a variable that has been declared but has not been initialized with a value.

- An undeclared variable is a variable that has not been declared or defined yet.
  If we want to accesss undeclared variable then JavaScript engine will throw an error.

#### let, var, & const

- A variable definition consists of three parts:

             1. Varible definition keyword (let, var, & const)

             2. A variable name (eg: firstName)

             3. A value (eg: "Ajay")

   </details>

   <hr>
  <details>

<summary>4. What is data type?</summary>
Data types goes here...
</details>
