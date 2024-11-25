console.log("log");
console.error("error");
console.warn("warning");

// prompt function allows to collect data from the frontend
const prompt = require("prompt-sync")();
const v = prompt("type something: ");
console.log(v);

////////////////////DATATYPES////////////////////
// string, boolean, number, undefined, null
// undefined does not have a correct but is syntactically correct
// null is used to explicitly set something as nothing

////////////////////VAR////////////////////
/*let and const are block-scoped and var is function scoped so you can access var outside the block
as long as it remains anywhere where the function has been defined*/
var helloWorld = "hello";
helloWorld = "world";

if (true) {
  let x = 5;
  x = 7;
  x += 1;
}
// console.log(x); // error cause x is out of scope

// if you store an array with CONST you can mutate the array but not reassign a new array to the variable
const VELOCITY = 34;

////////////////////BLOCK VS FUNCTION////////////////////
function test() {
  console.log(x);
  var x = "test";
  console.log(x);
}
test(); // will return the x cause the entire function has already ran at that point

////////////////////ARYHTMETIC OPERATORS TYPE COERCION////////////////////
/* type coercion is an implicit type convertion */
// +  will convert a number into a string
const x1 = 6;
const y1 = "7";
const z1 = true;
console.log(x1 + y1 + z1); // 67true

// * and - will convert a string into a number
const x2 = 5;
const y2 = "2";
const z2 = "hi";
console.log(x2 * y2); // 10
console.log(x2 - y2); // 3
console.log(x2 - z2); // NaN

////////////////////TYPE CONVERSION////////////////////
const x3 = "5";
const y3 = 2;
const z3 = "5px";
console.log(Number(x3) + y3); // 7
// parseInt converts its first arg to a string, parses that string and return an int or NaN
// good for px
// same with parseFloat
console.log(parseInt(z3) + y3); // 7
// true is equal to 1
console.log(Number(true) + y3); // 3
console.log(String(y3) + x3); // 25
console.log(y3.toString() + x3); // 25
