import { operate } from "./operators.js";

//DOM

const display = document.querySelector(".display");

/*-----------------------------------------------------------*/

let displayValue = "";

let operandOne = null;
let operandTwo = null;
let operator = null;

function updateDisplay(digit) {
  displayValue = displayValue + String(digit);
  display.textContent = displayValue;
}

updateDisplay(7);
console.log(displayValue);
