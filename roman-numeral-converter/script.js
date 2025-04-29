/*
| Roman Numeral | Value |
|---------------|-------|
| MMM           | 3000  |
| MM            | 2000  |
| M             | 1000  |
| CM            | 900   |
| DCCC          | 800   |
| DCC           | 700   |
| DC            | 600   |
| D             | 500   |
| CD            | 400   |
| CCC           | 300   |
| CC            | 200   |
| C             | 100   |
| XC            | 90    |
| LXXX          | 80    |
| LXX           | 70    |
| LX            | 60    |
| L             | 50    |
| XL            | 40    |
| XXX           | 30    |
| X             | 10    |
| IX            | 9     |
| V             | 5     |
| IV            | 4     |
| I             | 1     |

User Stories:

O You should have an input element with an id of "number".
O You should have a button element with an id of "convert-btn".
O You should have a div, span or p element with an id of output.
O When you click on the #convert-btn element without entering a value into the #number element, the #output element should contain the text "Please enter a valid number".
O When the #number element contains the number -1 and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number greater than or equal to 1".
O When the #number element contains the number 4000 or greater and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number less than or equal to 3999".
When the #number element contains the number 9 and the #convert-btn element is clicked, the #output element should contain the text "IX".
When the #number element contains the number 16 and the #convert-btn element is clicked, the #output element should contain the text "XVI".
When the #number element contains the number 649 and the #convert-btn element is clicked, the #output element should contain the text "DCXLIX".
When the #number element contains the number 1023 and the #convert-btn element is clicked, the #output element should contain the text "MXXIII".
When the #number element contains the number 3999 and the #convert-btn element is clicked, the #output element should contain the text "MMMCMXCIX".
 */

const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const romanNumerals = [
  { value: 1000, numeral: "M" },
  { value: 900, numeral: "CM" },
  { value: 500, numeral: "D" },
  { value: 400, numeral: "CD" },
  { value: 100, numeral: "C" },
  { value: 90, numeral: "XC" },
  { value: 50, numeral: "L" },
  { value: 40, numeral: "XL" },
  { value: 10, numeral: "X" },
  { value: 9, numeral: "IX" },
  { value: 5, numeral: "V" },
  { value: 4, numeral: "IV" },
  { value: 1, numeral: "I" },
];

// input already a decimal
const decimalToRoman = (input) => {
  let result = "";

  for (const { value, numeral } of romanNumerals) {
    while (input >= value) {
      result += numeral;
      input -= value;
    }
  }

  return result;
};

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);
  if (inputInt < 1) {
    alert("Please enter a number greater than or equal to 1");
    return;
  } else if (inputInt > 3999) {
    alert("Please enter a number less than or equal to 3999");
  } else if (!numberInput.value || isNaN(inputInt)) {
    alert("Please enter a valid number");
  } else {
    result.textContent = decimalToRoman(inputInt);
    numberInput.value = "";
  }
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
