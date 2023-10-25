# Overview of the return keyword

The return statement ends function execution and specifies a value to be returned to the function caller.

Here is the syntax of the return keyword:

```js
return;
return expression;
```

Syntax explanation:

`expression`:
It is an optional, The expression whose value is to be returned. But if omitted, `undefined` is returned.

The return statement can only be used within function bodies. When a return statement is used in a function body, the execution of the function is stopped.

The return statement has different effects when placed in different functions:

- In a plain function, the call to that function evaluates to the return value.
- In an async function, the produced promise is resolved with the returned value.
- In a generator function, the produced generator object's next() method returns `{ done: true, value: returnedValue }`.

If a return statement is executed within a try block, its finally block, if present, is first executed, before the value is actually returned.

# Automatic semicolon insertion

The syntax forbids line terminators between the return keyword and the expression to be returned.

```js
return a + b;
```

The code above is transformed by automatic semicolon insertion (ASI) into:

```js
return;
a + b;
```

This makes the function return `undefined` and the `a + b` expression is never evaluated. This may generate a warning in the console.

To avoid this problem (to prevent ASI), you could use parentheses:

```js
return a + b;
```
