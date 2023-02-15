import { operate } from "./operators.js";

let displayValue = "";

let operandOne = null;
let operandTwo = null;
let operator = null;

function updateDisplay(digit) {
  displayValue = displayValue + String(digit);
}

updateDisplay(7);
console.log(displayValue);
