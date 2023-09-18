# Importance of JavaScript?

- JavaScript is a powerful programming language that can add interactivity to a website. It was invented by Brendan Eich in 1995.

- In web browsers, JavaScript consists of three main parts:

          1. Core JS: ECMAScript provides the core functionality.

          2. DOM: The Document Object Model (DOM) provides interfaces for interacting with elements on web pages.

          3. BOM: The Browser Object Model (BOM) provides the browser API for interacting with the web browser.

- We use JavaScript with HTML and CSS to enhance a web page’s functionality, such as validating forms , creating interactive features, and displaying animated charts, etc.

- When a web page is loaded, i.e. after HTML and CSS have been downloaded, the JavaScript engine in the web browser executes the JavaScript code.

- The JavaScript code then modifies the HTML and CSS to update the user interface dynamically.

- The JavaScript engine is a program that executes JavaScript code.

# Difference between Client-side and Server-side JavaScript?

- When JavaScript is used on a web page, it is executed in web browsers. In this case, JavaScript works as a client-side language.

- JavaScript can run on both web browsers and servers. A popular JavaScript server-side environment is Node.js.

- Unlike client-side JavaScript, server-side JavaScript executes on the server that allows us to access databases, file systems, etc.

# What is variable?

- Variable is the essential building block of JavaScript.

- We need operators (we will discuss it later) to modify our variables.

- Without variable, a piece of code would do the exact same thing every time.

- But with variable, a piece of code do something different every time.

# Variable declaration

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

# Undefined VS undeclared variables

- An undefined variable is a variable that has been declared but has not been initialized with a value.

- An undeclared variable is a variable that has not been declared or defined yet.
  If we want to accesss undeclared variable then JavaScript engine will throw an error.

# let, var, & const

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
