# JavaScript Operators

## JavaScript Arithmetic Operators

An arithmetic operator accepts numerical values as operands and returns a single numerical value. The numerical values can be literals or variables.

### Addition operator(+)

If either value is a string , the addition operator uses the following rules:

- If both values are strings, it concatenates the second string to the first one.
- If one value is a string, it implicitly converts the numeric value into a string and concatenates two strings.

## JavaScript Remainder Operators

- JavaScript uses the % to represent the remainder operator. The remainder operator returns the remainder left over when one value is divided by another value.

`remainder = dividend % divisor`

## JavaScript Assignment Operators

An assignment operator ( = ) assigns a value to a variable.

```js
let a = b;
```

In this syntax, JavaScript evaluates the expression "b" first and assigns the result to the variable "a".

## JavaScript Unary Operators

Unary operators work on one value.

Unary plus (+) The unary plus operator is a simple plus sign ( + ). If you place the unary plus before a numeric value, it does nothing.

When you apply the unary plus operator to a non-numeric value, it performs a number conversion using the **Number()** function.

The unary plus operator to convert the string '10' to the number 10 :

```js
let s = "10";
console.log(+s); // 10
```

Unary minus (-) The unary minus operator is a single minus sign ( - ). If you apply the unary minus operator to a number, it negates the number.

```js
let x = 10;
let y = -x;
console.log(y); // -10
```

If you apply the unary minus operator to a non-numeric value, it converts the value into a number using the same rules as the unary plus operator and then negates the value.

## JavaScript Comparison Operators

To compare two values, you use a comparison operator.

`
< less than

> greater than
> <= less than or equal to
> = greater than or equal to
> == equal to
> != not equal to
> `

A comparison operator returns a Boolean value indicating that the comparison is true or not.

A comparison operator takes two values. If the types of the values are not comparable, the comparison operator converts them into values of comparable types according to specific rules.

Compare strings If the operands are strings, JavaScript compares the character codes numerically one by one in the string.

JavaScript compares the character codes in the strings numerically, you may receive an unexpected result.

```js
let f1 = "apple",
  f2 = "Banana";
let result = f2 < f1;
console.log(result); // true
```

In this example, f2 is less than f1 because the letter B has the character code 66 while the letter a has the character code 97 .

## JavaScript Logical Operators

The logical operators are important in JavaScript because they allow you to compare variables and do something based on the result of that comparison.

JavaScript provides three logical operators:

1. ! (Logical NOT)
2. || (Logical OR)
3. && (Logical AND)

## The Logical NOT operator (!)

JavaScript uses an exclamation point ! to represent the logical NOT operator.

The ! operator can be applied to a single value of any type, not just a Boolean value.

When you apply the ! operator to a boolean value, the ! returns true if the value is false and vice versa.

## Double-negation ( !! )

Sometimes, you may see the double negation ( !! ) in the code. The !! uses the logical NOT operator ( ! ) twice to convert a value to its real boolean value.

## The Logical AND operator ( && )

JavaScript uses the double ampersand ( && ) to represent the logical AND operator.

The result of the && operator is true only if both values are true , otherwise, it is false.

## Short-circuit evaluation

The && operator is short-circuited. It means that the && operator evaluates the second value only if the first one doesn’t suffice to determine the value of an expression.

### The chain of && operators

`value1 && value2 && value3`

The && operator carries the following:

1. Evaluates values from left to right.

2. For each value, converts it to a boolean.

3. If the result is false , stops and returns the original value.

4. If all values are truthy values, returns the last value.

In other words, The && operator returns the first falsy value or the last value if none were found.

`If a value can be converted to true , it is so-called a truthy value. If a value can be converted to false , it is a so-called falsy value.`

## The Logical OR operator ( || )

JavaScript uses the double pipe || to represent the logical OR operator. You can apply the || operator to two values of any type.

The || operator returns false if both values evaluate to false. In case either value is true , the || operator returns true.

### The || operator is also short-circuited

Similar to the && operator, the || operator is short-circuited. It means that if the first value evaluates to true , the && operator doesn’t evaluate the second one.

### The chain of || operators

The || operator does the following:

1. Evaluates values from left to right.
2. For each value, converts it to a boolean value.
3. If the result of the conversion is true , stops and returns the value.
4. If all values have been evaluated to false , returns the last value.

In other words, the chain of the || operators returns the first truthy value or the last one if no truthy value was found.

