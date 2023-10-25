# Function return values

Return values are one of the essential concept about functions. Some functions don't return a significant value, but others do. It's important to understand what their values are, how to use them in your code, and how to make functions return useful values.

# What are return values

Return values are just what they sound like, the values that a function returns when it completes.

```js
const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made
```

In the above code snippet, the `replace()` function is invoked on the `myText` string, and is passed two parameters:

1. The substring to find ('cold')
2. The string to replace it with ('warm')

When the function completes or finishes running, it returns a value, which is a new string with the replacement made. In the code above, the result of this return value is saved in the variable `newString`.

Some functions don't return any value. In these cases, our reference pages list the return value as `void` or `undefined`.

For example, in the [displayMessage()](02_How_to_build_function.md) function we built in the previous section, no specific value is returned when the function is invoked. It just makes a box appear somewhere on the screen — that's it!

Generally, a return value is used where the function is an intermediate step in a calculation of some kind. You want to get to a final result, which involves some values that need to be calculated by a function.

After the function calculates the value, it can return the result so it can be stored in a variable; and you can use this variable in the next stage of the calculation.

# Using return values in your own functions

To return a value from a custom function, you need to use the `return` keyword.

```js
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
```

Inside each loop iteration, three calls are made to the `random()` function, to generate a random value for the current circle's x-coordinate , y-coordinate , and radius , respectively.

The `random()` function takes one parameter — a whole number — and returns a whole random number between 0 and that number. It looks like this:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}

function random(number) {
  const result = Math.floor(Math.random() * number);
  return result;
}
```

But the first version is quicker to write, and more compact. We are returning the result of the calculation `Math.floor(Math.random() * number)` each time the function is called. This return value appears at the point the function was called, and the code continues.

So when you execute the following:

```js
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
```

If the three random() calls return the values 500 , 200 , and 35 , respectively, the line would actually be run as if it were this:

```js
ctx.arc(500, 200, 35, 0, 2 * Math.PI);
```

The function calls on the line are run first, and their return values are substituted for the function calls, before the line itself is then executed.
