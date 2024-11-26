//////////STYLE//////////
/* to define a style property use .style
then define the property itself in this case how to display */
const paragraph = document.querySelector("p");
paragraph.style.display = "block";

//.innerHTML allows to modify the content inside an HTML element
document.querySelector("#demo").innerHTML = "hello";

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

//////////DOM SELECTOR//////////
/* to select an element*/
const button1 = document.querySelector("#button1");

//////////ACCESS JS PROPERTY//////////
/* you access JS property 2 ways, with dot notation and bracket notation []
 */
// onclick, when the element is clicked, the function is called
button1.onclick = myFunction;
// innerText controls the text appearing in the element
const info = document.querySelector("#info");
info.innerText = "hello";

//////////OBEJCTS//////////
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
