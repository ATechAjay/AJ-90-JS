# Overview of Truthy and Falsy values

In JavaScript, truthy and falsy values are used to determine the truth or falsity of a given expression or value.

It's most useful for making logical decisions and working with conditional statements, such as the `if...else` statement.

# Falsy Values

A value is considered falsy if it coerces (is implicitly turned into false) to be false when used in a Boolean context.

In JavaScript, there are exactly six types of false values:

1. Zero `0`
2. An empty string `''`
3. Undefined Value `undefined`
4. Null value `null`
5. Not a number `NaN`
6. Logical value `false`

```js
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("Ajay")); // true
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean({})); // true - An object
console.log(Boolean([])); // true - An array
```

# Truthy Values

A value is considered truthy if it coerces to `true` when used in a Boolean context, such as the `if...else` statement.

Unlike the falsy values, JavaScript has no specific list of the truthy values.

> Everything is true except the [falsy values](#falsy-values).

```js
if ("Ajay") {
  console.log("Yes, name is defined."); // Executed
} else {
  console.log("Name is not defined.");
}
```

```js
if ("") {
  console.log("Yes, name is defined.");
} else {
  console.log("Name is not defined."); // Executed
}
```
