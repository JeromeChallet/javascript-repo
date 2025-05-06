// ======================================
// 1. DOM SELECTOR
// ======================================
/////// .style.display() ///////
/* to define a style property use .style
then define the property itself in this case how to display */
const paragraph = document.querySelector("p");
paragraph.style.display = "block";

/////// .innerHTML ///////
//allows to modify the content inside an HTML element
document.querySelector("#demo").innerHTML = "hello";

/////// .getElementById() ///////
/* to access a precise element from the DOM */
<h1 id="title">Main title</h1>;
const mainTitleElement = document.getElementById("title");

/////// .getElementsByClassName() ///////
/* to access all the element with the same class name in an array */
const inputValues = document.getElementsByClassName("values-dropdown");

/////// .querySelector() ///////
/*  select and return the first element in the DOM that matches */
const button1 = document.querySelector("#button1");
const element = document.querySelector(".my-element");

/////// .querySelectorAll() ///////
/* returns all the elements that match in a NodeList
here will return all the p elements that has the class highlight*/
const highlightedParagraphs = document.querySelectorAll("p.highlight");

/////// .addEventListener() ///////
/* we use the function ref therefor no () 
the 1st arg is the event to listen to and the 2nd is the action
- click, keydown
- submit: when a form is submitted usually used with <form>
*/
const button = document.querySelector(".btn");
function printName() {
  console.log("jerome");
}
button.addEventListener("click", printName);
calorieCounter.addEventListener("submit", calculateCalories);

// whenever used it creates an object we can access for its info it is the e in (e)
numberInput.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.key === "Enter") {
  }
});

/////// .insertAdjacentHTML() ///////
/* insert HTML content into the DOM tree at a specified position relative to an existing element 
Specifies the position relative to the element where the HTML will be inserted
'beforebegin', 'afterbegin', 'beforeend', 'afterend'
faster than using innerHTML because it preserves existing DOM nodes, unlike innerHTML which replaces them*/
element.insertAdjacentHTML(position, text);

/////// .classList ///////
/* Provides a convenient way to interact with the class attribute of an HTML element 
- add: Add a specific class from an element's class list.
- remove: Removes a specific class from an element's class list.
- toggle: Add the class if it is not present on the element, and remove the class if it is present on the element.
- contains: Contains a specific class from an element's class list.
*/
const element2 = document.getElementById("myElement");
element2.classList.add("hide"); // Adds the class "hide"
element2.classList.remove("hide");
element2.classList.toggle("class-to-toggle");

/////// .close() ///////
/* The close() method is used to close an <dialog> HTML element (modal dialog box). */
const dialogElement = document.getElementById("exampleDialog");
dialogElement.showModal(); // Open the dialog
dialogElement.close(); // Close the dialog programmatically

/* The reason why the action of an event listener must be in a callback function is because we can reuse it multiple times */
const handleClick = () => {
  taskForm.classList.toggle("hidden");
};

openTaskFormBtn.addEventListener("click", handleClick);

/////// .removeAttribute() ///////
/* Remove a specified attribute from an HTML element */
element.removeAttribute(attributeName);
// HTML: <div id="myDiv" class="container" hidden></div>
const div = document.getElementById("myDiv");
div.removeAttribute("hidden"); // Removes the 'hidden' attribute
console.log(div.outerHTML); // <div id="myDiv" class="container"></div>

/////// .setAttribute() ///////
/* add a specified attribute from an HTML element 
The first parameter is the name of the attribute
the second parameter is the value you want to set for that attribute*/
div.setAttribute("hidden", ""); // add the 'hidden' attribute
console.log(div.outerHTML);

/////// .textContent ///////
/* Sets the text of a node and allows you to set or retrieve the text content of an HTML element */
<div id="example">This is some text content</div>;
const element3 = document.getElementById("example");
console.log(element3.textContent); // Output: This is some text content

/////// createElement() ///////
/* Used to dynamically create an element using JavaScript */
document.createElement(tagName);
document.createElement("div");
const divElement = document.createElement("div");

/////// createTextNode() ///////
/*  Creates a text node which represents the text content within an HTML element*/
document.createTextNode("your text");
const myText = document.createTextNode("your text");

