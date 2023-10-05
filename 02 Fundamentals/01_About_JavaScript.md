# What is JavaScript?

A high-level definition, JavaScript is a scripting or programming language that allows you to implement complex features on web pages.

Every time a web page does more than just sit there and display static information for you to look at like:

- displaying timely content updates
- Interactive maps
- Animated 2D/3D graphics
- Scrolling video

Then you can bet that JavaScript is probably involved.

It is the third layer of the layer of standard web technologies, two of two of them are HTML and CSS.

JavaScript is a scripting language that enables you to create:

- Dynamically updating content
- Control multimedia
- Animate images, and pretty much everything else.

```html
<button type="button ">Player 1: Chris</button>
```

```js
const button = document.querySelector("button");
button.addEventListener("click", updateName);
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}
```

# What can JavaScript really do

The core client-side JavaScript language consists of some common programming features:

- Store useful values inside variables.
- Operations on pieces of text known as `strings`.
- Running code in response to certain events occurring on a web page. And much more!

# Superpowers of JavaScript - API

The functionality built on top of the client-side JavaScript language, so-called `Application Programming Interfaces (APIs)`. It provide you with extra superpowers to use in your JavaScript code.

APIs are ready-made sets of code building blocks that allow a developer to implement programs that would otherwise be hard or impossible to implement.

# APIs fall into two categories

1. `Browser APIs` are built into your web browser, and are able to expose data from the surrounding computer environment, or do useful complex things. Sucha as:

- The `DOM (Document Object Model) API` allows you to manipulate HTML and CSS

  - creating, removing and changing HTML
  - Dynamically applying new styles to your page, etc.

- The `Geolocation API` retrieves geographical information. This is how Google Maps is able to find your location and plot it on a map.
- The `Canvas` and `WebGL` APIs allow you to create animated 2D and 3D graphics.

- `Audio` and `Video` APIs like HTMLMediaElement and WebRTC allow you to do really interesting things with multimedia, such as play audio and video right in a web page, or grab video from your web camera and display it on someone else's computer.

2. `Third party APIs` are not built into the browser by default, and you generally have to grab their code and information from somewhere on the Web. For example:

- The `Twitter API` allows you to do things like displaying your latest tweets on your website.

- The `Google Maps API` and `OpenStreetMap API` allows you to embed custom maps into your website. There's a lot more available, too!

# What is JavaScript doing on your page

When you load a web page in your browser, you are running your code, the HTML, CSS, and JavaScript inside an execution environment or the browser tab.

This is like a factory that takes in raw materials (or the code) and outputs a product (or the web page).

A very common use of JavaScript is to dynamically modify HTML and CSS to update a user interface, via the Document Object Model API.

The code in your web documents is generally loaded and executed in the order it appears on the page.

Errors may occur if JavaScript is loaded and run before the HTML and CSS that it is intended to modify.

# What is Browser security

Each browser tab has its own separate bucket for running code
these buckets are called `execution environments`.

This means that in most cases the code in each tab is run completely separately, and the code in one tab cannot directly affect the code in another tab, or on another website.

This is a good security measure, if this were not the case, then pirates could start writing code to steal information from other websites.

> There are ways to send code and data between different websites or tabs in a safe manner.

# JavaScript running order

When the browser encounters a block of JavaScript, it generally runs it in order, from `top to bottom`. This means that you need to be careful what order you put things in.

For example:

```js
const button = document.querySelector("button");
button.addEventListener("click", updateName);
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}
```

Here we are selecting a button (line 1), then attaching an event listener to it (line 2) so that when the button is clicked, the `updateName()` code block (lines 3–6) is run.

If you swapped the order of the first two lines of code, it would no longer work. Instead, you'd (You would) get an error returned in the browser developer console.

The error will be `TypeError: button is undefined`. This means that the button object does not exist yet, so we can't add an event listener to it.

# Interpreted versus compiled code

In interpreted languages, the code is run from `top to bottom` and the result of running the code is immediately returned.

You don't have to transform the code into a different form before the browser runs it. The code is received in its programmer-friendly text form and processed directly from that.

Compiled languages on the other hand are transformed (compiled) into another form `before they are run by the computer`.

For example, `C/C++ are compiled into machine code` that is then run by the computer. The program is executed from a `binary format`, which was generated from the original program source code.

But JavaScript is a lightweight interpreted programming language. The web browser receives the JavaScript code in its original text form and runs the script from that.

From a technical standpoint, JavaScript interpreters actually use a technique called `just-in-time compiling` to improve performance.

The JavaScript source code gets compiled into a faster, binary format while the script is being used, so that it can be run as quickly as possible.

> However, JavaScript is still considered an interpreted language, since the compilation is handled at run time, rather than ahead of time.

# Server-side versus client-side code

Client-side code is code that is run on the user's computer. When a web page is viewed, the page's client-side code is downloaded, then run and displayed by the browser.

Server-side code on the other hand is run on the server, then its results are downloaded and displayed in the browser.

# Dynamic versus static code

The word dynamic is used to describe both client-side JavaScript, and server-side languages.

It refers to the ability to update the display of a web page/app to show different things in different circumstances, generating new content as required.

Server-side code dynamically generates new content on the server. e.g. pulling data from a database.

Whereas client-side JavaScript dynamically generates new content inside the browser on the client. e.g. creating a new HTML table, filling it with data requested from the server, then displaying the table in a web page shown to the user.

A web page with no dynamically updating content is referred to as static. It just shows the same content all the time.

# How do you add JavaScript to your page

