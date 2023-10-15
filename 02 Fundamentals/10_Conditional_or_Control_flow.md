# Control flow

The control flow is the order in which the computer executes statements in a script. Code is run in order `from the first line in the file to the last line`, unless the computer runs across the structures that change the control flow, such as conditionals and loops.

For example, imagine a script used to validate user data from a webpage form. The script submits validated data, but if the user, say, leaves a required field empty, the script prompts them to fill it in.

To do this, the script uses a `conditional structure` or `if...else` statement , so that different code executes depending on whether the form is complete or not.

```js
if (isEmpty(field)) {
  promptUser();
} else {
  submitForm();
}
```

Control flow means that when you read a script, you must not only read from start to finish but also look at program structure and how it affects order of execution.

# Conditional

In any programming language, the code needs to make decisions and carry out actions accordingly depending on different inputs.

As a human beings or even other animals make decisions all the time that affect their lives, from small to large. Such as:

- Should I eat one cookie or two?
- Should I go to market or not?
- What should I do after 12th?, like that...

Conditional statements allow us to represent such decision making in JavaScript, Such as if...else statements.

# if...else statement

The `if...else` statement executes a statement if a specified condition is `truthy` . If the condition is `falsy` , another statement in the optional `else` clause will be executed.

Here is the syntax of the `if...else` statement.

```js
if (condition) {
  //  statement1
}

// With an else clause
if (condition) {
  //   statement1;
} else {
  //   statement2;
}
```

Syntax explanation:

- `condition`: An expression that is considered to be either truthy or falsy.

- `statement1:` Statement that is executed if condition is truthy. Can be any statement, including further nested if statements. To execute multiple statements, use a block statement `{ *** }` to group those statements. To execute no statements, use an empty statement.

- `statement2`: Statement that is executed if condition is falsy and the else clause exists. Can be any statement, including block statements and further nested if statements. Multiple `if...else` statements can be nested to create an `else if` clause. Note that there is no `elseif` (in one word) keyword in JavaScript.

```js
if (condition1) statement1;
else if (condition2) statement2;
else if (condition3) statement3; // … else statementN
```

# Ternary operator

The conditional or ternary (`Ternary means 3`) operator is the only JavaScript operator that takes three operands:

1. A condition followed by a question mark (`?`)
2. An expression to execute if the condition is truthy followed by a colon (`:`)
3. The expression to execute if the condition is falsy.

This operator is frequently used as an alternative to an `if...else` statement. Here is the syntax of the ternary operator:

```js
condition ? exprIfTrue : exprIfFalse;
```

Explanation of the above syntax:

1. `condition`: An expression whose value is used as a condition.
2. `exprIfTrue`: An expression which is executed if the condition evaluates to a truthy value.
3. `exprIfFalse`: An expression which is executed if the condition is falsy.

> Besides `false` value, possible falsy expressions are: `null` , `NaN` , `0` , the empty string `""`, and `undefined`. If condition is any of these, the result of the conditional expression will be the result of executing the expression `exprIfFalse`.

```js
const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"
```

# Handling null values with ternary operator

One common usage is to handle a value that may be null:

```js
const greeting = (person) => {
  const name = person ? person.name : "stranger";
  return `Howdy, ${name}`;
};
console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"
```

# Conditional chains with ternary operator

The ternary operator is `right-associative`, which means it can be `chained` in the following way, similar to an `if … else if … else if … else` chain.

```js
condition1 ? value1 : condition2 ? value2 : condition3 ? value3 : value4;
```

This is equivalent to the following `if...else` chain.

```js
function example() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}
```