/////// element.id ///////
/*  Set an id attribute to an element*/
resetButton.id = "reset";

/////// element.ariaLabel ///////
/*  Set an aria-label attribute to an element*/
resetButton.resetButton.ariaLabel = "Reset playlist";

/////// appendChild() ///////
/*   Add a node or an element as the child of another element*/
const parentElement = document.createElement("button");
const parentElementText = document.createTextNode("Click me");
parentElement.appendChild(parentElementText); // attach the text "Click me" to the button

// ======================================
// 2. ACCESS JS PROPERTY
// ======================================
/* you access JS property 2 ways, with dot notation and bracket notation []
in JS when you assign a function to an event you only use the reference/name without the ()
because if you used the () it would execute the function immediatly 
*/
// onclick, when the element is clicked, the function is called
// but it is the function reference there are no ()
button1.onclick = myFunction;

// innerText controls the text appearing in the element
// unlike innerHTML, innerText will not render HTML elements but display the tags and content as raw text
const info = document.querySelector("#info");
info.innerText = "hello";

/////// .replace() ///////
/* replaces chars in strings with another */
"hello".replace(/l/g, "1");

/////// .preventDefault() ///////
/* Prevents the default action of an event.
Commonly used to stop forms from submitting or links from navigating. */

// Example 1: Prevent link navigation
const link = document.querySelector("a");
link.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Link navigation prevented!");
});

// Example 2: Prevent form submission
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submission prevented!");
});

/////// localStorage.setItem() ///////
/////// localStorage.getItem() ///////
/////// localStorage.removeItem() ///////
/////// localStorage.clear() ///////
/* they store only strings, has a storage limit of about 5mb and is synchronous  
You need JSON.stringify() and JSON.parse() for objects and arrays */
localStorage.setItem("key", value);
localStorage.setItem("key", JSON.stringify(value));

/////// parseInt() ///////
/* Converts a string into an integer, whole number or NaN*/
parseInt(2.2); // 2
parseInt("2e+3"); // 2
parseInt("e"); // NaN

/////// isNaN() ///////
/* check if the value returned is a number or not */
isNaN("test"); // true
isNaN(2); // false
isNaN("3.5"); // false

// ======================================
// 4. ARRAY
// ======================================
/////// .length ///////
//Retrieve the last element in an
array[array.length] - 1;

/////// .push() ///////
/* Returns the new length of the array
 Add value at the end*/
const countDown = [2, 1, 0];
let newLength = array.push(5);
console.log(countDown); // [2, 1, 0, 5]
console.log(newLength); // 4

/////// .unshift() ///////
/* Returns the new length of the array
Add value at the beginning */
newLength = countDown.unshift(3);
console.log(countDown); // [3, 2, 1, 0, 5]
console.log(newLength); // 5

/////// .shift() ///////
/* Returns the new length of the array
Remove value at the beginning */
newLength = countDown.shift();
console.log(countDown); // [2, 1, 0, 5]
console.log(newLength); // 4

/////// .pop() ///////
/* Returns the new length of the array
Remove value at the end */
newLength = countDown.pop();
console.log(countDown); // [2, 1, 0]
console.log(newLength); // 3

/////// .repeat() ///////
//Returns the new string by repeating the original string
string.repeat();

/////// .includes() ///////
/* determines if the element is in the array */
const numbersArray = [1, 2, 3, 4, 5];
const number = 3;
if (numbersArray.includes(number)) {
  console.log("The number is in the array.");
}

/////// For Each loop ///////
/* loop through an array and perform a function on each element of the array */
numbers1.forEach((number) => {
  console.log(number); // 10, 20, 30, 40, 50
});

/////// ... ///////
/* Copy all elements from one array into another
or concatenate multiple arrays into one */
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

/////// .map() ///////
/* Iterates through an array and return a new array 
its first argument is a callback function*/
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((number) => number * 2); // [2, 4, 6]

/////// .join() ///////
/* Concatenate all the elements of an array into a single string
It takes an optional parameter called a separator which is used to separate each element of the array */
const exampleArr = ["This", "is", "a", "sentence"];
const sentence = exampleArr.join(" "); // Separator takes a space character
console.log(sentence); // Output: "This is a sentence"

