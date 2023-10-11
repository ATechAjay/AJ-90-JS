# Why we need to understand operator precedence and associativity?

Understanding operator precedence and associativity is important when writing complex expressions in JavaScript to ensure that your code behaves as expected.

Operator precedence and associativity are rules that determine the order in which operators are evaluated in expressions.

# Operator precedence

Operator precedence defines the priority of operators in an expression. It determines which operator gets evaluated first when you have multiple operators in a single expression.

> Operators with higher precedence are evaluated before operators with lower precedence.

JavaScript has a predefined set of rules for operator precedence. Operators like multiplication, division, addition, etc. have specific precedence levels.

We can also use `parentheses ()` to explicitly specify the order of evaluation, overriding the default precedence.

For example:

```js
let expression = 3 + 8 * 5; //43
```

In this expression, `*` has higher precedence than addition (+), so the multiplication will be performed first, and then the addition. So, the result of this expression is 43, not 55. This is because `8 * 5` is evaluated before, like `3 + (8 * 5)`.

# Operator Associativity

Operator associativity defines the order in which operators of the same precedence are evaluated when they appear in a sequence without parentheses.

In JavaScript, most binary operators are `left-associative`, which means they are evaluated from `left to right`.

In other words, if you have multiple operators with the same precedence in an expression, they will be evaluated from `left to right`.

For example:

```js
let expression = 3 + 8 - 5; //43
```

In this expression, Both addition `+` and subtraction `-` have the same precedence. Because they are left-associative, this expression will be evaluated as `(3 + 8) - 5`, resulting in 6.

However, not all operators in JavaScript are left-associative. For examle the exponentiation operator `**` and assignment operator `=` are right-associative, which means they are evaluated from `right to left`.

```js
let expression = 2 ** (2 ** 3);

let a = (b = c = d = e = f = 99);
```

# Examples of precedence

Let's suppose we have an expression, like:

```
a OP1 b OP2 c
```

The combination above has two possible interpretations:

- `(a OP1 b) OP2 c`
- `a OP1 (b OP2 c)`

If `OP1` and `OP2` have different precedence levels, The operator with the higher precedence goes first and associativity does not matter.

```js
console.log(3 + 8 * 5); //43
console.log(3 + 8 * 5); // If I wrap it inside, "3 + (8 * 5)" - Does not change anything.
console.log((3 + 8) * 5); // 55 - The parentheses change the order
```

# Examples of Associativity

Within operators of the same precedence, the JavaScript groups them by associativity. Let's suppose we have an expression:

```
a OP1 b OP2 c
```

- `Left-associativity or left-to-right` - It is interpreted as `(a OP1 b) OP2 c`, or the above expression will be solved from left to right direction. Like:

```
6 + 5 - 5 + 5
```

- Right-associativity or right-to-left - It is interpreted as a `OP1 (b OP2 c)`, or the above expression will be solved from right to left direction. Like:

```
a = b = 5; // Same as writing a = (b = 5);
```

> Operators are first grouped by precedence, and then, for adjacent operators that have the same precedence, by associativity.

```
OP1 a OP2 b
```

Where `OP1` is a prefix unary operator and `OP2` is a binary operator. If `OP1` has higher precedence than OP2 , then it would be grouped as `(OP1 a) OP2 b`; Otherwise, it would be `OP1 (a OP2 b)`.

```js
const a = 5;
const b = 3;
typeof a + b; // Equivalent to (typeof a) + b; result is "number8"
```

For postfix unary operators `++ and --`, the same rules apply. Luckily, both operators have higher precedence than any binary operator, so the grouping is always what you would expect. Moreover, because ++ evaluates to a value , not a reference , you can't chain multiple increments together either.

```js
let a = 1 ;
a++++ ; // SyntaxError: Invalid left-hand side in postfix operation.
```

> Operator precedence will be handled recursively.

Try to solve this problem:

```
1 + 2 ** 3 * 4 / 5
```
