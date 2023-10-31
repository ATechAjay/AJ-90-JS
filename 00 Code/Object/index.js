// const person = {
//   name: ["Bob", "Smith"],
//   age: 32,
//   bio: function () {
//     console.log(`${name.name[0]} ${name.name[1]} is ${name.age} years old.`);
//   },
//   introduceSelf: function () {
//     console.log(`Hi! I'm ${name.name[0]} .`);
//   },
// };
// person.bio();
// person["bio"]();

// person.introduceSelf();
// person["introduceSelf"]();

// const person = {
//   name: ["Bob", "Smith"],

//   name: { first: "Bob", last: "Smith" },

//   age: 32,
//   bio() {
//     console.log(
//       `${name.name.first} ${name.name.last} is ${name.age} years old.`
//     );
//   },
//   introduceSelf() {
//     console.log(`Hi! I'm ${name.name.first} .`);
//   },
// };
// person.introduceSelf();
// person["introduceSelf"]();

// let test = person["name"]["first"];
// test = person["name"]["last"];
// console.log(test);

const person = { name: { first: "Bob", last: "Smith" }, age: 32 };
// function logProperty(propertyName) {
//   console.log(person[propertyName]);
// }
// logProperty("age");

// person["age"] = 25;
// person.age = 215;

// console.log(person["name"]["first"]);

// person.newMember = "Ajay";

person.fullName = function () {
  return this.name.first + " " + this.name.last;
};
// console.log(person.fullName());

// console.log(person.fullName());

// Setting new members and value

const bool = true;
const gender = "male";

person[gender] = bool;

console.log(person);
