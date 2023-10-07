# What is data type?

A value in JavaScript is always of a certain type. We can put any type in a variable.

JavaScript is a dynamic language with dynamic types.

> Variables in JavaScript are not directly associated with any particular data type. In other words, a variable can hold a value of different types.

To get the current type of the value that the variable stores, you use the `typeof` operator.

# JavaScript has the 7 primitive data types:

1. [Null](#null)
2. [Undefined](#undefined)
3. [Boolean](#boolean)
4. [Number](#number)
5. [String](#string)
6. [Symbol - ES2015](#symbol---es2015)
7. [BigInt - ES2020](#bigint---es2020)

---

# Null

It forms a separate type of its own which contains only the `null` value.

It's a special value that represents `nothing`, `empty`, or `unknown value`.

> The `typeof "null"` returns `object` is a known `bug` in JavaScript. A proposal to fix this was proposed but rejected. The reason was the that `fix would break a lot of existing sites`.

```JavaScript
let firstName = null;
```

# Undefined

If a variable is declared, but not assigned, then its value will be `undefined`.

The meaning of undefined is `value is not assigned` yet.

```JavaScript
let firstName;  //undefined
let firstName = undefined; // Not recommended
```

# Boolean

The boolean type has only two values -- `true` and `false`.

This type is commonly used to store yes/no values: `true means yes or correct`, and `false means no or incorrect`.

```JavaScript
let isUserLoggedIn = true;  // true
let isUserLoggedOut = false;  //false
```

# Number

The number type represents both `integer` and `floating point` numbers.

Besides regular numbers, there are special numeric values which also belong to this data type: `+Infinity` , `-Infinity` and `NaN`.

`Infinity` represents the mathematical Infinity `∞`. It is a special value that’s greater than any number.

While a `NaN` represents a computational error. It is a result of `an incorrect or an undefined mathematical operation`.

```JavaScript
let num = 985656;  // 985656
let floatingNum = 9856.5445;  // 9856.5445
```

# String

The string type In JavaScript, is a sequence of `zero or more characters`. A string in JavaScript must be surrounded by `quotes`.

In JavaScript, there are 3 types of quotes:

- Double quotes: "Hello"
- Single quotes: 'Hello'
- Backticks: \`Hello`

```JavaScript
let firstName = 'Ajay';  // Ajay
let lastName = "Yadav";  // Yadav
let fullName = `${firstName} ${lastName}`; // Ajay Yadav
```

Double and single quotes are simple quotes. There’s practically no difference between them in JavaScript.

`Backticks` are extended functionality quotes. They allow us to embed variables and expressions into a string by wrapping them inside `${…}`, known as `Template Literal` in JavaScript.

JavaScript strings are `immutable`. This means that it `cannot be modified once created`. However, you can create a new string from an existing string using methods.

# Symbol - ES2015

It is a unique and immutable primitive value and may be used as the `key of an Object property`.

The Symbol function creates a new `unique value every time` you call it.

To create a symbol, you call the `Symbol()` function

```JavaScript
let s1 = Symbol();
```

# BigInt - ES2020

The bigint type represents the whole numbers that are `larger` than 2<sup>53</sup> – 1.

A BigInt value is created by appending `n` to the end of an integer.

```JavaScript
let bigint = 5345345463246243563154324214234235n;
```
