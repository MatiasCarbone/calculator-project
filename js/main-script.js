import { operate } from "./operators.js";

//DOM Query selectors
const display = document.querySelector(".display");
const numericButtons = document.querySelectorAll(".button.white");
const operators = document.querySelectorAll(".operator");

const changeSign = document.querySelector("#sign");

const memPlus = document.querySelector("#mplus");
const memMinus = document.querySelector("#mminus");
const mrc = document.querySelector("#mrc");

/*-----------------------------------------------------------*/

//Populate display when numeric buttons are pressed
numericButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (displayValue.length < 8) {
      updateDisplay(button.id);
    }
  });
});

//Stores operator and display value in variables for computing
operators.forEach((element) => {
  element.addEventListener("click", () => {
    if (operator != null && displayValue != "") {
      operandOne = operate(operandOne, Number(displayValue), operator);
      operator = element.id;

      clearDisplay();
    } else if (displayValue != "") {
      operandOne = Number(displayValue);
      clearDisplay();

      operator = element.id;
    }
  });
});

//Evaluate expression after pressing '='
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

//Clear display and variables (except for MRC) when ON/C is pressed
document.querySelector("#c").addEventListener("click", () => {
  clearDisplay();
  clearVariables();
});

//Alternate sign
changeSign.addEventListener("click", () => {
  alternateSign();
});

//Add display value to number inmemory
memPlus.addEventListener("click", () => {
  if (displayValue != "") {
    memoryValue += Number(displayValue);
  }
});

//Subtract display value from number inmemory
memMinus.addEventListener("click", () => {
  if (displayValue != "") {
    memoryValue -= Number(displayValue);
  }
});

mrc.addEventListener("click", () => {
  displayValue = memoryValue;
  display.textContent = displayValue;
});

let displayValue = "";

let operandOne = null;
let operandTwo = null;
let operator = null;

let memoryValue = 0; //initial memory value

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

function alternateSign() {
  displayValue = 0 - Number(displayValue);
  display.textContent = displayValue;
}