/////// .sort() ///////
/* Converts elements of an array into strings and sorts them in place based on their values in the UTF-16 encoding 
but it mutates the original array*/
const names = ["Tom", "Jessica", "Quincy", "Naomi"];
names.sort(); // ["Jessica", "Naomi", "Quincy", "Tom"]

/////// .toSorted() ///////
/* like sort() but does not mutate the original array */
names.toSorted(); // ["Jessica", "Naomi", "Quincy", "Tom"]

/////// .find() ///////
/* Retrieves the first element within an array that fulfills the conditions specified in the provided callback function. 
If no element satisfies the condition, the method returns undefined */
const numbers1 = [10, 20, 30, 40, 50];
// Find the first number greater than 25
const foundNumber = numbers1.find((number) => number > 25);

/////// Array.from() ///////
/* querySelectorAll() returns a NodeList, which can be converted into a true array using Array.from().
This allows to use array methods like map, filter, etc.
Select all <li> elements and convert them into an array */
const listItemsArray = Array.from(document.querySelectorAll("li"));
console.log(listItemsArray);

/////// .indexOf() ///////
/* Returns the first index at which a given element can be found in the array */
names.indexOf("Jessica"); // 1

/////// .filter() ///////
/* Keeps only the elements of an array that satisfy the callback function passed to it */
const numArr = [1, 10, 8, 3, 4, 5];
const numsGreaterThanThree = numArr.filter((num) => num > 3);
console.log(numsGreaterThanThree); // Output: [10, 8, 4, 5]

/////// .reverse() ///////
/* The first element becomes the last, and the last element becomes the first */
[1, 2, 3, 4, 5].reverse(); // returns [5, 4, 3, 2, 1]

/////// .split() ///////
/* divide a string into substrings based on a specified separator. It then returns these substrings as elements of an array.
It takes in a parameter known as a separator. The separator is used to tell the computer where each split should occur */
const greeting = "Hello World";
greeting.split("W"); // ["Hello ", "orld"]

/////// .findIndex() ///////
/* returns the first index found in the array if not found then returns -1 
It expect a callback function as an argument*/
const numbers2 = [3, 1, 5, 6];
const firstNumLargerThanThree = numbers2.findIndex((num) => num > 3);

console.log(firstNumLargerThanThree); // prints index 2

/////// .splice() ///////
/* modifies arrays by removing, replacing, or adding elements at a specified index, while also returning the removed elements
Can take up to 3 arguments: the first is the mandatory index at which to start, the second is the number of items to remove, and the third is an optional replacement element */
const fruits2 = ["mango", "date", "cherry", "banana", "apple"];

// Remove date and cherry from the array starting at index 1
const removedFruits = fruits2.splice(1, 2);

console.log(fruits2); // [ 'mango', 'banana', 'apple' ]
console.log(removedFruits); // [ 'date', 'cherry' ]

/////// .some() ///////
/* Accepts a callback function which should take an element of the array as the argument to return a bolean */
const arr = ["A", "b", "C"];
arr.some((letter) => letter === letter.toUpperCase()); //true

/////// .reduce() ///////
/* takes an array and applies a callback function to condense the array into a single value
The return value for the callback becomes the value of the accumulator on the next iteration
accumulator starts at 0 and the currentValue is the initial value 
then the function adds each element (currentValue) to the accumulator 3 + 1 + 5 + 6 = 15*/
// array.reduce((accumulator, element) => {});
const numbers3 = numbers2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // 15

/////// even or odd array elements ///////
// if 0 its even, if 1 then odd
const isEven = arr.length % 2 === 0;

/////// median element of an array ///////
// for odd number of elements
const middleNumber = arr[Math.floor(arr.length / 2)];
// for even number of elements
const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;
// first middle number
const firstMiddleNumber = numbers[numbers.length / 2];
// second middle number
const secondMiddleNumber = numbers[numbers.length / 2 - 1];
getMean([firstMiddleNumber, secondMiddleNumber]);

/////// Counting occurrences in an array ///////
/* Uses .forEach() to count how many times each value appears in an array.
Stores the result in an object where each key is the number and its value is the count. */
const numbersArr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4];
const counts = {};
numbersArr.forEach((el) => {
  if (counts[el]) {
    counts[el] += 1;
  } else {
    counts[el] = 1;
  }
});
console.log(counts); // { '1': 3, '2': 3, '3': 3, '4': 3, '5': 2 }

// ======================================
// 6. LOOPS
// ======================================
/////// FOR loop ///////
for (iterator; condition; iteration) {}

/////// FOR...OF loop ///////
/*Automatically goes through every iteration of the iterable object
Running order of the loop: iterator - condition - loop body - iteration. 
The increment happens in the first time the loop is executed but does not apply yet to the body.
*/
for (const iterator of iterable(object)) {
}

for (const item of list) {
}

/////// WHILE loop ///////
/* Will keep running until the condition is no longer true */
while (condition) {
  logic;
  condition = false;
}

/* to desctructure the date to be used, use {} in the param() */
taskData.forEach(({ id, title, date, description }) => {});

/////// Switch ///////
switch (dayOfWeek) {
  case 1:
    console.log("It's Monday!");
    break;
  case 2:
    console.log("It's Tuesday!");
    break;
  // ...cases for other workdays
  default:
    console.log("It's the weekend!");
}
// ======================================
// 6. FUNCTION
// ======================================
/////// Regular Function ///////
function name(parameter) {}

/////// Arrow Function ///////
/* anonymous function expression, it has no name 
You can reference the function by its name
you can omit the () if it has 1 parameter
Implicit return is returning a simple expression, 
you can omit the return keyword and the curly braces {}*/
const nameArrowFunction = (name) => {
  console.log(`Hello, ${name}!`);
};
nameArrowFunction();

/////// Implicit Return ///////
/* the function automatically returns the result of the expression without using the return keyword or curly braces ({}) 
only for arrow functions*/
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

/////// Callback Function ///////
/* A function that is passed to another function as an argument,
in this case an arrow function */
const tripleNumbers = numbers.map((number) => number * 3);

/////// Compare Callback Function ///////
/* Sorts alphabetically */
const fruits = [
  { name: "Apples", price: 0.99 },
  { name: "Blueberries", price: 1.49 },
  { name: "Grapes", price: 2.99 },
];

fruits.sort((a, b) => {
  if (a.name < b.name) {
    return -1; // a should come before b
  } else if (a.name > b.name) {
    return 1; // a should come after b
  } else {
    return 0; // a and b are equal
  }
});

/////// Optional Chaining ///////
/* helps prevent errors when accessing nested properties that might be null or undefined */
const user = {
  name: "Quincy",
  address: {
    city: "San Francisco",
    state: "CA",
    country: "USA",
  },
};
const zipCode = user.address?.zipCode; // undefined instead of error

/////// Recursive function ///////
/* The function calls itself, it needs a base case to get out of it
and a recursive case where the function calls itself */
const recursiveFunction = (number) => {
  // base case
  if (number === 0) {
    return;
    // recursive case
  } else {
    recursiveFunction(number - 1);
  }
};

/////// setTimeout() ///////
/* execute a piece of code after a certain time, it is asynchronous
it takes 2  arguments, a callback function and a time*/
setTimeout(() => {
  console.log("Code");
}, 1000);

// ======================================
// 7. OBJECT CLASS
// ======================================
/* built-in global class. It's not referring to any object you created, but rather to the global Object class that provides static methods */

/////// Set ///////
/* Built-in JavaScript object that stores unique values.
It automatically removes duplicates from an array or list of values.
Useful for checking if all values in a collection are unique. */

// Removing duplicates from an array
const nums = [1, 2, 2, 3, 4, 4];
const uniqueNums = [...new Set(nums)];
console.log(uniqueNums); // [1, 2, 3, 4]

// Check if all values in an array are the same
const values1 = [5, 5, 5];
const allSame = new Set(values1).size === 1;
console.log(allSame); // true

/////// Object.keys() ///////
/* Returns an array of the keys (property names) of an object */
const obj = { a: 1, b: 2 };
const keys = Object.keys(obj); // ["a", "b"]

/////// Object.values() ///////
/* Returns an array of the values in an object */
const values2 = Object.values2(obj); // [1, 2]

/////// Object.entries() ///////
/* Returns an array of [key, value] pairs from the object */
const entries = Object.entries(obj); // [["a", 1], ["b", 2]]

/////// Object.fromEntries() ///////
/* Converts an array of [key, value] pairs back into an object */
const objBack = Object.fromEntries([
  ["a", 1],
  ["b", 2],
]);
// { a: 1, b: 2 }

/////// Object.assign() ///////
/* Copies properties from source objects into a target object */
const target = { a: 1 };
const source = { b: 2 };
Object.assign(target, source); // { a: 1, b: 2 }

/* you use access and modify their data through properties
unlike arrays that you can access through indexes 
the key is the name of the property and the value is the data stored in it
if the key has a space you must use "", key-value pairs of objects use : not = 
an object is defined with {} and doesn't need a name to exist
*/
const objName = {
  name: "Jerome",
  "Space name": "challet",
};
/* you use . notation when you know the name of the property you're trying to access ahead of time.
you use [] notation if the name of the property you are trying to access has a space in it.*/
console.log(objName.name);
console.log(objName["Space name"]);

/////// Math.random() ///////
// Math Object in JS offers many methods
// Math.random() generate a random number from 0 to 1
/////// Math.floor() ///////
//Math.floor() rounds to the nearest int
Math.floor(Math.random() * 6) + 1;

/////// Math.abs() ///////
/* Returns the absolute value of a number.
The absolute value is always non-negative. */
const num = -5;
Math.abs(num); // 5

/////// Math.sort() ///////
/*  Produces random values that are either positive or negative. */
const names2 = ["Tom", "Jessica", "Quincy", "Naomi"];
names2.sort(() => Math.random() - 0.5);

/////// Math.pow() ///////
// calculate exponents
const base = 4;
const exponent = 0.5;
Math.pow(base, exponent); // returns 2

/////// Math.sqrt() ///////
// finds the square root of a number
Math.sqrt(base); // returns 2

/////// Object.freeze(obj) ///////
/* freezes the object and prevent any changes being made to it 
Properties cannot be added or removed.
Existing properties cannot be changed.
The prototype of the object cannot be modified.*/
const objFrozen = {
  name: "Jerome",
  age: 38,
};
Object.freeze(objFrozen);
objFrozen.age = 40; // This will not work (silently fails in non-strict mode or throws an error in strict mode)
console.log(objFrozen.age); // Output: 38
objFrozen.newProp = "test"; // Cannot add new properties
console.log(objFrozen.newProp); // Output: undefined
delete objFrozen.name; // Cannot delete properties
console.log(objFrozen.name); // Output: "Jerome"

// ======================================
// 8. OBJECT ORIENTED JAVASCRIPT
// ======================================
/////// Constructor ///////
/* A function that is invoked when creating an instance of an object using the new keyword 
to initialize the properties and methods of the object. They don't directly create the object.
The creation of the object is handled by the new keyword. The constructor initializes the object
The this keyword inside the constructor refers to the new object
*/
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.greet(); // Hi, my name is Alice and I am 30 years old.
person2.greet(); // Hi, my name is Bob and I am 25 years old.

/* If you don't define a constructor in a class, JavaScript provides a default constructor 
that does nothing but return the instance */
function Person2(name, age) {
  this.name = name;
  this.age = age;
}

