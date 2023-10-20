# Overview

Programming languages are very useful for rapidly completing repetitive tasks, from multiple basic calculations to just about any other situation where you've got a lot of similar items of work to complete.

# Why are loops useful?

Loops are all about doing the same thing over and over again.

Often, the code will be slightly different each time round the loop, or the same code will run but with different variables.

# Looping through a collection

Most of the time when you use a loop, you will have a collection of items and want to do something with every item. One type of collection is the `Array`. But there are other collections in JavaScript as well, including `Set` and `Map`.

# How to exit loop

If we want to exit a loop before all the iterations have been completed, we can use the `break` statement.

# Types of Loop

Here are some useful list of the loops in JavaScript:

- [The for loop](#for-loop)
- [The while loop](#the-while-loop)
- [The do-while loop](#the-dowhile-loop)
- [The for...of loop](#the-forof-loop)
- [The for...in loop](#the-forin-loop)

# For Loop

The for statement creates a loop that consists of` three optional expressions`, enclosed in parentheses and separated by semicolons, followed by a statement to be executed in the loop.

Here is the syntax of the for loop:

```js
for (initialization; condition; afterthought) statement;
```

Syntax explanation:

1. `initialization`:
   An Optional expression or variable declaration evaluated once before the loop begins.

Typically used to `initialize a counter variable`. This expression may optionally declare new variables with `var` or `let` keywords. Variables declared with `var` are not local to the loop, i.e. they are in the same scope the for loop is in. Variables declared with `let` are local to the statement.

The value or result of the expression used in the `initialization` part is not typically used later in the loop.

2. `condition`:
   An Optional expression to be evaluated before each loop iteration. If this expression evaluates to true , statement is executed. If the expression evaluates to false , execution exits the loop and goes to the first statement after the `for` construct.

This conditional test is optional. If omitted, the condition always evaluates to true.

3. `afterthought`:
   An Optional expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of condition. Generally used to update or increment the counter variable.

4. `statement`:
   A statement that is executed as long as the condition evaluates to true. You can use a block statement to execute multiple statements. To execute no statement within the loop, use an `empty statement (;)`.

###### Use of for loop

The following for statement starts by declaring the variable `i` and initializing it to `0`. It checks that `i` is less than `nine`, performs the two succeeding statements, and increments `i` by 1 after each pass through the loop.

```js
for (let i = 0; i < 9; i++) {
  console.log(i); // more statements
}
```

###### Optional expressions of for loop

1. initialization:
   All three expressions in the head of the for loop are optional. For example, it is not required to use the initialization block to initialize variables:

```js
let i = 0;
for (; i < 9; i++) {
  console.log(i); // more statements
}
```

2. condition:
   Like the initialization block, the condition part is also optional. If you are omitting this expression, you must make sure to `break` the loop in the body in order to not create an infinite loop.

```js
for (let i = 0; ; i++) {
  console.log(i);
  if (i > 3) break; // more statements
}
```

We can also omit all three expressions. Again, make sure to use a `break` statement to end the loop and also modify (increase) a variable, so that the condition for the break statement is true at some point.

```js
let i = 0;
for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

> However, in the case where you are not fully using all three expression positions. Especially, if you are not declaring variables with the first expression but mutating something in the upper scope. Consider using a `while loop` instead, which makes the intention clearer.

> ```js
> let i = 0;
> while (i <= 3) {
>   console.log(i);
>   i++;
> }
> ```

# The while loop

The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

Here is the syntax of the while loop:

```js
while (condition) statement;
```

Syntax explanation:

1. `condition`:
   An expression evaluated before each pass through the loop. If this condition evaluates to true , statement is executed.
   When condition evaluates to false , execution continues with the statement after the while loop.

2. `statement`:
   An optional statement that is executed as long as the condition evaluates to true.

To execute multiple statements within the loop, use a block statement `{ ... }` to group those statements.

> Use the break statement to stop a loop before condition evaluates to true.

###### Use of while loop

The following while loop iterates as long as `n` is less than three.

```js
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

Each iteration, the loop increments `n` and adds it to `x`. Therefore, x and n take on the following values:

- After the first iteration: n = 1 and x = 1
- After the second iteration: n = 2 and x = 3
- After the third iteration: n = 3 and x = 6
  After completing the third iteration, the condition `n < 3` is no longer true, so the loop terminates.

# The do...while loop

The `do...while` statement creates a loop that executes a specified statement until the test condition evaluates to false.
The condition is evaluated after executing the statement, resulting in the specified statement executing `at least once`.

Here is the syntax of the do...while loop:

```js
do statement while (condition) ;
```

Syntax explanation:

1. `statement`:
   A statement that is executed `at least once` and is `re-executed each time the condition evaluates to true`.
   To execute multiple statements within the loop, use a block statement `{...}` to group those statements.

2. `condition`:
   An expression evaluated after each pass through the loop. If condition evaluates to true , the statement is re-executed. When condition evaluates to false , control passes to the next statement after the do...while.

> Use the break statement to stop a loop before condition evaluates to false.

###### Use of do...while loop

In the following example, the `do...while` loop iterates `at least once` and reiterates until `i` is no longer less than 5.

```js
let result = "";
let i = 0;
do {
  i += 1;
  result += `${i}`;
} while (i > 0 && i < 5);
// Despite i === 0 this will still loop as it starts off without the test console . log ( result ) ;
```

# The for...of loop

The `for...of` statement executes a loop that operates on a sequence of values sourced from an iterable object.

`Iterable objects` include instances of built-ins such as:

- Array
- String
- Map
- Set
- NodeList (and other DOM collections)
- arguments object, etc.

A `for...of` loop operates on the values sourced from an iterable one by one in sequential order. Each operation of the loop on a value is called an `iteration` and the loop is said to iterate over the `iterable`. Each iteration executes statements that may refer to the current sequence value.

When a `for...of` loop iterates over an iterable, it first calls the iterable's method, which returns an iterator , and then repeatedly calls the resulting iterator's method to produce the sequence of values to be assigned to variable.

A for...of loop exits when the iterator has completed, You may also use control flow statements to change the normal control flow. Such as `break` exits the loop and goes to the first statement after the loop body, while `continue` skips the rest of the statements of the current iteration and proceeds to the next iteration.

If the `for...of` loop exited early the return() method of the iterator is called `to perform any cleanup`.

The variable part of `for...of` accepts anything that can come before the `= operator`. You can use `const` to declare the variable as long as it's not reassigned within the loop body. It can change between iterations, because those are two separate variables. Otherwise, you can use `let` keyword.

> Each iteration creates a new variable. Reassigning the variable inside the loop body does not affect the original value in the iterable. You can use destructuring to assign multiple local variables, or use a property accessor like `for (x.y of iterable)` to assign the value to an object property.

Here is the syntax of the for...of loop:

```js
for (variable of iterable) statement;
```

Syntax explanation:

1. `variable`:
   Receives a value from the sequence on each iteration. May be either a declaration with `const` , `let` , or `var` , or an assignment target like:

   - A previously declared variable: You can use an existing variable to store the value from the sequence.
   - An object property: If you are working with objects, you can assign the value to an existing property of the object.
   - A destructuring assignment pattern: This is a more advanced concept in JavaScript that allows you to destructure values from an iterable (like an array) and assign them to variables or object properties in a specific pattern.

   > Variables declared with `var` are not local to the loop, i.e. they are in the same scope the for...of loop is in.

2. `iterable`:
   An iterable object. The source of the sequence of values on which the loop operates.

3. `statement`:
   A statement to be executed on every iteration. May reference variable . You can use a block statement to execute multiple statements.

###### Example of iterating over an Array

```js
const iterable = [10, 20, 30];
for (const value of iterable) {
  console.log(value);
} // 10 // 20 // 30
```

###### Iterating over a string

Strings are iterated by Unicode code points.

```js
const iterable = "boo";
for (const value of iterable) {
  console.log(value);
} // "b" // "o" // "o"
```

###### Iterating over a Map

```js
const iterable = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
for (const entry of iterable) {
  console.log(entry);
} // ['a', 1]  ['b', 2]  ['c', 3]

for (const [key, value] of iterable) {
  console.log(value);
} // 1  2  3
```

###### Iterating over a Set

```js
const iterable = new Set([1, 1, 2, 2, 3, 3]);
for (const value of iterable) {
  console.log(value);
} // 1 // 2 // 3
```

###### Iterating over the arguments object

You can iterate over the `arguments` object to examine all parameters passed into a function.

```js
function foo() {
  for (const value of arguments) {
    console.log(value);
  }
}
foo(1, 2, 3); // 1 // 2 // 3
```

###### Iterating over a NodeList

The following example adds a `read class` to paragraphs that are direct descendants of the `<article>` element by iterating over a NodeList DOM collection.

```js
const articleParagraphs = document.querySelectorAll("article > p");
for (const paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```

###### Difference between for...of and for...in

Both `for...in` and `for...of` statements iterate over something. The main difference between them is in what they iterate over.

The `for...in` statement iterates over the enumerable string properties of an object, while the for...of statement iterates over values that the iterable object defines to be iterated over.

> `for...in` is used for iterating over object properties, while `for...of` is used for iterating over the values contained in iterable objects like strings, arrays, and other collections.

# The for...in loop

A `for...in` loop is used to iterate over the properties of an object. It is primarily used with objects, and it allows you to loop through the keys (property names) of an object.

```js
for (const key in object) {
  // code to be executed for each key
}
```

Syntax explanation:

- `key`: A variable that represents the current property name (key) during each iteration.
- `object`: The object you want to iterate over.

Here is the example of `for...in` loop:

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

for (var key in person) {
  console.log(key + ": " + person[key]);
}
```

###### A few things to note:

1. The `for...in` loop is most commonly used with `objects`, not arrays. If you want to iterate through the elements of an array, you should use a [for...of](#the-forof-loop) loop.

2. Be careful when using `for...in` loops, as they not only iterate over the object's own properties but also over properties in the prototype chain. You can use the `hasOwnProperty` method to check if a property belongs to the object itself.
