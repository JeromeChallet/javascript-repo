//////////DOM SELECTOR//////////
//.style.display()
/* to define a style property use .style
then define the property itself in this case how to display */
const paragraph = document.querySelector("p");
paragraph.style.display = "block";

//.innerHTML allows to modify the content inside an HTML element
document.querySelector("#demo").innerHTML = "hello";

// .getElementById()
/* to access a precise element from the DOM */
<h1 id="title">Main title</h1>;
const mainTitleElement = document.getElementById("title");

//.querySelector()
/* to select an element*/
const button1 = document.querySelector("#button1");

//.querySelectorAll()
/* returns all the elements that match in a NodeList
here will return all the p elements that has the class highlight*/
const highlightedParagraphs = document.querySelectorAll("p.highlight");

//.addEventListener()
/* we use the function ref therefor no () 
the 1st arg is the event to listen to and the 2nd is the action*/
const button = document.querySelector('.btn');
function printName() {
  console.log("jerome");
}
button.addEventListener('click', printName);

//////////ACCESS JS PROPERTY//////////
/* you access JS property 2 ways, with dot notation and bracket notation []
in JS when you assign a function to an event you only use the reference/name without the ()
because if you used the () it would execute the function immediatly 
*/
// onclick, when the element is clicked, the function is called
// but it is the function reference there are no ()
button1.onclick = myFunction;

// innerText controls the text appearing in the element
const info = document.querySelector("#info");
info.innerText = "hello";

// .replace()
/* replaces chars in strings with another */
"hello".replace(/l/g, "1");

//////////ARRAY//////////
//.length
//Retrieve the last element in an
array[array.length] - 1;

//.push()
/* Returns the new length of the array
 Add value at the end*/
const countDown = [2, 1, 0];
let newLength = array.push(5);
console.log(countDown); // [2, 1, 0, 5]
console.log(newLength); // 4

//.unshift()
/* Returns the new length of the array
Add value at the beginning */
newLength = countDown.unshift(3);
console.log(countDown); // [3, 2, 1, 0, 5]
console.log(newLength); // 5

//.shift()
/* Returns the new length of the array
Remove value at the beginning */
newLength = countDown.shift();
console.log(countDown); // [2, 1, 0, 5]
console.log(newLength); // 4

//.pop()
/* Returns the new length of the array
Remove value at the end */
newLength = countDown.pop();
console.log(countDown); // [2, 1, 0]
console.log(newLength); // 3

//.repeat()
//Returns the new string by repeating the original string
string.repeat();

//.includes()
/* determines if the elemente is in the array */
const numbersArray = [1, 2, 3, 4, 5];
const number = 3;
if (numbersArray.includes(number)) {
  console.log("The number is in the array.");
}

//.match()
/* return an array of matched results */
const str = "example string";
const regex3 = /example/;
const result = str.match(regex); // Returns ['example']

//////////FOR LOOP//////////
for (iterator; condition; iteration) {}

//////////FUNCTION//////////
function name(parameter) {}

//////////FOR OF LOOP//////////
/*Automatically goes through every iteration of the iterable object
Running order of the loop: iterator - condition - loop body - iteration. 
The increment happens in the first time the loop is executed but does not apply yet to the body.
*/
for (const iterator of iterable(object)) {
}

//////////WHILE LOOP//////////
/* Will keep running until the condition is no longer true */
while (condition) {
  logic;
  condition = false;
}

//////////OBJECTS//////////
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

// Math Object in JS offers many methods
// Math.random() generate a random number from 0 to 1
//Math.floor() rounds to the nearest int
Math.floor(Math.random() * 6) + 1;

//////////REGEX//////////
/* (regular expression) to match specific chars in a string 
you must wrap around with [] the characters you want to match
/s: empty space, /g:global(tell the pattern to keep looking until it finds a match)
/i: if for all lower and upper case, + matches a pattern that occurs one or more times
\d is the equivalent of [0-9]*/
const regex = /[+-\s]/;
const regex2 = /[0-9]+e[0-9]+/i;

// '' vs "" always put "" inside ''
('input[type="text"]');

// HTML attributes values need to be wrapped in "" when in JS
<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>`;