import { operate } from "./operators.js";

//DOM Query selectors
const display = document.querySelector(".display");
const numericButtons = document.querySelectorAll(".button.white");

/*-----------------------------------------------------------*/

//Listeners for numeric buttons
numericButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (displayValue.length < 8) {
      updateDisplay(button.id);
    }
  });
});

let displayValue = "";

let operandOne = null;
let operandTwo = null;
let operator = null;

function updateDisplay(digit) {
  displayValue = displayValue + String(digit);
  display.textContent = displayValue;
}
