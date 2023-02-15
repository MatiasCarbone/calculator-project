import { operate } from "./operators.js";

//DOM Query selectors
const display = document.querySelector(".display");
const numericButtons = document.querySelectorAll(".button.white");

/*-----------------------------------------------------------*/

//Populate display when numeric buttons are pressed
numericButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (displayValue.length < 8) {
      updateDisplay(button.id);
    }
  });
});

//Clear display when ON/C is pressed
document.querySelector("#c").addEventListener("click", () => {
  clearDisplay();
});

let displayValue = "";

let operandOne = null;
let operandTwo = null;
let operator = null;

function updateDisplay(digit) {
  displayValue = displayValue + String(digit);
  display.textContent = displayValue;
}

function clearDisplay() {
  displayValue = "";
  display.textContent = displayValue;
}
