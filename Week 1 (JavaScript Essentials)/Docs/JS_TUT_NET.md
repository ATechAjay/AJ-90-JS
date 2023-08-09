# What is JavaScript

- JavaScript is a programming language initially designed to interact with elements of web pages. In web browsers, JavaScript consists of three main parts:

1. ECMAScript provides the core functionality.

2. The Document Object Model (DOM) provides interfaces for interacting with elements on web pages.

3. The Browser Object Model (BOM) provides the browser API for interacting with the web browser.

- JavaScript allows you to add interactivity to a web page.

- Typically, you use JavaScript with HTML and CSS to enhance a web page’s functionality, such as validating forms , creating interactive maps, and displaying animated charts.

- When a web page is loaded, i.e., after HTML and CSS have been downloaded, the JavaScript engine in the web browser executes the JavaScript code. The JavaScript code then modifies the HTML and CSS to update the user interface dynamically.

- The JavaScript engine is a program that executes JavaScript code. In the beginning, JavaScript engines were implemented as interpreters.

- However, modern JavaScript engines are typically implemented as just-in-time compilers that compile JavaScript code to bytecode for improved performance.

# Client-side vs. Server-side JavaScript

- When JavaScript is used on a web page, it is executed in web browsers. In this case, JavaScript works as a client-side language.

- JavaScript can run on both web browsers and servers. A popular JavaScript server-side environment is Node.js . Unlike client-side JavaScript, server-side JavaScript executes on the server that allows you to access databases, file systems, etc.

- JavaScript History In 1995, JavaScript was created by a Netscape developer named _Brendan Eich_ . First, its name was _Mocha_. And then, its name was changed to LiveScript.

- Netscape decided to change LiveScript to JavaScript to leverage Java’s fame, which was popular.

- In 1997, JavaScript 1.1 was submitted to the European Computer Manufacturers Association (ECMA) as a proposal. Technical Committee #39 (TC39) was assigned to standardize the language to make it a general-purpose, cross-platform, and vendor-neutral scripting language.

- TC39 came up with ECMA-262, a standard for defining a new scripting language named ECMAScript.

# JavaScript Syntax

- **Whitespace** - Whitespace refers to characters that provide the space between other characters.

- JavaScript engine ignores whitespace. However, you can use whitespace to format the code to make it easy to read and maintain.

- JavaScript bundlers remove all whitespace from JavaScript files and put them into a single file for deployment. By doing this, JavaScript bundlers make the JavaScript code lighter and faster to load in the web browsers.

- **Statements** - A statement is a code that declares a variable or instructs the JavaScript engine to do a task. A simple statement is terminated by a semicolon ( ; ).

- **Blocks** A block is a sequence of zero or more simple statements. A block is delimited by a pair of curly brackets {}

- **Identifiers** - An identifier is a name you choose for variables, parameters, functions , classes, etc.

- An identifier name starts with a letter ( a-z , or A-Z ), an underscore( _ ), or a dollar sign ( $ ) and is followed by a sequence of characters including ( a-z , A-Z ), numbers ( 0-9 ), underscores ( _ ), and dollar signs ( $ ).

- **Comments** - Comments allow you to add notes or hints to JavaScript code. When executing the code, the JavaScript engine ignores the comments. JavaScript supports single-line and block comments.

- Single-line comments A single-line comment starts with two forward-slashes characters ( // ).

- Block comments A delimited comment begins with a forward slash and asterisk /(_) and ends with the opposite (_)/

- **Expressions** - An expression is a piece of code that evaluates to a value.

- **Keywords & Reserved words** - JavaScript defines a list of reserved keywords that have specific uses. Therefore, you cannot use the reserved keywords as identifiers or property names by rules.

# JavaScript Variables

- A variable is a label that references a value like a number or string. Before using a variable, you need to declare it.

- Declare a variable - To declare a variable, you use the let, var and const keyword followed by the variable name.

- Variable has a special value undefined if you have not assigned a value to it.

- JavaScript is a dynamically typed language. This means that you don’t need to specify the variable’s type in the declaration like other static typed languages.

- Initialize a variable - Once you have declared a variable, you can initialize it with a value. To initialize a variable, you specify the variable name, followed by an equals sign ( = ) and a value.

- JavaScript allows you to declare two or more variables using a single statement. To separate two variable declarations, you use a comma ( , ).

- Since JavaScript is a dynamically typed language, you can re-assign a value of a different type to a variable. Although, it is not recommended.

- Change a variable - Once you initialize a variable, you can change its value by assigning(=) a different value.

### Undefined vs. undeclared variables

- An undefined variable is a variable that has been declared but has not been initialized with a value.

- An undeclared variable is a variable that has not been declared. If we want to accesss undeclared variable then JavaScript engine will throgh an error.

- Constants A constant holds a value that doesn’t change. To declare a constant, you use the const keyword. When defining a constant, you need to initialize it with a value.

- Once defining a constant, you cannot change its value.

# JavaScript Data Types

- JavaScript has the 7 primitive data types:

1. null
2. undefined
3. boolean
4. number
5. string
6. symbol – available from ES2015
7. bigint – available from ES2020

- JavaScript is a dynamically typed language. It means that a variable doesn’t associate with a type. In other words, a variable can hold a value of different types.

- To get the current type of the value that the variable stores, you use the **typeof** operator:

### The undefined type

- The undefined type is a primitive type that has only one value undefined. By default, when a variable is declared but not initialized, it is assigned the value of undefined.

- The **typeof** operator also returns undefined when you call it on a variable that hasn’t been declared.

### The null type

- The null type is the second primitive data type that also has only one value null.

- The typeof null returns object is a known bug in JavaScript. A proposal to fix this was proposed but rejected. The reason was the that fix would break a lot of existing sites.

### The number type

- JavaScript uses the number type to represent both integer and floating-point numbers.

- JavaScript automatically converts a floating-point number into an integer number if the number appears to be a whole number.

- The reason is that Javascript always wants to use less memory since a floating-point value uses twice as much memory as an integer value.

### NaN

- NaN stands for Not a Number. It is a special numeric value that indicates an invalid number.

- The NaN has two special characteristics:

1. Any operation with NaN returns NaN.
2. The NaN does not equal any value, including itself.

### string type

- The string type In JavaScript, a string is a sequence of zero or more characters. A string literal begins and ends with either a single quote( ' ) or a double quote ( " ).

- A string that begins with a double quote must end with a double quote. Likewise, a string that begins with a single quote must also end with a single quote.

- JavaScript strings are immutable. This means that it cannot be modified once created. However, you can create a new string from an existing string.

### boolean type

- The boolean type has two literal values: _true_ and _false_ in lowercase.

- JavaScript allows values of other types to be converted into boolean values of true or false.

- To convert a value of another data type into a boolean value, you use the _Boolean()_ function.

### The symbol type

- JavaScript added a primitive type in ES6: the symbol. Different from other primitive types, the symbol type does not have a literal form.

- To create a symbol, you call the Symbol function

`let s1 = Symbol();`

- The Symbol function creates a new unique value every time you call it.

### The bigint type

- The bigint type represents the whole numbers that are larger than 2^53 – 1.

- To form a bigint literal number, you append the letter n at the end of the number:
