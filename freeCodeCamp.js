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

/////// .querySelector() ///////
/* to select an element*/
const button1 = document.querySelector("#button1");
const element = document.querySelector(".my-element");

/////// .querySelectorAll() ///////
/* returns all the elements that match in a NodeList
here will return all the p elements that has the class highlight*/
const highlightedParagraphs = document.querySelectorAll("p.highlight");

/////// .addEventListener() ///////
/* we use the function ref therefor no () 
the 1st arg is the event to listen to and the 2nd is the action
- click
- submit: when a form is submitted usually used with <form>
*/
const button = document.querySelector(".btn");
function printName() {
  console.log("jerome");
}
button.addEventListener("click", printName);
calorieCounter.addEventListener("submit", calculateCalories);

/////// .insertAdjacentHTML() ///////
/* insert HTML content into the DOM tree at a specified position relative to an existing element 
Specifies the position relative to the element where the HTML will be inserted
'beforebegin', 'afterbegin', 'beforeend', 'afterend'
faster than using innerHTML because it preserves existing DOM nodes, unlike innerHTML which replaces them*/
element.insertAdjacentHTML(position, text);

/////// .remove() ///////
/* Removes a specific class from an element's class list. */
element.classList.remove("hide");

/////// .add() ///////
/* Removes a specific class from an element's class list. */
element.classList.add("hide");

/////// Array.from() ///////
/* querySelectorAll() returns a NodeList, which can be converted into a true array using Array.from().
This allows to use array methods like map, filter, etc.
Select all <li> elements and convert them into an array */
const listItemsArray = Array.from(document.querySelectorAll("li"));
console.log(listItemsArray);

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

/////// ... ///////
/* Copy all elements from one array into another
or concatenate multiple arrays into one */
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

/////// map ///////
/* Iterates through an array and return a new array */
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((number) => number * 2); // [2, 4, 6]

// ======================================
// 5. LOOPS
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

/////// Callback Function ///////
/* A function that is passed to another function as an argument,
in this case an arrow function */
const tripleNumbers = numbers.map((number) => number * 3);

// ======================================
// 7. OBJECTS
// ======================================
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

// ======================================
// 8. Regular Expressions
// ======================================
/* Regular expressions match specific characters in a string.
Wrap the characters you want to match with [].
- /s: matches empty space
- /g: global (keeps looking until it finds all matches)
- /i: case insensitive
- +: matches a pattern that occurs one or more times
- \d: matches digits [0-9] */
const regex = /[+-\s]/;
const regex2 = /[0-9]+e[0-9]+/i;

/////// .match() ///////
/* return an array of matched results */
const str = "example string";
const regex3 = /example/;
const result = str.match(regex); // Returns ['example']

// ======================================
// 9. Additional Notes
// ======================================
// '' vs "" always put "" inside ''
('input[type="text"]');

// HTML attributes values need to be wrapped in "" when in JS
<label for="${entryDropdown.value}-${entryNumber}-name">
  Entry ${entryNumber} Name
</label>;

// if an if statement returns a value you do not need an else

/////// .toLowerCase() ///////
/* Converts a string to lowercase letters. */

// Example:
const str2 = "HELLO, WORLD!";
console.log(str.toLowerCase()); // Output: "hello, world!"

// ======================================
// 10. USER INTERACTION
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

// ======================================
// 11. DATA TYPE CONVERSION
// ======================================

/////// Number() ///////
/* Converts a value to a number.
If the value cannot be converted, it returns NaN (Not-a-Number). */

// Examples:
console.log(Number("10")); // 10
console.log(Number("abc")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// ======================================
// 11. HTML ELEMENT
// ======================================
/////// Audio() ///////
/* creates an audio element */
const audio = new Audio();
