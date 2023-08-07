# JavaScript-Basics

- JavaScript is a programming language that adds interactivity to your website.

- JavaScript is a powerful programming language that can add interactivity to a website. It was invented by Brendan Eich.

- You'll be able to create games, animated 2D and 3D graphics, comprehensive database-driven apps, and much more!

- The browser reads code in the order it appears in the file .

- A semicolon at the end of a line indicates where a statement ends. It is only required when you need to separate statements on a single line.

- However, some people believe it's good practice to have semicolons at the end of each statement.

# Data Types

- Programming languages all have built-in data structures, but these often differ from one language to another.

- JavaScript is a dynamic language with dynamic types .

- Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types.

- JavaScript is also a weakly typed language, which means it allows implicit type conversion when an operation involves mismatched types, instead of throwing type errors.

- **Primitive values** - All types except Object define immutable values represented directly at the lowest level of the language. We refer to values of these types as primitive values.

- All primitive types, except null and undefined , have their corresponding object wrapper types, which provide useful methods for working with the primitive values.

- The object wrapper classes contain more information about the methods and properties available for each type, as well as detailed descriptions for the semantics of the primitive types themselves.

- **Null type** - The Null type is inhabited by exactly one value: null.

- **Undefined type** - The Undefined type is inhabited by exactly one value: undefined.

> _Conceptually, undefined indicates the absence of a value , while null indicates the absence of an object._

- A return statement with no value ( return; ) implicitly returns undefined.

- Accessing a non-existent object property ( obj.iDontExist ) returns undefined.

- A variable declaration without initialization ( let x; ) implicitly initializes the variable to undefined.

- **Boolean type** - The Boolean type represents a logical entity and is inhabited by two values: true and false.

- Boolean values are usually used for conditional operations, including ternary operators , if...else , while , etc.

- **Number type** - The Number type is a double-precision 64-bit binary format IEEE 754 value . It is capable of storing positive floating-point numbers between 2^-1074 ( Number.MIN_VALUE ) and 2^1024 ( Number.MAX_VALUE ) as well as negative floating-point numbers between -2^-1074 and -2^1024 , but it can only safely store integers in the range -(2^53 − 1) ( Number.MIN_SAFE_INTEGER ) to 2^53 − 1 ( Number.MAX_SAFE_INTEGER ).

- 0 is represented as both -0 and +0 (where 0 is an alias for +0 ). In practice, there is almost no difference between the different representations; for example, +0 === -0 is true.

- NaN ("Not a Number") is a special kind of number value that's typically encountered when the result of an arithmetic operation cannot be expressed as a number. It is also the only value in JavaScript that is not equal to itself.

- Although a number is conceptually a "mathematical value" and is always implicitly floating-point-encoded.

- **BigInt type** - The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary magnitude. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit ( Number.MAX_SAFE_INTEGER ) for Numbers.

- A BigInt is created by appending **n** to the end of an integer or by calling the BigInt() function.
  BigInt values are neither always more precise nor always less precise than numbers, since BigInts cannot represent fractional numbers, but can represent big integers more accurately.

- A **TypeError** is thrown if BigInt values are mixed with regular numbers in arithmetic expressions, or if they are implicitly converted to each other.

- The **String** type represents textual data and is encoded as a sequence of 16-bit unsigned integer values representing UTF-16 code units . Each element in the string occupies a position in the string.
  The first element is at index 0 , the next at index 1 , and so on.

- The length of a string is the number of UTF-16 code units in it.

- JavaScript strings are immutable. This means that once a string is created, it is not possible to modify it.

- String methods create new strings based on the content of the current string.

- A **Symbol** is a unique and immutable primitive value and may be used as the key of an Object property.

- In some programming languages, Symbols are called "atoms". The purpose of symbols is to create unique property keys that are guaranteed not to clash with keys from other code.
