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

  -TC39 came up with ECMA-262, a standard for defining a new scripting language named ECMAScript.

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

## Undefined vs. undeclared variables

- An undefined variable is a variable that has been declared but has not been initialized with a value.

- An undeclared variable is a variable that has not been declared. If we want to accesss undeclared variable then JavaScript engine will throgh an error.

- Constants A constant holds a value that doesn’t change. To declare a constant, you use the const keyword. When defining a constant, you need to initialize it with a value.

- Once defining a constant, you cannot change its value.
