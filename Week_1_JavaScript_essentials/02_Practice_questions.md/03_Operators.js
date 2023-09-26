// Arithmetic operator
let num1 = 34,
  num2 = 30;
console.log(num1 + num2);

let st1 = "Ajay ",
  st2 = "Yadav";
console.log(st1 + st2);

console.log(num1 - st2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 * st1);
console.log(num1 / num2);
console.log(num1 / st1);
console.log(num1 % num2);
console.log(2 ** 3);
console.log(4n ** 2n);
console.log(2 ** st1);

// Unary Operator
let num = 6;
console.log(num++);
console.log(num);

let favNum = 303;
console.log(++favNum);
console.log(++favNum);
console.log(favNum++);
console.log(favNum);

let myNub = 404;
console.log(--myNub);
console.log(myNub--);
console.log(myNub);

// Assignment Operator
let a = 30;
console.log(a);

a += 5;
console.log(a);

let b = 5;
console.log(b);

b -= 3;
console.log(b);

let c = 8;
console.log(c);

c *= 3;
console.log(c);

let d = 9;
console.log(d);

d /= 3;
console.log(d);

let e = 3;
console.log(e);

e **= 4;
console.log(e);

let f = 13;
console.log(f);

f %= 4;
console.log(f);

const m = 20;
const n = a + 5;
const o = d + 2;
const p = c + 1;
console.log(m, n, o, p);

const w = true;
const x = w + 5;
const y = x + 2;
const z = y + 1;
console.log(w, x, y, z);

// Comparison Operator
// Loose equality
console.log(5 == "5");
console.log(5 == 6);

// Not Equal
console.log(5 != 6);
console.log(5 != 5);

// Strict equality
console.log(5 === "5");
console.log(5 === 6);
console.log(6 === 6);
console.log(45 !== "45");
console.log(45 !== 45);
console.log(10 > 55);
console.log(10 < 55);
console.log(10 >= 11);
console.log(9 >= 10);
console.log(10 >= 10);
console.log(11 >= 10);
console.log(12 >= 10);
console.log(13 >= 10);
console.log(45 > 66);
console.log("5" < 8);
console.log("51" < "8");
console.log("ajay" < "Ajay");
console.log("aj" < "aj");
console.log("aj" === "aj");
console.log(19 === "19");
console.log(44 == "44");
console.log(true > false);
console.log(false > 1);
console.log(false === 0);
console.log(true == 1);
console.log(false == 0);
console.log(true === 1);
console.log(false <= 5);
console.log(false >= true);
console.log(null === undefined);
console.log(null == undefined);
console.log(NaN === NaN);
console.log(NaN == NaN);
console.log(NaN === 0);
console.log(NaN == 0);
console.log(NaN === 1);
console.log(NaN !== NaN);
console.log("" == 0);
console.log("" === 0);
console.log("" === "");
console.log("18" == 18);
console.log("20" === 20);

// Logical Operator
console.log(5 > 5 && 64 > 6);
console.log("A" > "B");
console.log("A" < "B");
console.log(!0);
console.log(!!0);
console.log(5 + "3" + 8);
console.log(-4 + 3 + "8");
console.log(5 + 2 + "3");
console.log("4" + 3 + 8);
console.log("4" - 3 + "8");
console.log(2 - "6" - 3);
console.log("1" - "3" + 3);
console.log(-20 - "3" + "3");
console.log(-"20" - 5 + "3");
console.log(-"15" + 5 - 3);
console.log("4" * 2 - "2");
console.log(("4" * 4) / "2");
console.log(-"4" / 2 - "5");
console.log(-"" + 5);
console.log(+"" - "");
console.log(+"" - "" - 1);
console.log(true - 1);
console.log(-false + 5);
console.log(true + 5 - false);
console.log(!NaN - undefined);
console.log(!null + NaN);
console.log(!undefined + 5);
console.log("" + undefined + true);
console.log(!20 + true);
console.log(!"" + !0 - 1);
console.log(!false + true - false);
console.log(!!true + true - false);
console.log(!!0 + 10);
console.log(false && 10);
console.log(true && null);
console.log(NaN && 18);
console.log(10 && undefined);
console.log(10 && 34 && 45 && 18 && 69);
console.log(10 && null && 45 && NaN && 69);
console.log(10 && NaN && null && 66 && 69);
console.log(6 || 54 || null || 56);
console.log("" || null || undefined);
console.log(NaN || null || 0 || false);
console.log(45 || 55 || 99);
console.log("" || 0 || false || NaN || null || undefined);
console.log("" || 0 || undefined || NaN || null || false);
console.log(null || (45 && undefined) || !0);
console.log(0 || (true && undefined && !""));
console.log(16 || (50 && undefined) || !6);
console.log((!100 && 45) || 0);

// Remainder Operator
console.log(13 % 3);
console.log("17" % 3);
console.log(5 % -2);
console.log(0 % -2);
console.log(-7 % -3);
console.log(-11 % 5);
console.log(Infinity % 5);
console.log(25 & Infinity);
console.log(-Infinity % -5);
console.log(15 % -0);
console.log(Infinity % Infinity);
console.log(Infinity % -Infinity);
console.log(-Infinity % -Infinity);

// Logical AND, OR Assignment Operators
// Logical OR assignment operator
let aa = null,
  bb = 5;
console.log((aa &&= bb));

let cc = 7,
  dd = undefined;
console.log((dd ||= cc));

let ee = "JavaScript",
  ff = "";
console.log((ee ||= ff));

let gg = 5,
  hh = 6;
console.log((gg ||= hh));

// Logical AND assignment operator
let mm = 7,
  nn = undefined;
console.log((mm &&= nn));

let oo = "JavaScript",
  pp = "";
console.log((oo &&= pp));

let g = 5,
  h = 6;
console.log((h &&= g));

// Nullish Coalescing Assignment Operator
let q = null,
  r = 50;
console.log((q ??= r));

console.log("Aj" ?? undefined);
console.log("" ?? "Aj");
console.log(undefined ?? "Aj");
console.log(null ?? "Aj");
console.log(0 ?? undefined);
console.log("Aj" ?? null);
console.log((55 && 0) ?? undefined);
console.log((undefined || 0) ?? 56);
