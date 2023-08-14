# Variable

- A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

- To create a variable in JavaScript, use the var, let, and const keywords.

### var instead of let

- The var keyword is almost the same as let . It also declares a variable, but in a slightly different, “old-school” way.

- We can also change it as many times as we want:
  When the value is changed, the old data is removed from the variable.

- Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error.

- When a programmer is sure that a variable will never change, they can declare it with const to guarantee and clearly communicate that fact to everyone.

# Data Types

- All other types are called “primitive” because their values can contain only a single thing.(be it a string or a number or whatever).

- But objects are used to store collections of data and more complex entities.

- Data types A value in JavaScript is always of a certain type.

- There are 7 basic data types in JavaScript.

- We can put any type in a variable.

- JavaScript, is called “dynamically typed”, meaning that there exist data types, but variables are not bound to any of them.

### Number

- The number type represents both integer and floating point numbers.

- Besides regular numbers, there are special numeric values which also belong to this data type: +Infinity , -Infinity and NaN.

- Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.

- NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation.

- Any further mathematical operation on NaN returns NaN.

### BigInt

- BigInt type was recently added to the language to represent integers of arbitrary length.

- A BigInt value is created by appending n to the end of an integer.

### String

- A string in JavaScript must be surrounded by quotes.

- In JavaScript, there are 3 types of quotes.

1. Double quotes: "Hello"
2. Single quotes: 'Hello'
3. Backticks: `Hello`

- Double and single quotes are simple quotes. There’s practically no difference between them in JavaScript.

- Backticks are extended functionality quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}.

### Boolean

- The boolean type has only two values: true and false.

- This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

### null

- The special null value does not belong to any of the types.

- It forms a separate type of its own which contains only the null value.

- It's a special value which represents “nothing”, “empty” or “value unknown”.

### undefined

- The meaning of undefined is “value is not assigned” yet.

- If a variable is declared, but not assigned, then its value is undefined.