## Logical operator precedence'

When you mix logical operators in an expression, the JavaScript engine evaluates the operators based on a specified order. And this order is called the operator precedence.

In other words, the operator precedence is the order of evaluation of logical operators in an expression.

The precedence of the logical operator is in the following order from the highest to the lowest:

1. Logical NOT (!)
2. Logical AND (&&)
3. Logical OR (||)

# JavaScript Logical Assignment Operators

ES2021 introduces three logical assignment operators including:

1. Logical OR assignment operator ( ||= )
2. Logical AND assignment operator ( &&= )
3. Nullish coalescing assignment operator ( ??= )

## The Logical OR assignment operator

The logical OR assignment operator ( ||= ) accepts two operands and assigns the right operand to the left operand if the left operand is falsy:

```js
x ||= y;
```

In this syntax, the ||= operator only assigns y to x if x is falsy.

```js
x || (x = y);
```

Like the logical OR operator, the logical OR assignment also short-circuits. It means that the logical OR assignment operator only performs an assignment when the x is falsy.

## The Logical AND assignment operator

The logical AND assignment operator only assigns y to x if x is truthy: x &&= y;
The logical AND assignment operator also short-circuits.

## The nullish coalescing assignment operator

The nullish coalescing assignment operator only assigns y to x if x is null or undefined:

```js
x ??= y;
```

It’s equivalent to the following statement that uses the nullish coalescing operator:

```js
x ?? (x = y);
```

## Summary

The logical OR assignment ( x ||= y ) operator only assigns y to x if x is falsy.

The logical AND assignment ( x &&= y ) operator only assigns y to x if x is truthy.

The nullish coalescing assignment ( x ??= y ) operator only assigns y to x if x is nullish.

# Nullish Coalescing Operator

ES2020 introduced the nullish coalescing operator denoted by the double question marks ( ?? ).

The nullish coalescing operator is a logical operator that accepts two values:

```js
value1 ?? value2;
```

The nullish coalescing operator returns the second value ( value2 ) if the first value ( value1 ) is null or undefined .

A nullish value is a value that is either null or undefined .

## Why nullish coalescing operator

When assigning a default value to a variable , you often use the logical OR operator ( || ).

```js
let count;
let result = count || 1;
console.log(result); // 1
```

In this example, the _count_ variable is undefined , it is coerced to false . Therefore, the result is 1.

However, the logical OR operator ( || ) sometimes is confusing if you consider 0 or empty strings '' as a valid value like this:

```js
let count = 0;
let result = count || 1;
```

The result is 1, not 0, which you may not expect.

The nullish coalescing operator helps you to avoid this pitfall. It only returns the second value when the first one is either null or undefined .

Similar to the logical OR and AND operators , the nullish coalescing operator does not evaluate the second value if the first operand is neither undefined nor null .

## Chaining with the AND or OR operator

A SyntaxError will occur if you combine the logical AND or OR operator directly with the nullish coalescing operator.

```js
const result = null || undefined ?? 'OK' ; // SyntaxError Code
```

However, you can avoid this error by wrapping the expression on the left of the ?? operator in parentheses to explicitly specify the operator precedences:

```js
const result = (null || undefined) ?? "OK";
console.log(result); // 'OK'
```

## Summary

The nullish coalescing operator ( ?? ) is a logical operator that accepts two values and returns the second value if the first one is null or undefined.

The nullish coalescing operator is short-circuited and cannot directly combine with the logical AND or OR operator.

# JavaScript exponentiation operator

To raise a number to the power of an exponent, you often use the static method Math.pow()
Math .pow(base, exponent)

**ECMAScript 2016** provided an alternative way to get a base to the exponent power by using the exponentiation operator ( \*\* )

`x**n`

The operator \*\* raises the x to the power of an exponent n .

`Note that some languages use the caret symbol ^ for exponentiation. However, JavaScript already uses that symbol for the bitwise logical XOR operator.`

```js
let result = 2 ** 2;
console.log(result); // 4
```

The Math.pow() accepts a value and converts it to a value of the number type for calculation.

Similarly, the operator ** accept values of the number type. In addition, the operator ** accepts a value of the bigint type.

```js let result = 2n ** 3n ;
console.log(result); // 8n
```

## Summary

The exponentiation operator \*\* raises a number to the power of an exponent.

The exponentiation operator \*\* accepts values of the type number or bigint .
