import { operate } from "./operators.js";

//DOM Query selectors
const display = document.querySelector(".display");
const numericButtons = document.querySelectorAll(".button.white");
const operators = document.querySelectorAll(".operator");

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
  clearVariables();
});

//Stores operator and display value in variables for computing
operators.forEach((element) => {
  element.addEventListener("click", () => {
    if (displayValue != "") {
      operandOne = Number(displayValue);
      clearDisplay();

      console.log(operandOne);

      operator = element.id;
    }
  });
});

document.querySelector(".equals").addEventListener("click", () => {
  if (displayValue == "69") {
    clearDisplay();
    updateDisplay("NICE!");
  } else if (operandOne != null || operandTwo != null) {
    operandTwo = Number(displayValue);

    let result = operate(operandOne, operandTwo, operator);

    clearDisplay();
    clearVariables();

    updateDisplay(result);
  }
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

function clearVariables() {
  operandOne = null;
  operandTwo = null;
  operator = null;
}