JavaScript is applied to your HTML page in a similar manner to CSS. Whereas CSS uses `<link>` elements to apply external stylesheets and `<style>` elements to apply internal stylesheets to HTML.

JavaScript only needs one friend in the world of HTML.That is `<script>` element.

1. Internal JavaScript

```js
<script> // JavaScript goes here </script>
```

2. External JavaScript: What if we wanted to put our JavaScript in an external file. Here is how we can add it.

```js
<script src=" script.js " defer>
  {" "}
</script>
```

3. Inline JavaScript handlers

Sometimes you'll come across bits of actual JavaScript code living inside HTML.

```js
function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}
```

```html
<button onclick="createParagraph ()">Click me!</button>
```

Please don't do this, however. It is bad practice to pollute your HTML with JavaScript, and it is inefficient. You would have to include the `onclick="createParagraph()"` attribute on every button you want the JavaScript to apply to.

# Using addEventListener instead

Instead of including JavaScript in your HTML, use a pure JavaScript construct. The querySelectorAll() function allows you to select all the buttons on a page. You can then loop through the buttons, assigning a handler for each using `addEventListener()`.

```js
const buttons = document.querySelectorAll("button");
for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

This might be a bit longer than the onclick attribute, but it will work for all buttons. No matter how many are on the page, nor how many are added or removed. The JavaScript does not need to be changed.

# Script loading strategies

There are a number of issues involved with getting scripts to load at the right time. Nothing is as simple as it seems!

A common problem is that all the HTML on a page is loaded in the order in which it appears.

If you are using JavaScript to manipulate elements on the page, your code won't work if the JavaScript is loaded and parsed before the HTML you are trying to do something to.

```js
document.addEventListener("DOMContentLoaded", () => {
  // ...
});
```

This is an event listener, which listens for the browser's `DOMContentLoaded` event, which denotes that the HTML body is completely loaded and parsed.

The JavaScript inside this block will not run until after that event is fired, therefore the error is avoided.

We use a more modern JavaScript feature to solve the problem, the `defer` attribute, which tells the browser to continue downloading the HTML content once the `<script>` tag element has been reached.

```js
<script src=" script.js " defer>
  //...
</script>
```

In this case both the script and the HTML will load simultaneously and the code will work.

> In the external case, we did not need to use the `DOMContentLoaded` event because the `defer` attribute solved the problem for us. We didn't use the `defer` for the internal JavaScript because `defer` only works for external scripts.

<!-- //////////////////////////////////////////// -->
<!-- //////////////////////////////////////////// -->
<!-- //////////////////////////////////////////// -->
<!-- //////////////////////////////////////////// -->
<!-- //////////////////////////////////////////// -->
<!-- //////////////////////////////////////////// -->
<!-- //////////////////////////////////////////// -->
<!-- //////////////////////////////////////////// -->
<!-- //////////////////////////////////////////// -->
<!-- //////////////////////////////////////////// -->

# Old-fashioned to add JavaScript to the HTML

An old-fashioned solution to this problem used to be to put your script element right at the bottom of the body, just before the `</body>` tag. So that it would load after all the HTML has been parsed.

The problem with this solution is that loading/parsing of the script is completely blocked until the HTML DOM has been loaded.

On larger sites with lots of JavaScript, this can cause a major performance issue, slowing down your site.

# async and defer

There are actually two modern features we can use to bypass the problem of the blocking script:

1. async
2. defer

# With async attribute

Scripts loaded using the `async` attribute will download the script without blocking the page while the script is being fetched.

However, once the download is complete, the script will execute, which blocks the page from rendering.

This means that the rest of the content on the web page is prevented from being processed and displayed to the user until the script finishes executing.

You get no guarantee that scripts will run in any specific order. It is best to use `async` when the scripts in the page run independently from each other and depend on no other script on the page.

For example:

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src=" js/script3.js "></script>
```

You can't rely on the order the scripts will load in `jquery.js` may load before or after `script2.js` and `script3.js` and if this is the case, any functions in those scripts depending on jquery will produce an error because jquery will not be defined at the time the script runs.

async should be used when you have a bunch of background scripts to load in, and you just want to get them in place as soon as possible.

For example, maybe you have some game data files to load, which will be needed when the game actually begins, but for now you just want to get on with showing the game intro, titles, and lobby, without them being blocked by script loading.

# With defer attribute

Scripts loaded with the `defer` attribute will load in the order they appear on the page.

They won't run until the page content has all loaded, which is useful if your scripts depend on the DOM being in place. For example they modify one or more elements on the page.

Scripts loaded using the `defer` attribute will run in the order they appear in the page and execute them as soon as the script and content are downloaded.

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

In this example, we can be sure that `jquery.js` will load before `script2.js` and `script3.js` and that `script2.js` will load before `script3.js`.

They won't run until the page content has all loaded, which is useful if your scripts depend on the DOM being in place.

# Summary of async and defer

- async and defer both instruct the browser to download the script in a separate thread, while the rest of the page (the DOM, etc.) is downloading, so the page loading is not blocked during the fetch process.

- Scripts with an `async` attribute will execute as soon as the download is complete. This blocks the page and does not guarantee any specific execution order.

- Scripts with a `defer` attribute will load in the order they are in and will only execute once everything has finished loading.

- If your scripts should be run immediately and they don't have any dependencies, then use `async`.

- If your scripts need to wait for parsing and depend on other scripts and/or the DOM being in place, load them using `defer` and put their corresponding `<script>` elements in the order you want the browser to execute them.
