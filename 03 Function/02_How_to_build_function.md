# Build your own function

The custom function we are going to build will be called `displayMessage()`. It will display a custom message box on a web page and will act as a customized replacement for a browser's built-in `alert()` function.

```js
alert("This is a message");
```

In the above code snippet, The alert function takes a single argument, the string that is displayed in the alert box.

# The basic function

```js
function displayMessage() {
  // Lines of code.
}
```

We start off with the keyword `function` , which means we are `defining a function`. This is followed by the `name` we want to give to our function, a set of `parentheses`, and a set of `curly braces`.

Any parameters we want to give to our function go inside the parentheses, and the code that runs when we call the function goes inside the curly braces.

> For function naming conventions, you should follow the same rules as variable naming conventions . This is fine, as you can tell them apart — function names appear with parentheses after them, and variables don't.

```js
const body = document.body;
const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);
const msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);
const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);
closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel));
```

The first line selects the `<body>` element by using the DOM API to get the body property of the global document object.

The next section uses a DOM API function called `document.createElement()` to create a `<div>` element and store a reference to it in a constant called `panel`.

We then use yet another DOM API function called `Element.setAttribute()` to set a `class attribute` on our `panel` with a value of `msgBox`.

Finally, we call a DOM function called `Node.appendChild()` on the body constant we stored earlier, which nests one element inside the other as a child of it. We specify the panel `<div>` as the child we want to append inside the `<body>` element.

We use their `Node.textContent` property — which represents the text content of an element — to insert a message inside the paragraph, and an `"x"` inside the button.

Finally, we call `addEventListener()` to add a function that will be called when the user clicks the `close` button. The code will delete the whole panel from the page — to close the message box.

Basically, this whole block of code is generating a block of HTML that looks like so, and inserting it into the page:

```js
<div class=" msgBox ">
  <p> This is a message box </p> <button> x </button>
```

# Calling the function

You've now got your function definition written into your `<script>` element just fine, but it will do nothing as it stands.

Try including the following line below your function to call it:

```js
displayMessage();
```

This line invokes the function, making it run immediately. When you save your code and reload it in the browser, you'll see the little message box appear immediately, only once. We are only calling it once, after all.

Now open your browser developer tools on the example page, go to the JavaScript console and type the line again there, you'll see it appear again!

```js
displayMessage();
```

We now have a reusable function that we can call any time we like. Next, we'll select the button and store a reference to it in a constant. Add the following line to your code, above the function definition:

```js
const btn = document.querySelector("button");
```

Finally, add the following line below the previous one:

```js
btn.addEventListener("click", displayMessage);
```

In a similar way to our `closeBtn's` click event handler, here we are calling some code in response to a button being clicked. But in this case, instead of calling an anonymous function containing some code, we are calling our `displayMessage()` function by name. Now you should see the message box appear when you click the button.

> You might be wondering why we haven't included the parentheses after the function name. This is because we don't want to call the function immediately. But only after the button has been clicked.

If you try changing the line to:

```js
btn.addEventListener("click", displayMessage());
```

And saving and reloading, you'll see that the message box appears without the button being clicked! The parentheses in this context are sometimes called the `function invocation operator`. You only use them when you want to run the function immediately in the current scope.

In the same respect, the code inside the anonymous function is not run immediately, as it is inside the function scope.

# Improving the function with parameters

As it stands, the function is still not very useful — we don't want to just show the same default message every time. Let's improve our function by adding some parameters, allowing us to call it with some different options.

First of all, update the first line of the function:

```js
function displayMessage ( ) {
```

to this:

```js
function displayMessage ( msgText , msgType ) {
```

Now when we call the function, we can provide two variable values inside the parentheses to specify the message to display in the message box, and the type of message it is.

To make use of the first parameter, update the following line inside your function:

```js
msg.textContent = "This is a message box";
msg.textContent = msgText;
```

Last but not least, you now need to update your function call to include some updated message text.

Change the following line:

```js
btn.addEventListener("click", displayMessage);
btn.addEventListener("click", () =>
  displayMessage("Woo, this is a different message!")
);
```

> If we want to specify parameters inside parentheses for the function we are calling, then we can't call it directly — we need to put it inside an anonymous function so that it isn't in the immediate scope and therefore isn't called immediately.

Now it will not be called until the button is clicked. Reload and try the code again and you'll see that it still works just fine, except that now you can also vary the message inside the parameter to get different messages displayed in the box!