/* Prototype is a built-in property that every function (used as a constructor) has. 
It's used to attach methods or properties that should be shared across all instances created by that constructor. */
Person2.prototype.greet = function () {
  console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

const person3 = new Person2("Alice", 30);
person3.greet(); // Output: Hi, my name is Alice and I am 30 years old.

/////// Date Constructor ///////
/* built in JS object that has its own methods */
const currentDate = new Date();
console.log(currentDate);
// getDate returns the day
const dayOfTheMonth = date.getDate(); // return a nb between 0 and 31
console.log(dayOfTheMonth);
// getMonth returns the month
const month = date.getMonth() + 1;
// getFullYear returns the year
const year = date.getFullYear();
// getHours returns the hour
const hours = date.getHours();
// getMinutes returns the minutes
const minutes = date.getMinutes();

///////  Object Destructuring ///////
/* Unpack values from arrays and objects 
this assume you know well the state of the object
it saves time instead of assigning with dot notation*/
const destructuredObj = {
  name: "Jerome",
  isDeveloper: true,
};
const { name, isDeveloper } = destructuredObj;

// ======================================
// 9. Regular Expressions
// ======================================
/* Regular expressions match specific characters in a string.
Wrap the characters you want to match with [].
must put a space between the expression and the string to match
flags:
- /s: matches empty space
- /g: global (keeps looking until it finds all matches)
- /i: case insensitive
- +: matches a pattern that occurs one or more times
- \d: matches digits [0-9] 
- (?:a|b): will match either a or b, but it will not capture the result
- ^: match the beginning or end of the text
- $: match the end of the string*/
const regex = /[+-\s]/;
const regex2 = /[0-9]+e[0-9]+/i;

/////// .match() ///////
/* return an array of matched results */
const str = "example string";
const regex3 = /example/;
const result = str.match(regex); // Returns ['example']

/////// .test() ///////
/* test if a string matches the pattern but unlike .match will return a bolean */
const result2 = str.test(regex); // true

/////// character class ///////
/* set of characters enclosed in square brackets [] that tells the regex engine to match any one character from that set */
const regex0 = /[aeiou]/;

/////// alternance sequence | ///////
/* to match either the text on the left or the text on the right of the | */
const regex4 = /yes|no/;

/////// capture group ///////
/* way to define a part of the expression that should be captured and saved for later reference
by wrapping a part of your expression in parentheses */
const regex5 = /h(i|ey) camper/; // would match either hi camper or hey camper and would capture i or ey in a group

/////// optional match? ///////
/* matches the precedent element only */
const regex6 = /colou?r/; // matches both color and colour, because the u is optional

// ======================================
// 10. Additional Notes
// ======================================
// '' vs "" always put "" inside ''
('input[type="text"]');

// HTML attributes values need to be wrapped in "" when in JS
<label for="${entryDropdown.value}-${entryNumber}-name">
  Entry ${entryNumber} Name
</label>;

// if an if statement returns a value you do not need an else

/////// .toLowerCase() ///////
/* Converts a string to lowercase letters. 
It is a method of string objects, not a standalone global function so you can't put the string to convert into the ()*/
const str2 = "HELLO, WORLD!";
console.log(str.toLowerCase()); // Output: "hello, world!"

/* Parameters in JavaScript are implicitly declared when a function is called. 
You don’t need to explicitly declare them with let or const 
The for loop is a low-level, general-purpose iteration tool. 
It doesn't know in advance what kind of operation you're performing (like searching for a specific element or summing up values), 
so you have to explicitly control the iteration. */
function greet(name) {
  console.log(`Hello, ${name}!`);
}
const foundNumber2 = numbers1.find((number) => number > 25);

/////// ** ///////
// To square a value
const square = 3 ** 2; // 9

// ======================================
// 11. USER INTERACTION
// ======================================

/////// alert() ///////
/* Displays a popup dialog box with a message for the user.
Blocks the execution of code until the user clicks "OK".
Use sparingly as it can be intrusive and disrupt user experience. */

// Simple alert example
alert("This is a simple alert!");

// Alert on button click
const button2 = document.querySelector("#myButton");
button.addEventListener("click", () => {
  alert("Button was clicked!");
});

// Change event
/* detects when the value of an HTML element has changed */
htmlElement.addEventListener("change", () => {});

// ======================================
// 12. DATA TYPE CONVERSION
// ======================================

/////// Number() ///////
/* Converts a value to a number.
If the value cannot be converted, it returns NaN (Not-a-Number). */

// Examples:
console.log(Number("10")); // 10
console.log(Number("abc")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

/////// String() ///////
/* convert a value into a string */
const num2 = 5;
console.log(String(num2)); // "5"
console.log(String(null)); // "null"

// ======================================
// 13. HTML ELEMENT
// ======================================
/////// Audio() ///////
/* creates an audio element */
const audio = new Audio();
