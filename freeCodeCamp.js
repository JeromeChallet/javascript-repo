//////////.length//////////
//Retrieve the last element in an
array[array.length] - 1;

//////////.push()//////////
/* Returns the new length of the array
 Add value at the end*/
const countDown = [2, 1, 0];
let newLength = array.push(5);
console.log(countDown); // [2, 1, 0, 5]
console.log(newLength); // 4

//////////.unshift()//////////
/* Returns the new length of the array
Add value at the beginning */
newLength = countDown.unshift(3);
console.log(countDown); // [3, 2, 1, 0, 5]
console.log(newLength); // 5

//////////.shift()//////////
/* Returns the new length of the array
Remove value at the beginning */
newLength = countDown.shift();
console.log(countDown); // [2, 1, 0, 5]
console.log(newLength); // 4

//////////.pop()//////////
/* Returns the new length of the array
Remove value at the end */
newLength = countDown.pop();
console.log(countDown); // [2, 1, 0]
console.log(newLength); // 3

//////////.repeat()//////////
//Returns the new string by repeating the original string
string.repeat();

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
